import type { Translations } from '../types/Translations'

export const translations: Translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      role: 'Senior Software Engineer',
      location: 'Warsaw, Poland · Remote',
      summary:
        'Experienced Senior Software Engineer with deep expertise in React.js, TypeScript, and modern frontend frameworks. I build high-performance, accessible, and responsive web apps, and I love bringing real-time experiences to life with WebSockets.',
      ctaPrimary: 'Email me',
      ctaSecondary: 'View projects',
      availability: 'Open to full-time and contract roles',
      cvDownload: 'Download CV',
      cvView: 'View CV',
    },
    about: {
      title: 'Summary',
      body: 'Product-focused engineer with a clean-code mindset, strong ownership, and a collaborative approach across design, backend, and product teams.',
    },
    sections: {
      skillsTitle: 'Core skills',
      projectsTitle: 'Projects',
      experienceTitle: 'Professional experience',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
      contactTitle: 'Contact',
      projectLinkLabel: 'View on Steam',
    },
    projects: [
      {
        name: 'Relax Scramble: Endless Word Puzzle',
        type: 'React + Electron',
        description:
          'A cozy, endless word puzzle with calming letter flow, cloud saves, and relaxing audio. Built for Steam with a minimalist, meditative UX.',
        status: 'Live on Steam',
        link: 'https://store.steampowered.com/app/3764920/Relax_Scramble_Endless_Word_Puzzle/',
      },
    ],
    experience: [
      {
        role: 'Senior Frontend Developer',
        period: 'Oct 2024 - Present',
        company: 'ITSharkz, Warsaw (Remote)',
        bullets: [
          'Enhanced frontend performance and optimized UX with WebSockets and real-time features.',
          'Collaborated with backend teams on scalable APIs and database schemas.',
          'Built reusable, accessible UI components aligned with product goals.',
        ],
      },
      {
        role: 'Senior Software Engineer',
        period: 'Sep 2021 - Aug 2024',
        company: 'Dashbouquet Development, Warsaw (Remote)',
        bullets: [
          'Built high-performance web applications with React.js, Node.js, Express.js, PostgreSQL.',
          'Integrated OpenAI APIs to deliver AI-powered, user-centric solutions.',
          'Led microservice development and optimized real-time communication workflows.',
          'Maintained CI/CD pipelines and mentored junior engineers.',
        ],
      },
      {
        role: 'Middle Software Engineer',
        period: 'Jul 2019 - Aug 2021',
        company: 'XB Software, Minsk (Office)',
        bullets: [
          'Created custom JavaScript components and optimized reactive DOM performance.',
          'Mentored and onboarded new team members.',
        ],
      },
      {
        role: 'Junior Full Stack Engineer',
        period: 'Aug 2017 - Jul 2019',
        company: 'Travel Agency, Minsk (Office)',
        bullets: [
          'Developed and supported a CRM for booking management and sales automation.',
          'Prepared technical documentation and clear development plans.',
          'Ensured security practices and data privacy compliance.',
        ],
      },
    ],
    education: {
      degree: 'Master of Engineering in IT & Ergonomics',
      school: 'Belarusian State University of Informatics and Radioelectronics',
      period: '2014 - 2020',
    },
    languages: ['Russian (native)', 'English (C1)'],
    contact: {
      title: 'Let us build something sharp and reliable.',
      body: 'Feel free to reach out about product roles, collaborations, or freelance opportunities.',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      linksLabel: 'Links',
      languageLabel: 'Language',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formSubmit: 'Send message',
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      experience: 'Опыт',
      education: 'Образование',
      contact: 'Контакты',
    },
    hero: {
      role: 'Senior Software Engineer',
      location: 'Варшава, Польша · Удаленно',
      summary:
        'Senior инженер с глубоким опытом в React.js, TypeScript и современных фронтенд-фреймворках. Делаю быстрые, доступные и отзывчивые веб-приложения и люблю добавлять real-time функциональность через WebSockets.',
      ctaPrimary: 'Написать на почту',
      ctaSecondary: 'Смотреть проекты',
      availability: 'Открыт к full-time и контрактным ролям',
      cvDownload: 'Скачать CV',
      cvView: 'Просмотреть CV',
    },
    about: {
      title: 'Резюме',
      body: 'Инженер, ориентированный на продукт, с чистым кодом, сильной ответственностью и партнерским подходом к дизайну, бэкенду и продакт-командам.',
    },
    sections: {
      skillsTitle: 'Ключевые навыки',
      projectsTitle: 'Проекты',
      experienceTitle: 'Профессиональный опыт',
      educationTitle: 'Образование',
      languagesTitle: 'Языки',
      contactTitle: 'Контакты',
      projectLinkLabel: 'Смотреть в Steam',
    },
    projects: [
      {
        name: 'Relax Scramble: Endless Word Puzzle',
        type: 'React + Electron',
        description:
          'Уютная бесконечная словесная головоломка с мягким темпом, облачными сохранениями и расслабляющей музыкой. Выпущена в Steam.',
        status: 'В Steam',
        link: 'https://store.steampowered.com/app/3764920/Relax_Scramble_Endless_Word_Puzzle/',
      },
    ],
    experience: [
      {
        role: 'Senior Frontend Developer',
        period: 'Окт 2024 – Сейчас',
        company: 'ITSharkz, Варшава (Удаленно)',
        bullets: [
          'Ускорил фронтенд и улучшил UX за счет real-time функций и WebSockets.',
          'Скоординировал работу с бэкенд-командами по API и схемам БД.',
          'Создавал переиспользуемые и доступные UI-компоненты.',
        ],
      },
      {
        role: 'Senior Software Engineer',
        period: 'Сен 2021 – Авг 2024',
        company: 'Dashbouquet Development, Варшава (Удаленно)',
        bullets: [
          'Разрабатывал высокопроизводительные приложения на React.js, Node.js, Express.js, PostgreSQL.',
          'Интегрировал OpenAI API для AI-функций, ориентированных на пользователя.',
          'Лидировал разработку микросервисов и оптимизировал real-time коммуникации.',
          'Поддерживал CI/CD и менторил младших разработчиков.',
        ],
      },
      {
        role: 'Middle Software Engineer',
        period: 'Июл 2019 – Авг 2021',
        company: 'XB Software, Минск (Офис)',
        bullets: [
          'Создавал кастомные JavaScript-компоненты и оптимизировал реактивный DOM.',
          'Наставлял и онбордил новых разработчиков.',
        ],
      },
      {
        role: 'Junior Full Stack Engineer',
        period: 'Авг 2017 – Июл 2019',
        company: 'Travel Agency, Минск (Офис)',
        bullets: [
          'Разрабатывал и поддерживал CRM для бронирований и продаж.',
          'Готовил техническую документацию и планы разработки.',
          'Обеспечивал безопасность и соответствие требованиям по данным.',
        ],
      },
    ],
    education: {
      degree: 'Магистр инженерных наук в IT и эргономике',
      school: 'Белорусский государственный университет информатики и радиоэлектроники',
      period: '2014 – 2020',
    },
    languages: ['Русский (родной)', 'Английский (C1)'],
    contact: {
      title: 'Давайте построим надежный и эстетичный продукт.',
      body: 'Открыт к продуктовым ролям, коллаборациям и фриланс-проектам.',
      phoneLabel: 'Телефон',
      emailLabel: 'Почта',
      linksLabel: 'Ссылки',
      languageLabel: 'Язык',
      formName: 'Имя',
      formEmail: 'Почта',
      formMessage: 'Сообщение',
      formSubmit: 'Отправить',
    },
  },  pl: {
    nav: {
      about: 'O mnie',
      skills: 'Umiejętności',
      projects: 'Projekty',
      experience: 'Doświadczenie',
      education: 'Edukacja',
      contact: 'Kontakt',
    },
    hero: {
      role: 'Senior Software Engineer',
      location: 'Warszawa, Polska · Zdalnie',
      summary:
        'Doświadczony Senior Software Engineer z mocnym zapleczem w React.js, TypeScript i nowoczesnych frameworkach frontendowych. Buduję wydajne, dostępne i responsywne aplikacje webowe oraz rozwiązania realtime z WebSockets.',
      ctaPrimary: 'Napisz do mnie',
      ctaSecondary: 'Zobacz projekty',
      availability: 'Otwarte na role full-time i kontrakty',
      cvDownload: 'Pobierz CV',
      cvView: 'Zobacz CV',
    },
    about: {
      title: 'Podsumowanie',
      body: 'Inżynier nastawiony na produkt, czysty kod i współpracę z zespołami designu, backendu i produktu.',
    },
    sections: {
      skillsTitle: 'Kluczowe umiejętności',
      projectsTitle: 'Projekty',
      experienceTitle: 'Doświadczenie zawodowe',
      educationTitle: 'Edukacja',
      languagesTitle: 'Języki',
      contactTitle: 'Kontakt',
      projectLinkLabel: 'Zobacz na Steam',
    },
    projects: [
      {
        name: 'Relax Scramble: Endless Word Puzzle',
        type: 'React + Electron',
        description:
          'Przytulna, nieskończona gra słowna z kojącym tempem, zapisem w chmurze i relaksującą muzyką. Wydana na Steam.',
        status: 'Dostępne na Steam',
        link: 'https://store.steampowered.com/app/3764920/Relax_Scramble_Endless_Word_Puzzle/',
      },
    ],
    experience: [
      {
        role: 'Senior Frontend Developer',
        period: 'Paź 2024 – Obecnie',
        company: 'ITSharkz, Warszawa (Zdalnie)',
        bullets: [
          'Poprawa wydajności frontendu i UX dzięki funkcjom realtime i WebSockets.',
          'Współpraca z backendem przy API i schematach baz danych.',
          'Tworzenie dostępnych i wielokrotnego użytku komponentów UI.',
        ],
      },
      {
        role: 'Senior Software Engineer',
        period: 'Wrz 2021 – Sie 2024',
        company: 'Dashbouquet Development, Warszawa (Zdalnie)',
        bullets: [
          'Tworzenie wydajnych aplikacji webowych z React.js, Node.js, Express.js, PostgreSQL.',
          'Integracja OpenAI APIs w rozwiązaniach skoncentrowanych na użytkowniku.',
          'Prowadzenie rozwoju mikroserwisów i optymalizacja komunikacji realtime.',
          'Utrzymanie CI/CD i mentoring młodszych inżynierów.',
        ],
      },
      {
        role: 'Middle Software Engineer',
        period: 'Lip 2019 – Sie 2021',
        company: 'XB Software, Mińsk (Biuro)',
        bullets: [
          'Budowa niestandardowych komponentów JavaScript i optymalizacja DOM.',
          'Mentoring i wdrażanie nowych członków zespołu.',
        ],
      },
      {
        role: 'Junior Full Stack Engineer',
        period: 'Sie 2017 – Lip 2019',
        company: 'Travel Agency, Mińsk (Biuro)',
        bullets: [
          'Rozwój i utrzymanie CRM do rezerwacji i sprzedaży.',
          'Przygotowanie dokumentacji technicznej i planów rozwoju.',
          'Dbanie o bezpieczeństwo i zgodność z prywatnością danych.',
        ],
      },
    ],
    education: {
      degree: 'Magister inżynierii IT i ergonomii',
      school: 'Białoruski Państwowy Uniwersytet Informatyki i Radioelektroniki',
      period: '2014 – 2020',
    },
    languages: ['Rosyjski (ojczysty)', 'Angielski (C1)'],
    contact: {
      title: 'Zbudujmy coś niezawodnego i estetycznego.',
      body: 'Zapraszam do kontaktu w sprawie ról produktowych, współpracy lub freelance.',
      phoneLabel: 'Telefon',
      emailLabel: 'Email',
      linksLabel: 'Linki',
      languageLabel: 'Język',
      formName: 'Imię',
      formEmail: 'Email',
      formMessage: 'Wiadomość',
      formSubmit: 'Wyślij',
    },
  },  be: {
    nav: {
      about: 'Пра мяне',
      skills: 'Навыкі',
      projects: 'Праекты',
      experience: 'Досвед',
      education: 'Адукацыя',
      contact: 'Кантакты',
    },
    hero: {
      role: 'Senior Software Engineer',
      location: 'Варшава, Польшча · Дыстанцыйна',
      summary:
        'Вопытны Senior інжынер з моцнай экспертызай у React.js, TypeScript і сучасных фронтэнд-фрэймворках. Будую хуткія, даступныя і адаптыўныя вэб-прыкладанні, а таксама real-time функцыі праз WebSockets.',
      ctaPrimary: 'Напісаць мне',
      ctaSecondary: 'Праекты',
      availability: 'Адкрыты да full-time і кантрактных роляў',
      cvDownload: 'Спампаваць CV',
      cvView: 'Праглядзець CV',
    },
    about: {
      title: 'Каротка',
      body: 'Прадуктава арыентаваны інжынер з чыстым кодам, адказнасцю і супрацоўніцтвам паміж дызайнам, бэкендам і прадуктам.',
    },
    sections: {
      skillsTitle: 'Ключавыя навыкі',
      projectsTitle: 'Праекты',
      experienceTitle: 'Прафесійны досвед',
      educationTitle: 'Адукацыя',
      languagesTitle: 'Мовы',
      contactTitle: 'Кантакты',
      projectLinkLabel: 'Адкрыць у Steam',
    },
    projects: [
      {
        name: 'Relax Scramble: Endless Word Puzzle',
        type: 'React + Electron',
        description:
          'Утульная бясконцая гульня са словамі з мяккім тэмпам, воблачнымі захаваннямі і расслабляльнай музыкай. Выпушчана ў Steam.',
        status: 'У Steam',
        link: 'https://store.steampowered.com/app/3764920/Relax_Scramble_Endless_Word_Puzzle/',
      },
    ],
    experience: [
      {
        role: 'Senior Frontend Developer',
        period: 'Каст 2024 – Зараз',
        company: 'ITSharkz, Варшава (Дыстанцыйна)',
        bullets: [
          'Палепшыў хуткасць і UX праз real-time функцыі і WebSockets.',
          'Супрацоўнічаў з бэкенд-камандай над API і схемамі БД.',
          'Ствараў даступныя і паўторна выкарыстоўваемыя UI-кампаненты.',
        ],
      },
      {
        role: 'Senior Software Engineer',
        period: 'Вер 2021 – Жні 2024',
        company: 'Dashbouquet Development, Варшава (Дыстанцыйна)',
        bullets: [
          'Ствараў прадукцыйныя вэб-прыкладанні на React.js, Node.js, Express.js, PostgreSQL.',
          'Інтэграваў OpenAI API для AI-функцыяналу, арыентаванага на карыстальніка.',
          'Вёў распрацоўку мікрасэрвісаў і аптымізаваў real-time узаемадзеянне.',
          'Падтрымліваў CI/CD і ментарылі маладых інжынераў.',
        ],
      },
      {
        role: 'Middle Software Engineer',
        period: 'Ліп 2019 – Жні 2021',
        company: 'XB Software, Мінск (Офіс)',
        bullets: [
          'Ствараў кастомныя JavaScript-кампаненты і аптымізаваў рэактыўны DOM.',
          'Ментарылі і ўводзіў новых членаў каманды.',
        ],
      },
      {
        role: 'Junior Full Stack Engineer',
        period: 'Жні 2017 – Ліп 2019',
        company: 'Travel Agency, Мінск (Офіс)',
        bullets: [
          'Распрацоўваў і падтрымліваў CRM для браніраванняў і продажаў.',
          'Падрыхтоўваў тэхнічную дакументацыю і планы распрацоўкі.',
          'Забяспечваў бяспеку і адпаведнасць патрабаванням па даных.',
        ],
      },
    ],
    education: {
      degree: 'Магістр інжынерыі ў IT і эрганоміцы',
      school: 'Беларускі дзяржаўны ўніверсітэт інфарматыкі і радыёэлектронікі',
      period: '2014 – 2020',
    },
    languages: ['Руская (родная)', 'Англійская (C1)'],
    contact: {
      title: 'Давайце створым нешта надзейнае і эстэтычнае.',
      body: 'Адкрыты да прадуктовых роляў, калабарацый і фрыланс-праектаў.',
      phoneLabel: 'Тэлефон',
      emailLabel: 'Пошта',
      linksLabel: 'Спасылкі',
      languageLabel: 'Мова',
      formName: 'Імя',
      formEmail: 'Пошта',
      formMessage: 'Паведамленне',
      formSubmit: 'Адправіць',
    },
  }
}
