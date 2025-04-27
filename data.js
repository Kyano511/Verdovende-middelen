const symptomenLijst = [
  "bewusteloosheid", "ademhalingsproblemen", "snelle hartslag", "langzame hartslag",
  "hoge bloeddruk", "lage bloeddruk", "wijde pupillen", "nauwe pupillen", "hoge temperatuur",
  "lage temperatuur", "zweten", "braken",
  // Gedragingen
  "agressie", "beven/trillen", "desoriëntatie", "epilepsie", "hallucinaties", "lachkick",
  "onrust/opwinding", "onzekere gang", "paniek", "paranoia", "rusteloosheid",
  "sufheid/slaperigheid", "verwardheid", "wanen", "woordenvloed"
];

const uitlegData = {
  "hallucinaties": "Een hallucinatie is een waarneming waarbij de prikkel uit de buitenwereld ontbreekt; men ziet, hoort, voelt of ruikt iets wat er niet is.",
  "lachkick": "Een voortdurend en onbeheerst lachen als gevolg van roes- of hallucinogene middelen.",
  "paranoia": "Het gevoel in de gaten gehouden of bedreigd te worden zonder dat dit daadwerkelijk gebeurt.",
  "wanen": "Een ziekelijk denkbeeld zonder basis in de werkelijkheid, waar iemand rotsvast van overtuigd is.",
  "woordenvloed": "Iemand blijft maar praten zonder te stoppen."
};

const middelenData = [
  {
    naam: "Alcohol",
    symptomen: [
      { symptoom: "bewusteloosheid", status: "x" },
      { symptoom: "ademhalingsproblemen", status: "x" },
      { symptoom: "snelle hartslag", status: "+" },
      { symptoom: "hoge bloeddruk", status: "+" },
      { symptoom: "wijde pupillen", status: "+" },
      { symptoom: "lage temperatuur", status: "-" },
      { symptoom: "zweten", status: "x" },
      { symptoom: "agressie", status: "x" },
      { symptoom: "beven/trillen", status: "x" },
      { symptoom: "epilepsie", status: "x" },
      { symptoom: "hallucinaties", status: "x" },
      { symptoom: "onrust/opwinding", status: "x" },
      { symptoom: "onzekere gang", status: "x" },
      { symptoom: "paranoia", status: "x" },
      { symptoom: "rusteloosheid", status: "x" },
      { symptoom: "sufheid/slaperigheid", status: "x" }
    ],
    behandeling: "Rustige omgeving, kalmeren/geruststellen, vitale functies bewaken, deskundige hulp inschakelen indien nodig."
  },
  {
    naam: "Hash/Wiet",
    symptomen: [
      { symptoom: "bewusteloosheid", status: "x" },
      { symptoom: "ademhalingsproblemen", status: "nvt" },
      { symptoom: "snelle hartslag", status: "-" },
      { symptoom: "hoge bloeddruk", status: "-" },
      { symptoom: "zweten", status: "nvt" },
      { symptoom: "braken", status: "x" },
      { symptoom: "agressie", status: "nvt" },
      { symptoom: "beven/trillen", status: "x" },
      { symptoom: "desoriëntatie", status: "x" },
      { symptoom: "epilepsie", status: "nvt" },
      { symptoom: "hallucinaties", status: "nvt" },
      { symptoom: "lachkick", status: "x" },
      { symptoom: "onrust/opwinding", status: "x" },
      { symptoom: "onzekere gang", status: "x" },
      { symptoom: "paniek", status: "x" },
      { symptoom: "paranoia", status: "x" },
      { symptoom: "rusteloosheid", status: "x" },
      { symptoom: "sufheid/slaperigheid", status: "x" },
      { symptoom: "verwardheid", status: "x" },
      { symptoom: "wanen", status: "nvt" }
    ],
    behandeling: "Rustige omgeving, kalmeren/geruststellen, eten/drinken (zoet), vitale functies bewaken."
  },
  {
    naam: "Opiaten",
    symptomen: [
      { symptoom: "bewusteloosheid", status: "x" },
      { symptoom: "ademhalingsproblemen", status: "nvt" },
      { symptoom: "snelle hartslag", status: "-" },
      { symptoom: "hoge bloeddruk", status: "-" },
      { symptoom: "wijde pupillen", status: "-" },
      { symptoom: "braken", status: "x" },
      { symptoom: "agressie", status: "nvt" },
      { symptoom: "beven/trillen", status: "nvt" },
      { symptoom: "epilepsie", status: "nvt" },
      { symptoom: "hallucinaties", status: "nvt" },
      { symptoom: "onrust/opwinding", status: "nvt" },
      { symptoom: "paniek", status: "nvt" },
      { symptoom: "rusteloosheid", status: "nvt" },
      { symptoom: "sufheid/slaperigheid", status: "nvt" },
      { symptoom: "verwardheid", status: "nvt" }
    ],
    behandeling: "Vitale functies bewaken, deskundige hulp inschakelen."
  },
  {
    naam: "Tripmiddelen",
    symptomen: [
      { symptoom: "bewusteloosheid", status: "x" },
      { symptoom: "ademhalingsproblemen", status: "x" },
      { symptoom: "snelle hartslag", status: "+" },
      { symptoom: "hoge bloeddruk", status: "nvt" },
      { symptoom: "wijde pupillen", status: "+" },
      { symptoom: "zweten", status: "x" },
      { symptoom: "agressie", status: "x" },
      { symptoom: "beven/trillen", status: "x" },
      { symptoom: "epilepsie", status: "x" },
      { symptoom: "hallucinaties", status: "x" },
      { symptoom: "onrust/opwinding", status: "x" },
      { symptoom: "onzekere gang", status: "x" },
      { symptoom: "paniek", status: "x" },
      { symptoom: "paranoia", status: "x" },
      { symptoom: "rusteloosheid", status: "x" },
      { symptoom: "verwardheid", status: "x" },
      { symptoom: "wanen", status: "x" }
    ],
    behandeling: "Rustige omgeving, kalmeren/geruststellen, eten/drinken (zoet), deskundige hulp inschakelen."
  },
  {
    naam: "Amfetamine",
    symptomen: [
      { symptoom: "bewusteloosheid", status: "x" },
      { symptoom: "ademhalingsproblemen", status: "x" },
      { symptoom: "snelle hartslag", status: "+" },
      { symptoom: "hoge bloeddruk", status: "+" },
      { symptoom: "wijde pupillen", status: "+" },
      { symptoom: "hoge temperatuur", status: "+" },
      { symptoom: "zweten", status: "x" },
      { symptoom: "agressie", status: "x" },
      { symptoom: "beven/trillen", status: "x" },
      { symptoom: "epilepsie", status: "nvt" },
      { symptoom: "hallucinaties", status: "x" },
      { symptoom: "onrust/opwinding", status: "x" },
      { symptoom: "paniek", status: "x" },
      { symptoom: "paranoia", status: "x" },
      { symptoom: "rusteloosheid", status: "x" }
    ],
    behandeling: "Rustige omgeving, kalmeren/geruststellen, deskundige hulp inschakelen."
  },
  {
    naam: "Cocaïne",
    symptomen: [
      { symptoom: "bewusteloosheid", status: "x" },
      { symptoom: "ademhalingsproblemen", status: "nvt" },
      { symptoom: "snelle hartslag", status: "+" },
      { symptoom: "hoge bloeddruk", status: "+" },
      { symptoom: "wijde pupillen", status: "+" },
      { symptoom: "hoge temperatuur", status: "+" },
      { symptoom: "zweten", status: "x" },
      { symptoom: "agressie", status: "x" },
      { symptoom: "beven/trillen", status: "x" },
      { symptoom: "epilepsie", status: "x" },
      { symptoom: "hallucinaties", status: "x" },
      { symptoom: "onrust/opwinding", status: "x" },
      { symptoom: "paniek", status: "x" },
      { symptoom: "paranoia", status: "x" },
      { symptoom: "rusteloosheid", status: "x" }
    ],
    behandeling: "Rustige omgeving, kalmeren/geruststellen, deskundige hulp inschakelen."
  },
  {
    naam: "XTC/GHB",
    symptomen: [
      { symptoom: "bewusteloosheid", status: "x" },
      { symptoom: "ademhalingsproblemen", status: "nvt" },
      { symptoom: "snelle hartslag", status: "+" },
      { symptoom: "hoge bloeddruk", status: "+" },
      { symptoom: "wijde pupillen", status: "+" },
      { symptoom: "hoge temperatuur", status: "+" },
      { symptoom: "zweten", status: "x" },
      { symptoom: "braken", status: "x" },
      { symptoom: "beven/trillen", status: "x" },
      { symptoom: "epilepsie", status: "x" },
      { symptoom: "hallucinaties", status: "x" },
      { symptoom: "onrust/opwinding", status: "x" },
      { symptoom: "paniek", status: "x" },
      { symptoom: "paranoia", status: "x" },
      { symptoom: "rusteloosheid", status: "x" }
    ],
    behandeling: "Rustige omgeving, eten/drinken (zoet), vitale functies bewaken, deskundige hulp inschakelen."
  }
];
