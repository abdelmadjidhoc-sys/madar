/**
 * Madar — bilingual content store.
 *
 * All page copy lives here so it can be edited without touching components.
 * Components read it through useLang().t("path.to.key") — see
 * components/LanguageProvider.js.
 *
 * TODO(content): Arabic copy below is confirmed. English copy is a first-pass
 * DRAFT translation (adapted, not literal) and needs sign-off before launch —
 * see PROGRESS.md.
 */

export const MADAR_CONTENT = {
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
      headline: "المرجع الأول للشباب في دولة قطر",
      subhead:
        "مدار منصة تجمع الفرص التعليمية والتطويرية والتطوعية في مكان واحد لشباب قطر.",
      cta: "استكشف الأنشطة",
      imageAlt: "TODO: صورة خلفية نهائية لقسم البداية",
    },
    about: {
      heading: "معلومة واضحة، مصدر موثوق، وطريق مباشر للمشاركة",
      body:
        "مدار منصة إعلامية موجهة لشباب قطر بين 15 و39 عامًا، تجمع الفرص التعليمية والتطويرية والتطوعية في مكان واحد، وتنظمها بحسب الاهتمام ومرحلة الحياة. رسالتنا بسيطة: معلومة يسهل فهمها، مصدر واضح لكل فرصة، وطريق مباشر لخطوة أولى حقيقية. وننقل الأخبار التي تهم الشباب والمهتمين بالأمور الإعلامية التي تخص الشباب.",
      disclaimer:
        "يستلهم مدار توجه رؤية قطر الوطنية 2030، لكنه منصة مستقلة، وليس جهة رسمية تابعة لها أو شريكًا معتمدًا من مؤسساتها.",
    },
    story: {
      heading: "قصة بداية مدار",
      body: "TODO: أضف هنا قصة بداية مدار — كيف بدأت الفكرة، ومن أطلقها، وما الذي دفعهم لتأسيس المنصة.",
    },
    activities: {
      heading: "مسارات متعددة، فرصة واحدة تبدأ بها",
      items: [
        {
          title: "برامج إعلامية",
          desc: "نقدم برامج إعلامية أسبوعية عبر إنستقرام وتيك توك، محتوى قصير وسريع يواكب اهتمامات الشباب أينما كانوا. فيديوهات ونبذات يومية تنقل لكم آخر المستجدات بأسلوب بسيط وممتع، يواكب إيقاع حياتكم اليومية.",
        },
        {
          title: "تعليم",
          desc: "برامج تعليمية ومنح ودورات تطوّر مهاراتك خطوة بخطوة. محتوى تدريبي متنوع يغطي مجالات مختلفة، يساعدك على اكتساب مهارات جديدة والتقدم في مسيرتك المهنية والشخصية.",
        },
        {
          title: "فعاليات",
          desc: "ننظم ورش عمل ومؤتمرات، ونجمع لك أيضًا فعاليات من كل مكان في قطر من العمل إلى المؤتمرات. مناسبات متنوعة تجمع الشباب وتفتح لهم آفاقًا جديدة للتواصل والتعلم.",
        },
        {
          title: "البودكاست",
          desc: "ننقل لكم إنجازات الشباب القطري عبر حلقات صوتية ومرئية. قصص ملهمة وتجارب حقيقية من شباب حققوا إنجازات في مجالاتهم. لتكون كل حلقة خطوة تقربكم من فرصتكم القادمة.",
        },
        {
          title: "التغطيات",
          desc: "ننقل لكم المشهد من المكان نفسه، لحظة بلحظة. تغطيات ميدانية للفعاليات والمناسبات التي تهم شباب قطر. لتكونوا قريبين من الحدث حتى لو لم تكونوا حاضرين فيه.",
        },
        {
          title: "فرص",
          desc: "فرص عمل وتدريب ومبادرات تفتح لك أبوابًا جديدة. إعلانات محدثة باستمرار من جهات موثوقة، تساعدك على اتخاذ خطوتك القادمة نحو مستقبل مهني أفضل.",
        },
      ],
    },
    founders: {
      heading: "المؤسسين",
      items: [
        {
          name: "السيد/ سعود عبدالعزيز الهيدوس",
          bio: "الرئيس التنفيذي",
          achievements: [
            "ناشط في العمل الشبابي والبيئي.",
            "مدرب معتمد حاصل على شهادة (TOT).",
            "الفوز بالمركز الأول في برنامج جيل مبادر.",
            "الفوز في هاكاثون بالمركزين الأول والثاني لاختراع ابتكارات تخدم أهداف التنمية المستدامة والرقمنة.",
            "تمثيل دولة قطر في محافل محلية ودولية شبابية.",
          ],
        },
        {
          name: "الأستاذ/ صالح محمد العبيدلي",
          bio: "رئيس الفعاليات والبرامج",
          achievements: [
            "ناشط في العمل الشبابي والتطوعي والمسؤولية المجتمعية.",
            "تقلّد عددًا من المناصب القيادية في الأجهزة واللجان الشبابية ببعض الأندية الرياضية القطرية.",
            "الإسهام في تنفيذ العديد من المبادرات والفعاليات المجتمعية.",
            "تحقيق المركز الأول على مستوى اللجان والأجهزة الشبابية ثلاث مرات، تقديرًا للبرامج والمبادرات المنفذة.",
          ],
        },
        {
          name: "الأستاذة/ خلود فضل البوعينين",
          bio: "رئيس التطوير والابتكار",
          achievements: [
            "قيادة فرق العمل وإدارة المشاريع.",
            "متخصصة في مجال العلاقات العامة وإعداد وتنفيذ الاستراتيجيات وإدارة السمعة المؤسسية.",
            "تحليل البيانات باستخدام Power BI لدعم اتخاذ القرار.",
            "متخصصة في تمكين الشباب الرقمي وتصميم وتنفيذ البرامج الشبابية.",
            "تنظيم الفعاليات الرسمية وبناء العلاقات مع وسائل الإعلام وأصحاب المصلحة.",
          ],
        },
        {
          name: "السيد/ ظاهر ناصر الناصر",
          bio: "رئيس العلاقات والإعلام",
          achievements: [
            "ناشط في المجال الشبابي والقيادي.",
            "خريج شؤون دولية (خريف 2026) - جامعة قطر.",
            "خريج برنامج مندوبي قطر الشباب للأمم المتحدة.",
            "خريج برنامج أسفار جامعة قطر للتمثيل الدولي.",
            "خريج برنامج قيادات - جامعة قطر.",
            "تمثيلات داخلية وخارجية.",
          ],
        },
      ],
    },
    partnerships: {
      heading: "الشراكات",
    },
    stats: {
      heading: "مدار بالأرقام",
      items: [
        { value: 12, suffix: "", label: "عدد التغطيات الإعلامية" },
        { value: 37, suffix: "K+", label: "عدد المشاهدات على التغطيات" },
        { value: 20, suffix: "+", label: "عدد الجهات الإعلامية التي تعاونّا معها" },
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
    news: {
      heading: "أخبار مدار",
      items: [
        {
          title: "حملة تنظيف شاطئ الوكرة مع المتطوعات",
          excerpt: "الجهاز الشبابي بنادي الوكرة",
        },
        {
          title: "جلسة حوارية تفاعلية: في أي زمن نعيش؟!",
          excerpt: "تغطية مدار لأحد اللقاءات الحوارية.",
        },
        {
          title: "الملتقى الثاني \"بالعربي\" – فعاليات مؤسسة قطر",
          excerpt: "تغطية مدار لفعاليات مؤسسة قطر.",
        },
      ],
    },
    contact: {
      heading: "لنبقَ على تواصل",
      intro:
        "تابعونا لمزيد من الفرص والتحديثات، أو راسلونا مباشرة عبر النموذج لطلب جلسة أو الاستفسار.",
      socialHeading: "تابعونا",
      formHeading: "أرسل طلبك",
      formIntro: "الاستمارة تستغرق أقل من دقيقتين، وسيتواصل معك فريقنا خلال أيام قليلة.",
    },
    linksPage: {
      metaTitle: "روابطنا | مدار",
      metaDescription: "كل روابط مدار في مكان واحد.",
      name: "منصّة مدار",
      bio: "مدار … المرجع الأول للشباب في دولة قطر. منصة إعلامية متخصصة في القطاع الشبابي، تهدف إلى تمكين الشباب وتسهيل وصولهم إلى الفرص التطويرية.",
      featuredLabel: "انضم إلى فريق منصة مدار",
      sessionLabel: "طلب جلسة توجيهية",
      channelLabel: "قناة ( منصة مدار )",
      instagramLabel: "Instagram",
      tiktokLabel: "TikTok",
      youtubeLabel: "Youtube",
      threadsLabel: "Threads",
      emailLabel: "Email",
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
    joinPage: {
      metaTitle: "انضم إلى فريق مدار | مدار",
      metaDescription: "قدّم طلب انضمامك إلى فريق منصة مدار.",
      heading: "انضم إلى فريق منصة مدار",
      intro:
        "نبحث في منصة مدار عن شباب طموحين يمتلكون الشغف والرغبة في صناعة أثر حقيقي، والمساهمة في تطوير المحتوى والمبادرات والفعاليات الموجهة للشباب في دولة قطر.",
      intro2: "إذا كنت ترى أن لديك المهارات والحماس لتكون جزءًا من فريقنا، يسعدنا استقبال طلبك.",
      backLink: "العودة إلى الموقع",
    },
    joinForm: {
      personalHeading: "المعلومات الشخصية",
      fullNameLabel: "الاسم الكامل",
      fullNameHint: "يرجى كتابة الاسم الثلاثي.",
      phoneLabel: "رقم الهاتف",
      phoneHint: "يرجى إدخال رقم هاتف فعال للتواصل.",
      emailLabel: "البريد الإلكتروني",
      ageLabel: "العمر",
      organizationLabel: "الجهة التعليمية أو جهة العمل",
      instagramLabel: "حساب Instagram",
      optional: "اختياري",
      joiningHeading: "معلومات الانضمام",
      heardFromLabel: "كيف تعرفت على منصة مدار؟",
      heardWhatsapp: "WhatsApp / مبادرة الأفلاك",
      heardFriend: "عن طريق صديق أو معرفة",
      heardEvent: "إحدى فعاليات أو برامج منصة مدار",
      heardOther: "أخرى",
      otherPlaceholder: "يرجى التحديد",
      departmentLabel: "القسم الذي ترغب في الانضمام إليه",
      departmentHint: "يرجى اختيار القسم الأكثر توافقًا مع مهاراتك واهتماماتك:",
      deptMedia: "قسم التغطيات الإعلامية",
      deptOpportunities: "قسم رصد ونشر الفرص",
      deptPr: "قسم العلاقات العامة والشراكات",
      deptEvents: "قسم تنظيم وإدارة الفعاليات",
      hasExperienceLabel: "هل لديك خبرة سابقة مرتبطة بالقسم الذي اخترته؟",
      yes: "نعم",
      no: "لا",
      experienceDetailsLabel: "إذا كانت الإجابة نعم، حدثنا باختصار عن خبرتك السابقة.",
      skillsLabel: "ما المهارات التي تمتلكها ويمكن أن تضيفها إلى فريق منصة مدار؟",
      motivationLabel: "لماذا ترغب في الانضمام إلى فريق منصة مدار؟",
      weeklyHoursLabel: "كم من الوقت يمكنك تخصيصه أسبوعيًا للمشاركة مع الفريق؟",
      hoursLt3: "أقل من 3 ساعات",
      hours3to5: "من 3 إلى 5 ساعات",
      hours5to10: "من 5 إلى 10 ساعات",
      hoursGt10: "أكثر من 10 ساعات",
      fieldWorkLabel: "هل لديك استعداد للمشاركة في الفعاليات والتغطيات الميدانية عند الحاجة؟",
      fieldWorkDepends: "يعتمد على الوقت والفعالية",
      cvLabel: "إرفاق السيرة الذاتية (CV)",
      cvHint: "PDF أو Word، بحد أقصى 3 ميغابايت.",
      cvTooLarge: "حجم الملف أكبر من 3 ميغابايت. يرجى إرفاق ملف أصغر.",
      declarationHeading: "إقرار المتقدم",
      declarationText:
        "أقر بأن المعلومات الواردة في هذا النموذج صحيحة، وأتفهم أن تقديم الطلب لا يعني القبول المباشر، وأن فريق منصة مدار سيقوم بمراجعة الطلبات والتواصل مع المرشحين الذين تتوافق مهاراتهم واهتماماتهم مع احتياجات الفريق.",
      submit: "إرسال طلب الانضمام",
      submitting: "جارٍ الإرسال...",
      successMessage: "شكرًا لك! تم استلام طلب انضمامك، وسيتواصل معك فريق مدار بعد مراجعة الطلبات.",
      errorMessage: "حدث خطأ ما. حاول مرة أخرى أو راسلنا مباشرة.",
    },
    admin: {
      metaTitle: "لوحة التحكم | مدار",
      loginMetaTitle: "تسجيل الدخول | لوحة تحكم مدار",
      loginHeading: "تسجيل دخول المشرف",
      username: "اسم المستخدم",
      password: "كلمة المرور",
      logIn: "تسجيل الدخول",
      loggingIn: "جارٍ تسجيل الدخول…",
      wrongCredentials: "اسم المستخدم أو كلمة المرور غير صحيحة.",
      loginError: "تعذّر تسجيل الدخول. حاول مرة أخرى.",
      heading: "الطلبات",
      logOut: "تسجيل الخروج",
      backToSite: "العودة إلى الموقع",
      tabSessions: "طلبات الجلسات",
      tabApplications: "طلبات الانضمام",
      colName: "الاسم",
      colDate: "التاريخ",
      loading: "جارٍ التحميل…",
      loadError: "تعذّر تحميل الطلبات. يرجى تحديث الصفحة.",
      emptySessions: "لا توجد طلبات جلسات بعد.",
      emptyApplications: "لا توجد طلبات انضمام بعد.",
      detailError: "تعذّر تحميل هذا الطلب. حاول مرة أخرى.",
      close: "إغلاق",
      fields: {
        submittedAt: "تاريخ الإرسال",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        ageRange: "الفئة العمرية",
        currentStatus: "الوضع الحالي",
        guidanceField: "مجال التوجيه",
        mainChallenge: "التحدي الرئيسي",
        desiredOutcome: "النتيجة المرجوة",
        triedBefore: "هل حاول معالجة التحدي سابقًا؟",
        consultationMethod: "طريقة الاستشارة",
        age: "العمر",
        organization: "الجهة التعليمية أو جهة العمل",
        instagram: "حساب Instagram",
        heardFrom: "كيف تعرّف على مدار",
        department: "القسم",
        hasExperience: "خبرة سابقة في القسم؟",
        experienceDetails: "تفاصيل الخبرة",
        skills: "المهارات",
        motivation: "سبب الرغبة في الانضمام",
        weeklyHours: "الوقت المتاح أسبوعيًا",
        fieldWork: "الاستعداد للمشاركة الميدانية",
        cv: "السيرة الذاتية",
      },
    },
    footer: {
      disclaimer:
        "مدار منصة مستقلة تدعم توجه رؤية قطر الوطنية 2030، وليست جهة رسمية تابعة لها.",
      ipHeading: "الملكية الفكرية",
      ipText:
        "جميع الحقوق الفكرية لمنصة مدار، بما في ذلك الشعار والمحتوى والتصاميم والبرامج الإعلامية المقدمة عبر الموقع ومنصات التواصل الاجتماعي، محفوظة ومرخصة من الجهات المعنية في دولة قطر. يُمنع إعادة استخدام أو نسخ أو توزيع أي جزء من محتوى المنصة دون إذن مسبق.",
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
      headline: "The first reference for youth in the State of Qatar", // DRAFT
      subhead:
        "Madar brings Qatar youth's educational, development, and volunteer opportunities together in one place.", // DRAFT
      cta: "Explore Activities",
      imageAlt: "TODO: final hero background image",
    },
    about: {
      heading: "Clear information, a visible source, a direct way in", // DRAFT
      body:
        "Madar is a media platform for Qatar's youth, ages 15 to 39. We gather educational, development, and volunteer opportunities in one place, organized by interest and life stage. Our mission is simple: information that's easy to understand, a clear source behind every opportunity, and a direct path to a real first step. We also share news that matters to youth and to anyone interested in youth-related media.", // DRAFT
      disclaimer:
        "Madar draws on the direction of Qatar National Vision 2030, but is an independent platform — not an official affiliate or approved partner of its entities.", // DRAFT
    },
    story: {
      heading: "The Story of How Madar Began", // DRAFT
      body: "TODO: Add Madar's founding story here — how the idea started, who launched it, and what motivated them to create the platform.",
    },
    activities: {
      heading: "Multiple tracks, one place to start", // DRAFT
      items: [
        {
          title: "Media Programs", // DRAFT
          desc: "Weekly media programs across Instagram and TikTok — short, fast content that keeps pace with youth interests wherever they are. Daily videos and clips bringing you the latest, in a simple, enjoyable style that fits your everyday rhythm.", // DRAFT
        },
        {
          title: "Education",
          desc: "Educational programs, scholarships, and courses that build your skills step by step. Varied training content covering different fields, helping you gain new skills and advance in your career and personal path.", // DRAFT
        },
        {
          title: "Events",
          desc: "We organize workshops and conferences, and also gather events from across Qatar, from workplaces to conferences. Varied occasions that bring youth together and open new horizons for connection and learning.", // DRAFT
        },
        {
          title: "Podcast",
          desc: "We share the achievements of Qatar's youth through audio and video episodes. Inspiring stories and real experiences from young people who've achieved in their fields. Every episode is a step closer to your own next opportunity.", // DRAFT
        },
        {
          title: "Coverage",
          desc: "We bring you the scene from where it happens, moment by moment. On-the-ground coverage of the events and occasions that matter to Qatar's youth. So you stay close to what's happening, even if you couldn't be there.", // DRAFT
        },
        {
          title: "Opportunities",
          desc: "Jobs, internships, and initiatives that open new doors. Regularly updated listings from trusted sources, helping you take your next step toward a better professional future.", // DRAFT
        },
      ],
    },
    founders: {
      heading: "Founders", // DRAFT
      items: [
        {
          name: "Mr. Saud Abdulaziz Al-Haidous", // DRAFT (name transliteration)
          bio: "Chief Executive Officer",
          achievements: [
            "Active in youth and environmental work.", // DRAFT
            "Certified trainer (TOT certificate holder).", // DRAFT
            "Won first place in the \"Jeel Mubadir\" program.", // DRAFT
            "Won 1st and 2nd place in a hackathon for innovations serving sustainable development and digitalization goals.", // DRAFT
            "Represented Qatar in local and international youth forums.", // DRAFT
          ],
        },
        {
          name: "Mr. Saleh Mohammed Al-Obaidli", // DRAFT (name transliteration)
          bio: "Head of Events & Programs",
          achievements: [
            "Active in youth work, volunteering, and community responsibility.", // DRAFT
            "Held several leadership positions in youth bodies and committees at some Qatari sports clubs.", // DRAFT
            "Contributed to implementing numerous community initiatives and events.", // DRAFT
            "Ranked first among youth committees and bodies three times, in recognition of the programs and initiatives delivered.", // DRAFT
          ],
        },
        {
          name: "Ms. Kholoud Fadel Al-Buainain", // DRAFT (name transliteration)
          bio: "Head of Development & Innovation",
          achievements: [
            "Leads teams and manages projects.", // DRAFT
            "Specialized in public relations, strategy development and execution, and reputation management.", // DRAFT
            "Analyzes data using Power BI to support decision-making.", // DRAFT
            "Specialized in digital youth empowerment and designing and delivering youth programs.", // DRAFT
            "Organizes official events and builds relationships with media outlets and stakeholders.", // DRAFT
          ],
        },
        {
          name: "Mr. Zaher Nasser Al-Nasser", // DRAFT (name transliteration)
          bio: "Head of Relations & Media",
          achievements: [
            "Active in youth and leadership work.", // DRAFT
            "Graduate of International Affairs (Fall 2026) — Qatar University.", // DRAFT
            "Graduate of the Qatar Youth Delegates to the United Nations program.", // DRAFT
            "Graduate of Qatar University's Asfar program for international representation.", // DRAFT
            "Graduate of the Qiyadat (Leadership) program — Qatar University.", // DRAFT
            "Internal and external representation experience.", // DRAFT
          ],
        },
      ],
    },
    partnerships: {
      heading: "Partnerships", // DRAFT
    },
    stats: {
      heading: "Madar in Numbers", // DRAFT
      items: [
        { value: 12, suffix: "", label: "Media coverages" }, // DRAFT
        { value: 37, suffix: "K+", label: "Views on our coverage" }, // DRAFT
        { value: 20, suffix: "+", label: "Media outlets we've partnered with" }, // DRAFT
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
    news: {
      heading: "Madar News", // DRAFT
      items: [
        {
          title: "Al Wakrah Beach Cleanup Campaign with Volunteers", // DRAFT
          excerpt: "Al Wakrah Club Youth Apparatus", // DRAFT
        },
        {
          title: "Interactive Dialogue Session: What Era Are We Living In?!", // DRAFT
          excerpt: "Madar's coverage of one of the dialogue sessions.", // DRAFT
        },
        {
          title: "The Second \"Bil-Arabi\" Forum – Qatar Foundation Events", // DRAFT
          excerpt: "Madar's coverage of Qatar Foundation's events.", // DRAFT
        },
      ],
    },
    contact: {
      heading: "Let's stay in touch", // DRAFT
      intro:
        "Follow us for more opportunities and updates, or reach out directly through the form to request a session or ask a question.", // DRAFT
      socialHeading: "Follow along",
      formHeading: "Send your request",
      formIntro: "Takes less than two minutes — our team will get back to you within a few days.", // DRAFT
    },
    linksPage: {
      metaTitle: "Our Links | Madar", // DRAFT
      metaDescription: "All of Madar's links in one place.", // DRAFT
      name: "Madar Platform", // DRAFT
      bio: "Madar … the first reference for youth in the State of Qatar. A media platform specialized in the youth sector, aiming to empower youth and ease their access to development opportunities.", // DRAFT
      featuredLabel: "Join the Madar team",
      sessionLabel: "Book a guidance session",
      channelLabel: "Channel (Madar Platform)", // DRAFT
      instagramLabel: "Instagram",
      tiktokLabel: "TikTok",
      youtubeLabel: "Youtube",
      threadsLabel: "Threads",
      emailLabel: "Email",
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
    joinPage: {
      metaTitle: "Join the Madar Team | Madar",
      metaDescription: "Apply to join the Madar platform team.",
      heading: "Join the Madar team",
      intro:
        "At Madar, we're looking for ambitious young people with the passion and drive to make a real impact, and to help build content, initiatives, and events for youth in the State of Qatar.",
      intro2: "If you think you have the skills and enthusiasm to be part of our team, we'd love to hear from you.",
      backLink: "Back to the site",
    }, // DRAFT
    joinForm: {
      personalHeading: "Personal information",
      fullNameLabel: "Full name",
      fullNameHint: "Please write your full three-part name.",
      phoneLabel: "Phone number",
      phoneHint: "Please enter a phone number we can reach you on.",
      emailLabel: "Email",
      ageLabel: "Age",
      organizationLabel: "School, university, or employer",
      instagramLabel: "Instagram account",
      optional: "Optional",
      joiningHeading: "About joining",
      heardFromLabel: "How did you hear about Madar?",
      heardWhatsapp: "WhatsApp / Al-Aflak initiative",
      heardFriend: "Through a friend or acquaintance",
      heardEvent: "A Madar event or program",
      heardOther: "Other",
      otherPlaceholder: "Please specify",
      departmentLabel: "Which department would you like to join?",
      departmentHint: "Please choose the one that best fits your skills and interests:",
      deptMedia: "Media Coverage",
      deptOpportunities: "Opportunity Tracking & Publishing",
      deptPr: "Public Relations & Partnerships",
      deptEvents: "Event Planning & Management",
      hasExperienceLabel: "Do you have previous experience related to the department you chose?",
      yes: "Yes",
      no: "No",
      experienceDetailsLabel: "If yes, briefly tell us about your experience.",
      skillsLabel: "What skills do you have that you could bring to the Madar team?",
      motivationLabel: "Why do you want to join the Madar team?",
      weeklyHoursLabel: "How much time can you give the team each week?",
      hoursLt3: "Less than 3 hours",
      hours3to5: "3 to 5 hours",
      hours5to10: "5 to 10 hours",
      hoursGt10: "More than 10 hours",
      fieldWorkLabel: "Are you willing to take part in on-site events and coverage when needed?",
      fieldWorkDepends: "Depends on the timing and the event",
      cvLabel: "Attach your CV",
      cvHint: "PDF or Word, up to 3 MB.",
      cvTooLarge: "This file is larger than 3 MB. Please attach a smaller one.",
      declarationHeading: "Applicant declaration",
      declarationText:
        "I confirm that the information in this form is accurate, and I understand that submitting an application does not mean automatic acceptance. The Madar team will review applications and contact candidates whose skills and interests match the team's needs.",
      submit: "Submit application",
      submitting: "Sending...",
      successMessage: "Thank you! We've received your application. The Madar team will be in touch after reviewing applications.",
      errorMessage: "Something went wrong. Please try again or email us directly.",
    }, // DRAFT (all joinForm.* strings)
    admin: {
      metaTitle: "Admin | Madar",
      loginMetaTitle: "Log in | Madar Admin",
      loginHeading: "Admin log in",
      username: "Username",
      password: "Password",
      logIn: "Log in",
      loggingIn: "Logging in…",
      wrongCredentials: "Wrong username or password.",
      loginError: "Couldn't log in. Please try again.",
      heading: "Submissions",
      logOut: "Log out",
      backToSite: "Back to the site",
      tabSessions: "Session requests",
      tabApplications: "Join applications",
      colName: "Name",
      colDate: "Date",
      loading: "Loading…",
      loadError: "Couldn't load submissions. Please refresh.",
      emptySessions: "No session requests yet.",
      emptyApplications: "No applications yet.",
      detailError: "Couldn't load that entry. Please try again.",
      close: "Close",
      fields: {
        submittedAt: "Submitted at",
        phone: "Phone",
        email: "Email",
        ageRange: "Age range",
        currentStatus: "Current status",
        guidanceField: "Guidance area",
        mainChallenge: "Main challenge",
        desiredOutcome: "Desired outcome",
        triedBefore: "Tried before?",
        consultationMethod: "Consultation method",
        age: "Age",
        organization: "School / employer",
        instagram: "Instagram",
        heardFrom: "Heard about Madar via",
        department: "Department",
        hasExperience: "Previous experience?",
        experienceDetails: "Experience details",
        skills: "Skills",
        motivation: "Why join",
        weeklyHours: "Weekly availability",
        fieldWork: "On-site events & coverage",
        cv: "CV",
      },
    },
    footer: {
      disclaimer:
        "Madar is an independent platform that supports the direction of Qatar National Vision 2030. It is not an official affiliate of its entities.", // DRAFT
      ipHeading: "Intellectual Property", // DRAFT
      ipText:
        "All intellectual property rights of the Madar platform — including its logo, content, designs, and media programs presented through the website and social media platforms — are reserved and licensed by the relevant authorities in the State of Qatar. Reuse, copying, or distribution of any part of the platform's content without prior permission is prohibited.", // DRAFT
      copyright: "© {year} Madar. All rights reserved.",
    },
  },
};

/**
 * Real Madar links (from linktr.ee/madar.qa). Kept language-independent since
 * URLs don't change with locale. Every social link in the components reads
 * from here, so there is one place to update if a handle changes.
 */
export const MADAR_LINKS = {
  instagram: "https://www.instagram.com/madar_qat",
  tiktok: "https://www.tiktok.com/@madar_qat",
  youtube: "https://youtube.com/channel/UCgxiJUU1tuS0K5OEoc7HApA",
  threads: "https://www.threads.net/@madar_qat",
  googleForm: "https://forms.gle/UHVrdyENZ5YkHgwN9",
  email: "qamadar@gmail.com",
};

/** Featured podcast episode (Madar's own channel). */
export const MADAR_PODCAST = {
  videoId: "Pt8vFairKLE",
  channelUrl: "https://www.youtube.com/@%D9%85%D9%86%D8%B5%D8%A9%D9%85%D8%AF%D8%A7%D8%B1",
};
