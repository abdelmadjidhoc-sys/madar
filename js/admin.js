/**
 * Madar admin — submissions table + detail view.
 * Talks to /api/admin/submissions and /api/admin/submission?id=. No access
 * control (by request) — the name picker is identification only, not auth.
 */
(function () {
  "use strict";

  var STATUS_LABELS = {
    school_student: "School student",
    university_student: "University student",
    employed: "Employed",
    job_seeker: "Job seeker",
    other: "Other",
  };

  var CONSULTATION_LABELS = {
    zoom: "Zoom call",
    in_person: "In person",
  };

  function formatDate(iso) {
    var d = new Date(iso);
    return d.toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function formatBool(value) {
    if (value === true) return "Yes";
    if (value === false) return "No";
    return "—";
  }

  function addField(dl, label, value) {
    if (value === null || value === undefined || value === "") return;
    var dt = document.createElement("dt");
    dt.textContent = label;
    var dd = document.createElement("dd");
    dd.textContent = value;
    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  function renderTable(submissions) {
    var tbody = document.getElementById("adminTableBody");
    var table = document.getElementById("adminTable");
    var status = document.getElementById("adminStatus");
    var title = document.getElementById("adminTitle");

    title.textContent = "Submissions (" + submissions.length + ")";

    if (!submissions.length) {
      status.textContent = "No submissions yet.";
      return;
    }

    status.textContent = "";
    table.hidden = false;

    submissions.forEach(function (row) {
      var tr = document.createElement("tr");
      tr.tabIndex = 0;

      var nameTd = document.createElement("td");
      var nameWrap = document.createElement("div");
      nameWrap.className = "admin-name-cell";

      var avatar = document.createElement("span");
      avatar.className = "admin-avatar";
      avatar.textContent = row.full_name.trim().charAt(0).toUpperCase();
      nameWrap.appendChild(avatar);

      var nameText = document.createElement("span");
      nameText.textContent = row.full_name;
      nameWrap.appendChild(nameText);

      nameTd.appendChild(nameWrap);
      tr.appendChild(nameTd);

      var dateTd = document.createElement("td");
      dateTd.className = "admin-date-cell";
      dateTd.textContent = formatDate(row.created_at);
      tr.appendChild(dateTd);

      tr.addEventListener("click", function () {
        openDetail(row.id);
      });
      tbody.appendChild(tr);
    });
  }

  function openDetail(id) {
    fetch("/api/admin/submission?id=" + encodeURIComponent(id))
      .then(function (res) {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then(function (data) {
        var s = data.submission;
        document.getElementById("detailName").textContent = s.full_name;

        var dl = document.getElementById("detailFields");
        dl.innerHTML = "";
        addField(dl, "Submitted at", formatDate(s.created_at));
        addField(dl, "Phone", s.phone);
        addField(dl, "Email", s.email);
        addField(dl, "Age range", s.age_range);
        addField(
          dl,
          "Current status",
          (STATUS_LABELS[s.current_status] || s.current_status) +
            (s.current_status_other ? " — " + s.current_status_other : "")
        );
        addField(dl, "Guidance area", s.guidance_field);
        addField(dl, "Main challenge", s.main_challenge);
        addField(dl, "Desired outcome", s.desired_outcome);
        addField(dl, "Tried before?", formatBool(s.tried_before));
        addField(dl, "Consultation method", CONSULTATION_LABELS[s.consultation_method] || s.consultation_method);

        document.getElementById("detailOverlay").hidden = false;
      })
      .catch(function () {
        alert("Couldn't load that submission. Please try again.");
      });
  }

  function closeDetail() {
    document.getElementById("detailOverlay").hidden = true;
  }

  var STORAGE_KEY = "madar-admin-name";

  function loadSubmissions() {
    fetch("/api/admin/submissions")
      .then(function (res) {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then(function (data) {
        renderTable(data.submissions);
      })
      .catch(function () {
        document.getElementById("adminStatus").textContent = "Couldn't load submissions. Please refresh.";
      });
  }

  function showApp(name) {
    document.getElementById("adminPicker").hidden = true;
    document.getElementById("adminApp").hidden = false;
    document.getElementById("adminWhoami").textContent = name;
    loadSubmissions();
  }

  function showPicker() {
    document.getElementById("adminApp").hidden = true;
    document.getElementById("adminPicker").hidden = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("detailClose").addEventListener("click", closeDetail);
    document.getElementById("detailOverlay").addEventListener("click", function (event) {
      if (event.target === this) closeDetail();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeDetail();
    });

    document.querySelectorAll(".admin-picker-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var name = btn.getAttribute("data-name");
        try {
          localStorage.setItem(STORAGE_KEY, name);
        } catch (e) {
          /* private browsing — just won't be remembered next visit */
        }
        showApp(name);
      });
    });

    document.getElementById("adminSwitch").addEventListener("click", function () {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
      showPicker();
    });

    var savedName = null;
    try {
      savedName = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}

    if (savedName) {
      showApp(savedName);
    } else {
      showPicker();
    }
  });
})();
