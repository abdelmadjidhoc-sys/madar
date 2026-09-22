/**
 * Madar — bilingual content store.
 *
 * All page copy lives here so it can be edited without touching HTML or JS logic.
 * main.js walks the DOM for [data-i18n] / [data-i18n-attr] elements and fills them
 * from this object based on the active language.
 *
 * TODO(content): Arabic copy below is confirmed. English copy is a first-pass
 * DRAFT translation (adapted, not literal) and needs sign-off before launch —
 * see PROGRESS.md.
 */

window.MADAR_CONTENT = {
  ar: {
    brand: { name: "مدار" },
    meta: {
      title: "مدار | حيث تدور الفرص",
      description:
        "مدار منصة إعلامية تجمع الفرص التعليمية والتطويرية والتطوعية لشباب قطر في مكان واحد.",
    },
    skipLink: "تخطَّ إلى المحتوى",
    nav: {
      about: "من نحن",
      activities: "الأنشطة",
      podcast: "بودكاست",
      contact: "تواصل معنا",
      langToggle: "English",
      menuOpen: "افتح القائمة",
      menuClose: "أغلق القائمة",
    },
    hero: {
      tagline: "مدار .. حيث تدور الفرص",
      headline: "فرصتك تبدأ من هنا",
      subhead:
        "مدار منصة تجمع الفرص التعليمية والتطويرية والتطوعية في مكان واحد لشباب قطر.",
      cta: "استكشف الأنشطة",
      imageAlt: "TODO: صورة خلفية نهائية لقسم البداية",
    },
    about: {
      heading: "معلومة واضحة، مصدر موثوق، وطريق مباشر للمشاركة",
      body:
        "مدار منصة إعلامية موجهة لشباب قطر بين 15 و39 عامًا، تجمع الفرص التعليمية والتطويرية والتطوعية في مكان واحد، وتنظمها بحسب الاهتمام ومرحلة الحياة. رسالتنا بسيطة: معلومة يسهل فهمها، مصدر واضح لكل فرصة، وطريق مباشر لخطوة أولى حقيقية.",
      disclaimer:
        "يستلهم مدار توجه رؤية قطر الوطنية 2030، لكنه منصة مستقلة، وليس جهة رسمية تابعة لها أو شريكًا معتمدًا من مؤسساتها.",
    },
    activities: {
      heading: "أربعة مسارات، فرصة واحدة تبدأ بها",
      items: [
        {
          title: "فعاليات",
          desc: "فعاليات نجمعها لك من كل مكان في قطر، من ورش العمل إلى المؤتمرات.",
        },
        {
          title: "تعليم",
          desc: "برامج تعليمية ومنح ودورات تطوّر مهاراتك خطوة بخطوة.",
        },
        {
          title: "تطوع",
          desc: "برامج تطوعية لصناعة الأثر.",
        },
        {
          title: "فرص",
          desc: "فرص عمل وتدريب ومبادرات تفتح لك أبوابًا جديدة.",
        },
      ],
    },
    podcast: {
      heading: "بودكاست",
      intro: "حوارات صريحة مع شباب قطر عن الفرص والتجارب ومسارات البداية.",
      episodeTitle: "من لاعب كرة إلى أفضل مخترع - محمد القصابي",
      playLabel: "تشغيل الحلقة",
      thumbAlt: "صورة من حلقة بودكاست مدار مع محمد القصابي",
      cta: "شاهد على يوتيوب",
    },
    contact: {
      heading: "لنبقَ على تواصل",
      intro:
        "تابعونا لمزيد من الفرص والتحديثات، أو راسلونا مباشرة عبر النموذج لطلب جلسة أو الاستفسار.",
      socialHeading: "تابعونا",
      formHeading: "أرسل طلبك",
      formFallback: "لم يظهر النموذج؟ اضغط هنا لفتحه في صفحة جديدة.",
      formCta: "افتح النموذج",
    },
    footer: {
      disclaimer:
        "مدار منصة مستقلة تدعم توجه رؤية قطر الوطنية 2030، وليست جهة رسمية تابعة لها.",
      copyright: "© {year} مدار. جميع الحقوق محفوظة.",
    },
  },

  en: {
    brand: { name: "Madar" },
    meta: {
      title: "Madar | Where Opportunity Orbits",
      description:
        "Madar is a media platform that gathers educational, development, and volunteer opportunities for Qatar's youth in one place.",
    },
    skipLink: "Skip to content",
    nav: {
      about: "About",
      activities: "Activities",
      podcast: "Podcast",
      contact: "Contact",
      langToggle: "العربية",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      tagline: "Madar — where opportunity orbits", // DRAFT
      headline: "Your opportunity starts here", // DRAFT
      subhead:
        "Madar brings Qatar youth's educational, development, and volunteer opportunities together in one place.", // DRAFT
      cta: "Explore Activities",
      imageAlt: "TODO: final hero background image",
    },
    about: {
      heading: "Clear information, a visible source, a direct way in", // DRAFT
      body:
        "Madar is a media platform for Qatar's youth, ages 15 to 39. We gather educational, development, and volunteer opportunities in one place, organized by interest and life stage. Our mission is simple: information that's easy to understand, a clear source behind every opportunity, and a direct path to a real first step.", // DRAFT
      disclaimer:
        "Madar draws on the direction of Qatar National Vision 2030, but is an independent platform — not an official affiliate or approved partner of its entities.", // DRAFT
    },
    activities: {
      heading: "Four tracks, one place to start", // DRAFT
      items: [
        {
          title: "Events",
          desc: "Events we track across Qatar, from workshops to conferences.", // DRAFT
        },
        {
          title: "Education",
          desc: "Educational programs, scholarships, and courses that build your skills step by step.", // DRAFT
        },
        {
          title: "Volunteering",
          desc: "Volunteer programs that make an impact.", // DRAFT
        },
        {
          title: "Opportunities",
          desc: "Jobs, internships, and initiatives that open new doors.", // DRAFT
        },
      ],
    },
    podcast: {
      heading: "Podcast",
      intro:
        "Honest conversations with Qatar's youth about opportunity, experience, and finding a starting point.", // DRAFT
      episodeTitle: "From Football Player to Inventor — Mohammed Al Qasabi", // DRAFT translation of the real (Arabic) episode title
      playLabel: "Play episode",
      thumbAlt: "Still from the Madar podcast episode with Mohammed Al Qasabi",
      cta: "Watch on YouTube",
    },
    contact: {
      heading: "Let's stay in touch", // DRAFT
      intro:
        "Follow us for more opportunities and updates, or reach out directly through the form to request a session or ask a question.", // DRAFT
      socialHeading: "Follow along",
      formHeading: "Send your request",
      formFallback: "Form not loading? Click here to open it in a new page.",
      formCta: "Open the form",
    },
    footer: {
      disclaimer:
        "Madar is an independent platform that supports the direction of Qatar National Vision 2030. It is not an official affiliate of its entities.", // DRAFT
      copyright: "© {year} Madar. All rights reserved.",
    },
  },
};

/**
 * Real Madar links (from linktr.ee/madar.qa). Kept language-independent since
 * URLs don't change with locale. HTML anchors carry these same hrefs directly
 * as a no-JS fallback; main.js re-applies them from here via [data-social] so
 * there is one place to update if a handle changes.
 */
window.MADAR_LINKS = {
  instagram: "https://www.instagram.com/madar_qat",
  tiktok: "https://www.tiktok.com/@madar_qat",
  youtube: "https://youtube.com/channel/UCgxiJUU1tuS0K5OEoc7HApA",
  threads: "https://www.threads.net/@madar_qat",
  googleForm: "https://forms.gle/UHVrdyENZ5YkHgwN9",
};

/** Featured podcast episode (Madar's own channel). */
window.MADAR_PODCAST = {
  videoId: "Pt8vFairKLE",
  channelUrl: "https://www.youtube.com/@%D9%85%D9%86%D8%B5%D8%A9%D9%85%D8%AF%D8%A7%D8%B1",
};
