export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
};

export const articles: BlogArticle[] = [
  {
    slug: "miert-eri-meg-keszpenzes-felvasarlas",
    title: "Miért éri meg a készpénzes ingatlanfelvásárlás?",
    excerpt: "Bemutatjuk, hogy a készpénzes vétel miért lehet a leggyorsabb és legbiztonságosabb megoldás eladók számára.",
    readTime: "4 perc",
    content: [
      "A készpénzes ingatlanfelvásárlás a leggyorsabb és legbiztosabb értékesítési forma azok számára, akik rövid időn belül szeretnének hozzájutni a vételárhoz.",
      "A Villámvétel csapata Budapesten és Pest megye teljes területén dolgozik, így biztosíthatjuk, hogy 24–48 órán belül felmérjük az ingatlant és korrekt ajánlatot adunk.",
      "A folyamat átlátható: nincsenek rejtett költségek, nincsenek hosszú banki ügyintézések, és nem kell hónapokig várnia a vevőre.",
      "Tapasztalt szakértőink minden esetben személyes megtekintés alapján alakítják ki az ajánlatot, így Ön valódi piaci visszajelzést kap.",
    ],
  },
  {
    slug: "hogyan-zajlik-egy-helyszini-szemle",
    title: "Hogyan zajlik egy helyszíni szemle?",
    excerpt: "Lépésről lépésre elmagyarázzuk, mire számíthat, amikor kollégáink felmérik az ingatlanát.",
    readTime: "3 perc",
    content: [
      "A helyszíni szemle a vételi ajánlat alapja. Kollégáink előzetesen egyeztetnek Önnel egy Önnek megfelelő időpontot.",
      "A szemle során felmérjük az ingatlan állapotát, méretét, elhelyezkedését és a piacon elérhető hasonló ajánlatokat.",
      "A szemle általában 30–45 percet vesz igénybe, és semmilyen kötelezettséggel nem jár.",
      "Az ajánlatot ezt követően legkésőbb 1 napon belül elküldjük Önnek írásban.",
    ],
  },
  {
    slug: "milyen-dokumentumok-szuksegesek",
    title: "Milyen dokumentumok szükségesek az értékesítéshez?",
    excerpt: "Összegyűjtöttük a legfontosabb iratokat, amelyek a gyors és zökkenőmentes adásvételhez kellenek.",
    readTime: "3 perc",
    content: [
      "A gyors ügyintézés érdekében érdemes előre összekészíteni néhány alapdokumentumot.",
      "Szüksége lesz friss tulajdoni lapra, közüzemi számlákra, valamint a fennálló tartozásokról szóló igazolásokra.",
      "Társasházi ingatlan esetén kérjük a közös költség igazolását is.",
      "Csapatunk segít az ügyintézés minden lépésében, így Önnek nem kell egyedül megküzdenie a bürokráciával.",
    ],
  },
];
