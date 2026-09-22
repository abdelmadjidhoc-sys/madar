/**
 * Madar — page behavior: language/direction switching, mobile nav,
 * scroll-reveal motion, and small progressive-enhancement touches.
 *
 * No build step, no dependencies. Content lives in content.js; this file
 * only wires it to the DOM.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "madar-lang";
  var DEFAULT_LANG = "ar";
  var content = window.MADAR_CONTENT;

  /** Resolves a dot/array-index path like "activities.items.0.title" against an object. */
  function getPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function currentLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private browsing / storage disabled — language just won't persist */
    }
  }

  function applyLanguage(lang) {
    var strings = content[lang];
    if (!strings) return;

    var dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = getPath(strings, el.getAttribute("data-i18n"));
      if (typeof value === "string") {
        el.textContent = value.indexOf("{year}") > -1
          ? value.replace("{year}", new Date().getFullYear())
          : value;
      }
    });

    // Attributes, format: data-i18n-attr="attrName:path.to.key"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var parts = el.getAttribute("data-i18n-attr").split(":");
      var attrName = parts[0];
      var path = parts[1];
      var value = getPath(strings, path);
      if (typeof value === "string") {
        el.setAttribute(attrName, value);
      }
    });

    // document.title is not set explicitly here: the <title> element already
    // carries its own data-i18n (meta.title on index.html, sessionPage.metaTitle
    // on contact.html) and gets updated by the sweep above like any other
    // element — the browser keeps document.title in sync with it automatically.

    storeLang(lang);
  }

  function initLanguageToggle() {
    var button = document.getElementById("langToggle");
    if (!button) return;
    button.addEventListener("click", function () {
      var next = currentLang() === "ar" ? "en" : "ar";
      applyLanguage(next);
    });
  }

  function initMobileNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mobileNav");
    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  function initSocialLinks() {
    var links = window.MADAR_LINKS;
    if (!links) return;
    document.querySelectorAll("[data-social]").forEach(function (el) {
      var url = links[el.getAttribute("data-social")];
      if (url) el.href = url;
    });
  }

  function initPodcastEmbed() {
    var trigger = document.getElementById("podcastPlay");
    var podcast = window.MADAR_PODCAST;
    if (!trigger || !podcast) return;

    trigger.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.className = "podcast-thumb-placeholder";
      iframe.src = "https://www.youtube.com/embed/" + podcast.videoId + "?autoplay=1";
      iframe.title = "Madar podcast episode";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      trigger.replaceWith(iframe);
    });
  }

  function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    var statusOtherRadio = document.getElementById("statusOtherRadio");
    var statusOtherInput = document.getElementById("currentStatusOther");
    form.querySelectorAll('input[name="currentStatus"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        var isOther = statusOtherRadio.checked;
        statusOtherInput.hidden = !isOther;
        if (!isOther) statusOtherInput.value = "";
      });
    });

    var submitButton = document.getElementById("contactSubmit");
    var statusEl = document.getElementById("contactFormStatus");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.reportValidity()) return;

      var strings = content[currentLang()].form;
      var data = new FormData(form);
      var payload = {
        company: data.get("company"), // honeypot
        fullName: data.get("fullName"),
        phone: data.get("phone"),
        ageRange: data.get("ageRange"),
        currentStatus: data.get("currentStatus"),
        currentStatusOther: data.get("currentStatusOther"),
        email: data.get("email"),
        guidanceField: data.get("guidanceField"),
        mainChallenge: data.get("mainChallenge"),
        desiredOutcome: data.get("desiredOutcome"),
        triedBefore: data.get("triedBefore") === "yes" ? true : data.get("triedBefore") === "no" ? false : null,
        consultationMethod: data.get("consultationMethod"),
      };

      submitButton.disabled = true;
      statusEl.removeAttribute("data-state");
      statusEl.textContent = strings.submitting;

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("request failed");
          return res.json();
        })
        .then(function () {
          statusEl.setAttribute("data-state", "success");
          statusEl.textContent = strings.successMessage;
          form.reset();
          statusOtherInput.hidden = true;
        })
        .catch(function () {
          statusEl.setAttribute("data-state", "error");
          statusEl.textContent = strings.errorMessage;
        })
        .finally(function () {
          submitButton.disabled = false;
        });
    });
  }

  function initHeaderScrollState() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    var toggleShadow = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    toggleShadow();
    window.addEventListener("scroll", toggleShadow, { passive: true });
  }

  function initScrollReveal() {
    var targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(currentLang());
    initLanguageToggle();
    initMobileNav();
    initSocialLinks();
    initPodcastEmbed();
    initContactForm();
    initHeaderScrollState();
    initScrollReveal();
  });
})();
