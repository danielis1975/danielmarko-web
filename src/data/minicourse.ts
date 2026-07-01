import type { Lang } from "../i18n";

export interface Lesson {
  n: number;
  id: string; // YouTube video id
  title: { en: string; sk: string };
  desc: { en: string; sk: string };
}

export const channelUrl = "https://www.youtube.com/@LongevityWellnessWarrior";

export const lessons: Lesson[] = [
  {
    n: 1,
    id: "uMXk8bUq7gk",
    title: { en: "Introduction", sk: "Úvod" },
    desc: {
      en: "What “The Awakening to Vitality” is about, and why longevity is a daily practice — not a wish.",
      sk: "O čom je „The Awakening to Vitality“ a prečo je dlhovekosť každodenná prax — nie prianie.",
    },
  },
  {
    n: 2,
    id: "ewWjjxnXhl8",
    title: { en: "The Science of Aging", sk: "Veda o starnutí" },
    desc: {
      en: "The latest science of aging — the mechanisms behind how and why we grow older.",
      sk: "Najnovšia veda o starnutí — mechanizmy toho, ako a prečo starneme.",
    },
  },
  {
    n: 3,
    id: "pkDLbwDN_pI",
    title: { en: "Aging Reversal", sk: "Spomalenie starnutia" },
    desc: {
      en: "Insights and strategies for slowing — and reversing — biological aging.",
      sk: "Poznatky a stratégie na spomalenie a zvrátenie biologického starnutia.",
    },
  },
  {
    n: 4,
    id: "2aNZs2Pgi3k",
    title: { en: "Movement", sk: "Pohyb" },
    desc: {
      en: "Mastering movement: the kind, timing and dose of exercise that unlocks vitality.",
      sk: "Majstrovstvo pohybu: aký druh, kedy a koľko cvičenia odomyká vitalitu.",
    },
  },
  {
    n: 5,
    id: "OM4e71aHy88",
    title: { en: "Nutrition", sk: "Výživa" },
    desc: {
      en: "Optimizing nutrition for life — what and when to eat.",
      sk: "Optimalizácia výživy pre život — čo a kedy jesť.",
    },
  },
  {
    n: 6,
    id: "9tYJNdHRSyM",
    title: { en: "Supplements", sk: "Suplementy" },
    desc: {
      en: "Navigating the world of supplements for vitality — what actually helps.",
      sk: "Orientácia vo svete suplementov pre vitalitu — čo naozaj pomáha.",
    },
  },
  {
    n: 7,
    id: "Cbn15xNwtDk",
    title: {
      en: "Stress Management & Regeneration",
      sk: "Zvládanie stresu a regenerácia",
    },
    desc: {
      en: "Mastering stress management and regeneration for ultimate vitality.",
      sk: "Zvládanie stresu a regenerácie pre maximálnu vitalitu.",
    },
  },
  {
    n: 8,
    id: "SsJtMLK4Q1Q",
    title: {
      en: "Motivation & Discipline",
      sk: "Motivácia a disciplína",
    },
    desc: {
      en: "Unlocking the power of motivation and discipline to make it all last.",
      sk: "Sila motivácie a disciplíny, aby to celé vydržalo.",
    },
  },
];

export function pick<T>(v: { en: T; sk: T }, lang: Lang): T {
  return v[lang];
}
