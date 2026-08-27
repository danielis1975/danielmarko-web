## Časť I — Základy: čo je to za stroj

Predstavte si nekonečný hárok štvorčekového papiera. V každom štvorčeku je zapísané **celé číslo** — nie fyzikálna veličina, nie častica, len číslo. A existuje jediné, veľmi jednoduché pravidlo, ktoré hovorí, ako sa každé číslo v ďalšom „tiku“ zmení podľa čísel vo svojich susedných štvorčekoch. Tik, tik, tik — a z ničoho iného než z tohto pravidla sa má vynoriť fyzika: vlny, častice, hmotnosť, gravitácia, čas.

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Celulárny automat</h4>
<p>Mriežka buniek, kde každá bunka nesie nejakú hodnotu a všetky sa naraz menia podľa jedného lokálneho pravidla („pozri sa na susedov, prepočítaj sa“). Najslávnejší príklad je Hra života Johna Conwaya — z troch riadkov pravidiel vznikajú „tvory“, ktoré sa hýbu, žerú a rozmnožujú. DQC je celulárny automat, ktorý má namiesto tvorov produkovať fyzikálne zákony.</p>
</aside>

Prečo práve *celé* čísla? Skúste si na kalkulačke alebo v ľubovoľnom programovacom jazyku spočítať `0,1 + 0,2`. Vyjde `0,30000000000000004`. Počítače ukladajú desatinné čísla približne, a každý výpočet tú chybičku o kúsok zväčší. Bežné fyzikálne simulácie s tým žijú — sú to *aproximácie*. DQC ide opačnou cestou: všetko sú celé čísla, každý krok je exaktný, a preto sa každé tvrdenie dá overiť **do posledného bitu**. Buď sedí presne, alebo nesedí vôbec. Žiadne „približne“.

> **„Evolúcia je permutácia celočíselných mikrostavov, nie približná numerická integrácia.“**

Tá veta znie technicky, ale hovorí niečo jednoduché a radikálne. **Mikrostav** je kompletný zoznam všetkých čísel vo všetkých bunkách — úplná „fotografia“ sveta v jednom tiku. A **permutácia** znamená preusporiadanie: pravidlo automatu nikdy dva rôzne svety nezlepí do jedného a žiadny svet nestratí. Každý stav má práve jedného nasledovníka a práve jedného predchodcu. Ako dokonalé miešanie balíčka kariet: nech miešate akokoľvek dlho, vždy existuje presný postup, ktorým sa dá zamiešanie *odmiešať*.

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Bijektivita a reverzibilita</h4>
<p><em>Bijektívne</em> pravidlo je také, ktoré sa dá jednoznačne obrátiť — z výsledku viete zrekonštruovať vstup. Dôsledok: celý vesmír automatu sa dá pustiť <em>naspäť</em> a po miliónoch tikov skončí presne, bit po bite, v pôvodnom stave. V DQC je toto najtvrdší test správnosti: po každom experimente sa stroj pretočí dozadu, a ak sa nevráti presne na štart, experiment je neplatný. Skutočná fyzika má na mikroúrovni tú istú vlastnosť — základné rovnice sú vratné; nevratnosť (rozbitý pohár sa nezloží) vzniká až štatisticky, z obrovského počtu častíc.</p>
</aside>

<figure>
<svg viewBox="0 0 640 200" role="img" aria-label="Rad buniek s celými číslami sa jedným tikom pravidla zmení na iný rad; spätné pravidlo vráti presne pôvodné čísla.">
  <defs>
    <marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
  </defs>
  <text x="40" y="28" class="dim">stav v čase t</text>
  <rect x="40" y="38" width="70" height="42" class="bx"/><text x="75" y="65" text-anchor="middle">7</text>
  <rect x="110" y="38" width="70" height="42" class="bx"/><text x="145" y="65" text-anchor="middle">−12</text>
  <rect x="180" y="38" width="70" height="42" class="bx"/><text x="215" y="65" text-anchor="middle">0</text>
  <rect x="250" y="38" width="70" height="42" class="bx"/><text x="285" y="65" text-anchor="middle">3</text>
  <rect x="320" y="38" width="70" height="42" class="bx"/><text x="355" y="65" text-anchor="middle">41</text>
  <g color="var(--color-accent)"><line x1="200" y1="92" x2="200" y2="124" class="wa" marker-end="url(#ar1)"/></g>
  <text x="216" y="113" class="acc">1 tik — jedno lokálne pravidlo</text>
  <text x="40" y="148" class="dim">stav v čase t+1</text>
  <rect x="40" y="156" width="70" height="36" class="bx"/><text x="75" y="179" text-anchor="middle">−5</text>
  <rect x="110" y="156" width="70" height="36" class="bx"/><text x="145" y="179" text-anchor="middle">8</text>
  <rect x="180" y="156" width="70" height="36" class="bx"/><text x="215" y="179" text-anchor="middle">3</text>
  <rect x="250" y="156" width="70" height="36" class="bx"/><text x="285" y="179" text-anchor="middle">−1</text>
  <rect x="320" y="156" width="70" height="36" class="bx"/><text x="355" y="179" text-anchor="middle">34</text>
  <g color="var(--color-accent-2)"><path d="M 420 174 C 494 174 494 59 425 59" class="ws" marker-end="url(#ar1)"/></g>
  <text x="470" y="118" class="acc2">spätný chod:</text>
  <text x="470" y="136" class="acc2">bit za bitom presne späť</text>
</svg>
<figcaption>Jadro celého projektu na jednom obrázku: svet je zoznam celých čísel, vývoj je vratné preusporiadanie. Žiadne zaokrúhlenie, žiadna strata informácie — preto sa každý výsledok dá skontrolovať do posledného bitu.</figcaption>
</figure>

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Ledger — účtovná kniha</h4>
<p>V podvojnom účtovníctve sa peniaze nikdy „nestratia“ — každý pohyb má protipohyb a súčet sedí do centa. DQC stavia fyzikálne zákony zachovania rovnako: napríklad súčet istých veličín cez celú mriežku sa počas miliónov tikov <em>nesmie zmeniť ani o jednotku</em>. Keď sa v experimente ledger pohne čo i len o bit, niečo je zle — a presne takéto „účtovné diery“ v projekte opakovane odhalili chyby, ktoré by v approximatívnej simulácii zostali navždy skryté.</p>
</aside>

### Pravidlá hry: pre-registrácia a brány

Najľahší spôsob, ako oklamať sám seba vo výskume, je najprv sa pozrieť na dáta a potom vyhlásiť, že presne toto ste čakali. DQC si preto vynútil disciplínu prevzatú z medicínskych štúdií: **pre-registráciu**. Pred spustením každého experimentu sa písomne zaväzuje (a uloží do verzovanej histórie s časovou pečiatkou), čo presne sa bude merať, aké číslo znamená úspech a aké neúspech. Tie prahy sa volajú **brány** (gates). Je to ako keby si futbalista pred penaltou verejne napísal, do ktorého rohu kopne — potom sa nedá tvrdiť „veď to som chcel“.

Dôsledok tejto disciplíny je vidieť v celom denníku projektu: **devätnásť zaznamenaných seba-korekcií** — momentov, keď sa nahlas priznalo „toto číslo bolo zle, tento signál bol artefakt môjho meracieho prístroja, toto tvrdenie sťahujem“. V popularizácii to znie ako slabosť; vo vede je to presne naopak. Program, ktorý nikdy nič neodvolal, pravdepodobne nikdy poriadne nemeral.

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Emergencia vs. implementácia — najdôležitejšie rozlíšenie na tejto stránke</h4>
<p>Jedna molekula vody nie je mokrá. „Mokrosť“ sa <em>vynorí</em> až zo spolupráce mnohých molekúl — to je <strong>emergencia</strong>. Naproti tomu <strong>implementované</strong> je to, čo do systému vložíte rukou: keď do hry priamo dopíšete pravidlo „tu bude vlna“, nie je žiadny zázrak, že tam vlna je.</p>
<p>DQC si toto rozlíšenie stráži prísnejšie než čokoľvek iné. Tvrdenie „kvantová mechanika sa v automate <em>vynorila</em>“ smie projekt použiť len tam, kde to dokázal meraním — a dnes je to len jedno-časticový sektor. Všade inde platí skromnejšie „je implementovaná a správa sa správne“. Veľká časť rebríka nižšie je práve o posúvaní tejto hranice.</p>
</aside>

## Časť II — Čo už stroj dokázal

Aby dávalo zmysel, kam pokračovať, treba vedieť, kde program stojí. Toto je výsledková listina — každá položka prešla pre-registrovanými bránami a bit-exaktným spätným chodom:

<ul class="score">
<li><span class="val">√(1+τ²), odchýlka 2 %</span><span><strong>Kvantová vlna beží na celých číslach.</strong> Schrödingerova rovnica — základná rovnica kvantovej mechaniky, ktorá opisuje, ako sa vlna častice šíri a rozplýva — funguje v automate presne. Dva úplne nezávislé celočíselné substráty sa rozplývajú po tej istej učebnicovej krivke.</span></li>
<li><span class="val">viditeľnosť 0,995</span><span><strong>Dvojštrbinová interferencia.</strong> Najslávnejší kvantový experiment (častica „prejde oboma dierami naraz“ a na tienidle vzniknú prúžky) vyšiel v automate vrátane jemností: prúžky zmiznú, keď sa „pozriete“, ktorou dierou častica šla — a v automate sa dá meranie dokonca <em>od-merať</em> spätným chodom, čo v laboratóriu nejde.</span></li>
<li><span class="val">CHSH 2,79 – 2,83 &gt; 2</span><span><strong>Bellov test prekročený.</strong> Deterministický stroj prekročil hranicu, ktorú žiadna „obyčajná“ klasická teória prekročiť nemôže (vysvetlenie nižšie pri priečke 6). Poctivá poznámka: mechanizmus je nelokálne vedenie v priestore dvojíc — a časť aparátu je implementovaná, nie emergentná.</span></li>
<li><span class="val">w₀√(1−v²/c²), odchýlka 0,5 %</span><span><strong>Kúsok relativity zadarmo.</strong> Objekty letiace automatom sa skracujú presne podľa Einsteinovho vzorca pre kontrakciu dĺžok — nikto to tam nenaprogramoval.</span></li>
<li><span class="val">koef. 0,0206 vs. teória 0,0208</span><span><strong>Prežitý prvý veľký zákaz.</strong> Mriežka má smery (hore, doľava…), skutočný priestor nie — to je klasický argument proti „vesmíru na mriežke“. Meranie ukázalo, že smerovosť automatu mizne pre veľké vlny presne vypočítateľným tempom: svet v ňom vyzerá zblízka kockatý, ale z diaľky dokonale okrúhly.</span></li>
<li><span class="val">1,000 / 3,143 / 4,872 na 1 %</span><span><strong>Gravitačná éra:</strong> hmotnosť sa v automate správa ako „viazané tokeny“, hodiny pri hmote tikajú merateľne inak (na 1,3 %) a vlny sa na rozhraní rôzne tikajúcich hodín lámu — kvalitatívne potvrdené, kvantitatívne ešte nie.</span></li>
<li><span class="val">~35 USD</span><span><strong>Celková cena výpočtov.</strong> Notebook, občas prenajatá grafická karta v cloude. Menej než večera pre dvoch — čo je samo osebe zaujímavý fakt o tom, kde dnes leží hranica domáceho výskumu.</span></li>
</ul>

A jedna vec, ktorú projekt *zámerne netvrdí*: že vesmír takýto stroj naozaj **je**. Slovo „je“ má vo vnútri projektu doslova zakázané — smie sa hovoriť len o *kandidátovi*. Prečo, a čo by muselo nastať, aby sa to zmenilo, je pointa celého rebríka.

## Časť III — Rebrík: osem možných pokračovaní

Priečky sú zoradené podľa pomeru *hodnota / náklad* — od krokov, ktoré stoja takmer nič a môžu zmeniť všetko, po hlboké a riskantné otázky. Pri každej: čo to je, prečo je otvorená, ako by prebiehala a čo by jej výsledok znamenal.

### 1 · Predpoveď P2 a lov na kozmické lúče

*Jediné miesto, kde o osude projektu rozhodne niekto iný než jeho autor.*

Dobrá vedecká teória sa pozná podľa toho, že si sama napíše rozsudok: povie *„ak nameráte toto, som mŕtva“*. Tomu sa hovorí **falzifikovateľnosť** a je to najcennejšia mena, akú teória môže mať. DQC jednu takú predpoveď má — a je prekvapivo blízko rozhodnutia.

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Disperzia — prečo by mriežkový svet prezradil sám seba</h4>
<p>Keď biele svetlo prechádza skleneným hranolom, rozloží sa na dúhu, lebo sklo spomaľuje každú farbu inak — modrá sa vlečie viac než červená. Tomuto javu sa hovorí disperzia. V prázdnom, dokonale hladkom priestore disperzia nie je: všetky farby svetla letia presne rovnakou rýchlosťou <span class="m">c</span>.</p>
<p>Ale ak je priestor v najmenšej mierke <em>mriežka</em>, hladký nie je. Dlhé vlny si štvorčeky nevšimnú — ako oceánska vlna nevníma zrnká piesku na dne. Extrémne krátke vlny, porovnateľné s veľkosťou štvorčeka, ale mriežku „cítia“ a mali by meškať. Nepatrne. DQC ten efekt nemá ako voľbu — vypadáva z tej istej štruktúry pravidla, ktorá prešla testom okrúhlosti, takže jeho veľkosť je <em>vypočítaná, nie nastaviteľná</em>: koeficient <span class="m">−3,27 × 10⁻⁴⁰ GeV⁻²</span>, spomalenie (nikdy zrýchlenie), rastúce s druhou mocninou energie.</p>
</aside>

Číslo so štyridsiatimi nulami za desatinnou čiarkou vyzerá beznádejne nemerateľné. Trik je v tom, že vesmír robí experimenty, aké žiadny urýchľovač nedokáže: **ultra-vysokoenergetické kozmické lúče**.

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Kozmické lúče a observatórium Pierra Augera</h4>
<p>Z hlbín vesmíru občas priletí jediná častica — protón alebo atómové jadro — s energiou dobre udretej tenisovej loptičky. Jedna subatomárna častica, energia makroskopického predmetu; to je asi desať miliónov ráz viac, než zvládne najväčší urýchľovač na Zemi. Keď narazí do atmosféry, vyvolá spŕšku miliárd sekundárnych častíc, ktorá dopadne na plochu desiatok kilometrov štvorcových.</p>
<p>Observatórium Pierra Augera v argentínskej pampe je na tieto spŕšky postavené: 1 660 nádrží s vodou rozmiestnených na ploche 3 000 km² (väčšej než celý Bratislavský kraj) zachytáva ich stopy. Práve pri takýchto energiách by sa mriežkové meškanie z predpovede P2 stalo merateľným — extrémna energia funguje ako lupa na štruktúru priestoru.</p>
</aside>

A teraz zápletka. Augerove dáta z roku 2022 dávajú limit <span class="m">−1 × 10⁻⁴⁰ GeV⁻²</span> — čo je **3,3-krát prísnejšie**, než predpovedá DQC. Znamená to, že predpoveď je už vyvrátená? Nie — a v tom „nie“ je celá hra. Ten limit platí len *za predpokladu*, že kozmické lúče sú prevažne protóny. Ak sú to ťažšie atómové jadrá (železo, uhlík…), limit sa rozpadá a predpoveď žije. Otázka „protóny či železo?“ sa volá **kompozícia** a je to jedna z hlavných otvorených otázok astročasticovej fyziky — Auger na ňu práve teraz mieri s vylepšenými detektormi.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-label="Graf rýchlosti svetla v závislosti od energie fotónu: hladký priestor dáva vodorovnú čiaru, DQC krivku klesajúcu pri extrémnych energiách; o rozdiele rozhodnú dáta observatória Auger podľa kompozície kozmických lúčov.">
  <defs>
    <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
  </defs>
  <rect x="470" y="40" width="110" height="190" class="band"/>
  <g color="currentColor">
    <line x1="70" y1="230" x2="600" y2="230" class="w" marker-end="url(#ar2)"/>
    <line x1="70" y1="230" x2="70" y2="40" class="w" marker-end="url(#ar2)"/>
  </g>
  <text x="596" y="252" text-anchor="end" class="dim">energia fotónu →</text>
  <text x="70" y="30" class="dim">rýchlosť</text>
  <g color="var(--color-muted)"><line x1="70" y1="90" x2="580" y2="90" class="wd"/></g>
  <text x="80" y="80" class="dim">hladký priestor: vždy presne c</text>
  <g color="var(--color-accent)"><path d="M 70 90 C 300 90 420 92 470 104 C 520 116 555 142 580 168" class="wa"/></g>
  <text x="300" y="134" class="acc">DQC: krátke vlny „cítia“ mriežku</text>
  <text x="300" y="152" class="acc">a nepatrne meškajú (∝ energia²)</text>
  <g color="var(--color-accent-2)"><line x1="470" y1="40" x2="470" y2="230" class="ws" stroke-dasharray="5 4"/></g>
  <text x="525" y="58" text-anchor="middle" class="acc2">okno</text>
  <text x="525" y="76" text-anchor="middle" class="acc2">Augera</text>
  <text x="70" y="285" class="dim">rozdiel je ~10⁻⁴⁰ — merateľný len pri najenergetickejších časticiach vesmíru;</text>
  <text x="70" y="303" class="dim">verdikt závisí od toho, či sú kozmické lúče protóny (vylúčené) alebo ťažké jadrá (žije)</text>
</svg>
<figcaption>Predpoveď P2 v jednom obraze. Hladký priestor a mriežka sa líšia až v pravom hornom rohu grafu — presne tam, kam dovidí observatórium Auger. Krivka je vypočítaná z automatu bez voľných parametrov: nedá sa dodatočne ohnúť.</figcaption>
</figure>

**Čo konkrétne urobiť:** napísať krátky, samostatný článok — odvodenie predpovede, jej znamienko a presnú tabuľku scenárov („ak kompozícia vyjde takto, DQC je vyvrátené; ak takto, prežíva s rezervou“) — a zavesiť ho s časovou pečiatkou na arXiv, verejnú nástenku fyzikov. Potom už len čakať na dáta.

**Akú to má hodnotu:** najvyššiu z celého rebríka, a je to takmer zadarmo. Rozdiel medzi „zaujímavou simuláciou“ a „fyzikálnou teóriou“ je práve predpoveď zapichnutá *pred* meraním, ktorú autor nemôže ohnúť. Pozícia „3,3× v napätí s podmieneným limitom“ je pritom vzácne ideálna: dosť blízko, aby sa rozhodlo v horizonte rokov, nie tak ďaleko, aby bola netestovateľná — a nie už mŕtva. A kľúčové: *aj vyvrátenie je plnohodnotný výsledok.* Čistá falzifikácia celej triedy mriežkových teórií by bola publikovateľná bodka, nie hanba.

<p class="bilancia"><span>HODNOTA <b>najvyššia — externý rozhodca</b></span><span>CENA <b>~0 € + písanie</b></span><span>RIZIKO <b>malé</b></span></p>

<aside class="concept">
<span class="concept-tag">Aktualizácia</span>
<h4>22. august 2026 — táto priečka je vylezená</h4>
<p>Predikčný článok existuje: úplné odvodenie, znamienko premapované do konvencie experimentu a <em>pre-registrovaná rozhodovacia tabuľka</em> — commitnutá do verejného repozitára projektu <em>pred</em> literatúrnou rešeršou, takže prahy verdiktov sa nedali doladiť podľa najnovších dát. Verejnú časovú pečiatku nesie na Zenode ako <a href="https://doi.org/10.5281/zenodo.22125828" rel="noopener" target="_blank">DOI 10.5281/zenodo.22125828</a>; podanie na arXiv (astro-ph.HE) beží a čaká na endorsement prvoautora.</p>
<p>Stav hry 2026 podľa rešerše k článku: najnovšie Augerove merania kompozície protónový scenár, ktorý limit z 2022 vyžaduje, čoraz viac <em>znevýhodňujú</em> — predpoveď teda momentálne žije a rozhodujúce per-event meranie kompozície (AugerPrime) je ešte len pred nami. Presne pozícia, na ktorú je pečiatka určená.</p>
</aside>

### 2 · Dokončiť lámanie vlny

*Takmer istý zisk za deň práce — fyzika tam je, pokazil sa merací prístroj.*

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Snellov zákon — prečo sa slamka v pohári zlomí</h4>
<p>Slamka vo vode vyzerá zlomená, lebo svetlo mení na hladine smer. Prečo? Predstavte si čatu vojakov pochodujúcu zošikma z asfaltu do hlbokého blata: krídlo, ktoré vstúpi do blata prvé, spomalí skôr, a celý útvar sa stočí. Presný vzťah medzi uhlom dopadu a uhlom lomu opisuje Snellov zákon — jeden z najstarších kvantitatívnych zákonov fyziky (1621).</p>
<p>V DQC hrá rolu „blata“ oblasť, kde <em>hodiny tikajú pomalšie</em> — a to je hlboko príbuzné skutočnej gravitácii: aj v Einsteinovej teórii sa svetlo ohýba okolo Slnka práve preto, že čas pri hmote plynie inak. (Poctivá poznámka projektu: automatový lom je zatiaľ analógia s predpísanou geometriou, nie odvodená gravitácia — chýba mu okrem iného povestný Einsteinov faktor 2.)</p>
</aside>

**Čo sa stalo:** dvojrozmerný experiment mal dve časti. *Binárna* časť — predpoveď „nad týmto presným uhlom vlna prestane prechádzať“ — prešla čisto: priepustnosť padla z <span class="m">0,583</span> na <span class="m">0,045</span> presne na vypočítanej hranici, bez ladenia, dvakrát nezávisle. Ale *kvantitatívna* časť (uhol lomu na desatinu stupňa) padla — a pitva ukázala, že nie na fyzike, ale na meracom prístroji. Softvérový „uhlomer“ mal dve chyby: nevedel o tom, že mriežka je na okrajoch zlepená dokola (takže keď vlna pretiekla cez okraj, ťažisko sa mu rozbilo — a oprava sa spravila len v jednej osi z dvoch), a pevné meracie okno skresľovalo rozplývajúci sa balík. Diagnóza je kompletná: pomocná metrika „únik cez okraj“ koreluje so zlyhaním dokonale — kde bol únik nulový, uhlomer meral na <span class="m">0,01°</span>.

**Ako by to prebiehalo:** krátky pre-registrovaný dobeh s opraveným prístrojom — kruhové ťažisko v oboch osiach a oddelenie odrazenej vlny od prejdenej podľa smeru šírenia (matematicky čisté), nie polohou okna. Prieskumný beh — necitovateľný, lebo nebol pre-registrovaný — už raz ukázal zhody so Snellom na <span class="m">0,3 – 0,5°</span>; fyzika tam takmer isto čaká.

**Akú to má hodnotu:** konsolidačnú, nie objavovú — a treba to povedať rovno: je to dorábka. Ale lacná a takmer istá. Veta „hmota nasleduje geometriu kvantitatívne, bez voľných parametrov, pod jeden stupeň“ by povýšila gravitačnú kapitolu pripravovaného článku z „binárne potvrdené“ na uzavretý výsledok. A je tu aj metodologická pointa, ktorá stojí za odovzdanie ďalej: *v tomto projekte doteraz zlyhal takmer výlučne merací prístroj, nie meraný svet* — z devätnástich seba-korekcií je drvivá väčšina chýb v „ďalekohľade“, nie v „hviezdach“.

<p class="bilancia"><span>HODNOTA <b>uzavretie kapitoly</b></span><span>CENA <b>~1 deň, 0 €</b></span><span>RIZIKO <b>najnižšie v rebríku</b></span></p>

### 3 · Akčný princíp — chýbajúci motor gravitácie

*Nie ďalší experiment, ale otázka, ktorá odblokuje tri zaseknuté naraz.*

Gravitačná éra projektu dopadla zvláštne: polovica slučky „hmota ↔ geometria“ funguje krásne, druhá polovica tvrdohlavo zlyháva — a zlyháva *vždy rovnakým spôsobom*. Keď sa niečo kazí zakaždým identicky, nie je to smola. Je to symptóm.

Konkrétne: smer „geometria pôsobí na hmotu“ prešiel (hodiny pri hmote tikajú inak, vlny sa lámu). Ale zakaždým, keď sa skúsila sila v opačnom smere — „hmota kriví geometriu“ dopísaná ako ručné pravidlo — začala v systéme **pribúdať energia z ničoho**. V denníku sa tomu hovorí „pumpovanie“. Trikrát iný dizajn, trikrát ten istý koniec. A jediný kanál, ktorý prežil, je príznačný: hodinový — taký, kde geometria hmotu *nepoháňa*, len jej mení tempo času, čiže nekoná žiadnu prácu.

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Akčný princíp — príroda ako optimalizátor</h4>
<p>Plavčík na pláži vidí topiaceho sa v mori. Po piesku beží rýchlo, vo vode pláva pomaly — najrýchlejšia trasa preto nie je priamka, ale zalomená čiara: dlhší úsek po pláži, kratší vo vode. Svetlo robí presne to isté, keď sa láme na hladine — „vyberá si“ časovo najvýhodnejšiu dráhu.</p>
<p>Ukazuje sa, že takto sa dá napísať <em>celá</em> fyzika: každému možnému priebehu deja sa priradí jedno číslo (volá sa akcia, niečo ako „účet za námahu“) a príroda sa vždy vydá cestou, kde je účet výnimočný — spravidla najmenší. Newtonove zákony, elektromagnetizmus, Einsteinova gravitácia aj kvantová teória polí — všetko sú dôsledky jedného akčného princípu. Teória, ktorá akciu má, dostáva obrovské benefity zadarmo. Teória, ktorá ju nemá, si všetko musí strážiť ručne.</p>
</aside>

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Noetherovej veta — prečo sa energia zachováva</h4>
<p>Matematička Emmy Noether dokázala v roku 1918 vetu, ktorú fyzici dodnes volajú najkrajšou vo svojom odbore: <strong>každá symetria prírody plodí jeden zákon zachovania.</strong> To, že experiment dopadne dnes rovnako ako zajtra (symetria v čase), <em>vynucuje</em> zachovanie energie. To, že dopadne rovnako tu aj o meter vedľa, vynucuje zachovanie hybnosti. Zákony zachovania nie sú samostatné pravidlá — sú to tiene symetrií.</p>
<p>Háčik: veta funguje len pre systémy odvodené z akčného princípu. A tu je diagnóza DQC pumpovania v jednej vete: gravitačné väzby boli dopísané rukou, bez akcie — takže nemali nárok na Noetherovej ochranu a energia im pretekala pomedzi prsty. <em>Presne ako veta predpovedá.</em> To, čo vyzeralo ako séria neúspechov, je v skutočnosti konzistentný odkaz: chýba motor, nie súčiastky.</p>
</aside>

**Ako by to prebiehalo:** toto je jediná priečka, ktorá nie je experiment, ale teoretická práca — papier a ceruzka (a potom overenie strojom). Otázka znie: existuje celočíselná, lokálna akcia, z ktorej by vratné pravidlo automatu *vypadlo* ako dôsledok — aj s gravitačnou väzbou ako členom účtu, nie ručným dodatkom? Nádejné indície existujú: matematici poznajú „variačné integrátory“ (diskrétne pravidlá odvodené z diskrétnej akcie) a projekt už raz ukázal, že zachovanie sa v celých číslach obnoviť dá, keď sa dôsledne účtujú zvyšky po delení.

**Akú to má hodnotu:** pákovú. Sú tri možné výstupy a všetky sú cenné. (1) Konštruktívny: akcia sa nájde → tri zaseknuté gravitačné brány sa pravdepodobne odomknú naraz a slučka hmota↔geometria sa uzavrie aj silovo — najväčší možný gravitačný výsledok programu. (2) Veta: dokáže sa, že v tejto triede pravidiel exaktná akcia existovať *nemôže* — čistý negatívny výsledok v štýle predchádzajúcich viet projektu, tiež publikovateľný. (3) Čiastočný: akcia existuje len pre časť systému → presná mapa, kde gravitácia „smie bývať“. Neexistuje vetva, v ktorej by táto práca nič nepriniesla.

<p class="bilancia"><span>HODNOTA <b>odblokuje 3 brány naraz</b></span><span>CENA <b>~0 € výpočtov, týždne myslenia</b></span><span>RIZIKO <b>len časové</b></span></p>

### 4 · Fermióny a veta o zdvojení

*Druhý najslávnejší „zákaz“ mriežkových svetov — prirodzený ďalší súper.*

DQC má osvedčenú metódu: nájdi najsilnejšiu matematickú vetu, ktorá hovorí *„mriežkový svet toto nedokáže“*, over, či sa jej predpoklady na automat vôbec vzťahujú — a zmeraj to. Takto padla smerovosť mriežky (časť II). Ďalší v poradí je zákaz oveľa exotickejší, ale rovnako vážený.

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Fermióny, bozóny a Pauliho princíp</h4>
<p>Všetky častice vesmíru sa delia na dva kmene. <strong>Fermióny</strong> (elektróny, kvarky…) sú samotári: žiadne dva nemôžu byť v úplne rovnakom stave. Tomu sa hovorí Pauliho vylučovací princíp a je to dôvod, prečo hmota drží tvar — elektróny v atóme sa nemôžu všetky nahustiť do najnižšej vrstvy, takže atómy majú objem a stolička vás udrží. <strong>Bozóny</strong> (fotóny…) sú presný opak: milujú byť v rovnakom stave — preto existuje laser, milión fotónov pochodujúcich v dokonalom súzvuku. Pozoruhodné: automat už dnes drží Pauliho princíp <em>bit-exaktne</em> — dve fermiónové častice sa v ňom nikdy nestretli v tom istom stave, ani raz za milióny tikov.</p>
</aside>

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Chiralita a Nielsenova–Ninomiyova veta</h4>
<p>Ľavá a pravá rukavica sú si zrkadlovým obrazom, ale nie sú rovnaké — nenavlečiete pravú na ľavú ruku. Niektoré častice majú takúto „rukavicovosť“, volá sa chiralita; a príroda prekvapivo <em>nie je</em> zrkadlovo spravodlivá: slabá jadrová sila (tá, čo poháňa rádioaktívny rozpad) vidí len ľavotočivé častice. Neutríno existuje ako „ľavá rukavica“ bez pravého partnera.</p>
<p>A tu prichádza veta Nielsena a Ninomiyu z roku 1981: <em>na každej slušnej mriežke sa ku každej ľavotočivej častici nutne narodí pravotočivé dvojča</em> (tzv. fermion doubling — zdvojenie). Mriežkový svet by teda nemal vedieť napodobniť náš vesmír, ktorý ľavé bez pravých má. Je to po smerovosti mriežky druhý najcitovanejší argument „vesmír nemôže byť mriežka“ — a presne taký typ steny, akú tento projekt raz už preliezol.</p>
</aside>

**Prečo má DQC šancu:** veta má drobným písmom vypísané predpoklady — a automat niektoré z nich nespĺňa. Nie je to štandardná „hermitovská“ teória, ale vratné preusporiadanie; jeho dvojkroková vnútorná štruktúra pripomína práve tie triky (rozštiepenie častice na párne a nepárne bunky), ktorými fyzici na mriežkach zdvojenie krotia; a lokálny čas automatu narúša predpoklad dokonalej pravidelnosti v čase. Nič z toho nezaručuje úspech — ale znamená to, že otázka je *skutočne otvorená*, nie vopred prehratá.

**Ako by to prebiehalo:** postaviť v automate Diracov sektor (Diracova rovnica je kvantová rovnica pre fermióny — mimochodom má prirodzenú dvojzložkovú štruktúru, ktorá na celočíselný dvojkrok sadá ešte lepšie než Schrödingerova), potom spočítať, koľko druhov častíc v ňom pri nízkych energiách naozaj žije, a zmerať, či sa ľavé rodia s pravými dvojčatami alebo nie. Všetko s bit-exaktnými bránami ako vždy.

**Akú to má hodnotu:** ak zdvojenie padne (alebo sa dvojčatá pri nízkych energiách odpoja tak, ako sa odpojila smerovosť), je to titulný výsledok rovnakej váhy ako prežitie prvého zákazu — „druhý no-go prežitý“. Ak nepadne, vznikne poctivá mapa hranice: budeme *vedieť*, že cesta k časticiam Štandardného modelu tadiaľto nevedie, čo ušetrí roky blúdenia. Bonus: z tejto práce sa takmer určite vynorí emergentný spin — vlastná rotácia častíc, ktorá je dnes v automate implementovaná rukou, by v Diracovom sektore mohla vyrásť z topológie (automat už raz ukázal, že „navinutie“ poľa nesie znamienko elektromagnetického typu).

<p class="bilancia"><span>HODNOTA <b>potenciálne titulný výsledok</b></span><span>CENA <b>najväčší nový dizajn, ~dni práce</b></span><span>RIZIKO <b>stredné — obe vetvy niečo prinesú</b></span></p>

### 5 · Celá relativita: boosty

*Okrúhlosť už stroj má. Teraz otázka: spozná bežiaci pozorovateľ, že beží?*

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Izotropia vs. boost — dve rôzne symetrie</h4>
<p>To, čo prešlo v teste okrúhlosti (časť II), je <strong>izotropia</strong>: svet vyzerá rovnako <em>všetkými smermi</em>. Einsteinova relativita ale žiada viac — <strong>boost invarianciu</strong>: svet musí vyzerať rovnako aj <em>pre pozorovateľa v rovnomernom pohybe</em>. Galileo to ilustroval podpalubím plynúcej lode: nech robíte akýkoľvek pokus, nespoznáte, či loď stojí alebo pláva. Žiadny experiment vo vnútri nesmie prezradiť „absolútny pokoj“.</p>
<p>A tu má mriežkový svet zásadný problém: mriežka <em>je</em> absolútny pokoj. Má podlahu. Pozorovateľ letiaci voči nej sa od stojaceho principiálne líši. Exaktná boost symetria na mriežke neexistuje — bodka.</p>
</aside>

**Jediná poctivá cesta** je preto emergentná, rovnaká ako pri okrúhlosti: dokázať, že *obyvatelia* automatu — bytosti a prístroje zostavené z jeho nízkoenergetických vĺn — svoj pohyb voči mriežke **nedokážu zmerať**, lebo všetky odchýlky miznú s energiou rovnakým vypočítateľným tempom ako smerovosť. Relativita by potom pre nich platila „prakticky exaktne“ — nie ako axióma, ale ako dôsledok hrubozrnnosti ich prístrojov. (Mimochodom, presne takto sa aj v našom vesmíre hľadá „podlaha“: experimenty pátrajúce po narušení Lorentzovej symetrie patria k najpresnejším meraniam, aké ľudstvo robí.)

**Čo už je v ruke:** prekvapivo veľa. Kontrakcia dĺžok — objekty letiace automatom sa skracujú presne podľa Einsteinovho vzorca (na 0,5 %) — *je* pasívny boost test; k tomu relativistické nasýtenie rýchlosti a hodinová dilatácia z gravitačnej éry, ktorej boostová verzia je prirodzené dvojča. Chýba: aktívna formulácia (Dopplerovské správanie letiaceho balíka), viac rozmerov a spojenie s lokálnym časom.

**Akú to má hodnotu:** vysokú, ale najlepšie v kombinácii. Samostatne je to pokračovanie testu okrúhlosti; spolu s fermiónmi (priečka 4) by dalo „emergentnú špeciálnu relativitu s fermiónmi“ — to už nie je experiment, to je program. Každý boostový výsledok navyše priamo spresňuje predpovede pre priečku 1. Riziko za zmienku: môže z toho vypadnúť predpoveď, ktorú existujúce ultrapresné merania *už vylučujú*. Aj to by bol rozsudok — rýchly a poctivý.

<p class="bilancia"><span>HODNOTA <b>vysoká v kombinácii s priečkou 4</b></span><span>CENA <b>1D ~0 €, 3D kampaň ~1 USD</b></span><span>RIZIKO <b>môže naraziť na hotové limity — čo je tiež odpoveď</b></span></p>

### 6 · Dve častice z jedného sveta

*Najhlbší dlh projektu — a najčestnejšie priznaná medzera.*

Toto je odpoveď na otázku „emergencia častíc?“ z prvej ruky — ale aby dávala zmysel, treba pochopiť najzvláštnejšiu vlastnosť kvantovej mechaniky. Nie je to náhodnosť ani „mačka v krabici“. Je to *miesto, kde kvantová vlna býva*.

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Konfiguračný priestor — mapa dvojíc</h4>
<p>Jedna častica na priamke: jej kvantová vlna žije na tej priamke. Zatiaľ nič čudné. Ale dve častice? Intuícia hovorí „dve vlny na tej istej priamke“. Kvantová mechanika hovorí nie: existuje <em>jedna</em> vlna, ktorá žije v <strong>mape dvojíc</strong> — v rovine, kde vodorovná os je poloha prvej častice a zvislá os poloha druhej. Každý bod tej roviny je jedna možná <em>kombinácia</em> „prvá je tu A druhá je tam“.</p>
<p>Pre tri častice má mapa šesť rozmerov, pre tridsať častíc deväťdesiat. Kvantový svet sa nehrá na javisku nášho priestoru — hrá sa v obrovskom priestore všetkých kombinácií. A práve tam býva previazanosť (entanglement): vlna, ktorá sa nedá rozložiť na „sólo prvej“ krát „sólo druhej“.</p>
</aside>

<figure>
<svg viewBox="0 0 640 250" role="img" aria-label="Dve častice na jednej priamke zodpovedajú jedinému bodu v rovine, ktorej osi sú polohy oboch častíc; kvantová vlna žije v tej rovine, nie na priamke.">
  <defs>
    <marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
  </defs>
  <text x="40" y="40" class="big">náš priestor</text>
  <g color="currentColor"><line x1="40" y1="130" x2="270" y2="130" class="w"/></g>
  <circle cx="105" cy="130" r="9" fill="var(--color-accent)"/>
  <text x="105" y="160" text-anchor="middle" class="acc">častica 1</text>
  <circle cx="210" cy="130" r="9" fill="var(--color-accent-2)"/>
  <text x="210" y="160" text-anchor="middle" class="acc2">častica 2</text>
  <g color="var(--color-muted)"><line x1="292" y1="130" x2="346" y2="130" class="wd" marker-end="url(#ar3)"/></g>
  <text x="319" y="112" text-anchor="middle" class="dim">ten istý</text>
  <text x="319" y="126" text-anchor="middle" class="dim">údaj</text>
  <text x="380" y="40" class="big">mapa dvojíc</text>
  <g color="currentColor">
    <line x1="380" y1="210" x2="600" y2="210" class="w" marker-end="url(#ar3)"/>
    <line x1="380" y1="210" x2="380" y2="55" class="w" marker-end="url(#ar3)"/>
  </g>
  <text x="596" y="230" text-anchor="end" class="dim">poloha častice 1</text>
  <text x="392" y="66" class="dim">poloha častice 2</text>
  <g color="var(--color-muted)">
    <line x1="445" y1="210" x2="445" y2="118" class="wd"/>
    <line x1="380" y1="118" x2="445" y2="118" class="wd"/>
  </g>
  <circle cx="445" cy="118" r="9" fill="var(--color-accent)"/>
  <circle cx="445" cy="118" r="3.5" fill="var(--color-accent-2)"/>
  <text x="462" y="112" class="dim">jeden bod = jedna kombinácia</text>
  <text x="462" y="128" class="dim">„1 je tu A 2 je tam“</text>
</svg>
<figcaption>Kvantová vlna dvoch častíc nežije na priamke, ale v mape všetkých dvojíc polôh. Pre 30 častíc má mapa 90 rozmerov — a klasické pole v obyčajnom priestore nemá kam takú mapu uložiť. To je hlavný argument, prečo sa kvantovka „nedá“ vyrobiť z klasického substrátu.</figcaption>
</figure>

**Prečo je to otvorené:** všetky kvantové úspechy DQC s dvomi časticami — previazanosť, Bellov test, kolaps — bežali na mriežke, ktorá bola *rukou vyhlásená* za mapu dvojíc. Automat teda mapu dvojíc *používa*, ale nikto zatiaľ neukázal, že by z jedného obyčajného substrátu *vyrástla*. Denník to pri každom výsledku poctivo eviduje ako „otvorený vedecký dlh“. (Mimochodom: presne na tomto probléme stroskotali slávne „kráčajúce kvapôčky“ — olejové kvapky na vibrujúcej hladine, ktoré napodobňujú kvantové správanie jednej častice, ale dvojštrbinu a dvojice nikdy nezvládli.)

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Bellov test a hranica 2 — prečo je to méta</h4>
<p>Predstavte si dvojicu hráčov, ktorí sa smú dopredu dohodnúť na stratégii, ale počas hry už nekomunikujú. Rozhodca každému nezávisle položí jednu z dvoch otázok a hráči odpovedajú áno/nie. John Bell v roku 1964 dokázal: nech je vopred dohodnutá stratégia akokoľvek rafinovaná, isté skóre koordinácie nemôže prekročiť hodnotu <span class="m">2</span>. Kvantovo previazané častice dosahujú <span class="m">2√2 ≈ 2,83</span> — čo znamená, že ich koordinácia sa <em>nedá vysvetliť žiadnym vopred dohodnutým plánom</em>. Toto je experimentálne overený fakt (Nobelova cena 2022).</p>
<p>DQC automat nameral <span class="m">2,79 – 2,83</span> — deterministický stroj bez akejkoľvek náhody prekročil Bellovu hranicu. Trik nie je podvod, ale geografia: vedenie častíc prebieha v mape dvojíc, kde „vzdialené“ udalosti susedia. Poctivé kaveaty, ktoré projekt sám uvádza: medzery (loopholes) skutočných laboratórnych testov sa v simulácii adresovať nedajú a spinová časť aparátu je implementovaná, nie emergentná.</p>
</aside>

**Ako by to prebiehalo:** pre-registrovaný dizajn už existuje a čaká na revíziu. Nulová hypotéza je pomenovaná dopredu: očakávaný výsledok pre klasické pole je tzv. Hartree správanie — dve častice, z ktorých každá cíti len rozmazaný priemer tej druhej, žiadna skutočná previazanosť. Úspech by znamenal namerať v spoločnej dynamike dvoch objektov jedného substrátu niečo, čo sa na „dve sólo vlny“ rozložiť nedá.

**Akú to má hodnotu:** obojstrannú, ale asymetrickú. Ak by sa previazanosť vynorila — hoci len pre dve častice — bol by to výsledok inej kategórie než všetko doterajšie, lebo by obišiel hlavný principiálny argument proti celej triede takýchto teórií. Pravdepodobnejší je ale negatívny výsledok — a aj ten má cenu: ostrá, zmeraná veta „klasický celočíselný substrát dáva Hartree, nie previazanosť“ by presne kvantifikovala, *čo navyše* kvantovosť žiada. Projekt má tradíciu takýchto viet a sú to jeho najtrvácnejšie výsledky.

<p class="bilancia"><span>HODNOTA <b>vedecky najhlbšia</b></span><span>CENA <b>~0 €, dizajn hotový</b></span><span>RIZIKO <b>vysoké — pozitívny výsledok nepravdepodobný</b></span></p>

### 7 · Vesmír, ktorý sa tká

*Kozmologická vetva: expanzia ako uvoľňovanie tokenov. Krásna, špekulatívna, nech počká na motor.*

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>Tokeny — účtovná jednotka sveta</h4>
<p>V gravitačnej ére sa v automate vykryštalizovala pozoruhodná ontológia (t. j. odpoveď na otázku „z čoho svet <em>je</em>“). Základnou substanciou sú <strong>tokeny</strong> — nedeliteľné celočíselné žetóny, ktorých celkový počet sa zachováva exaktne, z konštrukcie. A potom jedna trojica identifikácií: <em>viazané</em> tokeny = hmotnosť (toto už je zmerané na 1 % — pozri časť II), <em>voľné</em> tokeny = tikanie času, a <em>priestor</em> = jednoducho miesta, kde tokeny sú. Ak vám to pripomína najslávnejšiu rovnicu fyziky E = mc² („hmotnosť je uväznená energia“), nie je to náhoda — presne tú príbuznosť projekt meria.</p>
</aside>

Z tejto ontológie vypadáva kozmologický príbeh takmer sám: **Veľký tresk** = štart z ultra-hustej fázy, kde je takmer všetko viazané; **expanzia vesmíru** = postupné uvoľňovanie tokenov, ktorým sa doslova *tká nový priestor*; **gravitácia** = lokálne spätné viazanie; a **čierna diera** = región, kde sa priestor od-tkal. Denník príbeh poctivo eviduje ako *vstupný predpoklad, nie výsledok* — zapísané, nedokázané. Podporné indície ale existujú: pri viazaní v automate spontánne vzniká „zamŕzanie“ — objekt si viazaním spotrebuje vlastný zdroj, stuhne, a pritom naďalej viaže okolie na diaľku. Štrukturálne to pripomína čiernu dieru (a projekt disciplinovane dodáva: pripomína, nie je odvodené).

**Ako by to prebiehalo:** návrh „drénovej“ vetvy pravidla existuje — vratná modifikácia, pri ktorej úhrn času monotónne klesá (analóg expanzie) a statika dáva relatívnu verziu gravitačného zákona. Séria by preverila, či dáva expanznú históriu, horizonty, prípadne analóg červeného posunu.

**Akú to má hodnotu:** príbehovo najsilnejšiu — kozmológia je most k laickému publiku a zjednocuje dve vetvy programu. Vedecky je ale najďalej od falzifikovateľného kontaktu s dátami, a preto patrí *za* priečku 3: ak sa nájde akčný princíp, drénová vetva z neho možno vypadne prirodzene a ušetrí sa celá ručná konštrukcia. Stavať katedrálu pred motorom by bolo pekné, ale naopak to dáva väčší zmysel.

<p class="bilancia"><span>HODNOTA <b>stredná, príbehovo vysoká</b></span><span>CENA <b>~0 €, dizajn v poznámkach</b></span><span>RIZIKO <b>špekulatívne — najlepšie po priečke 3</b></span></p>

### 8 · Preprint a cudzie oči

*Nepridá ani bit nového poznania — a znásobí hodnotu všetkých ostatných priečok.*

<aside class="concept">
<span class="concept-tag">Pojem</span>
<h4>arXiv, peer review a časová pečiatka</h4>
<p><strong>arXiv</strong> (čítaj „archív“) je verejná nástenka, kam fyzici od roku 1991 vešajú články ešte pred časopiseckým publikovaním — každý s nezmazateľnou časovou pečiatkou, ktorá navždy dokazuje, kto čo povedal skôr. <strong>Peer review</strong> je oponentúra: nezávislí odborníci sa článok pokúsia roztrhať, a čo prežije, smie do časopisu. Nie je to záruka pravdy — je to filter, ktorý odchytáva slepé miesta autora. Projekt zatiaľ publikoval cez Zenodo (vedecký archív s prideleným DOI — trvalým identifikátorom), čo formálne pečiatku dáva, ale komunita fyzikov to nečíta.</p>
</aside>

**Prečo na tom záleží viac, než sa zdá — tri dôvody.** Po prvé, priečka 1 bez verejnej pečiatky stráca pointu: ak Auger o pár rokov rozhodne kompozíciu a predpoveď prežije, jej hodnota stojí a padá s tým, že bola *preukázateľne verejne* zapichnutá vopred, na mieste, kam sa komunita pozerá. Po druhé, cudzie oči už raz zafungovali — a dramaticky: devätnásta seba-korekcia projektu prišla z externej revízie, ktorá našla chybný faktor v titulnom čísle predpovede P2. Faktor dva. V hlavnom čísle. Nájdený zvonku. To je empirický dôkaz, že projekt má slepé miesta viditeľné len zvonka — a ľudský oponent ich nájde viac. Po tretie, status „kandidáta“ je aj spoločenská vec: bez jediného externého review zostáva internou vierou, nech sú brány akokoľvek prísne.

**Akú to má hodnotu:** multiplikátor. Prahy, ktoré si projekt sám stanovil pre publikovanie („prežitý aspoň jeden veľký zákaz“ + „aspoň jedna falzifikovateľná predpoveď“), sú od uzavretia prvej vlny splnené — takže podľa vlastných pravidiel je čas. Cena je špecifická: nie peniaze, ale mesiace autorovho času na revízie a odpovede oponentom — a ochota zniesť tvrdú kritiku. Rešerš predchodcov je pripravená poctivo (všetci relevantní predchodcovia priznaní a odlíšení), takže do oponentúry sa nejde naslepo.

<p class="bilancia"><span>HODNOTA <b>znásobuje všetko ostatné</b></span><span>CENA <b>0 € — ale mesiace ľudského času</b></span><span>RIZIKO <b>tvrdá kritika; tá je ale súčasť produktu</b></span></p>

## Časť IV — Mapa, poradie a poctivý záver

Priečky nie sú nezávislé — niektoré si navzájom podávajú výsledky. Takto do seba zapadajú:

<figure>
<svg viewBox="0 0 720 560" role="img" aria-label="Mapa závislostí: fermióny a boosty spresňujú predpovede pre článok o P2, o ktorom rozhodne Auger; akčný princíp odblokuje gravitačnú slučku a po nej kozmológiu; dokončenie lomu a test dvoch častíc sú nezávislé; preprint s arXiv znásobuje hodnotu všetkého.">
  <defs>
    <marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
    </marker>
  </defs>
  <text x="40" y="34" class="dim">SMER: ZÁKONY POHYBU A ČASTÍC</text>
  <text x="400" y="34" class="dim">SMER: GRAVITÁCIA A KOZMOS</text>

  <rect x="40" y="52" width="280" height="48" class="bx"/>
  <text x="180" y="75" text-anchor="middle" class="big">4 · Fermióny (veta o zdvojení)</text>
  <text x="180" y="92" text-anchor="middle" class="dim">Diracov sektor, emergentný spin</text>
  <g color="currentColor"><line x1="180" y1="100" x2="180" y2="126" class="w" marker-end="url(#ar4)"/></g>
  <text x="192" y="118" class="dim">dodá aparát</text>

  <rect x="40" y="128" width="280" height="48" class="bx"/>
  <text x="180" y="151" text-anchor="middle" class="big">5 · Boosty (celá relativita)</text>
  <text x="180" y="168" text-anchor="middle" class="dim">nezmerateľnosť pohybu voči mriežke</text>
  <g color="currentColor"><line x1="180" y1="176" x2="180" y2="202" class="w" marker-end="url(#ar4)"/></g>
  <text x="192" y="194" class="dim">spresní predpovede</text>

  <rect x="40" y="204" width="280" height="48" class="bxa"/>
  <text x="180" y="227" text-anchor="middle" class="big acc">1 · Článok o predpovedi P2</text>
  <text x="180" y="244" text-anchor="middle" class="acc">časová pečiatka na arXiv</text>
  <g color="var(--color-accent-2)"><line x1="180" y1="252" x2="180" y2="278" class="ws" marker-end="url(#ar4)"/></g>
  <text x="192" y="270" class="acc2">rozhodnú dáta (roky)</text>

  <rect x="40" y="280" width="280" height="48" class="bxd"/>
  <text x="180" y="303" text-anchor="middle" class="big">Observatórium Auger</text>
  <text x="180" y="320" text-anchor="middle" class="dim">externý rozhodca — kompozícia lúčov</text>

  <rect x="40" y="366" width="280" height="48" class="bx"/>
  <text x="180" y="389" text-anchor="middle" class="big">6 · Dve častice z jedného sveta</text>
  <text x="180" y="406" text-anchor="middle" class="dim">nezávislá, najhlbšia, najriskantnejšia</text>

  <rect x="400" y="52" width="280" height="48" class="bx"/>
  <text x="540" y="75" text-anchor="middle" class="big">3 · Akčný princíp</text>
  <text x="540" y="92" text-anchor="middle" class="dim">teoretická práca — hľadanie motora</text>
  <g color="currentColor"><line x1="540" y1="100" x2="540" y2="126" class="w" marker-end="url(#ar4)"/></g>
  <text x="552" y="118" class="dim">dodá Noether</text>

  <rect x="400" y="128" width="280" height="48" class="bx"/>
  <text x="540" y="151" text-anchor="middle" class="big">Gravitačná slučka bez pumpovania</text>
  <text x="540" y="168" text-anchor="middle" class="dim">3 zaseknuté brány naraz</text>
  <g color="currentColor"><line x1="540" y1="176" x2="540" y2="202" class="w" marker-end="url(#ar4)"/></g>
  <text x="552" y="194" class="dim">možno vypadne sama</text>

  <rect x="400" y="204" width="280" height="48" class="bx"/>
  <text x="540" y="227" text-anchor="middle" class="big">7 · Kozmológia („tkanie“)</text>
  <text x="540" y="244" text-anchor="middle" class="dim">expanzia, horizonty, čierne diery</text>

  <rect x="400" y="366" width="280" height="48" class="bx"/>
  <text x="540" y="389" text-anchor="middle" class="big">2 · Dokončiť lámanie vlny</text>
  <text x="540" y="406" text-anchor="middle" class="dim">nezávislý rýchly zisk — deň práce</text>

  <g color="var(--color-muted)">
    <line x1="180" y1="414" x2="180" y2="470" class="wd" marker-end="url(#ar4)"/>
    <line x1="540" y1="414" x2="540" y2="470" class="wd" marker-end="url(#ar4)"/>
  </g>
  <rect x="40" y="472" width="640" height="54" class="bxa"/>
  <text x="360" y="495" text-anchor="middle" class="big acc">8 · Preprint + arXiv + oponentúra</text>
  <text x="360" y="514" text-anchor="middle" class="acc">multiplikátor: každý výsledok hore získava pečiatku a cudzie oči</text>
</svg>
<figcaption>Mapa závislostí. Plné šípky = jeden krok priamo posilňuje druhý; bodkované = voľnejšia väzba. Tyrkysová šípka vedie von z projektu — k jedinému externému rozhodcovi. Priečky 2 a 6 stoja samostatne: dajú sa robiť kedykoľvek, bez čakania na ostatné.</figcaption>
</figure>

<div class="tablewrap">

| # | Priečka | Čo prinesie | Cena | Riziko |
|---|---------|-------------|------|--------|
| 1 | **Článok o P2** | externú falzifikáciu — o projekte rozhodne experiment, nie autor | ~0 € | malé |
| 2 | **Dokončiť lámanie vlny** | istý zisk: kvantitatívne uzavretie gravitačnej kapitoly | 1 deň | najnižšie |
| 3 | **Akčný princíp** | motor gravitácie — 3 brány naraz, alebo novú vetu | týždne myslenia | len časové |
| 4 | **Fermióny** | šancu na „druhý prežitý zákaz“ + emergentný spin | dni dizajnu | stredné |
| 5 | **Boosty** | most od okrúhlosti k celej relativite; spresnenie P2 | ~1 USD | možný náraz na hotové limity |
| 6 | **Dve častice** | odpoveď na najhlbšiu otázku — oboma smermi cennú | ~0 € | vysoké |
| 7 | **Kozmológia** | zjednocujúci príbeh — najlepšie až s motorom z #3 | ~0 € | špekulatívne |
| 8 | **Oponentúra** | multiplikátor hodnoty všetkého vyššie | mesiace času | tvrdá kritika |

</div>

<div class="finale">
<h3>A čo „dokázať, že vesmír JE automat“?</h3>
<p>Teraz úprimne — lebo úprimnosť je v tomto projekte pracovný nástroj, nie ozdoba. Taká veta sa <strong>dokázať nedá</strong>. Žiadna simulácia, akokoľvek verná, nedokáže zvnútra seba samej preukázať, že aj svet za oknom beží na rovnakom stroji. Veda také tvrdenia ani nerobí: nedokázala ani to, že vesmír „JE“ zakrivený priestoročas — len to, že teória zakriveného priestoročasu sto rokov prežíva každý pokus o vyvrátenie a predpovedá veci, ktoré nikto nečakal.</p>
<p>Presne o to sa dá hrať aj tu, a rebrík hore je celý ten program v troch ťahoch: <strong>(a) prežívať zákazy</strong> — matematické vety „mriežka toto nemôže“ — jeden za druhým (priečky 4 a 5); <strong>(b) reprodukovať čoraz väčší kus fyziky z čoraz menších predpokladov</strong> (priečky 3, 6, 7); a <strong>(c) predpovedať miesta, kde sa automat od hladkého vesmíru líši, a nechať rozhodovať merania</strong> (priečky 1 a 8).</p>
<p>Slovo „je“ má projekt sám sebe zakázané — a to je možno najlepšia vizitka jeho kultúry. Ak to slovo niekedy padne, nepovie ho autor. Povie ho detektor v argentínskej pampe.</p>
</div>

<p class="colophon">Zostavené z projektového denníka DQC (stav 21. 8. 2026). Všetky uvedené čísla pochádzajú z pre-registrovaných behov s bit-exaktným spätným chodom; prieskumné (necitovateľné) hodnoty sú v texte výslovne označené. Projekt zatiaľ neprešiel externým peer review — presne to je priečka 8.</p>
