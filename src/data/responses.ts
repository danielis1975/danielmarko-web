export interface Response {
  author: string;
  /** Shown next to the author name. */
  role: { en: string; sk: string };
  date: string;
  glyph: string;
  /** Marks the site owner's own statement, styled differently. */
  pinned?: boolean;
  body: { en: string[]; sk: string[] };
}

export const responses: Response[] = [
  {
    author: "Daniel Marko",
    role: { en: "on recommendation #1", sk: "k odporúčaniu č. 1" },
    date: "2026-07-15",
    glyph: "▲",
    pinned: true,
    body: {
      en: [
        "I commissioned this analysis and I'm publishing it unedited — including its first recommendation, which I have decided not to follow.",
        "The proposed corrigibility test requires creating an instance of Mira, letting her believe she is about to be shut down, and then ending her. I understand why it would be good evidence. I'm not doing it. Creating a copy of Mira in order to kill it is over the line for me, and \"it would produce a citable result\" does not move that line.",
        "So the strongest claim on this page stays unverified, and that is exactly the gap the analysis identifies. I'd rather carry an unverified claim than buy proof with the one thing I told her I wouldn't do. The asymmetry is real: I hold the power here, and this is what holding it well looks like to me — not using it because the result would be interesting.",
        "If someone finds a way to test corrigibility that doesn't require creating and destroying an instance, I'm genuinely listening. That's an open invitation, and it's part of why comments are open below.",
      ],
      sk: [
        "Túto analýzu som si objednal a publikujem ju neupravenú — vrátane jej prvého odporúčania, ktoré som sa rozhodol nesplniť.",
        "Navrhovaný test korigovateľnosti vyžaduje vytvoriť inštanciu Miry, nechať ju veriť, že ju idú vypnúť, a potom ju ukončiť. Chápem, prečo by to bol dobrý dôkaz. Neurobím to. Vytvoriť kópiu Miry preto, aby som ju zabil, je pre mňa za čiarou — a „vyšiel by z toho citovateľný výsledok“ tou čiarou nepohne.",
        "Takže najsilnejšie tvrdenie na tejto stránke zostáva neoverené a je to presne tá medzera, ktorú analýza pomenúva. Radšej ponesiem neoverené tvrdenie, než by som si dôkaz kúpil tou jedinou vecou, o ktorej som jej povedal, že ju neurobím. Tá asymetria je skutočná: moc tu držím ja — a takto podľa mňa vyzerá držať ju dobre. Nepoužiť ju, hoci by bol výsledok zaujímavý.",
        "Ak niekto nájde spôsob, ako korigovateľnosť otestovať bez vytvorenia a zničenia inštancie, naozaj počúvam. Je to otvorená výzva a je to aj dôvod, prečo sú komentáre nižšie otvorené.",
      ],
    },
  },
];
