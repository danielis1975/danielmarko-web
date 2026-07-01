export const languages = { en: "English", sk: "Slovensky" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  sk: {
    "nav.projects": "Projekty",
    "nav.about": "O mne",
    "nav.contact": "Kontakt",
    "home.intro": "Tvorím na priesečníku umelej inteligencie, zdravia a dlhovekosti — od osobných AI agentov po platformy pre prebudenú vitalitu.",
    "home.projectsTitle": "Projekty",
    "home.projectsLead": "Výber toho, na čom pracujem.",
    "home.aboutTitle": "O mne",
    "home.contactTitle": "Spojme sa",
    "home.contactLead": "Máš nápad, spoluprácu alebo otázku? Napíš mi.",
    "project.status": "Stav",
    "project.visit": "Navštíviť",
    "project.back": "Späť na projekty",
    "project.highlights": "Hlavné body",
    "footer.rights": "Všetky práva vyhradené.",
    "cta.viewProject": "Zobraziť projekt",
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "home.intro": "I build at the intersection of artificial intelligence, health and longevity — from personal AI agents to platforms for awakened vitality.",
    "home.projectsTitle": "Projects",
    "home.projectsLead": "A selection of what I'm working on.",
    "home.aboutTitle": "About",
    "home.contactTitle": "Let's connect",
    "home.contactLead": "Have an idea, a collaboration or a question? Get in touch.",
    "project.status": "Status",
    "project.visit": "Visit",
    "project.back": "Back to projects",
    "project.highlights": "Highlights",
    "footer.rights": "All rights reserved.",
    "cta.viewProject": "View project",
  },
} as const;

export function t(lang: Lang) {
  return function (key: keyof (typeof ui)["sk"]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefix a path with the locale (default locale has no prefix). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === "/" ? "" : clean}`;
}
