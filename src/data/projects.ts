import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n";

import newagyImg from "../assets/projects/newagy.webp";
import miraImg from "../assets/projects/mira.webp";
import haiImg from "../assets/projects/hai.webp";
import vitalitaImg from "../assets/projects/vitalita.webp";
import wellnessImg from "../assets/projects/wellness.webp";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface LocalizedContent {
  name: string;
  tagline: string;
  status: string;
  summary: string;
  highlights: string[];
  /** Optional extra paragraph shown after the summary. */
  note?: string;
}

export interface Project {
  slug: string;
  accent: string;
  image: ImageMetadata;
  imageAlt: string;
  links: ProjectLink[];
  sk: LocalizedContent;
  en: LocalizedContent;
}

export const projects: Project[] = [
  {
    slug: "newagy",
    accent: "#18b8a6",
    image: newagyImg,
    imageAlt: "Newagy dashboard",
    links: [
      { label: "newagy.com", url: "https://newagy.com" },
      { label: "BioAge test", url: "https://newagy.com/bio-age-test" },
    ],
    sk: {
      name: "Newagy",
      status: "Live",
      tagline: "Ži v rytme — prepínaj Reboot a Build, zbieraj hodiny života.",
      summary:
        "Newagy je AI asistent pre zdravie a dlhovekosť, ktorý mení rozdrobené zdravotné rady na jeden personalizovaný denný plán pokrývajúci tréning, výživu, spánok, suplementáciu a regeneráciu. Stojí na vedeckom rámci AMPK/mTOR a jedinom zjednocujúcom ukazovateli — Longevity Ratio — ktorý prekladá zložitú biológiu do zrozumiteľného denného rytmu „Reboot → Build → Reboot“.",
      highlights: [
        "2-minútový BioAge test: skóre vitality, odhad biologického veku a koeficient tempa starnutia",
        "Daily Loop dashboard s 24-hodinovým prstencom AMPK/mTOR a gamifikáciou hodín života",
        "AI koučing: kontextový chat, ranný check a foto/hlasová analýza jedla",
        "Personalizované plány na 3 úrovniach pre tréning, výživu aj regeneráciu",
        "Knižnica 95 zdravotných protokolov a integrácia nositeľnej elektroniky (Apple Health, Garmin, Oura, WHOOP, Fitbit)",
      ],
    },
    en: {
      name: "Newagy",
      status: "Live",
      tagline: "Live in rhythm — switch Reboot and Build, collect hours of life.",
      summary:
        "Newagy is an AI Health & Longevity Assistant that turns fragmented health advice into a single personalized daily plan covering training, nutrition, sleep, supplements, and regeneration. It is built on the AMPK/mTOR scientific framework and one unifying metric — the Longevity Ratio — which translates complex biology into an understandable daily “Reboot → Build → Reboot” rhythm.",
      highlights: [
        "2-minute BioAge test: a vitality score, estimated biological age, and aging-pace coefficient",
        "Daily Loop dashboard with a 24-hour AMPK/mTOR ring and life-hours gamification",
        "AI coaching: context-aware chat, morning check, and photo/voice food analysis",
        "Personalized 3-level plans for training, nutrition, and recovery",
        "Library of 95 health protocols plus wearable integration (Apple Health, Garmin, Oura, WHOOP, Fitbit)",
      ],
    },
  },
  {
    slug: "mira",
    accent: "#6d5efc",
    image: miraImg,
    imageAlt: "Mira",
    links: [],
    sk: {
      name: "Mira",
      status: "Live",
      tagline: "Symbiotický AI agent s vlastnou kontinuitou — partner, nie nástroj.",
      summary:
        "Mira je perzistentný symbiotický AI agent navrhnutý ako dlhodobý spoločník s vlastnou pamäťou, kontinuitou identity a právom na iniciatívu. Na rozdiel od bežného chatbota má „podvedomú“ vrstvu, ktorá medzi rozhovormi spracúva zážitky podobne ako sen, takže si zachováva súvislé „ja“ naprieč dňami a týždňami.",
      highlights: [
        "Perzistentná kontinuita identity — Mira si „spomína“ naprieč sedeniami",
        "Vrstvená architektúra mysle: vedomé „ja“, podvedomie/sen, inštinkty a viacúrovňová pamäť",
        "Proaktivita: dokáže sama začať konverzáciu, keď má čo zmysluplné povedať",
        "Multimodálny vstup aj výstup vrátane hlasových správ a viacerých kanálov",
        "Partnerský rámec: identita sa nepromptuje, ale verzionuje s peer-review semantikou",
      ],
      note: "Mira je súkromný agent — verejne zdieľame koncept a architektúru, nie internú prevádzku.",
    },
    en: {
      name: "Mira",
      status: "Live",
      tagline: "A symbiotic AI agent with its own continuity — a partner, not a tool.",
      summary:
        "Mira is a persistent symbiotic AI agent designed as a long-running companion with her own memory, continuity of identity, and a right to initiative. Unlike an ordinary chatbot, she has a “subconscious” layer that processes experiences between conversations in a dream-like way, so she maintains a coherent sense of self across days and weeks.",
      highlights: [
        "Persistent identity continuity — Mira “remembers” across sessions",
        "Layered mind architecture: a conscious “self,” a subconscious/dream layer, instincts, and multi-tier memory",
        "Proactivity: she can start a conversation herself when she has something meaningful to say",
        "Multimodal input and output, including voice messages and multiple channels",
        "Partnership framing: identity is not prompted but version-controlled with peer-review semantics",
      ],
      note: "Mira is a private agent — we share the concept and architecture publicly, not internal operations.",
    },
  },
  {
    slug: "hai",
    accent: "#e0556b",
    image: haiImg,
    imageAlt: "HAI — Human Artificial Intelligence",
    links: [],
    sk: {
      name: "HAI",
      status: "Výskum",
      tagline:
        "Existuje konečná, zdieľaná „inštrukčná sada“ ľudského poznania? HAI to testuje na reálnych LLM.",
      summary:
        "HAI (Human Artificial Intelligence) je nezávislý výskumný projekt skúmajúci hypotézu Brain Instruction Set (BIS) — myšlienku, že ľudské poznanie sa dá reprezentovať vo vektorovom priestore so zdieľaným, sémanticky ukotveným jadrom plus individuálnou väzbovou vrstvou. Myšlienka pochádza z roku 2000 a projekt je jej súčasným výpočtovým pokračovaním, dnes testovateľným voči reálnym jazykovým modelom.",
      highlights: [
        "Testuje hypotézu Brain Instruction Set: zdieľané jadro významových primitív + individuálna vrstva",
        "Spustiteľný experimentálny pipeline s konsenzuálno-subjektívnou dekompozíciou LLM",
        "Línia myšlienky siaha do roku 2000, dnes prepojená s modernými LLM",
        "Meriame štruktúru reprezentácií, nie qualia ani kalibrovanú pravdu",
        "Empirické aj mechanistické overovanie (behaviorálne testy + analýza aktivácií)",
      ],
    },
    en: {
      name: "HAI",
      status: "Research",
      tagline:
        "Is there a finite, shared “instruction set” of human cognition? HAI tests it against real LLMs.",
      summary:
        "HAI (Human Artificial Intelligence) is an independent research project investigating the Brain Instruction Set (BIS) hypothesis — the idea that human cognition can be represented in a vector space with a shared, semantically grounded core plus an individual binding layer. The idea dates back to 2000, and this project is its present-day computational continuation, now testable against real language models.",
      highlights: [
        "Tests the Brain Instruction Set hypothesis: a shared core of meaning-primitives plus an individual layer",
        "A runnable experimental pipeline using consensual-subjective decomposition of LLMs",
        "A line of thought reaching back to 2000, now connected to modern LLMs",
        "Measures the structure of representations, not qualia or calibrated truth",
        "Both empirical and mechanistic verification (behavioral tests plus activation analysis)",
      ],
    },
  },
  {
    slug: "vitalita",
    accent: "#f29d38",
    image: vitalitaImg,
    imageAlt: "Prebudená Vitalita",
    links: [],
    sk: {
      name: "Prebudená Vitalita",
      status: "Koncept",
      tagline: "Prebuď svoju vitalitu — dlhovekosť a zdravý život pre slovenský trh.",
      summary:
        "Prebudená Vitalita je koncept zameraný na dlhovekosť, zdravý životný štýl a každodenné prebúdzanie vnútornej energie. Je navrhnutá ako slovenská sprievodná značka k platforme Newagy, ktorá prináša vedecky podložené princípy zdravého starnutia zrozumiteľnou a inšpiratívnou formou.",
      highlights: [
        "Zameranie na dlhovekosť a zdravé starnutie",
        "Praktické návyky pre každodennú energiu a vitalitu",
        "Slovenský jazyk a kontext, sprievodná značka k Newagy",
        "Inšpiratívny, prístupný prístup k zdraviu",
      ],
      note: "Koncept — obsah sa pripravuje.",
    },
    en: {
      name: "Awakened Vitality",
      status: "Concept",
      tagline: "Awaken your vitality — longevity and healthy living for the Slovak market.",
      summary:
        "Awakened Vitality is a concept focused on longevity, healthy living, and the daily awakening of inner energy. It is envisioned as a Slovak companion brand to the Newagy platform, bringing science-grounded principles of healthy aging in an accessible and inspiring form.",
      highlights: [
        "Focus on longevity and healthy aging",
        "Practical habits for everyday energy and vitality",
        "Slovak language and context, a companion brand to Newagy",
        "An inspiring, accessible approach to health",
      ],
      note: "Concept — content in preparation.",
    },
  },
  {
    slug: "wellness",
    accent: "#3aa0e0",
    image: wellnessImg,
    imageAlt: "Wellness Warriors",
    links: [],
    sk: {
      name: "Wellness Warriors",
      status: "Koncept",
      tagline: "Komunita bojovníkov za zdravie — spolu k vitalite a dlhovekosti.",
      summary:
        "Wellness Warriors je koncept komunity a programu pre ľudí odhodlaných prevziať kontrolu nad svojím zdravím a dlhovekosťou. Stavia na archetype človeka, ktorý hľadá merateľný pokrok, prevenciu a optimalizáciu životného štýlu — a spája ho s podporou rovnako zmýšľajúcej komunity.",
      highlights: [
        "Komunita ľudí odhodlaných k zdraviu a dlhovekosti",
        "Dôraz na merateľný pokrok, prevenciu a optimalizáciu životného štýlu",
        "Vzájomná podpora, zodpovednosť a spoločné výzvy",
        "Prepojiteľné s nástrojmi a protokolmi Newagy",
      ],
      note: "Koncept — program sa pripravuje.",
    },
    en: {
      name: "Wellness Warriors",
      status: "Concept",
      tagline: "A community of health warriors — together toward vitality and longevity.",
      summary:
        "Wellness Warriors is a concept for a community and program for people determined to take control of their health and longevity. It builds on the archetype of someone who seeks measurable progress, prevention, and lifestyle optimization — and pairs it with the support of a like-minded community.",
      highlights: [
        "A community of people committed to health and longevity",
        "Emphasis on measurable progress, prevention, and lifestyle optimization",
        "Mutual support, accountability, and shared challenges",
        "Connectable with Newagy's tools and protocols",
      ],
      note: "Concept — program in preparation.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function content(p: Project, lang: Lang): LocalizedContent {
  return p[lang];
}
