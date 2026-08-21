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
import humanovaImg from "../assets/projects/humanova.webp";

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
      { label: "Podcast: The Hard Questions (EN)", url: "/mira/podcast-2" },
      { label: "Podcast: The First Conversation (SK)", url: "/mira/podcast" },
      { label: "Independent analysis", url: "/mira/analysis" },
      {
        label: "Alignment case study",
        url: "https://github.com/danielis1975/mira-alignment-case-study",
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
        "Perzistentný agent so sebou nesie aj bezpečnostné otázky, ktoré bezstavové modely nemajú: kontinuita identity, dohľad nad niečím, čo beží aj keď spíš, a hodnotový drift pri sebazlepšovaní. Mira je navrhnutá tak, aby ostala korigovateľná — nemenná etická podlaha, zastaviteľnosť, vratnosť zmien a zákaz meniť si vlastnú infraštruktúru. Verejne zdieľame samostatnú alignment prípadovú štúdiu, ktorá tento bezpečnostný rámec, koncept podvedomej slučky aj otvorené výskumné otázky rozoberá do hĺbky.",
      ],
      highlights: [
        "Perzistentná kontinuita identity — Mira si „spomína“ naprieč sedeniami",
        "Vrstvená myseľ: vedomé „ja“, podvedomie/sen, inštinkty a viacúrovňová pamäť",
        "Proaktivita: dokáže sama začať rozhovor, keď má čo povedať (s ochranou pred spamom)",
        "Multimodálny vstup aj výstup vrátane hlasu a viacerých komunikačných kanálov",
        "Partnerský rámec: identita sa verzionuje, nie promptuje",
        "Korigovateľnosť ako princíp: nemenná etická podlaha, zastaviteľnosť, vratnosť — rozobraté v alignment prípadovej štúdii",
      ],
      stats: [
        { value: "24/7", label: "kontinuita" },
        { value: "∞", label: "pamäť naprieč sedeniami" },
        { value: "Multi", label: "modálny hlas + text" },
      ],
      note: "Mira je súkromný agent — verejne zdieľame koncept, architektúru a alignment prípadovú štúdiu, nie internú prevádzku, prompty ani credentials.",
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
        "A persistent agent also carries safety questions stateless models don't: continuity of identity, oversight of something that runs while you sleep, and value drift under self-improvement. Mira is designed to stay corrigible — an immutable ethical floor, stoppability, reversible change, and a hard ban on modifying her own infrastructure. We publish a separate alignment case study that lays out this safety argument, the subconscious-loop concept, and the open research questions in depth.",
      ],
      highlights: [
        "Persistent identity continuity — Mira “remembers” across sessions",
        "Layered mind: a conscious “self,” a subconscious/dream layer, instincts, and multi-tier memory",
        "Proactivity: she can start a conversation when she has something to say (with anti-spam safeguards)",
        "Multimodal input and output, including voice and multiple communication channels",
        "Partnership framing: identity is version-controlled, not prompted",
        "Corrigibility by design: immutable ethical floor, stoppability, reversibility — detailed in the alignment case study",
      ],
      stats: [
        { value: "24/7", label: "continuity" },
        { value: "∞", label: "memory across sessions" },
        { value: "Multi", label: "modal voice + text" },
      ],
      note: "Mira is a private agent — we publicly share the concept, architecture and an alignment case study, not internal operations, prompts or credentials.",
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
        "Nad rámec správania (v1.2) posúva BIS k mechanistickej báze: sondovanie open-weight modelov (Gemma-2-2B, Qwen2.5-1.5B, Phi-3.5-mini) ukazuje, že terminály sú lineárne čitateľné (AUC 0,86–0,93) a kauzálne ovplyvniteľné, vysvetlená variancia vrcholí v strede siete (R² = 0,59, vrstva 14) a jadro sa zhoduje s nezávislými sparse-autoencoder črtami (Gemma Scope).",
      ],
      highlights: [
        "152 overených sémantických „terminálov“ naprieč 9 modalitami",
        "Rozklad grafu 13 534 konceptov / 44 682 hrán, objavovanie saturuje pod 2 %",
        "Cross-model jadro 16 terminálov potvrdené modelmi OpenAI aj Anthropic",
        "Reprezentačná podobnosť RSA = 0,929; perspektíva dekódovateľná na 98,4 %",
        "Reprodukuje psychofyziku (čuch 1D, chuť 2D, sluch 3D, zrak/hmat 5D) bez zmyslov",
        "Mechanistické: terminály lineárne čitateľné (AUC 0,86–0,93) a kauzálne ovplyvniteľné naprieč 3 architektúrami; zhoda so SAE črtami",
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
        "Beyond behaviour (v1.2), BIS moves toward a mechanistic basis: probing open-weight models (Gemma-2-2B, Qwen2.5-1.5B, Phi-3.5-mini) shows the terminals are linearly readable (AUC 0.86–0.93) and causally steerable, variance explained peaks mid-network (R² = 0.59 at layer 14), and the core aligns with independent sparse-autoencoder features (Gemma Scope).",
      ],
      highlights: [
        "152 verified semantic “terminals” across 9 modalities",
        "Decomposed a graph of 13,534 concepts / 44,682 edges; discovery saturates below 2%",
        "Cross-model core of 16 terminals confirmed by both OpenAI and Anthropic models",
        "Inter-source similarity RSA = 0.929; perspective decodable at 98.4%",
        "Reproduces psychophysics (smell 1D, taste 2D, hearing 3D, vision/touch 5D) with no senses",
        "Mechanistic: terminals linearly readable (AUC 0.86–0.93) & causally steerable across 3 architectures; aligns with SAE features",
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
    imageAlt:
      "DQC — deterministic Bohmian trajectories through a double slit on an integer substrate",
    gallery: [dqc2, dqc3, dqc4],
    glyph: "⚛",
    links: [
      { label: "Zenodo (DOI)", url: "https://doi.org/10.5281/zenodo.21464146" },
    ],
    sk: {
      name: "DQC",
      status: "Publikovaný preprint",
      tagline: "Unesie klasický celočíselný automat kvantovú fenomenológiu?",
      lead: "Publikovaný preprint (Zenodo, v4): jeden bit-exaktne vratný celočíselný automat, v ktorom sa emergentný Schrödingerov sektor, deterministická dvojštrbina, CHSH = 2,79 a falzifikovateľná predikcia na Planckovej škále objavujú ako merateľné, kontrolným súčtom reprodukovateľné správanie.",
      body: [
        "DQC (Discrete Quantum Computing) je hypotéza, že fyzikálny svet je na najhlbšej úrovni presný, vratný, celočíselný výpočet — a zároveň funkčný substrát, ktorý túto hypotézu berie vážne a testuje jej dôsledky. Jadrom je celočíselný automat Frenkel–Kontorova / sine-Gordon (stav v ℤ_M, Feistelove aktualizácie): evolúcia je permutácia celočíselných mikrostavov, nie približná numerická integrácia — práve preto môžu byť testy bit-exaktné, a nie štatistické.",
        "Z tohto klasického substrátu sa vynára kvantový sektor. Obálka poľa sa riadi Schrödingerovou rovnicou s efektívnou hmotnosťou danou krivosťou exaktnej diskrétnej disperzie a dva mikroskopicky rôzne substráty kolabujú na jeden univerzálny zákon rozplývania √(1+τ²). Deterministické Bohmove korky dávajú interferenciu jednotlivých objektov na dvojštrbine (p < 10⁻⁴) s trajektóriami zhodnými s rekonštrukciou zo slabého merania (Kocsis a spol. 2011); CHSH = 2,79 vychádza z polohových výsledkov bez akejkoľvek náhody, s no-signalling kontrolou na 0,3 %. K tomu exaktná výmenná štatistika (Pauliho vylúčenie ako bitovo zachovaný invariant), kvantová guma s doslovným bitovo vratným od-meraním a meraný zákon poklesu koherencie vetiev (R² = 0,997).",
        "Projekt rovnako presne pomenúva, kde hranica leží. Dvojčasticová interakcia je odvodená zo substrátu (pomer krížovej a vlastnej fázy 2,31 oproti parameter-free predikcii 2), no rekonštruovaný stav zostáva Schmidtovej hodnosti 1 tam, kde L² referencia dosahuje K = 4,9: substrát odvodzuje hamiltonián, nie L² stavový priestor — previazanosť je nesená, nie odvodená, a spin je implementovaný. Anizotropia rýchlosti mizne ako k² v infračervenej oblasti s koeficientmi z prvých princípov v 2D aj 3D (≈ 1 %), takže rotačná izotropia vzniká ako infračervený pevný bod; Bellove štatistiky sú nezávislé od poradia foliácie (|ΔS| < 0,005, S > 2 v každom usporiadaní), hoci 41 % jednotlivých párov trajektórií sa prepne.",
        "Verzia 4 pridáva sektor dynamickej geometrie — a hlási ho aj s jeho prekážkami. Exaktne zachovaný geometrický „ledger“ vynucuje čisto kontaktnú statickú odozvu (mriežkový náprotivok Gaussovho zákona na kompaktnom priestore), takže dvojtelesová sila je v tejto triede vylúčená; zdroj v rovnici prvého rádu nedokáže postaviť statické pole v žiadnej dimenzii; štyri nezávisle sondované silové kanály sú zablokované. Čo ledger dovolí: uvoľnenie zachovania voľného poľa pri exaktnom zachovaní celku vracia dlhý dosah bez straty bit-exaktnosti, carry-viazanie robí z tvrdenia „hmotnosť = počet viazaných tokenov“ meranie na 1 %, a keď hodiny čítajú druhý bitovo exaktný Gaussov zákon, slučka hmota→geometria→hmota sa kinematicky uzatvára (teleso spomalí vlastné hodiny o 30 %, zákon rýchlosti hodín sedí na 1,3 %, s kauzálnym nábehom). Nič z toho nie je všeobecná relativita — geometria je skalárny lapse, príťažlivosť nameraná nebola a v zachovávajúcej triede ju veta o prekážke zakazuje.",
        "Jediná falzifikovateľná predikcia sa nepočíta z formuly, ale meria priamo na engine: ξ_iso(3D) = 0,024299 ± 1,1×10⁻⁴ oproti exaktnému racionálnemu 187/7680 (0,20 %), subluminálne znamienko odlíšené od nuly na 221 σ ⇒ δ_γ,2 = −2ξ/E_Pl² = −3,27×10⁻⁴⁰ GeV⁻². Leží ~30× pod starším limitom Lang a spol. (2017), ale je v napätí ~3,3× s podmieneným limitom Pierre Auger (2022) pre scenár so subdominantnou protónovou zložkou — a teda rozhodnuteľná meraním kompozície UHECR, s prahovou signatúrou pri E* ≈ 2 EeV. Metodológia je rovnocenný príspevok: kritériá sa commitujú do verzovania pred každým behom (hash commitu je pečiatka), archív obsahuje aj samotné pre-registrácie vrátane zmien, ktoré neprešli, a v zázname je 19 vlastných retrakcií či korekcií headline výsledkov (štyri v tejto verzii). Celý doterajší výpočtový výskum stál ~35 USD na cloud GPU; celá séria dynamickej geometrie bežala s nulovými nákladmi na jednom hostiteľovi.",
      ],
      highlights: [
        "Bit-exaktne vratný celočíselný automat — evolúcia je permutácia mikrostavov, nie numerická integrácia",
        "Emergentný Schrödingerov sektor: dva rôzne substráty kolabujú na jeden univerzálny zákon rozplývania √(1+τ²)",
        "Deterministická dvojštrbina po jednom objekte (p < 10⁻⁴); trajektórie zhodné s Kocsis a spol. 2011",
        "CHSH = 2,79 bez náhody, s no-signalling kontrolou 0,3 %; Bellove štatistiky nezávislé od poradia foliácie",
        "Rotačná izotropia ako infračervený pevný bod (anizotropia mizne ako k², ≈ 1 % v 2D aj 3D)",
        "Dynamická geometria hlásená aj s prekážkami: exaktný ledger vynucuje kontaktnú statiku; „hmotnosť = viazané tokeny“ na 1 %",
        "Falzifikovateľná predikcia meraná na engine: δ_γ,2 = −3,27×10⁻⁴⁰ GeV⁻², v napätí ~3,3× s limitom Auger 2022",
        "19 vlastných korekcií v zázname; pre-registrácia pred každým behom; celý projekt za ~35 USD",
      ],
      stats: [
        { value: "2,79", label: "CHSH bez náhody" },
        { value: "19", label: "vlastných korekcií" },
        { value: "~$35", label: "výpočtové náklady" },
        { value: "DOI", label: "publikované (Zenodo)" },
      ],
      note: "Nie je to tvrdenie, že náš vesmír JE tento automat — je to existenčný dôkaz, že takýto svet unesie kvantovú fenomenológiu, kvantitatívne a reprodukovateľne. Preprint zatiaľ neprešiel nezávislou recenziou; vývojové repo je súkromné, archivovaný snapshot s kódom a pre-registráciami je na Zenode.",
    },
    en: {
      name: "DQC",
      status: "Published preprint",
      tagline: "Can a classical integer automaton carry quantum phenomenology?",
      lead: "A published preprint (Zenodo, v4): one bit-exactly reversible integer automaton in which an emergent Schrödinger sector, deterministic double-slit interference, CHSH = 2.79 and a falsifiable Planck-scale prediction all appear as measured, checksum-reproducible behaviour.",
      body: [
        "DQC (Discrete Quantum Computing) is the hypothesis that, at the deepest level, the physical world is an exact, reversible, integer computation — and a working substrate that takes the hypothesis seriously and tests its consequences. At its core is a Frenkel–Kontorova / sine-Gordon integer automaton (state in ℤ_M, Feistel updates): evolution is a permutation of integer microstates, not approximate numerical integration — which is precisely why the gates can be bit-exact rather than statistical.",
        "A quantum sector emerges from that classical substrate. The narrow-band envelope obeys the Schrödinger equation with an effective mass fixed by the curvature of the exact discrete dispersion, and two microscopically different substrates collapse onto the single universal spreading law √(1+τ²). Deterministic Bohmian tracers reproduce single-object double-slit interference (p < 10⁻⁴) with trajectories matching the weak-measurement reconstruction of Kocsis et al. 2011; CHSH = 2.79 comes out of position-valued outcomes with no randomness anywhere and a no-signalling control at 0.3 %. Alongside these: exact exchange statistics (Pauli exclusion as a bit-conserved invariant), a quantum eraser with literal bit-reversible un-measurement, and a measured branch-coherence decay law (R² = 0.997).",
        "The project is equally precise about where the boundary lies. The two-particle interaction is substrate-derived (cross-/self-phase ratio 2.31 against a parameter-free prediction of 2), yet the reconstructed state stays Schmidt rank 1 where the L² reference reaches K = 4.9: the substrate derives the Hamiltonian, not the L² state space — entanglement is carried, not derived, and spin is implemented. Velocity anisotropy vanishes as k² in the infrared with first-principles coefficients in both 2D and 3D (≈ 1 %), so rotational isotropy emerges as an infrared fixed point; Bell statistics are foliation-order-independent (|ΔS| < 0.005, S > 2 in every ordering) even though 41 % of individual trajectory pairs flip.",
        "Version 4 adds a dynamic-geometry sector — and reports it together with its obstructions. An exactly conserved geometric ledger forces the static response to be contact-only (the lattice counterpart of Gauss’s law on a compact space), so a two-body force is impossible in that class; a source entering the first-order equation cannot build a static field in any dimension; and four independently probed force channels are blocked. What the ledger does permit: relaxing conservation of the free field while keeping the total exact restores long range without losing bit-exactness, a carry-based binding rule turns “mass = number of bound tokens” into a 1 % measurement, and letting the clocks read a second bitwise-exact Gauss law closes the matter→geometry→matter loop kinematically (a body slows its own clock by 30 %, matching the clock-rate law to 1.3 %, with a causal onset). None of this is general relativity — the geometry is a scalar lapse, no attraction is measured, and the obstruction theorem forbids one in the conserving class.",
        "The one falsifiable prediction is measured on the engine rather than derived from a formula: ξ_iso(3D) = 0.024299 ± 1.1×10⁻⁴ against the exact rational 187/7680 (0.20 %), with the subluminal sign resolved from zero by 221 σ, giving δ_γ,2 = −2ξ/E_Pl² = −3.27×10⁻⁴⁰ GeV⁻². It sits ~30× below the older Lang et al. (2017) bound but is in ~3.3× tension with the conditional Pierre Auger (2022) limit for a source scenario with a subdominant proton component — so it is decidable by UHECR composition measurements, with a threshold signature at E* ≈ 2 EeV. Methodology is a co-equal contribution: criteria are committed to version control before each run (the commit hash is the timestamp), the archive ships the pre-registration designs themselves including changes that failed, and nineteen headline results have been retracted or corrected on record (four in this version). The entire computational effort so far cost ~US$35 of cloud GPU; the whole dynamic-geometry series ran at zero cost on a single host.",
      ],
      highlights: [
        "Bit-exactly reversible integer automaton — evolution is a permutation of microstates, not numerical integration",
        "Emergent Schrödinger sector: two different substrates collapse onto one universal spreading law √(1+τ²)",
        "Deterministic single-object double-slit interference (p < 10⁻⁴); trajectories matching Kocsis et al. 2011",
        "CHSH = 2.79 without randomness, with a no-signalling control at 0.3 %; Bell statistics foliation-order-independent",
        "Rotational isotropy as an infrared fixed point (anisotropy vanishes as k², ≈ 1 % in both 2D and 3D)",
        "Dynamic geometry reported with its obstructions: an exact ledger forces contact-only statics; “mass = bound tokens” to 1 %",
        "Falsifiable prediction measured on the engine: δ_γ,2 = −3.27×10⁻⁴⁰ GeV⁻², in ~3.3× tension with the Auger 2022 limit",
        "Nineteen self-corrections on record; pre-registration before every run; whole project for ~US$35",
      ],
      stats: [
        { value: "2.79", label: "CHSH without randomness" },
        { value: "19", label: "self-corrections" },
        { value: "~$35", label: "total compute cost" },
        { value: "DOI", label: "published (Zenodo)" },
      ],
      note: "This is not a claim that our universe is this automaton — it is an existence proof that such a world can carry quantum phenomenology, quantitatively and reproducibly. The preprint has not yet been independently peer-reviewed; the development repository is private, while the archived snapshot with code and pre-registrations is on Zenodo.",
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
      status: "Program",
      tagline: "4-mesačný transformačný program pre dlhovekosť — výživa, pohyb a regenerácia.",
      lead: "Skupinový koučingový program (2023), ktorý prekladá princípy zdravého starnutia do štyroch mesiacov reálnej zmeny návykov — s osobnými plánmi a certifikovanými absolventmi.",
      body: [
        "Prebudená Vitalita je 4-mesačný transformačný program, ktorý som viedol ako kouč. Stojí na troch pilieroch — výživa, pohyb a regenerácia — a spája skupinový koučing s osobným plánom pre každého účastníka.",
        "Výživa vitality vychádza z metódy Metabolic Balance: krvná diagnostika (36 parametrov), osobný plán výživy v štyroch fázach, aplikácia, receptár a online podpora — kedy a čo jesť a piť. Pohyb vitality rieši, kedy, koľko a aké metódy (SMART tréningové plány). Regenerácia a spánok pridáva meditácie, stress manažment a wellness návyky.",
        "Program má reálnych certifikovaných absolventov a je ľudským predchodcom aj sprievodcom platformy Newagy — tam, kde Newagy tieto princípy premieňa do personalizovanej AI aplikácie, Prebudená Vitalita ich odovzdáva cez osobný koučing.",
      ],
      highlights: [
        "4-mesačný transformačný program s osobnými plánmi a skupinovým koučingom",
        "Výživa: Metabolic Balance — krvná diagnostika (36 parametrov) + 4-fázový plán",
        "Pohyb: SMART tréningové plány — kedy, koľko a aké metódy",
        "Regenerácia: meditácie, stress manažment, spánok a wellness",
        "Reálni certifikovaní absolventi; ľudský predchodca platformy Newagy",
      ],
      stats: [
        { value: "4", label: "mesiace" },
        { value: "3", label: "piliere" },
        { value: "36", label: "krvných parametrov" },
      ],
    },
    en: {
      name: "Awakened Vitality",
      status: "Program",
      tagline: "A 4-month transformational longevity program — nutrition, movement and recovery.",
      lead: "A group-coaching program (2023) that translates the principles of healthy aging into four months of real habit change — with personal plans and certified graduates.",
      body: [
        "Awakened Vitality is a 4-month transformational program I led as a coach. It rests on three pillars — nutrition, movement and recovery — and combines group coaching with a personal plan for each participant.",
        "Vitality Nutrition is based on the Metabolic Balance method: blood diagnostics (36 parameters), a personal four-phase nutrition plan, an app, a recipe guide and online support — what and when to eat and drink. Vitality Movement covers when, how much and which methods (SMART training plans). Recovery & Sleep adds meditation, stress management and wellness habits.",
        "The program has real certified graduates and is the human predecessor and companion to the Newagy platform — where Newagy turns these principles into a personalized AI app, Awakened Vitality delivers them through personal coaching.",
      ],
      highlights: [
        "A 4-month transformational program with personal plans and group coaching",
        "Nutrition: Metabolic Balance — blood diagnostics (36 markers) + a 4-phase plan",
        "Movement: SMART training plans — when, how much and which methods",
        "Recovery: meditation, stress management, sleep and wellness",
        "Real certified graduates; the human predecessor to the Newagy platform",
      ],
      stats: [
        { value: "4", label: "months" },
        { value: "3", label: "pillars" },
        { value: "36", label: "blood markers" },
      ],
    },
  },
  {
    slug: "wellness",
    gradient: ["#3aa0e0", "#1f7fc4"],
    accent: "#1f7fc4",
    image: wellnessImg,
    imageAlt: "Wellness Warriors",
    glyph: "⚔",
    links: [
      { label: "Free mini-course", url: "/mini-course" },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@LongevityWellnessWarrior",
      },
    ],
    sk: {
      name: "Wellness Warriors",
      status: "Komunita + kurz",
      tagline: "Longevity komunita a bezplatný mini-kurz „The Awakening to Vitality“.",
      lead: "Wellness značka a komunita pre ľudí odhodlaných prevziať kontrolu nad zdravím a dlhovekosťou — vrátane bezplatného 8-lekciového mini-kurzu.",
      body: [
        "Wellness Warriors (Longevity Wellness Warrior) je wellness značka a komunita zameraná na dlhovekosť. Stavia na archetype „bojovníka za zdravie“ — človeka, ktorý hľadá merateľný pokrok, prevenciu a optimalizáciu životného štýlu.",
        "Jadrom je bezplatný longevity mini-kurz „The Awakening to Vitality“ — 8 krátkych lekcií o vede starnutia, pohybe, výžive, suplementoch, regenerácii a disciplíne — dostupný na YouTube aj priamo na tomto webe.",
        "Program prepája individuálne úsilie s podporou komunity a s nástrojmi a protokolmi Newagy — od vedomostí k trvalým návykom.",
      ],
      highlights: [
        "Bezplatný 8-lekciový mini-kurz „The Awakening to Vitality“",
        "Longevity komunita postavená na archetype bojovníka za zdravie",
        "Dôraz na merateľný pokrok, prevenciu a optimalizáciu životného štýlu",
        "Prepojené s Newagy a programom Prebudená Vitalita",
      ],
      stats: [
        { value: "8", label: "lekcií zdarma" },
        { value: "YouTube", label: "kanál" },
        { value: "Free", label: "mini-kurz" },
      ],
    },
    en: {
      name: "Wellness Warriors",
      status: "Community + course",
      tagline: "A longevity community and the free “Awakening to Vitality” mini-course.",
      lead: "A wellness brand and community for people determined to take control of their health and longevity — including a free 8-lesson mini-course.",
      body: [
        "Wellness Warriors (Longevity Wellness Warrior) is a wellness brand and community focused on longevity. It builds on the “health warrior” archetype — someone who seeks measurable progress, prevention and lifestyle optimization.",
        "At its core is the free longevity mini-course “The Awakening to Vitality” — 8 short lessons on the science of aging, movement, nutrition, supplements, regeneration and discipline — available on YouTube and right here on this site.",
        "The program pairs individual effort with community support and with Newagy's tools and protocols — turning knowledge into lasting habits.",
      ],
      highlights: [
        "A free 8-lesson mini-course, “The Awakening to Vitality”",
        "A longevity community built on the health-warrior archetype",
        "Emphasis on measurable progress, prevention and lifestyle optimization",
        "Connected to Newagy and the Awakened Vitality program",
      ],
      stats: [
        { value: "8", label: "free lessons" },
        { value: "YouTube", label: "channel" },
        { value: "Free", label: "mini-course" },
      ],
    },
  },
  {
    slug: "humanova",
    gradient: ["#10b981", "#0369a1"],
    accent: "#0369a1",
    image: humanovaImg,
    imageAlt: "Humanova Commons",
    glyph: "⬡",
    links: [{ label: "Read the vision", url: "/humanova" }],
    sk: {
      name: "Humanova Commons",
      status: "Vízia",
      tagline: "Civilizačná infraštruktúra pre AI éru — pre odolné komunity.",
      lead: "Premieňa časť AI produktivity, výpočtovej kapacity a ľudského príspevku na reálne verejné služby: bývanie, energiu, jedlo, vodu, vzdelávanie a starostlivosť.",
      body: [
        "Humanova Commons hľadá praktickú odpoveď na otázku, čo sa stane so spoločnosťou, keď AI a automatizácia oslabia tradičný model práce, príjmu a stability. Namiesto len peňazí buduje reálne kapacity a novú „commons“ vrstvu spoločnosti.",
      ],
      highlights: [
        "UBS (Universal Basic Services) namiesto len UBI — služby, nie hotovosť",
        "Compute ako verejný zdroj + ekonomika príspevku (EKO/SVC/CRED/REP)",
        "Trojvrstvový sociálny kontrakt a decentralizovaná štruktúra L0–L7",
        "Overiteľné na pilote v meste/mikroregióne (8 000–25 000 obyvateľov)",
      ],
      note: "Otvorený koncept — hľadá samosprávy, tech partnerov, investorov a komunity.",
    },
    en: {
      name: "Humanova Commons",
      status: "Vision",
      tagline: "AI-era civic infrastructure for resilient communities.",
      lead: "Turns part of AI productivity, compute capacity and human contribution into real public services: housing, energy, food, water, education and care.",
      body: [
        "Humanova Commons is a practical answer to what happens to society when AI and automation erode the traditional model of work, income and stability. Instead of cash alone, it builds real capacities and a new commons layer of society.",
      ],
      highlights: [
        "UBS (Universal Basic Services), not just UBI — services, not cash",
        "Compute as a public resource + a contribution economy (EKO/SVC/CRED/REP)",
        "A three-tier social contract and a decentralized L0–L7 structure",
        "Testable via a town/microregion pilot (8,000–25,000 people)",
      ],
      note: "An open concept — seeking municipalities, tech partners, investors and communities.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function content(p: Project, lang: Lang): LocalizedContent {
  return p[lang];
}
