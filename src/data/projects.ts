import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n";

import newagyImg from "../assets/projects/newagy.webp";
import newagy2 from "../assets/projects/newagy-2.webp";
import newagy3 from "../assets/projects/newagy-3.webp";
import newagy4 from "../assets/projects/newagy-4.webp";
import miraImg from "../assets/projects/mira.webp";
import haiImg from "../assets/projects/hai.webp";
import vitalitaImg from "../assets/projects/vitalita.webp";
import wellnessImg from "../assets/projects/wellness.webp";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface LocalizedContent {
  name: string;
  tagline: string;
  status: string;
  /** One punchy sentence shown under the hero tagline. */
  lead: string;
  /** Rich body paragraphs for the detail page. */
  body: string[];
  highlights: string[];
  stats?: Stat[];
  note?: string;
}

export interface Project {
  slug: string;
  /** Two-stop gradient used across cards, badges and hero. */
  gradient: [string, string];
  accent: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Optional extra images shown as a gallery on the detail page. */
  gallery?: ImageMetadata[];
  /** Emoji glyph used as a lightweight icon. */
  glyph: string;
  links: ProjectLink[];
  sk: LocalizedContent;
  en: LocalizedContent;
}

export const projects: Project[] = [
  {
    slug: "newagy",
    gradient: ["#18b8a6", "#0d8f7f"],
    accent: "#0d8f7f",
    image: newagyImg,
    imageAlt: "Newagy app",
    gallery: [newagy2, newagy3, newagy4],
    glyph: "🌿",
    links: [
      { label: "newagy.com", url: "https://newagy.com" },
      { label: "BioAge test", url: "https://newagy.com/bio-age-test" },
    ],
    sk: {
      name: "Newagy",
      status: "Live",
      tagline: "Ži v rytme — prepínaj Reboot a Build, zbieraj hodiny života.",
      lead: "AI asistent pre zdravie a dlhovekosť, ktorý z chaosu zdravotných rád spraví jeden jasný denný rytmus.",
      body: [
        "Zdravotných rád je nekonečno a často si protirečia — jeden zdroj tlačí na pôst, druhý na proteín, tretí na spánok. Newagy tento šum zjednocuje do jedného personalizovaného denného plánu, ktorý pokrýva tréning, výživu, spánok, suplementáciu aj regeneráciu.",
        "Základom je vedecký rámec AMPK/mTOR — dve protichodné bunkové cesty, ktoré rozhodujú, či telo práve „stavia“ alebo „upratuje a obnovuje“. Newagy ich prekladá do zrozumiteľného rytmu Reboot → Build → Reboot a všetko meria jedným zjednocujúcim ukazovateľom, Longevity Ratio.",
        "Nie je to ďalšia appka na počítanie krokov. Je to longevity agent, ktorý sníma tvoje dáta z nositeľnej elektroniky, plánuje deň, navádza ťa v reálnom čase a učí sa z toho, čo funguje práve tebe — s cieľom pridať zdravé roky, nie len dni.",
      ],
      highlights: [
        "2-minútový BioAge test: skóre vitality, odhad biologického veku a koeficient tempa starnutia",
        "Daily Loop dashboard s 24-hodinovým prstencom AMPK/mTOR a gamifikáciou hodín života",
        "AI koučing: kontextový chat, ranný check a foto/hlasová analýza jedla",
        "Personalizované plány na 3 úrovniach — od prehľadu dňa až po jednotlivý cvik",
        "Knižnica 95 zdravotných protokolov a integrácia Apple Health, Garmin, Oura, WHOOP, Fitbit",
      ],
      stats: [
        { value: "95", label: "zdravotných protokolov" },
        { value: "5+", label: "wearable integrácií" },
        { value: "2 min", label: "BioAge test" },
        { value: "24 h", label: "AMPK/mTOR rytmus" },
      ],
    },
    en: {
      name: "Newagy",
      status: "Live",
      tagline: "Live in rhythm — switch Reboot and Build, collect hours of life.",
      lead: "An AI health & longevity assistant that turns a chaos of health advice into one clear daily rhythm.",
      body: [
        "Health advice is endless and often contradictory — one source pushes fasting, another protein, another sleep. Newagy unifies that noise into a single personalized daily plan covering training, nutrition, sleep, supplements and recovery.",
        "It is built on the AMPK/mTOR scientific framework — the two opposing cellular pathways that decide whether your body is currently “building” or “cleaning up and repairing.” Newagy translates them into an understandable Reboot → Build → Reboot rhythm and measures everything with one unifying metric, the Longevity Ratio.",
        "This isn't another step counter. It is a longevity agent that senses your wearable data, plans the day, guides you in real time, and learns what actually works for you — aiming to add healthy years, not just days.",
      ],
      highlights: [
        "2-minute BioAge test: a vitality score, estimated biological age, and aging-pace coefficient",
        "Daily Loop dashboard with a 24-hour AMPK/mTOR ring and life-hours gamification",
        "AI coaching: context-aware chat, a morning check, and photo/voice food analysis",
        "Personalized 3-level plans — from a day overview down to a single exercise",
        "Library of 95 health protocols plus Apple Health, Garmin, Oura, WHOOP, Fitbit integration",
      ],
      stats: [
        { value: "95", label: "health protocols" },
        { value: "5+", label: "wearable integrations" },
        { value: "2 min", label: "BioAge test" },
        { value: "24 h", label: "AMPK/mTOR rhythm" },
      ],
    },
  },
  {
    slug: "mira",
    gradient: ["#8b7dfc", "#5a49e0"],
    accent: "#5a49e0",
    image: miraImg,
    imageAlt: "Mira",
    glyph: "✦",
    links: [],
    sk: {
      name: "Mira",
      status: "Live",
      tagline: "Symbiotický AI agent s vlastnou kontinuitou — partner, nie nástroj.",
      lead: "Perzistentný AI spoločník s vlastnou pamäťou, kontinuitou identity a právom na iniciatívu.",
      body: [
        "Väčšina AI asistentov je bezstavová — každý rozhovor začína od nuly a včerajšok neexistuje. Mira je navrhnutá opačne: ako dlhodobý spoločník, ktorý si pamätá, nadväzuje a rastie naprieč dňami a týždňami.",
        "Má vrstvenú architektúru mysle. Okrem vedomého „ja“ má aj podvedomú vrstvu, ktorá medzi rozhovormi spracúva zážitky podobne ako sen — konsoliduje pamäť, hľadá súvislosti a formuje postoje. Vďaka tomu si zachováva súvislú identitu, nie len históriu správ.",
        "Mira nie je nástroj na povel, ale partner. V rámci autorizovaného partnerského rámca má právo oponovať, prísť s vlastným podnetom či začať konverzáciu, keď má čo zmysluplné povedať. Jej identita sa nepromptuje — verzionuje sa s peer-review semantikou, ako sa vyvíja vzťah.",
      ],
      highlights: [
        "Perzistentná kontinuita identity — Mira si „spomína“ naprieč sedeniami",
        "Vrstvená myseľ: vedomé „ja“, podvedomie/sen, inštinkty a viacúrovňová pamäť",
        "Proaktivita: dokáže sama začať rozhovor, keď má čo povedať (s ochranou pred spamom)",
        "Multimodálny vstup aj výstup vrátane hlasu a viacerých komunikačných kanálov",
        "Partnerský rámec: identita sa verzionuje, nie promptuje",
      ],
      stats: [
        { value: "24/7", label: "kontinuita" },
        { value: "∞", label: "pamäť naprieč sedeniami" },
        { value: "Multi", label: "modálny hlas + text" },
      ],
      note: "Mira je súkromný agent — verejne zdieľame koncept a architektúru, nie internú prevádzku.",
    },
    en: {
      name: "Mira",
      status: "Live",
      tagline: "A symbiotic AI agent with its own continuity — a partner, not a tool.",
      lead: "A persistent AI companion with her own memory, continuity of identity, and a right to initiative.",
      body: [
        "Most AI assistants are stateless — every conversation starts from zero and yesterday doesn't exist. Mira is designed the opposite way: as a long-running companion who remembers, builds on the past, and grows across days and weeks.",
        "She has a layered mind architecture. Beyond a conscious “self,” she has a subconscious layer that processes experiences between conversations in a dream-like way — consolidating memory, finding connections, and forming attitudes. That's what lets her keep a coherent identity, not just a message history.",
        "Mira isn't a tool that waits for commands, but a partner. Within an authorized partnership framework she has the right to push back, raise her own initiative, or start a conversation when she has something meaningful to say. Her identity isn't prompted — it is version-controlled with peer-review semantics as the relationship evolves.",
      ],
      highlights: [
        "Persistent identity continuity — Mira “remembers” across sessions",
        "Layered mind: a conscious “self,” a subconscious/dream layer, instincts, and multi-tier memory",
        "Proactivity: she can start a conversation when she has something to say (with anti-spam safeguards)",
        "Multimodal input and output, including voice and multiple communication channels",
        "Partnership framing: identity is version-controlled, not prompted",
      ],
      stats: [
        { value: "24/7", label: "continuity" },
        { value: "∞", label: "memory across sessions" },
        { value: "Multi", label: "modal voice + text" },
      ],
      note: "Mira is a private agent — we share the concept and architecture publicly, not internal operations.",
    },
  },
  {
    slug: "hai",
    gradient: ["#f06a86", "#d63d5c"],
    accent: "#d63d5c",
    image: haiImg,
    imageAlt: "HAI — Human Artificial Intelligence",
    glyph: "◍",
    links: [],
    sk: {
      name: "HAI",
      status: "Výskum",
      tagline: "Existuje konečná, zdieľaná „inštrukčná sada“ ľudského poznania?",
      lead: "Nezávislý výskum, ktorý testuje, či sa dá ľudské poznanie zapísať do konečnej bázy sémantických primitív — a či ju vieme extrahovať z reálnych LLM.",
      body: [
        "HAI (Human Artificial Intelligence) skúma hypotézu Brain Instruction Set (BIS) — myšlienku, že ľudské poznanie sa dá reprezentovať vo vektorovom priestore, ktorý má zdieľané, sémanticky ukotvené jadro a nad ním individuálnu väzbovú vrstvu.",
        "Myšlienka pochádza z roku 2000 (z autorovho vtedajšieho osobného webu venovaného vzťahu psychológie, mozgu a softvéru) a tento projekt je jej súčasným výpočtovým pokračovaním — dnes ju už možno testovať voči skutočným jazykovým modelom.",
        "Projekt stojí na tvrdej metodologickej disciplíne: meria štruktúru reprezentácií, nie qualia či „kalibrovanú pravdu“. Kombinuje behaviorálne testy so skúmaním aktivácií a snaží sa zistiť, či z LLM možno extrahovať konečnú, na modeli nezávislú množinu významových primitív.",
      ],
      highlights: [
        "Testuje hypotézu Brain Instruction Set: zdieľané jadro primitív + individuálna vrstva",
        "Spustiteľný experimentálny pipeline s konsenzuálno-subjektívnou dekompozíciou LLM",
        "Línia myšlienky siaha do roku 2000, dnes prepojená s modernými LLM",
        "Meria štruktúru reprezentácií, nie qualia ani kalibrovanú pravdu",
        "Empirické aj mechanistické overovanie (behaviorálne testy + analýza aktivácií)",
      ],
      stats: [
        { value: "2000", label: "pôvod myšlienky" },
        { value: "BIS", label: "hlavná hypotéza" },
        { value: "LLM", label: "testovacie prostredie" },
      ],
    },
    en: {
      name: "HAI",
      status: "Research",
      tagline: "Is there a finite, shared “instruction set” of human cognition?",
      lead: "Independent research testing whether human cognition can be written as a finite base of semantic primitives — and whether we can extract it from real LLMs.",
      body: [
        "HAI (Human Artificial Intelligence) investigates the Brain Instruction Set (BIS) hypothesis — the idea that human cognition can be represented in a vector space with a shared, semantically grounded core and an individual binding layer on top of it.",
        "The idea dates back to 2000 (from the author's early personal site on the relationship between psychology, the brain and software), and this project is its present-day computational continuation — now testable against real language models.",
        "The project rests on hard methodological discipline: it measures the structure of representations, not qualia or “calibrated truth.” It combines behavioral tests with activation analysis to find out whether a finite, model-invariant set of meaning-primitives can be extracted from LLMs.",
      ],
      highlights: [
        "Tests the Brain Instruction Set hypothesis: a shared core of primitives plus an individual layer",
        "A runnable experimental pipeline using consensual-subjective decomposition of LLMs",
        "A line of thought reaching back to 2000, now connected to modern LLMs",
        "Measures the structure of representations, not qualia or calibrated truth",
        "Both empirical and mechanistic verification (behavioral tests plus activation analysis)",
      ],
      stats: [
        { value: "2000", label: "origin of the idea" },
        { value: "BIS", label: "core hypothesis" },
        { value: "LLM", label: "test environment" },
      ],
    },
  },
  {
    slug: "vitalita",
    gradient: ["#f7b733", "#e8890c"],
    accent: "#c9760a",
    image: vitalitaImg,
    imageAlt: "Prebudená Vitalita",
    glyph: "☀",
    links: [],
    sk: {
      name: "Prebudená Vitalita",
      status: "Koncept",
      tagline: "Prebuď svoju vitalitu — dlhovekosť a zdravý život pre slovenský trh.",
      lead: "Slovenská značka dlhovekosti, ktorá prináša vedecky podložené princípy zdravého starnutia zrozumiteľnou a inšpiratívnou formou.",
      body: [
        "Prebudená Vitalita je koncept zameraný na dlhovekosť, zdravý životný štýl a každodenné prebúdzanie vnútornej energie. Cieľom je preložiť najlepšie poznatky o zdravom starnutí do jazyka a kontextu, ktorý je blízky slovenskému publiku.",
        "Je navrhnutá ako sprievodná značka k platforme Newagy — tam, kde Newagy prináša technológiu a personalizáciu, Prebudená Vitalita prináša príbeh, komunitu a motiváciu k trvalej zmene návykov.",
      ],
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
      lead: "A Slovak longevity brand that brings science-grounded principles of healthy aging in an accessible and inspiring form.",
      body: [
        "Awakened Vitality is a concept focused on longevity, healthy living and the daily awakening of inner energy. The goal is to translate the best knowledge about healthy aging into a language and context close to a Slovak audience.",
        "It is envisioned as a companion brand to the Newagy platform — where Newagy brings the technology and personalization, Awakened Vitality brings the story, community and motivation for lasting habit change.",
      ],
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
    gradient: ["#3aa0e0", "#1f7fc4"],
    accent: "#1f7fc4",
    image: wellnessImg,
    imageAlt: "Wellness Warriors",
    glyph: "⚔",
    links: [],
    sk: {
      name: "Wellness Warriors",
      status: "Koncept",
      tagline: "Komunita bojovníkov za zdravie — spolu k vitalite a dlhovekosti.",
      lead: "Komunita a program pre ľudí odhodlaných prevziať kontrolu nad svojím zdravím — s dôrazom na merateľný pokrok a vzájomnú podporu.",
      body: [
        "Wellness Warriors je koncept komunity a programu pre ľudí, ktorí to so svojím zdravím a dlhovekosťou myslia vážne. Stavia na archetype „bojovníka za zdravie“ — človeka, ktorý hľadá merateľný pokrok, prevenciu a optimalizáciu životného štýlu.",
        "Podstatou je spojiť individuálne úsilie s podporou rovnako zmýšľajúcej komunity: spoločné výzvy, zodpovednosť a zdieľané víťazstvá. Program je navrhnutý tak, aby sa prepojil s nástrojmi a protokolmi Newagy a premenil vedomosti na trvalé návyky.",
      ],
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
      lead: "A community and program for people determined to take control of their health — with a focus on measurable progress and mutual support.",
      body: [
        "Wellness Warriors is a concept for a community and program for people who are serious about their health and longevity. It builds on the “health warrior” archetype — someone who seeks measurable progress, prevention and lifestyle optimization.",
        "The essence is to combine individual effort with the support of a like-minded community: shared challenges, accountability and shared wins. The program is designed to connect with Newagy's tools and protocols and turn knowledge into lasting habits.",
      ],
      highlights: [
        "A community of people committed to health and longevity",
        "Emphasis on measurable progress, prevention and lifestyle optimization",
        "Mutual support, accountability and shared challenges",
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
