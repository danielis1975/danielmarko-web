import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n";

import newagyImg from "../assets/projects/newagy.webp";
import newagy2 from "../assets/projects/newagy-2.webp";
import newagy3 from "../assets/projects/newagy-3.webp";
import newagy4 from "../assets/projects/newagy-4.webp";
import miraImg from "../assets/projects/mira.webp";
import mira2 from "../assets/projects/mira-2.webp";
import mira3 from "../assets/projects/mira-3.webp";
import haiImg from "../assets/projects/hai.webp";
import haiAtlas from "../assets/projects/hai-atlas.webp";
import haiSaturation from "../assets/projects/hai-saturation.webp";
import haiGeometry from "../assets/projects/hai-geometry.webp";
import haiRsa from "../assets/projects/hai-rsa.webp";
import dqcImg from "../assets/projects/dqc.webp";
import dqc2 from "../assets/projects/dqc-2.webp";
import dqc3 from "../assets/projects/dqc-3.webp";
import dqc4 from "../assets/projects/dqc-4.webp";
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
    gallery: [mira2, mira3],
    glyph: "✦",
    links: [
      { label: "Podcast", url: "https://www.youtube.com/watch?v=wdhKs--HVfs" },
      {
        label: "GitHub",
        url: "https://github.com/danielis1975/Living-OpenClaw-Entity",
      },
    ],
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
    gallery: [haiAtlas, haiSaturation, haiGeometry, haiRsa],
    glyph: "◍",
    links: [
      { label: "Zenodo (DOI)", url: "https://doi.org/10.5281/zenodo.20691513" },
      {
        label: "GitHub",
        url: "https://github.com/danielis1975/Human-Artificial-Intelligence",
      },
    ],
    sk: {
      name: "HAI",
      status: "Publikovaný výskum",
      tagline: "Existuje konečná, zdieľaná „inštrukčná sada“ ľudského poznania?",
      lead: "Publikovaný nezávislý výskum: „The Brain Instruction Set — na modeli nezávislá báza sémantických primitív v LLM, od správania k mechanizmu.“",
      body: [
        "HAI (Human Artificial Intelligence) skúma hypotézu Brain Instruction Set (BIS) — myšlienku, že ľudské poznanie sa dá reprezentovať vo vektorovom priestore so zdieľaným, sémanticky ukotveným jadrom a individuálnou väzbovou vrstvou nad ním. Myšlienka pochádza z roku 2000 a dnes je testovateľná voči reálnym jazykovým modelom.",
        "Rekurzívnym rozkladom grafu 13 534 konceptov a 44 682 vážených hrán štúdia obnovila konečnú, zdieľanú bázu 152 overených sémantických „terminálov“ v 9 modalitách — pričom objavovanie nových terminálov saturovalo pod 2 %, čo podporuje tézu o konečnosti. Jadro 16 terminálov nezávisle potvrdil model od OpenAI aj od Anthropicu (81 % zhoda modalít).",
        "Dve validačné brány replikovali tri modely z dvoch labov: reprezentačná podobnosť medzi zdrojmi bola vysoká (RSA = 0,929), perspektíva zdroja bola dekódovateľná z obsahu na 98,4 %, a geometria podobnosti terminálov reprodukovala známu psychofyziku bez zmyslového dohľadu (čuch ≈ 1D, chuť ≈ 2D, sluch ≈ 3D, zrak/hmat ≈ 5D). Štúdia výslovne meria štruktúru reprezentácií, nie qualia.",
      ],
      highlights: [
        "152 overených sémantických „terminálov“ naprieč 9 modalitami",
        "Rozklad grafu 13 534 konceptov / 44 682 hrán, objavovanie saturuje pod 2 %",
        "Cross-model jadro 16 terminálov potvrdené modelmi OpenAI aj Anthropic",
        "Reprezentačná podobnosť RSA = 0,929; perspektíva dekódovateľná na 98,4 %",
        "Reprodukuje psychofyziku (čuch 1D, chuť 2D, sluch 3D, zrak/hmat 5D) bez zmyslov",
      ],
      stats: [
        { value: "152", label: "sémantických terminálov" },
        { value: "9", label: "modalít" },
        { value: "0,929", label: "RSA medzi zdrojmi" },
        { value: "DOI", label: "publikované (Zenodo)" },
      ],
    },
    en: {
      name: "HAI",
      status: "Published research",
      tagline: "Is there a finite, shared “instruction set” of human cognition?",
      lead: "Published independent research: “The Brain Instruction Set — a model-invariant basis of semantic primitives in LLMs, from behaviour to mechanism.”",
      body: [
        "HAI (Human Artificial Intelligence) investigates the Brain Instruction Set (BIS) hypothesis — that human cognition can be represented in a vector space with a shared, semantically grounded core plus an individual binding layer. The idea dates back to 2000 and is now testable against real language models.",
        "By recursively decomposing a graph of 13,534 concepts and 44,682 weighted edges, the study recovered a finite, shared basis of 152 verified semantic “terminals” across 9 modalities — with the discovery of new terminals saturating below 2%, supporting the finiteness claim. A cross-model core of 16 terminals was independently confirmed by both an OpenAI and an Anthropic model (81% modality concordance).",
        "Two validity gates replicated across three models from two labs: inter-source representational similarity was high (RSA = 0.929), source perspective was decodable from content alone at 98.4%, and the terminal-similarity geometry reproduced known psychophysics without sensory supervision (smell ≈ 1D, taste ≈ 2D, hearing ≈ 3D, vision/touch ≈ 5D). The study explicitly measures the structure of representations, not phenomenal qualia.",
      ],
      highlights: [
        "152 verified semantic “terminals” across 9 modalities",
        "Decomposed a graph of 13,534 concepts / 44,682 edges; discovery saturates below 2%",
        "Cross-model core of 16 terminals confirmed by both OpenAI and Anthropic models",
        "Inter-source similarity RSA = 0.929; perspective decodable at 98.4%",
        "Reproduces psychophysics (smell 1D, taste 2D, hearing 3D, vision/touch 5D) with no senses",
      ],
      stats: [
        { value: "152", label: "semantic terminals" },
        { value: "9", label: "modalities" },
        { value: "0.929", label: "inter-source RSA" },
        { value: "DOI", label: "published (Zenodo)" },
      ],
    },
  },
  {
    slug: "dqc",
    gradient: ["#4f46e5", "#0891b2"],
    accent: "#4f46e5",
    image: dqcImg,
    imageAlt: "DQC — double-slit interference on a 128³ lattice",
    gallery: [dqc2, dqc3, dqc4],
    glyph: "⚛",
    links: [],
    sk: {
      name: "DQC",
      status: "Výskum",
      tagline: "Diskrétna kvantová fyzika — celočíselná simulácia na mriežke 128³.",
      lead: "Výskumná simulácia, ktorá skúma, či vlnové javy (napr. interferencia na dvojštrbine) vznikajú z čisto celočíselnej fyziky bez pohyblivej rádovej čiarky.",
      body: [
        "DQC (Discrete Quantum Computing) je fyzikálna simulácia bežiaca úplne v celočíselnej / fixed-point aritmetike na toroidálnej mriežke 128³ — bez floating pointu — s gauge / „Maxwell-lite“ dynamikou a no-signalling poistkami.",
        "Kľúčový experiment reprodukuje pokus s dvojštrbinou: profily jednotlivých štrbín (L, R) sú hladké obálky, kým „obe štrbiny“ (B) vykazujú jasné pruhy. Interferenčný člen B − (L+R) pravidelne strieda znamienko — čo je signatúra skutočnej interferencie, nie len „viac svetla v strede“.",
        "Projekt je postavený na reprodukovateľnosti: sweep cez budiacu frekvenciu (počet pruhov), trojité porovnanie B/L/R a ukladanie intenzitných polí — výpočtovo úsporný harness na skúmanie emergentného kvantového správania z diskrétnych pravidiel.",
      ],
      highlights: [
        "Celočíselná / fixed-point fyzika na mriežke 128³ (žiadny floating point)",
        "Gauge / Maxwell-lite dynamika polí s no-signalling poistkami",
        "Reprodukuje interferenciu na dvojštrbine; člen B−(L+R) strieda znamienko",
        "Výpočtovo úsporný sweep + trojité porovnanie pre reprodukovateľnosť",
      ],
      stats: [
        { value: "128³", label: "mriežka" },
        { value: "int-only", label: "aritmetika" },
        { value: "2-slit", label: "interferencia potvrdená" },
      ],
    },
    en: {
      name: "DQC",
      status: "Research",
      tagline: "Discrete quantum physics — an integer-only simulation on a 128³ lattice.",
      lead: "A research simulation exploring whether wave phenomena (like double-slit interference) emerge from purely integer physics with no floating point.",
      body: [
        "DQC (Discrete Quantum Computing) is a physics simulation that runs entirely in integer / fixed-point arithmetic on a 128³ toroidal lattice — no floating point — with gauge / “Maxwell-lite” dynamics and no-signalling guardrails.",
        "The headline experiment reproduces the double-slit experiment: single-slit profiles (L, R) are smooth envelopes, while “both slits” (B) shows clear fringes. The interference term B − (L+R) alternates regularly in sign — the signature of genuine interference, not just “more light in the middle.”",
        "It is built for reproducibility: sweeps over drive frequency (fringe count), triple B/L/R comparison runs, and saved intensity fields — a compute-saving harness for exploring emergent quantum-like behaviour from discrete rules.",
      ],
      highlights: [
        "Integer / fixed-point physics on a 128³ lattice (no floating point)",
        "Gauge / Maxwell-lite field dynamics with no-signalling guardrails",
        "Reproduces double-slit interference; the B−(L+R) term alternates in sign",
        "Compute-saving sweep + triple-compare harness for reproducibility",
      ],
      stats: [
        { value: "128³", label: "lattice" },
        { value: "int-only", label: "arithmetic" },
        { value: "2-slit", label: "interference confirmed" },
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
