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
      formIntro: "الاستمارة تستغرق أقل من دقيقتين، وسيتواصل معك فريقنا خلال أيام قليلة.",
    },
    sessionPage: {
      metaTitle: "طلب جلسة توجيه | مدار",
      metaDescription: "احجز جلسة توجيه وتطوير مع مدار عبر النموذج التالي.",
      heading: "احجز جلستك التوجيهية",
      intro:
        "يساعدنا هذا النموذج في التعرف عليك وفهم أهدافك والتحديات التي تواجهها، حتى نتمكن من تحديد الجلسة المناسبة ومساعدتك على تطوير نفسك واتخاذ خطوات أوضح نحو أهدافك.",
      backLink: "العودة إلى الموقع",
    },
    form: {
      fullNameLabel: "الاسم الكامل",
      phoneLabel: "رقم الهاتف",
      ageRangeLabel: "الفئة العمرية",
      age1517: "من 15 إلى 17 سنة",
      age1821: "من 18 إلى 21 سنة",
      age2225: "من 22 إلى 25 سنة",
      age2631: "من 26 إلى 31 سنة",
      statusLabel: "الوضع الحالي",
      statusSchool: "طالب مدرسة",
      statusUniversity: "طالب جامعي",
      statusEmployed: "موظف",
      statusJobSeeker: "باحث عن عمل",
      statusOther: "غير ذلك",
      statusOtherPlaceholder: "يرجى التحديد",
      emailLabel: "البريد الإلكتروني",
      guidanceFieldLabel: "في أي مجال ترغب في الحصول على التوجيه؟",
      mainChallengeLabel: "ما التحدي الرئيسي الذي تواجهه حاليًا؟",
      mainChallengeHint: "اكتب لنا باختصار أكثر شيء يشغلك أو يمنعك من التقدم في الوقت الحالي.",
      desiredOutcomeLabel: "ما النتيجة التي ترغب في الوصول إليها بعد الجلسة؟",
      desiredOutcomeHint:
        "مثال: تحديد هدف، اختيار تخصص مناسب، تطوير مهارة، تنظيم وقت، بدء مشروع، أو معرفة الخطوة التالية في مسارك.",
      triedBeforeLabel: "هل حاولت سابقًا معالجة هذا التحدي؟",
      yes: "نعم",
      no: "لا",
      consultationMethodLabel: "ما الطريقة المناسبة لك للاستشارة؟",
      zoom: "اجتماع Zoom",
      inPerson: "استشارة حضورية",
      submit: "إرسال الطلب",
      submitting: "جارٍ الإرسال...",
      successMessage: "شكرًا لك! تم استلام طلبك، وسنتواصل معك قريبًا.",
      errorMessage: "حدث خطأ ما. حاول مرة أخرى أو راسلنا مباشرة.",
      requiredError: "يرجى تعبئة الحقول المطلوبة.",
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
      formIntro: "Takes less than two minutes — our team will get back to you within a few days.", // DRAFT
    },
    sessionPage: {
      metaTitle: "Book a Guidance Session | Madar", // DRAFT
      metaDescription: "Book a guidance and development session with Madar through the form below.", // DRAFT
      heading: "Book your guidance session", // DRAFT
      intro:
        "This form helps us get to know you and understand your goals and challenges, so we can match you with the right session and help you take clearer steps forward.", // DRAFT
      backLink: "Back to the site",
    },
    form: {
      fullNameLabel: "Full name",
      phoneLabel: "Phone number",
      ageRangeLabel: "Age range",
      age1517: "15–17",
      age1821: "18–21",
      age2225: "22–25",
      age2631: "26–31",
      statusLabel: "Current status",
      statusSchool: "School student",
      statusUniversity: "University student",
      statusEmployed: "Employed",
      statusJobSeeker: "Job seeker",
      statusOther: "Other",
      statusOtherPlaceholder: "Please specify",
      emailLabel: "Email",
      guidanceFieldLabel: "What area would you like guidance in?",
      mainChallengeLabel: "What's the main challenge you're facing right now?",
      mainChallengeHint: "Briefly tell us the one thing that's holding you back or on your mind.",
      desiredOutcomeLabel: "What outcome are you hoping for after the session?",
      desiredOutcomeHint:
        "For example: picking a direction, choosing a specialization, building a skill, planning your time, starting a project, or figuring out your next step.",
      triedBeforeLabel: "Have you tried addressing this challenge before?",
      yes: "Yes",
      no: "No",
      consultationMethodLabel: "What works best for the consultation?",
      zoom: "Zoom call",
      inPerson: "In person",
      submit: "Send request",
      submitting: "Sending...",
      successMessage: "Thank you! We've received your request and will be in touch soon.",
      errorMessage: "Something went wrong. Please try again or email us directly.",
      requiredError: "Please fill in the required fields.",
    }, // DRAFT (all form.* strings)
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
