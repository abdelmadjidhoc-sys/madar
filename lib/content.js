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
      home: "الرئيسية",
      about: "من نحن",
      news: "الأخبار",
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
        "مدار منصة إعلامية موجهة لشباب قطر بين 15 و39 عامًا، تجمع الفرص التعليمية والتطويرية والتطوعية في مكان واحد، وتنظمها بحسب الاهتمام ومرحلة الحياة. وننقل الأخبار التي تهم الشباب والمهتمين بالأمور الإعلامية التي تخص الشباب.",
      disclaimer:
        "يستلهم مدار توجه رؤية قطر الوطنية 2030، لكنه منصة مستقلة، وليس جهة رسمية تابعة لها.",
      more: "اقرأ المزيد عن مدار",
    },
    story: {
      heading: "قصة بداية مدار",
      paragraphs: [
        "أحيانًا، قد لا يفصل بين الشاب وفرصة تغيّر مساره سوى أن يعرف بوجودها.",
        "برنامج قد يفتح له بابًا جديدًا، فرصة تطوعية تكشف له قدراته، ورشة تصقل مهاراته، أو تجربة واحدة قد تكون بداية لمسار لم يكن يتخيل يومًا أنه سيصل إليه.",
        "لكن السؤال الذي بدأت منه قصتنا كان: ماذا لو كانت هذه الفرصة موجودة… ولم تصل إليه؟",
        "من هنا بدأت مدار.",
        "بدأت من ملاحظة واقع نراه باستمرار؛ فرص شبابية نوعية تُطرح في دولة قطر، وجهات تبذل جهودًا كبيرة في تقديم البرامج والمبادرات، وفي المقابل شباب يملكون الطموح والرغبة في المشاركة والتطور، لكن الوصول إلى هذه الفرص لم يكن دائمًا بالسهولة التي ينبغي أن يكون عليها.",
        "كانت الفرص موجودة، والطموح موجودًا، لكن ما كان ينقص أحيانًا هو حلقة الوصل بينهما.",
        "وهنا وُلدت فكرة منصة مدار.",
        "لم نرد أن نكون مجرد حساب آخر ينشر إعلانًا ثم ينتقل إلى الإعلان التالي، بل أردنا أن نبني مساحة إعلامية شبابية تجعل الفرصة أقرب، والمعلومة أوضح، والطريق إليها أسهل.",
        "اخترنا اسم (مدار) لأن المدار هو المسار الذي تنتظم حوله الحركة؛ وهذا تمامًا ما أردنا أن تمثله المنصة: محورًا تلتقي حوله الفرص والشباب والجهات والمبادرات في مساحة واحدة.",
        "ومع كل خطوة، كبرت الفكرة.",
        "لم تعد مدار تكتفي بالتعريف بالفرص، بل امتد دورها إلى التغطيات الإعلامية للبرامج والفعاليات الشبابية، وإنتاج المحتوى التوعوي والتفاعلي، واستضافة الشخصيات والخبرات عبر بودكاست مدار، وتنفيذ البرامج وورش العمل والجلسات الاستشارية، إلى جانب دعم المبادرات الشبابية وبناء الشراكات مع الجهات في مختلف القطاعات.",
        "وفي قلب كل ذلك، بقي المبدأ الذي بدأت منه الرحلة كما هو: أن الفرصة حين تصل إلى الشخص المناسب في الوقت المناسب، قد تصنع فارقًا أكبر مما نتخيل.",
        "نحن نؤمن بأن شباب قطر يمتلكون الطموح والقدرة على صناعة الأثر، وأن دورنا هو أن نقرّب إليهم المساحات التي تساعدهم على اكتشاف إمكاناتهم، وتطوير مهاراتهم، وخوض تجارب جديدة، والمشاركة بفاعلية في تنمية وطنهم.",
        "لهذا، لم تبدأ مدار بحثًا عن مجرد حضور إعلامي.",
        "بدأت لأننا رأينا فرصة لأن نصنع أثرًا.",
        "وما بدأ بفكرة لجمع الفرص في مكان واحد، نطمح أن يصبح اليوم مرجعًا إعلاميًا شبابيًا يجمع الشباب بالفرص، ويمنح المبادرات مساحة للظهور، ويقرب الجهات من الجيل الذي تصنع من أجله هذه الفرص.",
        "هذه ليست نهاية القصة؛ هذا هو مدارها الأول.",
      ],
      signoff: "مدار… حيث تدور الفرص.",
    },
    activities: {
      heading: "مسارات متعددة، فرصة واحدة تبدأ بها",
      intro: "لمحة سريعة عن أنشطة مدار.",
      more: "التفاصيل الكاملة في صفحة «من نحن»",
      items: [
        {
          title: "برامج إعلامية",
          desc: "محتوى قصير وسريع عبر إنستقرام وتيك توك يواكب اهتمامات الشباب أينما كانوا.",
        },
        {
          title: "تعليم",
          desc: "برامج ومنح ودورات تطوّر مهاراتك خطوة بخطوة.",
        },
        {
          title: "فعاليات",
          desc: "ورش عمل ومؤتمرات وفعاليات من كل مكان في قطر.",
        },
        {
          title: "البودكاست",
          desc: "حلقات صوتية ومرئية تنقل إنجازات الشباب القطري.",
        },
        {
          title: "التغطيات",
          desc: "تغطيات ميدانية للفعاليات والمناسبات لحظة بلحظة.",
        },
        {
          title: "فرص",
          desc: "فرص عمل وتدريب ومبادرات محدثة باستمرار.",
        },
      ],
    },
    aboutPage: {
      metaTitle: "من نحن | مدار",
      metaDescription: "تعرّف على منصة مدار: رؤيتها ورسالتها ومبادئها وأهدافها وأنشطتها وقصة بدايتها.",
      eyebrow: "مدار .. حيث تدور الفرص",
      heading: "من نحن",
      definition: {
        heading: "تعريف المنصة",
        paragraphs: [
          "مدار هي منصة رقمية إعلامية متخصصة في القطاع الشبابي تهدف إلى جمع الفرص التعليمية والتطويرية والتطبيقية والتطوعية في منصة موحدة في مواقع التواصل الاجتماعي، لتكون مرجعًا سهل الوصول للشباب في دولة قطر، عبر نشر أحدث البرامج والورش والدورات والمؤتمرات بطريقة منظمة وواضحة في قناة المنصة على تطبيق الإنستغرام.",
          "ونشر ثقافة التطوير الذاتي وتوعية فئة الشباب في دولة قطر من خلال توثيق تجارب الشباب الناجحة وإنجازاتهم عبر البودكاست الخاص بالمنصة، وتقديم تغطيات للبرامج والفعاليات ذات الصلة بفئة الشباب في مواقع التواصل الاجتماعي التابعة للمنصة.",
          "تنسجم منصة مدار مع رؤية قطر الوطنية 2030 التي تؤكد أن التنمية البشرية تمثل إحدى الركائز الأساسية للتنمية المستدامة، كما تتوافق مع السياسة الوطنية للشباب واستراتيجية \"حياة ذات جودة عالية وشباب جاهز للمستقبل\" الهادفة إلى إعداد جيل قادر على المساهمة في التنمية الوطنية والاقتصاد القائم على المعرفة.",
        ],
      },
      audience: {
        heading: "الفئة المستهدفة",
        range: "15 – 39",
        body: "فئة الشباب في دولة قطر، ضمن الفئة العمرية 15 - 39 عامًا.",
      },
      vision: {
        heading: "الرؤية",
        body: "أن تكون منصة مدار المرجع الإعلامي الشبابي الأول في دولة قطر للتعريف بالفرص التنموية والشبابية، والوجهة التي تجمع الشباب بالفرص التي تسهم في تطوير قدراتهم وصناعة مستقبلهم.",
      },
      mission: {
        heading: "الرسالة",
        body: "تمكين الشباب من الوصول السهل والسريع إلى الفرص النوعية، من خلال محتوى رقمي موثوق ومواكب لاهتماماتهم، والتعريف بالبرامج والمبادرات والفعاليات التي تسهم في تنمية مهاراتهم، وتوسيع مشاركتهم، وتعزيز دورهم في مسيرة التنمية الوطنية.",
      },
      meaning: {
        heading: "ماذا تعني (مدار)؟",
        paragraphs: [
          "المدار هو المسار الذي يدور فيه جسم حول نقطة أو مركز محدد.",
          "ومن هذا المعنى جاءت هوية المنصة؛ فكما تنتظم الأجسام حول مدارها، تسعى مدار إلى أن تكون نقطة تجمع واتصال تلتقي حولها الفرص والمبادرات والبرامج الموجهة للشباب.",
        ],
      },
      whyName: {
        heading: "لماذا اخترنا اسم «مدار»؟",
        paragraphs: [
          "تم اختيار اسم «مدار» ليعكس جوهر فكرة المنصة؛ وهي جمع الفرص التعليمية والتطويرية والشبابية في مساحة واحدة، بدلًا من تشتتها بين جهات ومنصات ومصادر متعددة.",
          "ونسعى لأن تصبح مدار محورًا تلتقي حوله الفرص والشباب والجهات؛ بحيث يعرف الشاب أين يبحث، ويصل إلى ما يناسب اهتماماته وطموحاته بصورة أسرع وأكثر وضوحًا.",
          "كما يعكس الاسم مفهوم الحركة والاستمرارية؛ فالفرص لا تتوقف، وطموحات الشباب تتطور باستمرار، ومدار تتحرك معهم لتكون قريبة من اهتماماتهم ومساراتهم المختلفة.",
        ],
      },
      identity: {
        heading: "الهوية الخاصة بالمنصة",
        tagline: "مدار ... حيث تدور الفرص",
        groups: [
          { title: "عناصر الملكية الفكرية لمنصة مدار", items: ["مدار", "Madar", "حيث تدور الفرص."] },
          { title: "حقوق المؤلف للمدار", items: ["المحتوى التحريري.", "المحتوى المرئي.", "التصاميم.", "البودكاست.", "الفيديوهات."] },
        ],
      },
      principles: {
        heading: "مبادئ منصة مدار",
        items: [
          { title: "الشباب أولًا", desc: "نضع احتياجات الشباب وطموحاتهم في صميم ما نقدمه." },
          { title: "الموثوقية", desc: "نحرص على تقديم معلومات واضحة ودقيقة من مصادر موثوقة." },
          { title: "سهولة الوصول", desc: "نعمل على اختصار المسافة بين الشاب والفرصة." },
          { title: "تكافؤ الفرص", desc: "نسعى إلى إيصال الفرص إلى أكبر شريحة ممكنة من الشباب." },
          { title: "الجودة", desc: "نهتم بنوعية المحتوى والفرص، وليس بكثرتها فقط." },
          { title: "التمكين", desc: "لا نكتفي بالتعريف بالفرصة، بل نسعى إلى مساعدة الشباب على الاستفادة منها وتطوير قدراتهم." },
          { title: "الشراكة", desc: "نؤمن بأن الأثر الحقيقي يتحقق من خلال التعاون بين الشباب والجهات والمؤسسات المختلفة." },
          { title: "الابتكار", desc: "نطور أساليبنا باستمرار بما يتناسب مع تطور الإعلام الرقمي واحتياجات الشباب." },
          { title: "الأثر", desc: "نقيس نجاحنا بما نتركه من أثر حقيقي في رحلة الشباب وتطورهم." },
          { title: "الهوية الوطنية", desc: "نعتز بالهوية القطرية ونسعى إلى الإسهام في إعداد شباب فاعل ومشارك في التنمية الوطنية." },
        ],
      },
      goals: {
        heading: "الأهداف",
        items: [
          {
            title: "تجميع الفرص في منصة موحدة",
            desc: "تطوير وإطلاق منصة رقمية موحدة خلال شهرين، تقوم بتجميع الفرص التعليمية والتطويرية المتاحة للشباب في دولة قطر، بما يسهل الوصول إليها خلال دقائق معدودة، وبما يدعم محور تنمية القدرات البشرية في رؤية قطر 2030 وسياسة تمكين الشباب.",
          },
          {
            title: "رفع وعي الشباب بالفرص المتاحة",
            desc: "تنفيذ حملات توعوية رقمية مستمرة تستهدف الوصول إلى فئة الشباب في قطر، لزيادة معرفتهم بالبرامج وفرص التطوع، انسجامًا مع هدف تعزيز المشاركة المجتمعية للشباب في سياسة الشباب.",
          },
          {
            title: "تقليل ضياع الفرص",
            desc: "تقليل نسبة ضياع الفرص نتيجة ضعف الانتشار أو تأخر وصول المعلومات، من خلال التحديث الفوري والإشعارات المباشرة، دعمًا لرفع كفاءة الوصول إلى المعلومات ضمن توجهات التحول الرقمي وتنمية الموارد البشرية في رؤية قطر 2030.",
          },
          {
            title: "تعزيز ثقافة التعلم المستمر",
            desc: "تعزيز ثقافة التعلم المستمر والتنمية الذاتية لدى الشباب عبر المنصة من خلال محتوى تفاعلي وعمل برامج خاصة بمنصة مدار، بما يواكب أهداف بناء مجتمع قائم على المعرفة في رؤية قطر 2030.",
          },
          {
            title: "نشر معلومات موثوقة",
            desc: "توفير محتوى موثوق بنسبة 100% مستند إلى مصادر رسمية معتمدة، مع تحديث دوري لا يقل عن مرة أسبوعيًا، بما يعزز الثقة في المنصة ويدعم مبدأ الشفافية والمصداقية ضمن سياسات العمل الشبابي في دولة قطر.",
          },
          {
            title: "إبراز التجارب الناجحة للشباب",
            desc: "نشر تجارب شبابية ناجحة في المنصة، بهدف تعزيز القدوة الإيجابية وزيادة إلهام الشباب، بما يتماشى مع هدف تمكين الشباب وإبراز دورهم في التنمية الوطنية.",
          },
          {
            title: "أن تكون المنصة المرجع الأول للشباب في قطر",
            desc: "تهدف المنصة لتكون المرجع الأول للشباب في دولة قطر، من خلال الوصول إلى نسبة استخدام عالية من الشباب النشطين رقميًا، بما يدعم رؤية قطر 2030 في تعزيز دور الشباب كشريك أساسي في التنمية المستدامة.",
          },
        ],
      },
      value: {
        heading: "القيمة المضافة",
        groups: [
          {
            title: "القيمة المضافة للشباب",
            items: ["تسهيل الوصول إلى الفرص.", "توفير الوقت والجهد.", "رفع الوعي بالبرامج والمبادرات.", "تعزيز المعرفة المهنية."],
          },
          {
            title: "القيمة المضافة للجهات الحكومية",
            items: ["دعم الوصول إلى الفئات المستهدفة.", "تعزيز الاستفادة من البرامج الوطنية.", "زيادة الوعي بالمبادرات الحكومية."],
          },
          {
            title: "القيمة المضافة للقطاع الخاص",
            items: ["تعزيز الوصول إلى الكفاءات الشابة.", "دعم برامج التدريب والتوظيف.", "تعزيز المسؤولية المجتمعية."],
          },
        ],
      },
      activities: {
        heading: "أنشطة منصة مدار",
        intro: "تعمل منصة مدار على تقديم مجموعة متكاملة من الأنشطة والخدمات الإعلامية والتنموية الموجهة للشباب، وتشمل:",
        items: [
          {
            title: "نشر الفرص والمستجدات الشبابية",
            desc: "التعريف بالمبادرات والبرامج والفرص التعليمية والتدريبية والتطوعية والمهنية وغيرها من الفرص الموجهة للشباب في دولة قطر.",
          },
          {
            title: "إنتاج البودكاست الشبابي",
            desc: "تنظيم واستضافة حلقات دورية تستضيف شخصيات بارزة ومؤثرة، إلى جانب الخبراء والمختصين، لمناقشة موضوعات وقضايا تهم الشباب وتسهم في توسيع معارفهم وآفاقهم.",
          },
          {
            title: "التغطيات الإعلامية",
            desc: "تنفيذ تغطيات إعلامية للبرامج والفعاليات والمبادرات ذات الصلة بالقطاع الشبابي، بما يسهم في إبراز أثرها وتعزيز وصولها إلى الجمهور المستهدف.",
          },
          {
            title: "المحتوى التفاعلي",
            desc: "إعداد ونشر محتوى رقمي تفاعلي يناقش القضايا والموضوعات والاهتمامات الشبابية، ويشجع الشباب على التعبير عن آرائهم والمشاركة في الحوار.",
          },
          {
            title: "المحتوى المرئي القصير",
            desc: "إنتاج ونشر مقاطع فيديو توعوية وتحفيزية ومعلوماتية بأساليب تتناسب مع اهتمامات الشباب ومنصات الإعلام الرقمي.",
          },
          {
            title: "البرامج وورش العمل",
            desc: "تصميم وتنفيذ برامج وورش عمل شبابية في مجالات متنوعة، بالتعاون مع مدربي منصة مدار والمختصين، بهدف تطوير مهارات الشباب وتنمية قدراتهم.",
          },
          {
            title: "الجلسات الاستشارية الشبابية",
            desc: "تقديم جلسات استشارية وإرشادية تساعد الشباب على تحديد مساراتهم، والاستفادة من الفرص المتاحة، وتطوير مهاراتهم الشخصية والمهنية.",
          },
          {
            title: "دعم وتبنّي المبادرات الشبابية",
            desc: "التعاون مع المبادرات والمشاريع الشبابية الواعدة، والمساهمة في دعمها وإبرازها وربطها بالفرص والجهات ذات العلاقة بما يعزز استدامتها وأثرها.",
          },
          {
            title: "بناء الشراكات الاستراتيجية",
            desc: "إقامة شراكات وتعاون مع الجهات الحكومية والخاصة ومؤسسات المجتمع المدني والجهات التعليمية والشبابية وغيرها من القطاعات ذات العلاقة، بما يسهم في توسيع نطاق الفرص والخدمات المقدمة للشباب.",
          },
        ],
        outro:
          "ومن خلال هذه الأنشطة، تسعى منصة مدار إلى بناء منظومة شبابية متكاملة تربط بين الشباب والفرص والجهات والمبادرات، وتحول المنصة من قناة لنشر الفرص إلى مساحة فاعلة تسهم في تمكين الشباب وصناعة الأثر.",
      },
      impact: {
        heading: "الأثر المتوقع للمنصة",
        groups: [
          {
            title: "الأثر على الشباب",
            items: [
              "رفع مستوى معرفة الشباب بالفرص.",
              "زيادة المشاركة في البرامج الوطنية.",
              "دعم تمكين الشباب.",
              "تعزيز العدالة في الوصول للمعلومات.",
              "دعم مستهدفات رؤية قطر الوطنية 2030.",
            ],
          },
          {
            title: "الأثر على سوق العمل",
            body: "تسهم المبادرة في دعم سوق العمل بصورة غير مباشرة من خلال تعزيز وصول الشباب إلى فرص التدريب والتأهيل والتوظيف وريادة الأعمال، مما يزيد من جاهزيتهم المهنية وقدرتهم على المنافسة في سوق العمل المستقبلي. كما تساعد في تقليص الفجوة المعلوماتية بين الشباب والجهات المقدمة للفرص وتعظيم الاستفادة من البرامج الوطنية الموجهة لتنمية الكفاءات الوطنية.",
          },
          {
            title: "الأثر الاجتماعي",
            items: [
              "تعزيز المشاركة المجتمعية.",
              "دعم ثقافة التطوع والمشاركة في البرامج.",
              "إبراز النماذج الوطنية الناجحة.",
              "تشجيع المبادرات الشبابية.",
              "تعزيز الانتماء والمسؤولية المجتمعية.",
            ],
          },
        ],
      },
    },
    newsPage: {
      metaTitle: "الأخبار | مدار",
      metaDescription: "تغطيات ميدانية وأخبار مدار للبرامج والفعاليات والمبادرات الشبابية في دولة قطر.",
      heading: "الأخبار",
      intro: "تغطيات ميدانية وأخبار مدار للبرامج والفعاليات والمبادرات ذات الصلة بفئة الشباب في دولة قطر.",
      podcastHeading: "بودكاست مدار",
    },
    founders: {
      heading: "المؤسسون",
      items: [
        {
          name: "السيد/ سعود عبدالعزيز الهيدوس",
          bio: "الرئيس التنفيذي",
          achievements: [
            "ناشط في العمل الشبابي والبيئي.",
            "خريج برنامج مندوبي قطر الشباب للأمم المتحدة.",
            "مدرب معتمد حاصل على شهادة (TOT).",
            "حاصل على عدّة جوائز في الشأن الشبابي.",
            "تمثيل دولة قطر في عدّة محافل محلية ودولية.",
            "اختراع ابلكيشن يخدم أهداف التنمية المستدامة.",
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
            "خريج شؤون دولية - جامعة قطر.",
            "ناشط في المجال الشبابي والقيادي.",
            "خريج برنامج مندوبي قطر الشباب للأمم المتحدة.",
            "خريج برنامج قيادات جامعة قطر.",
            "خريج برنامج أسفار جامعة قطر للتمثيل الدولي.",
            "خريج برنامج القيادات اليافعة - مركز قطر للقيادات.",
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
        { value: 200, suffix: "K+", label: "عدد المشاهدات" },
        { value: 20, suffix: "+", label: "عدد الجهات التي تعاونّا معها" },
      ],
    },
    podcast: {
      heading: "بودكاست",
      intro: "حوارات صريحة مع شباب قطر عن الفرص والتجارب ومسارات البداية.",
      // Same order as MADAR_PODCAST.episodes (newest first)
      episodes: [
        { title: "خارج حدود التخصص - المياسة الأنصاري", thumbAlt: "صورة من حلقة بودكاست مدار مع المياسة الأنصاري" },
        { title: "من لاعب كرة إلى أفضل مخترع - محمد القصابي", thumbAlt: "صورة من حلقة بودكاست مدار مع محمد القصابي" },
      ],
      moreEpisodes: "حلقات أخرى",
      playLabel: "تشغيل الحلقة",
      cta: "شاهد على يوتيوب",
    },
    news: {
      heading: "أحدث الأخبار",
      allLink: "جميع الأخبار والتغطيات",
      // Same order as NEWS in components/NewsGrid.js (newest first)
      items: [
        {
          title: "اتفاق شراكة مع الجهاز الشبابي لنادي السد",
          excerpt: "جانب من مراسم توقيع اتفاقية التعاون المشترك بين منصة مدار والجهاز الشبابي بنادي السد.",
        },
        {
          title: "توقيع اتفاقية بين منصة مدار وبين اللجنة الشبابية بنادي الخور",
          excerpt: "خطوة جديدة نحو تعزيز الشراكات الشبابية وتوسيع آفاق التعاون في دعم وتمكين الشباب بدولة قطر.",
        },
        {
          title: "خطوة جديدة نحو مستقبل مهني أوضح للطلبة",
          excerpt: "البرنامج الوطني للتوجيه المهني ينطلق خلال سبتمبر 2026 لتعريف الطلبة بالتخصصات التي يحتاجها سوق العمل.",
        },
        {
          title: "حملة تنظيف شاطئ الوكرة مع المتطوعات",
          excerpt: "جانب من فعالية اليوم العالمي للنظافة، التي نظمها الجهاز الشبابي بنادي الوكرة بالتعاون مع وزارة البلدية.",
        },
        {
          title: "جلسة حوارية تفاعلية: في أي زمن نعيش؟!",
          excerpt: "جلسة فتحت باب الحوار والتفكير حول واقعنا اليوم، أدارها المذيع محمد نصر واستضافتها دار روزا للنشر.",
        },
        {
          title: "الملتقى الثاني \"بالعربي\" – فعاليات مؤسسة قطر",
          excerpt: "جانب من تغطية منصة مدار لملتقى بالعربي، وأبرز اللحظات من قلب الحدث.",
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
      name: "مدار … المرجع الأول للشباب في دولة قطر.",
      bio: "منصة إعلامية متخصصة في القطاع الشبابي، تهدف إلى تمكين الشباب وتسهيل وصولهم إلى الفرص التطويرية.",
      sessionLabel: "طلب جلسة توجيهية",
      aflakLabel: "أفلاك | فرص شبابية",
      channelLabel: "قيمة مضافة",
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
      exportExcel: "تصدير كملف Excel",
      exporting: "جارٍ التصدير…",
      exportError: "تعذّر تصدير الطلبات. حاول مرة أخرى.",
      delete: "حذف",
      deleting: "جارٍ الحذف…",
      cancel: "إلغاء",
      confirmDeleteTitle: "هل أنت متأكد؟",
      confirmDeleteText: "سيتم حذف طلب «{name}» نهائيًا، ولا يمكن التراجع عن ذلك.",
      deleteError: "تعذّر حذف هذا الطلب. حاول مرة أخرى.",
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
      home: "Home",
      about: "About",
      news: "News",
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
        "Madar is a media platform for Qatar's youth, ages 15 to 39. We gather educational, development, and volunteer opportunities in one place, organized by interest and life stage. We also share news that matters to youth and to anyone interested in youth-related media.", // DRAFT
      disclaimer:
        "Madar draws on the direction of Qatar National Vision 2030, but it is an independent platform, not an official body affiliated with it.", // DRAFT
      more: "Read more about Madar", // DRAFT
    },
    // DRAFT (all story.* strings)
    story: {
      heading: "How Madar Began",
      paragraphs: [
        "Sometimes the only thing standing between a young person and an opportunity that could change their path is knowing it exists.",
        "A program that opens a new door, a volunteering role that reveals what they're capable of, a workshop that sharpens their skills, or a single experience that starts a path they never imagined they'd reach.",
        "But the question our story began with was: what if that opportunity was there… and never reached them?",
        "That's where Madar began.",
        "It started with something we kept seeing: quality youth opportunities being offered in Qatar, organizations putting real effort into programs and initiatives, and young people with the ambition and drive to take part and grow. Yet reaching those opportunities wasn't always as easy as it should be.",
        "The opportunities were there, and so was the ambition. What was sometimes missing was the link between them.",
        "That's how the idea of Madar was born.",
        "We didn't want to be just another account posting an announcement and moving on to the next. We wanted to build a youth media space that brings opportunities closer, makes information clearer, and makes the path to it easier.",
        "We chose the name Madar (\"orbit\") because an orbit is the path that movement organizes itself around. That's exactly what we wanted the platform to be: a center where opportunities, youth, organizations, and initiatives meet in one space.",
        "With every step, the idea grew.",
        "Madar no longer just announces opportunities. Its role has grown to cover youth programs and events, produce awareness and interactive content, host guests and experts on the Madar podcast, run programs, workshops, and advisory sessions, support youth initiatives, and build partnerships across sectors.",
        "At the heart of it all, the principle the journey started with hasn't changed: when an opportunity reaches the right person at the right time, it can make a bigger difference than we imagine.",
        "We believe Qatar's youth have the ambition and ability to make an impact, and that our role is to bring them closer to the spaces that help them discover their potential, build their skills, try new things, and take an active part in their country's development.",
        "That's why Madar didn't start out looking for a media presence.",
        "It started because we saw a chance to make an impact.",
        "What began as an idea to gather opportunities in one place, we hope will become a youth media reference that connects young people with opportunities, gives initiatives room to be seen, and brings organizations closer to the generation these opportunities are made for.",
        "This isn't the end of the story; it's only its first orbit.",
      ],
      signoff: "Madar… where opportunity orbits.",
    },
    activities: {
      heading: "Multiple tracks, one place to start", // DRAFT
      intro: "A quick look at what Madar does.", // DRAFT
      more: "Full details on the About page", // DRAFT
      items: [
        {
          title: "Media Programs", // DRAFT
          desc: "Short, fast content on Instagram and TikTok that keeps pace with youth interests wherever they are.", // DRAFT
        },
        {
          title: "Education",
          desc: "Programs, scholarships, and courses that build your skills step by step.", // DRAFT
        },
        {
          title: "Events",
          desc: "Workshops, conferences, and events from all over Qatar.", // DRAFT
        },
        {
          title: "Podcast",
          desc: "Audio and video episodes sharing the achievements of Qatar's youth.", // DRAFT
        },
        {
          title: "Coverage",
          desc: "On-the-ground coverage of events and occasions, moment by moment.", // DRAFT
        },
        {
          title: "Opportunities",
          desc: "Jobs, internships, and initiatives, updated all the time.", // DRAFT
        },
      ],
    },
    // DRAFT (all aboutPage.* strings)
    aboutPage: {
      metaTitle: "About | Madar",
      metaDescription: "Get to know Madar: its vision, mission, principles, goals, activities, and how it began.",
      eyebrow: "Madar — where opportunity orbits",
      heading: "About Madar",
      definition: {
        heading: "What Madar is",
        paragraphs: [
          "Madar is a digital media platform dedicated to the youth sector. It gathers educational, development, hands-on, and volunteer opportunities into one unified presence on social media, so young people in Qatar have an easy reference, publishing the latest programs, workshops, courses, and conferences in a clear, organized way on the platform's Instagram channel.",
          "It also spreads a culture of self-development and raises awareness among Qatar's youth by documenting young people's successful experiences and achievements on the platform's podcast, and by covering youth-related programs and events across its social media channels.",
          "Madar aligns with Qatar National Vision 2030, which holds human development as one of the core pillars of sustainable development, and with the National Youth Policy and its strategy of \"a high quality of life and future-ready youth,\" which aims to prepare a generation able to contribute to national development and a knowledge-based economy.",
        ],
      },
      audience: {
        heading: "Who it's for",
        range: "15 – 39",
        body: "Young people in the State of Qatar, ages 15 to 39.",
      },
      vision: {
        heading: "Vision",
        body: "For Madar to be the leading youth media reference in Qatar for development and youth opportunities, and the place that connects young people with opportunities that build their abilities and shape their future.",
      },
      mission: {
        heading: "Mission",
        body: "To give young people easy, fast access to quality opportunities through trustworthy digital content that keeps up with their interests, and to introduce the programs, initiatives, and events that build their skills, widen their participation, and strengthen their role in national development.",
      },
      meaning: {
        heading: "What does \"Madar\" mean?",
        paragraphs: [
          "A madar is an orbit: the path a body travels around a point or center.",
          "The platform's identity comes from that meaning. Just as bodies move in order around their orbit, Madar aims to be a meeting point where opportunities, initiatives, and youth programs come together.",
        ],
      },
      whyName: {
        heading: "Why we chose the name",
        paragraphs: [
          "We chose \"Madar\" to reflect the core idea of the platform: bringing educational, development, and youth opportunities into one space, instead of leaving them scattered across many organizations, platforms, and sources.",
          "We want Madar to be the center that opportunities, young people, and organizations revolve around, so a young person knows where to look and finds what fits their interests and ambitions faster and more clearly.",
          "The name also carries the idea of motion and continuity. Opportunities never stop, young people's ambitions keep evolving, and Madar moves with them to stay close to their interests and paths.",
        ],
      },
      identity: {
        heading: "Our identity",
        tagline: "Madar … where opportunity orbits",
        groups: [
          { title: "Madar's intellectual property", items: ["مدار", "Madar", "Where opportunity orbits (حيث تدور الفرص)."] },
          { title: "Madar's copyright covers", items: ["Editorial content.", "Visual content.", "Designs.", "The podcast.", "Videos."] },
        ],
      },
      principles: {
        heading: "Our principles",
        items: [
          { title: "Youth first", desc: "Young people's needs and ambitions are at the heart of everything we do." },
          { title: "Reliability", desc: "We share clear, accurate information from trustworthy sources." },
          { title: "Accessibility", desc: "We work to shorten the distance between a young person and an opportunity." },
          { title: "Equal opportunity", desc: "We aim to bring opportunities to as many young people as possible." },
          { title: "Quality", desc: "We care about the quality of content and opportunities, not just the quantity." },
          { title: "Empowerment", desc: "We don't stop at announcing an opportunity; we help young people make the most of it and grow." },
          { title: "Partnership", desc: "We believe real impact comes from collaboration between youth, organizations, and institutions." },
          { title: "Innovation", desc: "We keep evolving our methods with digital media and young people's needs." },
          { title: "Impact", desc: "We measure our success by the real difference we make in young people's journeys." },
          { title: "National identity", desc: "We take pride in Qatari identity and aim to help prepare active youth who take part in national development." },
        ],
      },
      goals: {
        heading: "Our goals",
        items: [
          {
            title: "Gather opportunities in one platform",
            desc: "Develop and launch a unified digital platform within two months that gathers the educational and development opportunities available to youth in Qatar, so they can be found within minutes, supporting the human development pillar of Qatar Vision 2030 and the youth empowerment policy.",
          },
          {
            title: "Raise awareness of available opportunities",
            desc: "Run ongoing digital awareness campaigns that reach young people in Qatar and grow their knowledge of programs and volunteering opportunities, in line with the Youth Policy's aim of strengthening youth community participation.",
          },
          {
            title: "Fewer missed opportunities",
            desc: "Reduce opportunities missed because of limited reach or late information, through instant updates and direct notifications, supporting more efficient access to information under Qatar Vision 2030's digital transformation and human development direction.",
          },
          {
            title: "A culture of lifelong learning",
            desc: "Strengthen a culture of continuous learning and self-development among youth through interactive content and Madar's own programs, in step with Qatar Vision 2030's goal of a knowledge-based society.",
          },
          {
            title: "Share reliable information",
            desc: "Provide 100% reliable content based on approved official sources, updated at least once a week, building trust in the platform and supporting transparency and credibility in Qatar's youth work.",
          },
          {
            title: "Highlight young people's success stories",
            desc: "Share successful youth experiences on the platform to promote positive role models and inspire young people, in line with the goal of empowering youth and highlighting their role in national development.",
          },
          {
            title: "Be the first reference for Qatar's youth",
            desc: "Become the first reference for youth in Qatar by reaching high usage among digitally active young people, supporting Qatar Vision 2030's aim of making youth a key partner in sustainable development.",
          },
        ],
      },
      value: {
        heading: "The value we add",
        groups: [
          {
            title: "For young people",
            items: ["Easier access to opportunities.", "Saved time and effort.", "Greater awareness of programs and initiatives.", "Stronger professional knowledge."],
          },
          {
            title: "For government entities",
            items: ["Help reaching target audiences.", "More uptake of national programs.", "Greater awareness of government initiatives."],
          },
          {
            title: "For the private sector",
            items: ["Better access to young talent.", "Support for training and hiring programs.", "Stronger corporate social responsibility."],
          },
        ],
      },
      activities: {
        heading: "What Madar does",
        intro: "Madar offers an integrated set of media and development activities and services for young people, including:",
        items: [
          {
            title: "Publishing youth opportunities and news",
            desc: "Introducing initiatives, programs, and educational, training, volunteering, professional, and other opportunities for young people in Qatar.",
          },
          {
            title: "Producing the youth podcast",
            desc: "Regular episodes hosting prominent and influential figures, alongside experts and specialists, to discuss topics that matter to young people and broaden their knowledge and horizons.",
          },
          {
            title: "Media coverage",
            desc: "Covering youth-related programs, events, and initiatives to highlight their impact and help them reach their intended audience.",
          },
          {
            title: "Interactive content",
            desc: "Creating and publishing interactive digital content on youth issues and interests that encourages young people to share their views and join the conversation.",
          },
          {
            title: "Short-form video",
            desc: "Producing awareness, motivational, and informative videos in styles that suit young people's interests and digital media platforms.",
          },
          {
            title: "Programs and workshops",
            desc: "Designing and running youth programs and workshops across many fields, with Madar's trainers and specialists, to build young people's skills and abilities.",
          },
          {
            title: "Youth advisory sessions",
            desc: "Advisory and guidance sessions that help young people find their direction, make use of available opportunities, and develop personally and professionally.",
          },
          {
            title: "Supporting youth initiatives",
            desc: "Working with promising youth initiatives and projects to support them, raise their profile, and connect them with relevant opportunities and organizations for lasting impact.",
          },
          {
            title: "Building strategic partnerships",
            desc: "Partnering with government and private entities, civil society, educational and youth organizations, and other sectors to widen the opportunities and services available to young people.",
          },
        ],
        outro:
          "Through these activities, Madar aims to build an integrated youth ecosystem that connects young people, opportunities, organizations, and initiatives, turning the platform from a channel for sharing opportunities into an active space for empowering youth and making an impact.",
      },
      impact: {
        heading: "The impact we expect",
        groups: [
          {
            title: "On young people",
            items: [
              "Greater awareness of opportunities.",
              "More participation in national programs.",
              "Support for youth empowerment.",
              "Fairer access to information.",
              "Support for Qatar National Vision 2030 targets.",
            ],
          },
          {
            title: "On the job market",
            body: "The initiative indirectly supports the job market by improving young people's access to training, qualification, employment, and entrepreneurship opportunities, raising their career readiness and their ability to compete in the job market of the future. It also helps close the information gap between young people and the organizations offering opportunities, and gets more out of national programs that develop national talent.",
          },
          {
            title: "On society",
            items: [
              "Stronger community participation.",
              "A culture of volunteering and taking part in programs.",
              "Highlighting successful national role models.",
              "Encouraging youth initiatives.",
              "A stronger sense of belonging and social responsibility.",
            ],
          },
        ],
      },
    },
    // DRAFT (all newsPage.* strings)
    newsPage: {
      metaTitle: "News | Madar",
      metaDescription: "Madar's on-the-ground coverage and news of youth programs, events, and initiatives in Qatar.",
      heading: "News",
      intro: "Madar's on-the-ground coverage and news of programs, events, and initiatives for young people in the State of Qatar.",
      podcastHeading: "The Madar Podcast",
    },
    founders: {
      heading: "Founders", // DRAFT
      items: [
        {
          name: "Mr. Saud Abdulaziz Al-Haidous", // DRAFT (name transliteration)
          bio: "Chief Executive Officer",
          achievements: [
            "Active in youth and environmental work.", // DRAFT
            "Graduate of the Qatar Youth Delegates to the United Nations program.", // DRAFT
            "Certified trainer (TOT certificate holder).", // DRAFT
            "Winner of several awards in youth affairs.", // DRAFT
            "Represented Qatar at several local and international forums.", // DRAFT
            "Invented an app that serves the Sustainable Development Goals.", // DRAFT
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
            "Graduate of International Affairs — Qatar University.", // DRAFT
            "Active in youth and leadership work.", // DRAFT
            "Graduate of the Qatar Youth Delegates to the United Nations program.", // DRAFT
            "Graduate of the Qiyadat (Leadership) program — Qatar University.", // DRAFT
            "Graduate of Qatar University's Asfar program for international representation.", // DRAFT
            "Graduate of the Young Leaders program — Qatar Leadership Centre.", // DRAFT
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
        { value: 200, suffix: "K+", label: "Views" }, // DRAFT
        { value: 20, suffix: "+", label: "Organizations we've partnered with" }, // DRAFT
      ],
    },
    podcast: {
      heading: "Podcast",
      intro:
        "Honest conversations with Qatar's youth about opportunity, experience, and finding a starting point.", // DRAFT
      // DRAFT translations of the real (Arabic) episode titles
      episodes: [
        { title: "Beyond the Limits of Your Major — Al Mayassa Al Ansari", thumbAlt: "Still from the Madar podcast episode with Al Mayassa Al Ansari" },
        { title: "From Football Player to Inventor — Mohammed Al Qasabi", thumbAlt: "Still from the Madar podcast episode with Mohammed Al Qasabi" },
      ],
      moreEpisodes: "More episodes",
      playLabel: "Play episode",
      cta: "Watch on YouTube",
    },
    news: {
      heading: "Latest news", // DRAFT
      allLink: "All news and coverage", // DRAFT
      items: [
        {
          title: "Partnership with Al Sadd Club's Youth Center", // DRAFT
          excerpt: "Scenes from the signing of the cooperation agreement between Madar and Al Sadd Club's Youth Center.", // DRAFT
        },
        {
          title: "Madar signs an agreement with Al-Khor Sports Club's Youth Committee", // DRAFT
          excerpt: "A new step toward stronger youth partnerships and wider cooperation in supporting and empowering youth in Qatar.", // DRAFT
        },
        {
          title: "A new step toward a clearer career future for students", // DRAFT
          excerpt: "The National Career Guidance Program launches in September 2026 to introduce students to the specializations the job market needs.", // DRAFT
        },
        {
          title: "Al Wakrah Beach Cleanup Campaign with Volunteers", // DRAFT
          excerpt: "Scenes from World Cleanup Day, organized by Al Wakrah Club's Youth Center with the Ministry of Municipality.", // DRAFT
        },
        {
          title: "Interactive Dialogue Session: What Era Are We Living In?!", // DRAFT
          excerpt: "A session that opened up conversation about the times we live in, moderated by presenter Mohammed Nasr and hosted by Dar Rosa Publishing.", // DRAFT
        },
        {
          title: "The Second \"Bil-Arabi\" Forum – Qatar Foundation Events", // DRAFT
          excerpt: "Madar's coverage of the Bil-Arabi Forum, with the highlights from the heart of the event.", // DRAFT
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
      name: "Madar … the first reference for youth in the State of Qatar.", // DRAFT
      bio: "A media platform specialized in the youth sector, aiming to empower youth and ease their access to development opportunities.", // DRAFT
      sessionLabel: "Book a guidance session",
      aflakLabel: "Aflak | Youth Opportunities", // DRAFT
      channelLabel: "Added Value", // DRAFT
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
      exportExcel: "Export as Excel file",
      exporting: "Exporting…",
      exportError: "Couldn't export the entries. Please try again.",
      delete: "Delete",
      deleting: "Deleting…",
      cancel: "Cancel",
      confirmDeleteTitle: "Are you sure?",
      confirmDeleteText: "{name}'s entry will be permanently deleted. This can't be undone.",
      deleteError: "Couldn't delete that entry. Please try again.",
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
  aflakChannel: "https://whatsapp.com/channel/0029VbCmHzM6rsQuFRUnvg34",
  googleForm: "https://forms.gle/UHVrdyENZ5YkHgwN9",
  email: "qamadar@gmail.com",
};

/** Podcast episodes on Madar's own channel, newest first (titles: podcast.episodes). */
export const MADAR_PODCAST = {
  episodes: ["TByD_reVME8", "Pt8vFairKLE"],
  channelUrl: "https://www.youtube.com/@%D9%85%D9%86%D8%B5%D8%A9%D9%85%D8%AF%D8%A7%D8%B1",
};
