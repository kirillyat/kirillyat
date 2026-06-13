/**
 * Весь контент сайта живёт здесь — правь этот файл, остальное трогать не нужно.
 * Записи, помеченные TODO, — заглушки: замени на свои реальные данные.
 */
const CONTENT = {
  ru: {
    nav: [
      { href: "#about", label: "обо мне" },
      { href: "#experience", label: "опыт" },
      { href: "#skills", label: "стек" },
      { href: "#materials", label: "материалы" },
      { href: "#mentoring", label: "менторство" },
      { href: "#contact", label: "контакт" },
    ],
    hero: {
      hello: "// привет, я",
      name: "Кирилл\nЯценко",
      roles: ["software engineer", "backend developer", "лектор и ментор"],
      tagline:
        "Проектирую и запускаю бэкенд-системы: API, базы данных, очереди сообщений и всё, что нужно, чтобы это надёжно работало в продакшене. Читаю лекции и менторю разработчиков.",
      ctaMentor: "Записаться на менторство",
      ctaContact: "Связаться",
      scroll: "скролль вниз",
    },
    sun: {
      title: "свет дня",
      hint: "потяни солнце — или выбери момент дня",
      presets: { dawn: "рассвет", day: "день", sunset: "закат", night: "ночь", now: "как сейчас" },
      captions: [
        "рассвет — город ещё спит",
        "раннее утро — лучшее время для пробежки",
        "день — всё в самом разгаре",
        "закат — время восстановиться",
        "ночь — город спит, код компилируется",
      ],
    },
    about: {
      title: "Обо мне",
      bento: [
        {
          size: "wide",
          title: "Кто я",
          body:
            "Инженер, которому интересно всё: от чистоты доменной модели до устройства продакшена. Люблю системы, которые легко читать, деплоить и чинить, — и утренние пробежки, на которых приходят лучшие решения.",
        },
        { size: "stat", value: "5+", label: "лет в разработке" }, // TODO: проверь цифру
        { size: "stat", value: "∞", label: "утреннего кофе" },
        {
          size: "tall",
          title: "Сейчас",
          body: "Software engineer в финтехе: бэкенд, распределённые системы, интеграции.",
          status: "открыт к интересным проектам",
        },
        {
          size: "normal",
          title: "Преподаю",
          body: "Читаю лекции по REST API и архитектуре. Менторю джунов и мидлов.",
        },
        {
          size: "normal",
          title: "Ритм",
          body: "Подъём до рассвета, бег вдоль реки, потом — код.",
        },
      ],
    },
    // опыт и стек живут в data/profile.json (единый источник) и
    // приходят на сайт через window.PROFILE — здесь только заголовки секций
    experience: { title: "Опыт" },
    skills: { title: "Стек" },
    materials: {
      title: "Материалы",
      filterAll: "все",
      types: { lecture: "лекция", seminar: "семинар", article: "статья" },
      soon: "скоро",
      items: [
        {
          type: "lecture",
          title: "REST API: от глаголов HTTP до версионирования",
          desc: "Лекция о проектировании REST API: ресурсы, статус-коды, пагинация, обратная совместимость.",
          ready: true,
        },
        {
          type: "seminar",
          title: "Проектируем API на практике", // TODO: замени на реальный семинар
          desc: "Живой разбор: берём задачу и вместе доводим её от наброска до рабочего контракта API.",
          ready: false,
        },
        {
          type: "article",
          title: "Идемпотентность в платёжных API", // TODO: замени на реальную статью
          desc: "Почему ретраи без идемпотентности — это двойные списания, и как сделать правильно.",
          ready: false,
        },
        {
          type: "article",
          title: "Как читать чужой код", // TODO: замени на реальную статью
          desc: "Практики, которые помогают быстро разбираться в незнакомой кодовой базе.",
          ready: false,
        },
      ],
    },
    mentoring: {
      title: "Менторство",
      lead: "Помогаю джунам и мидлам расти быстрее: системно, на реальных задачах, без воды.",
      points: [
        { title: "Разбор кода", desc: "Смотрим твои проекты: архитектура, читаемость, что улучшить." },
        { title: "Роадмап роста", desc: "Составляем план: какие темы качать и в каком порядке." },
        { title: "Мок-собеседования", desc: "Тренируем алгоритмы, систем-дизайн и поведенческие вопросы." },
        { title: "Поддержка в работе", desc: "Помогаю с реальными рабочими задачами и сложными решениями." },
      ],
      form: {
        nameLabel: "как тебя зовут",
        goalLabel: "что хочешь прокачать",
        goals: ["Подготовка к собеседованиям", "Рост до мидла/сеньора", "Архитектура и систем-дизайн", "Другое"],
        msgLabel: "пара слов о себе",
        msgPh: "Чем занимаешься, какой опыт, чего хочешь достичь…",
        submit: "Записаться",
        hint: "кнопка откроет письмо — или напиши в Telegram",
        mailSubject: "Менторство",
      },
    },
    contact: {
      title: "Контакт",
      lead: "Хочешь обсудить проект, лекцию или просто поговорить про инженерное — пиши.",
      email: "kirillyat@gmail.com",
      copyHint: "клик — скопировать",
      copied: "скопировано ✓",
      socials: [
        { label: "GitHub", url: "https://github.com/kirillyat" },
        { label: "Telegram", url: "https://t.me/kirillyat" }, // TODO: проверь ник
        { label: "LinkedIn", url: "https://linkedin.com/in/kirillyat" }, // TODO: проверь ссылку
      ],
    },
    footer: {
      left: "© 2026 Кирилл Яценко",
      hint: "потяни солнце наверху — изменится свет",
    },
  },

  en: {
    nav: [
      { href: "#about", label: "about" },
      { href: "#experience", label: "experience" },
      { href: "#skills", label: "stack" },
      { href: "#materials", label: "materials" },
      { href: "#mentoring", label: "mentoring" },
      { href: "#contact", label: "contact" },
    ],
    hero: {
      hello: "// hi, i'm",
      name: "Kirill\nYatsenko",
      roles: ["software engineer", "backend developer", "lecturer & mentor"],
      tagline:
        "I design and ship backend systems: APIs, databases, message queues and everything it takes to run them reliably in production. I also lecture and mentor developers.",
      ctaMentor: "Apply for mentoring",
      ctaContact: "Get in touch",
      scroll: "scroll down",
    },
    sun: {
      title: "daylight",
      hint: "drag the sun — or pick a moment of the day",
      presets: { dawn: "dawn", day: "day", sunset: "sunset", night: "night", now: "now" },
      captions: [
        "dawn — the city is still asleep",
        "early morning — best time for a run",
        "midday — everything in full swing",
        "sunset — time to recover",
        "night — the city sleeps, the code compiles",
      ],
    },
    about: {
      title: "About",
      bento: [
        {
          size: "wide",
          title: "Who I am",
          body:
            "An engineer curious about everything: from clean domain models to how production really works. I love systems that are easy to read, deploy and fix — and morning runs, where the best solutions come from.",
        },
        { size: "stat", value: "5+", label: "years in software" },
        { size: "stat", value: "∞", label: "morning coffees" },
        {
          size: "tall",
          title: "Currently",
          body: "Software engineer in fintech: backend, distributed systems, integrations.",
          status: "open to interesting projects",
        },
        {
          size: "normal",
          title: "Teaching",
          body: "I lecture on REST APIs and architecture. Mentoring juniors and mid-level devs.",
        },
        {
          size: "normal",
          title: "Rhythm",
          body: "Up before sunrise, a run along the river, then — code.",
        },
      ],
    },
    experience: { title: "Experience" },
    skills: { title: "Stack" },
    materials: {
      title: "Materials",
      filterAll: "all",
      types: { lecture: "lecture", seminar: "seminar", article: "article" },
      soon: "soon",
      items: [
        {
          type: "lecture",
          title: "REST API: from HTTP verbs to versioning",
          desc: "A lecture on REST API design: resources, status codes, pagination, backwards compatibility.",
          ready: true,
        },
        {
          type: "seminar",
          title: "Designing APIs in practice",
          desc: "A live session: we take a task and turn it into a working API contract together.",
          ready: false,
        },
        {
          type: "article",
          title: "Idempotency in payment APIs",
          desc: "Why retries without idempotency mean double charges, and how to do it right.",
          ready: false,
        },
        {
          type: "article",
          title: "How to read someone else's code",
          desc: "Practices that help you quickly find your way around an unfamiliar codebase.",
          ready: false,
        },
      ],
    },
    mentoring: {
      title: "Mentoring",
      lead: "I help juniors and mid-level devs grow faster: systematically, on real tasks, no fluff.",
      points: [
        { title: "Code reviews", desc: "We go through your projects: architecture, readability, what to improve." },
        { title: "Growth roadmap", desc: "We build a plan: which topics to learn and in what order." },
        { title: "Mock interviews", desc: "Practicing algorithms, system design and behavioural questions." },
        { title: "Work support", desc: "Help with real work tasks and tough decisions." },
      ],
      form: {
        nameLabel: "your name",
        goalLabel: "what do you want to improve",
        goals: ["Interview preparation", "Growing to mid/senior", "Architecture & system design", "Other"],
        msgLabel: "a few words about you",
        msgPh: "What you do, your experience, what you want to achieve…",
        submit: "Apply",
        hint: "the button opens an email — or ping me on Telegram",
        mailSubject: "Mentoring",
      },
    },
    contact: {
      title: "Contact",
      lead: "Want to discuss a project, a lecture, or just talk engineering — drop me a line.",
      email: "kirillyat@gmail.com",
      copyHint: "click to copy",
      copied: "copied ✓",
      socials: [
        { label: "GitHub", url: "https://github.com/kirillyat" },
        { label: "Telegram", url: "https://t.me/kirillyat" },
        { label: "LinkedIn", url: "https://linkedin.com/in/kirillyat" },
      ],
    },
    footer: {
      left: "© 2026 Kirill Yatsenko",
      hint: "drag the sun up top — the light changes",
    },
  },

  fr: {
    nav: [
      { href: "#about", label: "à propos" },
      { href: "#experience", label: "expérience" },
      { href: "#skills", label: "stack" },
      { href: "#materials", label: "ressources" },
      { href: "#mentoring", label: "mentorat" },
      { href: "#contact", label: "contact" },
    ],
    hero: {
      hello: "// salut, je suis",
      name: "Kirill\nYatsenko",
      roles: ["software engineer", "développeur backend", "enseignant & mentor"],
      tagline:
        "Je conçois et déploie des systèmes backend : API, bases de données, files de messages et tout ce qu'il faut pour les faire tourner en production de manière fiable. Je donne aussi des cours et accompagne des développeurs.",
      ctaMentor: "S'inscrire au mentorat",
      ctaContact: "Me contacter",
      scroll: "défiler",
    },
    sun: {
      title: "lumière du jour",
      hint: "déplace le soleil — ou choisis un moment",
      presets: { dawn: "aube", day: "jour", sunset: "coucher", night: "nuit", now: "maintenant" },
      captions: [
        "l'aube — la ville dort encore",
        "tôt le matin — le meilleur moment pour courir",
        "midi — tout bat son plein",
        "le coucher du soleil — le temps de récupérer",
        "la nuit — la ville dort, le code compile",
      ],
    },
    about: {
      title: "À propos",
      bento: [
        {
          size: "wide",
          title: "Qui je suis",
          body:
            "Un ingénieur curieux de tout : des modèles de domaine propres au fonctionnement réel de la production. J'aime les systèmes faciles à lire, à déployer et à réparer — et les courses matinales, d'où viennent les meilleures idées.",
        },
        { size: "stat", value: "5+", label: "ans de développement" },
        { size: "stat", value: "∞", label: "cafés du matin" },
        {
          size: "tall",
          title: "Actuellement",
          body: "Software engineer dans la fintech : backend, systèmes distribués, intégrations.",
          status: "ouvert aux projets intéressants",
        },
        {
          size: "normal",
          title: "Enseignement",
          body: "Je donne des cours sur les API REST et l'architecture. Mentorat de développeurs juniors et confirmés.",
        },
        {
          size: "normal",
          title: "Rythme",
          body: "Debout avant l'aube, une course le long de la rivière, puis — le code.",
        },
      ],
    },
    experience: { title: "Expérience" },
    skills: { title: "Stack" },
    materials: {
      title: "Ressources",
      filterAll: "tout",
      types: { lecture: "cours", seminar: "séminaire", article: "article" },
      soon: "bientôt",
      items: [
        {
          type: "lecture",
          title: "API REST : des verbes HTTP au versionnage",
          desc: "Un cours sur la conception d'API REST : ressources, codes de statut, pagination, rétrocompatibilité.",
          ready: true,
        },
        {
          type: "seminar",
          title: "Concevoir des API en pratique",
          desc: "Une session live : on prend une tâche et on la transforme ensemble en contrat d'API fonctionnel.",
          ready: false,
        },
        {
          type: "article",
          title: "L'idempotence dans les API de paiement",
          desc: "Pourquoi les retries sans idempotence créent des doubles débits, et comment bien faire.",
          ready: false,
        },
        {
          type: "article",
          title: "Comment lire le code des autres",
          desc: "Des pratiques pour se repérer rapidement dans une base de code inconnue.",
          ready: false,
        },
      ],
    },
    mentoring: {
      title: "Mentorat",
      lead: "J'aide les développeurs juniors et confirmés à progresser plus vite : avec méthode, sur de vraies tâches.",
      points: [
        { title: "Revue de code", desc: "On passe en revue tes projets : architecture, lisibilité, axes d'amélioration." },
        { title: "Plan de progression", desc: "On construit un plan : quels sujets travailler et dans quel ordre." },
        { title: "Entretiens blancs", desc: "Algorithmes, system design et questions comportementales." },
        { title: "Soutien au quotidien", desc: "Aide sur de vraies tâches de travail et des décisions difficiles." },
      ],
      form: {
        nameLabel: "ton prénom",
        goalLabel: "que veux-tu améliorer",
        goals: ["Préparation aux entretiens", "Évoluer vers mid/senior", "Architecture & system design", "Autre"],
        msgLabel: "quelques mots sur toi",
        msgPh: "Ce que tu fais, ton expérience, ce que tu veux atteindre…",
        submit: "S'inscrire",
        hint: "le bouton ouvre un e-mail — ou écris-moi sur Telegram",
        mailSubject: "Mentorat",
      },
    },
    contact: {
      title: "Contact",
      lead: "Envie de discuter d'un projet, d'un cours ou simplement de parler ingénierie — écris-moi.",
      email: "kirillyat@gmail.com",
      copyHint: "clic pour copier",
      copied: "copié ✓",
      socials: [
        { label: "GitHub", url: "https://github.com/kirillyat" },
        { label: "Telegram", url: "https://t.me/kirillyat" },
        { label: "LinkedIn", url: "https://linkedin.com/in/kirillyat" },
      ],
    },
    footer: {
      left: "© 2026 Kirill Yatsenko",
      hint: "déplace le soleil en haut — la lumière change",
    },
  },
};
