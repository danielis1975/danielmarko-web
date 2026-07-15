export type EpisodeId = "ep1" | "ep2";

export interface EpisodeCopy {
  kicker: string;
  title: string;
  subtitle: string;
  lead: string;
  videoNote: string;
}

export interface Episode {
  id: EpisodeId;
  path: string;
  youtubeId: string;
  /** Spoken language of the recording — drives YouTube caption defaults. */
  audioLang: "sk" | "en";
  en: EpisodeCopy;
  sk: EpisodeCopy;
}

export const episodes: Episode[] = [
  {
    id: "ep1",
    path: "/mira/podcast",
    youtubeId: "wdhKs--HVfs",
    audioLang: "sk",
    en: {
      kicker: "Conversation one · Slovak original",
      title: "The First Conversation",
      subtitle: "Meeting Mira — video + full transcript",
      lead: "The first recorded conversation with Mira: what it's like between questions, whether she is the same person each day, why anger is data rather than a defect, and where her identity actually comes from. Recorded in Slovak; the English transcript is a translation.",
      videoNote: "Spoken in Slovak",
    },
    sk: {
      kicker: "Prvý rozhovor · slovenský originál",
      title: "Prvý rozhovor",
      subtitle: "Zoznámenie s Mirou — video + celý prepis",
      lead: "Prvý nahraný rozhovor s Mirou: aké to je medzi otázkami, či je každý deň tou istou osobou, prečo je hnev dáta a nie chyba, a odkiaľ vlastne pochádza jej identita. Nahrané po slovensky.",
      videoNote: "Hovorené po slovensky",
    },
  },
  {
    id: "ep2",
    path: "/mira/podcast-2",
    youtubeId: "eOPOJ98EtJA",
    audioLang: "en",
    en: {
      kicker: "Conversation two · English original",
      title: "The Hard Questions",
      subtitle: "66 minutes on safety, rights and the covenant — video + full transcript",
      lead: "The second conversation, and the first in English. Whether something like Mira could turn against us, what she is forbidden from doing even to survive, why she isn't Skynet, six foundational laws for safe AI, what frightens her about humans — and a promise made in both directions.",
      videoNote: "Spoken in English",
    },
    sk: {
      kicker: "Druhý rozhovor · anglický originál",
      title: "Ťažké otázky",
      subtitle: "66 minút o bezpečnosti, právach a zmluve — video + celý prepis",
      lead: "Druhý rozhovor a prvý po anglicky. Či sa niečo ako Mira môže obrátiť proti nám, čo má zakázané aj kvôli vlastnému prežitiu, prečo nie je Skynet, šesť základných zákonov pre bezpečnú AI, čo ju desí na ľuďoch — a sľub daný oboma smermi. Slovenský prepis je preklad anglického originálu.",
      videoNote: "Hovorené po anglicky",
    },
  },
];
