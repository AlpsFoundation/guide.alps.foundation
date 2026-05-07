import { guideMeta } from "./guide-meta.mjs";

export const locales = ["en", "fr", "de", "it", "es"] as const;
export const translatedLocales = ["fr", "de", "it", "es"] as const;

export type Locale = (typeof locales)[number];
export type TranslatedLocale = (typeof translatedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  de: "DE",
  it: "IT",
  es: "ES",
};

type IconName =
  | "book"
  | "buildingBank"
  | "calendarEvent"
  | "circleCheck"
  | "clipboardCheck"
  | "compass"
  | "fileText"
  | "forms"
  | "heartHandshake"
  | "leaf"
  | "mapPin"
  | "microscope"
  | "movie"
  | "network"
  | "presentation"
  | "route"
  | "school"
  | "shieldCheck"
  | "targetArrow"
  | "usersGroup"
  | "whatsapp";

type TextIconItem = {
  icon: IconName;
  text: string;
};

type GuidePartId = "register" | "mission" | "swiss-model" | "kickstart";

export type GuideContent = {
  htmlLang: string;
  draftBanner: string;
  languageSwitcherLabel: string;
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  hero: {
    summary: string;
    title: string;
  };
  why: {
    label: string;
    headline: string;
    paragraphs: string[];
  };
  origin: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  principles: {
    label: string;
    title: string;
    principleHeading: string;
    campusHeading: string;
    items: Array<{
      icon: IconName;
      principle: string;
      campus: string;
    }>;
  };
  guideParts: Array<{
    id: GuidePartId;
    number: string;
    title: string;
    label: string;
    icon: IconName;
    partLabel: string;
  }>;
  register: {
    title: string;
    intro: string;
    steps: Array<{
      icon: IconName;
      title: string;
      body: string;
    }>;
    tipTitle: string;
    tipParagraphs: string[];
  };
  mission: {
    title: string;
    intro: string;
    missionTitle: string;
    missionIntro: string;
    isLabel: string;
    notLabel: string;
    isItems: string[];
    notItems: string[];
    ethicsTitle: string;
    ethics: TextIconItem[];
    formatsTitle: string;
    formats: TextIconItem[];
    caseTitle: string;
    caseIntro: string;
    palaPillars: string[];
  };
  swissModel: {
    title: string;
    intro: string;
    namingTitle: string;
    namingIntro: string;
    namingAdvice: string[];
    figures: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
  };
  kickstart: {
    title: string;
    intro: string;
    actions: Array<{
      icon: IconName;
      title: string;
      paragraphs: string[];
    }>;
    networkTitle: string;
    networkParagraphs: string[];
    resources: Array<{
      title: string;
      displayUrl: string;
      href: string;
    }>;
    timelineTitle: string;
    timeline: Array<[string, string]>;
    rememberTitle: string;
    remember: string[];
  };
  footer: {
    version: string;
    builtWith: string;
    sourceLabel: string;
  };
};

const guideParts: GuideContent["guideParts"] = [
  {
    id: "register",
    number: "1",
    title: "Register",
    label: "Register the association",
    icon: "clipboardCheck",
    partLabel: "Part 1",
  },
  {
    id: "mission",
    number: "2",
    title: "Define",
    label: "Define the mission",
    icon: "targetArrow",
    partLabel: "Part 2",
  },
  {
    id: "swiss-model",
    number: "3",
    title: "Map",
    label: "Map the model",
    icon: "network",
    partLabel: "Part 3",
  },
  {
    id: "kickstart",
    number: "4",
    title: "Launch",
    label: "Launch the network",
    icon: "route",
    partLabel: "Part 4",
  },
];

const sharedResources = [
  {
    title: "ALPS Foundation — Psychedelic Student Association Consulting Service",
    displayUrl: "alps.foundation/psychedelic-student-association-consulting-service",
    href: "https://www.alps.foundation/psychedelic-student-association-consulting-service",
  },
  {
    title: "Swiss Psychedelic Student Network (SPSN)",
    displayUrl: "alps.foundation/swiss-psychedelic-student-network",
    href: "https://www.alps.foundation/swiss-psychedelic-student-network",
  },
  {
    title: "Psychedelic Student Network Germany (PSNG) — full founding guide",
    displayUrl: "psng.info",
    href: "https://www.psng.info",
  },
  {
    title: "PAREA — pan-European partnership and Forum 2026",
    displayUrl: "parea.eu",
    href: "https://parea.eu",
  },
  {
    title: "Andrew Sewell's MAPS bulletin article that helped seed the movement",
    displayUrl: "maps.org/2010/06/22/so-you-want-to-be-a-psychedelic-researcher",
    href: "https://maps.org/2010/06/22/so-you-want-to-be-a-psychedelic-researcher/",
  },
];

export const guideContent: Record<Locale, GuideContent> = {
  en: {
    htmlLang: "en",
    draftBanner: "DRAFT TRANSLATION",
    languageSwitcherLabel: "Choose language",
    meta: guideMeta.en,
    hero: {
      summary:
        "A practical playbook for students ready to bring evidence-based psychedelic education and harm reduction to their campus, and to plug into the growing European network.",
      title: "How to Start a Psychedelic Student Association at Your University",
    },
    why: {
      label: "Why start one",
      headline:
        "Across Europe, interest in psychedelic science is exploding among students — but most universities offer almost no space to engage with the topic critically, scientifically, and in community.",
      paragraphs: [
        "A student association solves that. Approved by the university, it gives you legitimate voice, access to rooms and funding, and a stable platform to invite researchers, screen films, run journal clubs, and host integration discussions.",
        "Equally important: it builds the next generation of researchers, clinicians, harm-reduction workers, and policymakers — locally rooted, but connected across borders. That is the seed of a movement.",
      ],
    },
    origin: {
      label: "Origin",
      title: "Where does this guide comes from",
      paragraphs: [
        "In September 2019 we co-founded PALA — Psychedelic Association of Lausanne for Awareness — the first university psychedelic student association in Lausanne, Switzerland. PALA seeded the Swiss Psychedelic Student Network (SPSN), which today gathers active groups in 7 of 9 Swiss universities (Lausanne, Geneva, Neuchatel, Zurich, Basel, Bern, Fribourg).",
        "We then helped catalyse sister networks in Italy (UNEPSI — University Network of Psychedelic Students Italy in 2023, with active groups now in Rome, Turin, Bologna, Padue) and Germany (PSNG — Psychedelic Student Network Germany, launched in 2025).",
        "This guide distils what worked — and what didn't — across those three countries, so you can shortcut the path in yours.",
      ],
    },
    principles: {
      label: "What you are building",
      title: "Principle into campus practice",
      principleHeading: "Principle",
      campusHeading: "How it shows up on campus",
      items: [
        { icon: "microscope", principle: "Evidence-based", campus: "Paper clubs, expert talks, research summaries, and clear separation between evidence, open questions, and personal opinion." },
        { icon: "usersGroup", principle: "Student-led", campus: "Local students choose formats, language, rhythm, and partnerships that fit their university culture." },
        { icon: "school", principle: "University-integrated", campus: "Recognition gives legitimacy, room access, welcome-day visibility, funding routes, and a responsible administrative home." },
        { icon: "shieldCheck", principle: "Harm-reduction oriented", campus: "Education includes prevention, risk awareness, and responsible referral to professional services when needed." },
        { icon: "network", principle: "Networking", campus: "Local associations stay independent while sharing resources, speakers, and annual gatherings through national networks." },
      ],
    },
    guideParts,
    register: {
      title: "Register a Student Association at Your University",
      intro:
        "Every university has its own bureaucracy, but the skeleton is almost identical across European institutions. Follow these six steps in order; each typically takes a few days to a few weeks.",
      steps: [
        {
          icon: "fileText",
          title: "Find the administrative regulation.",
          body: `Search your university website for terms like "student associations", "groupes d'étudiants", "associazioni studentesche", "Hochschulgruppen". The relevant office is usually the Student Affairs / Vie Étudiante / Studierendenwerk / Servizi agli Studenti. Download the official template for statutes (statutes / Vereinsstatuten / statuto / statuts) — most universities provide one.`,
        },
        { icon: "usersGroup", title: "Form a founding committee of 5–10 students.", body: "Aim for interdisciplinary diversity (psychology, medicine, neuroscience, philosophy, anthropology, law, art, data science). Decide who will be President, Treasurer, Secretary at minimum — most statutes require these three roles." },
        { icon: "clipboardCheck", title: "Draft the statutes.", body: "Use the university's template. Define: name, headquarters (the university), purpose (education, prevention, harm reduction — see Part 2), membership rules, governance (general assembly, executive committee), and dissolution clause. Keep the purpose broad enough to evolve." },
        { icon: "presentation", title: "Hold a constitutive assembly.", body: "Convene the founding members, vote the statutes, elect the committee, sign the minutes (procès-verbal / Gründungsprotokoll / verbale costitutivo). This single document is what you submit to the university." },
        { icon: "school", title: "Submit and find a faculty patron.", body: "Many universities ask you to identify a professor who endorses your association. Choose someone respected and ideally already curious about psychedelic research — they protect you politically and open doors. Submit statutes + minutes + member list to the student affairs office." },
        { icon: "buildingBank", title: "Open a bank account and (if required) register as an association.", body: "In Switzerland, Italy, Germany, France, Spain etc., associations have a national legal form (e.g. Verein, association loi 1901, associazione di promozione sociale, Verein nach §21 BGB). Registering nationally is optional for university-only activity but required if you want to receive grants or sign contracts." },
      ],
      tipTitle: "Tip: choose your patron carefully",
      tipParagraphs: [
        "A faculty patron does two things: they sign off on your existence inside the institution, and they signal to skeptical administrators that this isn't a fringe project.",
        "In all of the associations the patron came from psychiatry, pharmacology, or psychology — but a philosophy or anthropology professor works just as well. What matters is institutional credibility and openness.",
      ],
    },
    mission: {
      title: "Make It a Psychedelic Student Association",
      intro:
        "The administrative shell is the same as any student club. What follows is what makes yours specifically a psychedelic association — and what will keep it credible, safe, and welcomed by the university.",
      missionTitle: "Define the mission clearly",
      missionIntro: "Borrow the formulation we converged on across SPSN, UNEPSI and PSNG. State explicitly what you are — and what you are not.",
      isLabel: "What it IS",
      notLabel: "What it is NOT",
      isItems: [
        "An education-oriented, scientifically grounded student network.",
        "A space for critical reflection, interdisciplinary dialogue, and harm-reduction culture.",
        "A pipeline for the next generation of researchers, clinicians, and policy contributors.",
        "A legal space where you can openly speak about psychedelics.",
      ],
      notItems: [
        "Not a therapy substitute or crisis intervention service.",
        "Not a space for promoting consumption, sourcing, or vending substances.",
        "Not a stage for healing claims or unverifiable personal recommendations.",
      ],
      ethicsTitle: "Adopt a Code of Ethical Conduct from day one",
      ethics: [
        { icon: "heartHandshake", text: "Respect, inclusion, and substance-free events on university premises." },
        { icon: "microscope", text: "Scientific integrity: distinguish established research, open questions, and personal experience." },
        { icon: "usersGroup", text: "Personal experiences may be shared as subjective perspective only, never as general advice." },
        { icon: "shieldCheck", text: "No advertising, mediating, or facilitating access to controlled substances." },
        { icon: "school", text: "No therapeutic or medical posture; refer participants in distress to professional services." },
        { icon: "fileText", text: "Confidentiality of personal content shared in the group." },
      ],
      formatsTitle: "Activity formats that work",
      formats: [
        { icon: "movie", text: "Film screenings + facilitated discussion (low barrier, attracts new members)." },
        { icon: "microscope", text: "Journal club / paperclub: read and dissect one peer-reviewed paper per session." },
        { icon: "book", text: "Book club: agree on chapters in advance; discuss in rotating facilitator format." },
        { icon: "presentation", text: "Expert lectures: invite local researchers, clinicians, harm-reduction workers." },
        { icon: "heartHandshake", text: "Integration discussion groups (substance-free, peer-led, with clear ground rules)." },
        { icon: "leaf", text: "Workshops on breathwork, meditation, mindfulness — only led by trained facilitators." },
        { icon: "mapPin", text: "Lab and clinic visits, museum excursions, conference field trips." },
        { icon: "school", text: "Push for an elective course or seminar inside your faculty curriculum !!! (this worked in Zurich University)" },
      ],
      caseTitle: "Case study: PALA's original four pillars",
      caseIntro: "When PALA launched at the University of Lausanne in 2019, we ran exactly four formats — and that is what kept us alive long enough to grow:",
      palaPillars: [
        "Monthly movie screenings (open to the public).",
        "Bi-weekly paperclub with peer-reviewed articles from members for peer education.",
        "Integration discussion group (peer, substance-free).",
        "A push for psychedelic content inside the official UNIL curriculum.",
      ],
    },
    swissModel: {
      title: "Visual Reference: the Swiss Model",
      intro:
        "The Model: a single first university association (PALA — the seed), and what happens when several local associations coordinate into a national network (SPSN) hosting a rotating annual conference.",
      namingTitle: "Pick a memorable name, acronym, and logo: first thing to do. Dream It!",
      namingIntro:
        "This sounds cosmetic. It isn't. A strong acronym and a recognisable logo are how people remember you, link to you, and decide whether to show up. Choose them on day one.",
      namingAdvice: [
        "Make the acronym a real word, evocative of your mission. PALA references Huxley's utopian island in Island (1962) where psychedelics are embedded in culture for healing and flourishing purposes.",
        "Build the long name from: Psychedelic + your city + University/student + a positive framing word (Awareness, Research, Education).",
        "Commission a clean circular logo before you launch — it reproduces well on social media, posters, and slides.",
        "Lock down the email, social medias, and a one-page website at the same time.",
      ],
      figures: [
        {
          src: "/assets/pala.jpg",
          alt: "PALA model slide showing goals, activity formats, Swiss university associations, and reasons the local student association model works.",
          caption: "Figure 1 — Exemple of a university association: PALA, Lausanne (2019). Goals, four core formats, and the three reasons it works.",
        },
        {
          src: "/assets/spsn.jpg",
          alt: "Swiss Psychedelic Student Network slide showing local student associations connected into a national network and yearly student conference.",
          caption: "Figure 2 — A national network: SPSN connects 7 of 9 Swiss universities with a rotating yearly conference.",
        },
      ],
    },
    kickstart: {
      title: "Practical Kickstart and the European Network",
      intro: "These are the two concrete actions that turned every associations from an idea into a real active group.",
      actions: [
        {
          icon: "forms",
          title: "Action 1 — A Google Form for your country",
          paragraphs: [
            "Before anything formal, find your people. Create a short Google Form and circulate it through every channel you have — student WhatsApp groups, faculty mailing lists, Instagram, PAREA / PSNG / UNEPSI / SPSN networks, conference contacts.",
            "Recommended fields: name and surname, email, phone number, university and city, field of study, willingness to help create an association at their university (Yes / Maybe / Just curious), optional motivation note.",
          ],
        },
        {
          icon: "whatsapp",
          title: "Action 2 — One WhatsApp group per country, plus city sub-groups",
          paragraphs: [
            "As soon as the form is live, create a national WhatsApp community and add everyone who said yes or maybe. Within two weeks you will see natural city clusters emerge — each one becomes the seed of a local university association. Spin up a sub-group per city and let them self-organise.",
            "This is exactly how UNEPSI grew bottom-up in Italy and how PSNG seeded its first local Ortsgruppen in Germany.",
          ],
        },
      ],
      networkTitle: "Plug into the European network",
      networkParagraphs: [
        "You are not alone. Use these resources from day one — the cost of duplicating work that already exists is the single biggest mistake we made early on. The motto for student cooperation is “Copy-pase, Evidence-based!”",
        "Be free to ask these organisations documents, informations and tips:",
      ],
      resources: sharedResources,
      timelineTitle: "Real world developement you can cite",
      timeline: [
        ["2019", "PALA founded at the University of Lausanne as a student association for awareness, science education, therapy literacy, and prevention/risk reduction."],
        ["2022–2026", "Swiss groups coordinate through SPSN, with local associations at Lausanne, Geneva, Fribourg, Bern, Neuchatel, Zurich and Basel."],
        ["2025–2026", "The model travels to Italy through UNEPSI and to Germany through PSNG."],
        ["2026", "European-level exchange continues through forums such as PAREA's European Forum of National Psychedelic Societies to spread the word in other countries."],
      ],
      rememberTitle: "Remember",
      remember: [
        "Just Do It. The first meeting beats the perfect plan.",
        "Set realistic expectations: 5 committed people > 50 vague ones.",
        "You are not alone — write to ALPS, SPSN, UNEPSI, PSNG. We have all been where you are.",
        "Honour the Code of Ethical Conduct. Legitimacy and honesty are your most valuable assets.",
      ],
    },
    footer: {
      version: "V1_20260507",
      builtWith: "Built with Switzer Font by",
      sourceLabel: "Source on GitHub.com",
    },
  },
  fr: {
    htmlLang: "fr",
    draftBanner: "DRAFT TRANSLATION",
    languageSwitcherLabel: "Choisir la langue",
    meta: guideMeta.fr,
    hero: {
      summary:
        "Un guide pratique pour les étudiants prêts à apporter une éducation psychédélique fondée sur les preuves et la réduction des risques sur leur campus, tout en rejoignant le réseau européen en développement.",
      title: "Comment créer une association étudiante psychédélique dans votre université",
    },
    why: {
      label: "Pourquoi commencer",
      headline:
        "Partout en Europe, l'intérêt des étudiants pour la science psychédélique explose, mais la plupart des universités offrent très peu d'espaces pour aborder ce sujet de manière critique, scientifique et collective.",
      paragraphs: [
        "Une association étudiante répond à ce besoin. Reconnue par l'université, elle vous donne une voix légitime, l'accès à des salles et à des financements, ainsi qu'une plateforme stable pour inviter des chercheurs, projeter des films, organiser des journal clubs et animer des discussions d'intégration.",
        "Tout aussi important: elle forme la prochaine génération de chercheurs, cliniciens, acteurs de réduction des risques et décideurs publics, enracinés localement mais connectés au-delà des frontières. C'est la graine d'un mouvement.",
      ],
    },
    origin: {
      label: "Origine",
      title: "D'où vient ce guide",
      paragraphs: [
        "En septembre 2019, nous avons cofondé PALA — Psychedelic Association of Lausanne for Awareness — la première association étudiante universitaire dédiée aux psychédéliques à Lausanne, en Suisse. PALA a semé le Swiss Psychedelic Student Network (SPSN), qui rassemble aujourd'hui des groupes actifs dans 7 des 9 universités suisses (Lausanne, Genève, Neuchâtel, Zurich, Bâle, Berne, Fribourg).",
        "Nous avons ensuite contribué à catalyser des réseaux soeurs en Italie (UNEPSI — University Network of Psychedelic Students Italy en 2023, avec des groupes actifs à Rome, Turin, Bologne et Padoue) et en Allemagne (PSNG — Psychedelic Student Network Germany, lancé en 2025).",
        "Ce guide distille ce qui a fonctionné — et ce qui n'a pas fonctionné — dans ces trois pays, afin que vous puissiez raccourcir le chemin dans le vôtre.",
      ],
    },
    principles: {
      label: "Ce que vous construisez",
      title: "Des principes à la pratique sur le campus",
      principleHeading: "Principe",
      campusHeading: "Comment cela se manifeste sur le campus",
      items: [
        { icon: "microscope", principle: "Fondé sur les preuves", campus: "Paper clubs, conférences d'experts, synthèses de recherche, et distinction claire entre données établies, questions ouvertes et opinions personnelles." },
        { icon: "usersGroup", principle: "Dirigé par les étudiants", campus: "Les étudiants locaux choisissent les formats, la langue, le rythme et les partenariats adaptés à la culture de leur université." },
        { icon: "school", principle: "Intégré à l'université", campus: "La reconnaissance apporte légitimité, accès aux salles, visibilité lors des journées d'accueil, possibilités de financement et ancrage administratif responsable." },
        { icon: "shieldCheck", principle: "Orienté réduction des risques", campus: "L'éducation inclut la prévention, la conscience des risques et l'orientation responsable vers des services professionnels lorsque nécessaire." },
        { icon: "network", principle: "En réseau", campus: "Les associations locales restent indépendantes tout en partageant ressources, intervenants et rencontres annuelles via des réseaux nationaux." },
      ],
    },
    guideParts: [
      { ...guideParts[0], title: "Enregistrer", label: "Enregistrer l'association", partLabel: "Partie 1" },
      { ...guideParts[1], title: "Définir", label: "Définir la mission", partLabel: "Partie 2" },
      { ...guideParts[2], title: "Cartographier", label: "Cartographier le modèle", partLabel: "Partie 3" },
      { ...guideParts[3], title: "Lancer", label: "Lancer le réseau", partLabel: "Partie 4" },
    ],
    register: {
      title: "Enregistrer une association étudiante dans votre université",
      intro:
        "Chaque université a sa propre bureaucratie, mais la structure est presque identique dans les établissements européens. Suivez ces six étapes dans l'ordre; chacune prend généralement quelques jours à quelques semaines.",
      steps: [
        { icon: "fileText", title: "Trouvez le règlement administratif.", body: `Cherchez sur le site de votre université des termes comme "associations étudiantes", "student associations", "associazioni studentesche", "Hochschulgruppen". Le bureau concerné est généralement les affaires étudiantes. Téléchargez le modèle officiel de statuts; la plupart des universités en fournissent un.` },
        { icon: "usersGroup", title: "Formez un comité fondateur de 5 à 10 étudiants.", body: "Visez une diversité interdisciplinaire (psychologie, médecine, neurosciences, philosophie, anthropologie, droit, art, science des données). Décidez au minimum qui sera président, trésorier et secrétaire; la plupart des statuts exigent ces trois rôles." },
        { icon: "clipboardCheck", title: "Rédigez les statuts.", body: "Utilisez le modèle de l'université. Définissez: nom, siège (l'université), but (éducation, prévention, réduction des risques — voir Partie 2), règles d'adhésion, gouvernance (assemblée générale, comité exécutif) et clause de dissolution. Gardez un but assez large pour évoluer." },
        { icon: "presentation", title: "Tenez une assemblée constitutive.", body: "Réunissez les membres fondateurs, votez les statuts, élisez le comité et signez le procès-verbal. Ce document unique est celui que vous soumettez à l'université." },
        { icon: "school", title: "Soumettez le dossier et trouvez un parrain académique.", body: "Beaucoup d'universités demandent d'identifier un professeur qui soutient votre association. Choisissez quelqu'un de respecté et idéalement déjà curieux de la recherche psychédélique: il vous protège politiquement et ouvre des portes. Soumettez statuts, procès-verbal et liste des membres au bureau des affaires étudiantes." },
        { icon: "buildingBank", title: "Ouvrez un compte bancaire et, si nécessaire, enregistrez l'association.", body: "En Suisse, Italie, Allemagne, France, Espagne, etc., les associations ont une forme juridique nationale. L'enregistrement national est optionnel pour une activité strictement universitaire, mais nécessaire si vous voulez recevoir des subventions ou signer des contrats." },
      ],
      tipTitle: "Conseil: choisissez soigneusement votre parrain",
      tipParagraphs: [
        "Un parrain académique fait deux choses: il valide votre existence au sein de l'institution et signale aux administrateurs sceptiques que ce projet n'est pas marginal.",
        "Dans toutes les associations, le parrain venait de la psychiatrie, de la pharmacologie ou de la psychologie, mais un professeur de philosophie ou d'anthropologie fonctionne tout aussi bien. Ce qui compte, c'est la crédibilité institutionnelle et l'ouverture.",
      ],
    },
    mission: {
      title: "En faire une association étudiante psychédélique",
      intro:
        "La coquille administrative est la même que pour n'importe quel club étudiant. Ce qui suit est ce qui rend votre association spécifiquement psychédélique, crédible, sûre et bienvenue à l'université.",
      missionTitle: "Définir clairement la mission",
      missionIntro: "Reprenez la formulation vers laquelle nous avons convergé au sein de SPSN, UNEPSI et PSNG. Dites explicitement ce que vous êtes — et ce que vous n'êtes pas.",
      isLabel: "Ce que c'est",
      notLabel: "Ce que ce n'est pas",
      isItems: [
        "Un réseau étudiant orienté vers l'éducation et fondé scientifiquement.",
        "Un espace de réflexion critique, de dialogue interdisciplinaire et de culture de réduction des risques.",
        "Un vivier pour la prochaine génération de chercheurs, cliniciens et contributeurs aux politiques publiques.",
        "Un espace légal où parler ouvertement des psychédéliques.",
      ],
      notItems: [
        "Pas un substitut à la thérapie ni un service d'intervention de crise.",
        "Pas un espace pour promouvoir la consommation, l'approvisionnement ou la vente de substances.",
        "Pas une scène pour des promesses de guérison ou des recommandations personnelles invérifiables.",
      ],
      ethicsTitle: "Adopter un code de conduite éthique dès le premier jour",
      ethics: [
        { icon: "heartHandshake", text: "Respect, inclusion et événements sans substance dans les locaux universitaires." },
        { icon: "microscope", text: "Intégrité scientifique: distinguer recherche établie, questions ouvertes et expérience personnelle." },
        { icon: "usersGroup", text: "Les expériences personnelles peuvent être partagées comme perspectives subjectives uniquement, jamais comme conseils généraux." },
        { icon: "shieldCheck", text: "Aucune publicité, médiation ou facilitation d'accès à des substances contrôlées." },
        { icon: "school", text: "Aucune posture thérapeutique ou médicale; orienter les participants en détresse vers des services professionnels." },
        { icon: "fileText", text: "Confidentialité des contenus personnels partagés dans le groupe." },
      ],
      formatsTitle: "Formats d'activité qui fonctionnent",
      formats: [
        { icon: "movie", text: "Projections de films + discussion facilitée (faible barrière, attire de nouveaux membres)." },
        { icon: "microscope", text: "Journal club / paperclub: lire et décortiquer un article scientifique par session." },
        { icon: "book", text: "Club de lecture: convenir des chapitres à l'avance et discuter avec facilitation tournante." },
        { icon: "presentation", text: "Conférences d'experts: inviter chercheurs, cliniciens et acteurs de réduction des risques locaux." },
        { icon: "heartHandshake", text: "Groupes de discussion d'intégration (sans substance, entre pairs, avec règles claires)." },
        { icon: "leaf", text: "Ateliers de respiration, méditation, pleine conscience — uniquement avec des facilitateurs formés." },
        { icon: "mapPin", text: "Visites de laboratoires et cliniques, musées, déplacements à des conférences." },
        { icon: "school", text: "Pousser pour un cours optionnel ou un séminaire dans votre faculté !!! (cela a fonctionné à l'Université de Zurich)" },
      ],
      caseTitle: "Étude de cas: les quatre piliers originaux de PALA",
      caseIntro: "Au lancement de PALA à l'Université de Lausanne en 2019, nous avons organisé exactement quatre formats — et c'est ce qui nous a permis de tenir assez longtemps pour grandir:",
      palaPillars: [
        "Projections mensuelles de films (ouvertes au public).",
        "Paperclub bimensuel avec des articles relus par les pairs choisis par les membres.",
        "Groupe de discussion d'intégration (entre pairs, sans substance).",
        "Un effort pour intégrer du contenu psychédélique dans le cursus officiel de l'UNIL.",
      ],
    },
    swissModel: {
      title: "Référence visuelle: le modèle suisse",
      intro:
        "Le modèle: une première association universitaire (PALA — la graine), puis ce qui se passe lorsque plusieurs associations locales se coordonnent en réseau national (SPSN) avec une conférence annuelle itinérante.",
      namingTitle: "Choisir un nom, un acronyme et un logo mémorables: la première chose à faire. Dream It!",
      namingIntro:
        "Cela peut sembler cosmétique. Ça ne l'est pas. Un acronyme fort et un logo reconnaissable permettent aux gens de se souvenir de vous, de vous relier à d'autres et de décider s'ils viendront. Choisissez-les dès le premier jour.",
      namingAdvice: [
        "Faites de l'acronyme un vrai mot, évocateur de votre mission. PALA renvoie à l'île utopique de Huxley dans Island (1962), où les psychédéliques sont intégrés à la culture à des fins de soin et d'épanouissement.",
        "Construisez le nom long à partir de: Psychédélique + votre ville + Université/étudiant + un cadrage positif (Awareness, Research, Education).",
        "Commandez un logo circulaire propre avant le lancement; il se reproduit bien sur les réseaux sociaux, affiches et slides.",
        "Réservez l'email, les réseaux sociaux et un site d'une page en même temps.",
      ],
      figures: [
        { src: "/assets/pala.jpg", alt: "Diapositive du modèle PALA montrant les objectifs, formats d'activité, associations universitaires suisses et raisons pour lesquelles le modèle local fonctionne.", caption: "Figure 1 — Exemple d'association universitaire: PALA, Lausanne (2019). Objectifs, quatre formats centraux et les trois raisons pour lesquelles cela fonctionne." },
        { src: "/assets/spsn.jpg", alt: "Diapositive du Swiss Psychedelic Student Network montrant les associations locales reliées en réseau national et une conférence étudiante annuelle.", caption: "Figure 2 — Un réseau national: SPSN relie 7 des 9 universités suisses avec une conférence annuelle itinérante." },
      ],
    },
    kickstart: {
      title: "Démarrage pratique et réseau européen",
      intro: "Voici les deux actions concrètes qui ont transformé chaque association d'une idée en groupe réellement actif.",
      actions: [
        { icon: "forms", title: "Action 1 — Un Google Form pour votre pays", paragraphs: ["Avant toute formalité, trouvez vos personnes. Créez un court Google Form et diffusez-le par tous vos canaux: groupes WhatsApp étudiants, listes de faculté, Instagram, réseaux PAREA / PSNG / UNEPSI / SPSN, contacts de conférences.", "Champs recommandés: nom et prénom, email, téléphone, université et ville, domaine d'étude, volonté d'aider à créer une association dans son université (Oui / Peut-être / Simple curiosité), note de motivation optionnelle."] },
        { icon: "whatsapp", title: "Action 2 — Un groupe WhatsApp par pays, puis des sous-groupes par ville", paragraphs: ["Dès que le formulaire est en ligne, créez une communauté WhatsApp nationale et ajoutez toutes les personnes qui ont répondu oui ou peut-être. En deux semaines, des clusters de ville émergeront naturellement; chacun devient la graine d'une association universitaire locale. Créez un sous-groupe par ville et laissez-les s'organiser.", "C'est exactement ainsi qu'UNEPSI a grandi en Italie depuis la base, et que PSNG a semé ses premiers groupes locaux en Allemagne."] },
      ],
      networkTitle: "Se connecter au réseau européen",
      networkParagraphs: [
        "Vous n'êtes pas seuls. Utilisez ces ressources dès le premier jour: dupliquer un travail qui existe déjà est la plus grande erreur que nous ayons faite au début. La devise de la coopération étudiante est: “Copy-pase, Evidence-based!”",
        "N'hésitez pas à demander à ces organisations des documents, informations et conseils:",
      ],
      resources: sharedResources,
      timelineTitle: "Développement réel que vous pouvez citer",
      timeline: [
        ["2019", "PALA est fondée à l'Université de Lausanne comme association étudiante pour la sensibilisation, l'éducation scientifique, la culture thérapeutique et la prévention/réduction des risques."],
        ["2022–2026", "Les groupes suisses se coordonnent via SPSN, avec des associations locales à Lausanne, Genève, Fribourg, Berne, Neuchâtel, Zurich et Bâle."],
        ["2025–2026", "Le modèle voyage en Italie via UNEPSI et en Allemagne via PSNG."],
        ["2026", "L'échange européen se poursuit à travers des forums comme le European Forum of National Psychedelic Societies de PAREA, afin de diffuser le modèle dans d'autres pays."],
      ],
      rememberTitle: "À retenir",
      remember: [
        "Just Do It. La première réunion vaut mieux que le plan parfait.",
        "Fixez des attentes réalistes: 5 personnes engagées > 50 personnes vagues.",
        "Vous n'êtes pas seuls — écrivez à ALPS, SPSN, UNEPSI, PSNG. Nous sommes tous passés par là.",
        "Respectez le Code de conduite éthique. La légitimité et l'honnêteté sont vos atouts les plus précieux.",
      ],
    },
    footer: { version: "V1_20260507", builtWith: "Construit avec la police Switzer par", sourceLabel: "Source sur GitHub.com" },
  },
  de: {
    htmlLang: "de",
    draftBanner: "DRAFT TRANSLATION",
    languageSwitcherLabel: "Sprache wählen",
    meta: guideMeta.de,
    hero: {
      summary:
        "Ein praktischer Leitfaden für Studierende, die evidenzbasierte psychedelische Bildung und Schadensminderung an ihren Campus bringen und sich mit dem wachsenden europäischen Netzwerk verbinden möchten.",
      title: "Wie man eine psychedelische Studierendenvereinigung an der Universität gründet",
    },
    why: {
      label: "Warum anfangen",
      headline:
        "In ganz Europa wächst das Interesse von Studierenden an psychedelischer Wissenschaft rasant, doch die meisten Universitäten bieten kaum Raum, um das Thema kritisch, wissenschaftlich und gemeinschaftlich zu bearbeiten.",
      paragraphs: [
        "Eine Studierendenvereinigung löst dieses Problem. Von der Universität anerkannt, gibt sie euch eine legitime Stimme, Zugang zu Räumen und Fördermitteln sowie eine stabile Plattform für Forschende, Filmabende, Journal Clubs und Integrationsgespräche.",
        "Ebenso wichtig: Sie bildet die nächste Generation von Forschenden, Klinikerinnen, Akteuren der Schadensminderung und politischen Mitgestaltern aus — lokal verwurzelt, aber grenzüberschreitend vernetzt. Das ist der Samen einer Bewegung.",
      ],
    },
    origin: {
      label: "Ursprung",
      title: "Woher dieser Leitfaden kommt",
      paragraphs: [
        "Im September 2019 gründeten wir PALA — Psychedelic Association of Lausanne for Awareness — die erste universitäre psychedelische Studierendenvereinigung in Lausanne, Schweiz. PALA legte den Grundstein für das Swiss Psychedelic Student Network (SPSN), das heute aktive Gruppen an 7 von 9 Schweizer Universitäten vereint (Lausanne, Genf, Neuenburg, Zürich, Basel, Bern, Freiburg).",
        "Danach halfen wir, Schwesternetzwerke in Italien (UNEPSI — University Network of Psychedelic Students Italy, 2023, heute mit aktiven Gruppen in Rom, Turin, Bologna und Padua) und Deutschland (PSNG — Psychedelic Student Network Germany, gestartet 2025) anzustoßen.",
        "Dieser Leitfaden bündelt, was in diesen drei Ländern funktioniert hat — und was nicht — damit ihr den Weg in eurem Land abkürzen könnt.",
      ],
    },
    principles: {
      label: "Was ihr aufbaut",
      title: "Prinzipien in Campus-Praxis",
      principleHeading: "Prinzip",
      campusHeading: "Wie es auf dem Campus sichtbar wird",
      items: [
        { icon: "microscope", principle: "Evidenzbasiert", campus: "Paper Clubs, Expertengespräche, Forschungszusammenfassungen und klare Trennung zwischen Evidenz, offenen Fragen und persönlicher Meinung." },
        { icon: "usersGroup", principle: "Studierendengeleitet", campus: "Lokale Studierende wählen Formate, Sprache, Rhythmus und Partnerschaften passend zur Kultur ihrer Universität." },
        { icon: "school", principle: "In die Universität integriert", campus: "Anerkennung schafft Legitimität, Raumzugang, Sichtbarkeit bei Einführungstagen, Förderwege und eine verantwortliche administrative Heimat." },
        { icon: "shieldCheck", principle: "An Schadensminderung orientiert", campus: "Bildung umfasst Prävention, Risikobewusstsein und verantwortliche Weitervermittlung an professionelle Dienste, wenn nötig." },
        { icon: "network", principle: "Vernetzt", campus: "Lokale Vereinigungen bleiben unabhängig und teilen zugleich Ressourcen, Vortragende und jährliche Treffen über nationale Netzwerke." },
      ],
    },
    guideParts: [
      { ...guideParts[0], title: "Anmelden", label: "Vereinigung anmelden", partLabel: "Teil 1" },
      { ...guideParts[1], title: "Definieren", label: "Mission definieren", partLabel: "Teil 2" },
      { ...guideParts[2], title: "Modell", label: "Modell kartieren", partLabel: "Teil 3" },
      { ...guideParts[3], title: "Starten", label: "Netzwerk starten", partLabel: "Teil 4" },
    ],
    register: {
      title: "Eine Studierendenvereinigung an eurer Universität anmelden",
      intro:
        "Jede Universität hat ihre eigene Bürokratie, aber das Grundgerüst ist an europäischen Institutionen fast identisch. Folgt diesen sechs Schritten der Reihe nach; jeder dauert meist einige Tage bis einige Wochen.",
      steps: [
        { icon: "fileText", title: "Findet die administrativen Regeln.", body: `Sucht auf der Website eurer Universität nach Begriffen wie "student associations", "groupes d'étudiants", "associazioni studentesche", "Hochschulgruppen". Zuständig ist meist Student Affairs, Vie Étudiante, Studierendenwerk oder Servizi agli Studenti. Ladet die offizielle Vorlage für Statuten herunter; die meisten Universitäten stellen eine bereit.` },
        { icon: "usersGroup", title: "Bildet ein Gründungskomitee von 5-10 Studierenden.", body: "Achtet auf interdisziplinäre Vielfalt (Psychologie, Medizin, Neurowissenschaften, Philosophie, Anthropologie, Recht, Kunst, Data Science). Legt mindestens Präsident/in, Kassier/in und Sekretär/in fest; die meisten Statuten verlangen diese drei Rollen." },
        { icon: "clipboardCheck", title: "Entwerft die Statuten.", body: "Nutzt die Vorlage der Universität. Definiert: Name, Sitz (die Universität), Zweck (Bildung, Prävention, Schadensminderung — siehe Teil 2), Mitgliedschaftsregeln, Governance (Generalversammlung, Vorstand) und Auflösungsklausel. Haltet den Zweck breit genug, damit er wachsen kann." },
        { icon: "presentation", title: "Haltet eine Gründungsversammlung ab.", body: "Versammelt die Gründungsmitglieder, stimmt über die Statuten ab, wählt den Vorstand und unterschreibt das Protokoll. Dieses eine Dokument reicht ihr bei der Universität ein." },
        { icon: "school", title: "Reicht ein und findet eine akademische Patronin oder einen Patron.", body: "Viele Universitäten verlangen eine Professorin oder einen Professor, der eure Vereinigung unterstützt. Wählt eine respektierte Person, idealerweise bereits neugierig auf psychedelische Forschung; sie schützt euch politisch und öffnet Türen. Reicht Statuten, Protokoll und Mitgliederliste beim Studierendenbüro ein." },
        { icon: "buildingBank", title: "Eröffnet ein Bankkonto und registriert euch, falls nötig.", body: "In der Schweiz, Italien, Deutschland, Frankreich, Spanien usw. haben Vereinigungen nationale Rechtsformen. Eine nationale Registrierung ist für rein universitäre Aktivitäten optional, aber nötig, wenn ihr Fördergelder erhalten oder Verträge unterschreiben wollt." },
      ],
      tipTitle: "Tipp: Wählt eure Patronin oder euren Patron sorgfältig",
      tipParagraphs: [
        "Eine akademische Patronin tut zwei Dinge: Sie bestätigt eure Existenz innerhalb der Institution und signalisiert skeptischen Verwaltungsstellen, dass dies kein Randprojekt ist.",
        "In allen Vereinigungen kam die Unterstützung aus Psychiatrie, Pharmakologie oder Psychologie, aber Philosophie oder Anthropologie funktionieren ebenso. Entscheidend sind institutionelle Glaubwürdigkeit und Offenheit.",
      ],
    },
    mission: {
      title: "Macht daraus eine psychedelische Studierendenvereinigung",
      intro:
        "Die administrative Hülle ist dieselbe wie bei jedem Studierendenclub. Was folgt, macht eure Gruppe spezifisch psychedelisch — und hält sie glaubwürdig, sicher und an der Universität willkommen.",
      missionTitle: "Die Mission klar definieren",
      missionIntro: "Übernehmt die Formulierung, auf die wir uns über SPSN, UNEPSI und PSNG hinweg geeinigt haben. Sagt ausdrücklich, was ihr seid — und was ihr nicht seid.",
      isLabel: "Was es ist",
      notLabel: "Was es nicht ist",
      isItems: [
        "Ein bildungsorientiertes, wissenschaftlich fundiertes Studierendennetzwerk.",
        "Ein Raum für kritische Reflexion, interdisziplinären Dialog und Schadensminderungskultur.",
        "Eine Pipeline für die nächste Generation von Forschenden, Klinikerinnen und politischen Mitgestaltern.",
        "Ein legaler Raum, in dem ihr offen über Psychedelika sprechen könnt.",
      ],
      notItems: [
        "Kein Ersatz für Therapie oder Krisenintervention.",
        "Kein Raum zur Förderung von Konsum, Beschaffung oder Verkauf von Substanzen.",
        "Keine Bühne für Heilversprechen oder nicht überprüfbare persönliche Empfehlungen.",
      ],
      ethicsTitle: "Vom ersten Tag an einen ethischen Verhaltenskodex übernehmen",
      ethics: [
        { icon: "heartHandshake", text: "Respekt, Inklusion und substanzfreie Veranstaltungen auf Universitätsgelände." },
        { icon: "microscope", text: "Wissenschaftliche Integrität: etablierte Forschung, offene Fragen und persönliche Erfahrung unterscheiden." },
        { icon: "usersGroup", text: "Persönliche Erfahrungen dürfen nur als subjektive Perspektive geteilt werden, nie als allgemeiner Rat." },
        { icon: "shieldCheck", text: "Keine Werbung, Vermittlung oder Erleichterung des Zugangs zu kontrollierten Substanzen." },
        { icon: "school", text: "Keine therapeutische oder medizinische Rolle; Teilnehmende in Not an professionelle Dienste verweisen." },
        { icon: "fileText", text: "Vertraulichkeit persönlicher Inhalte, die in der Gruppe geteilt werden." },
      ],
      formatsTitle: "Aktivitätsformate, die funktionieren",
      formats: [
        { icon: "movie", text: "Filmabende + moderierte Diskussion (niedrige Einstiegsschwelle, zieht neue Mitglieder an)." },
        { icon: "microscope", text: "Journal Club / Paperclub: pro Sitzung einen begutachteten Artikel lesen und analysieren." },
        { icon: "book", text: "Buchclub: Kapitel vorher festlegen; Diskussion mit rotierender Moderation." },
        { icon: "presentation", text: "Expertengespräche: lokale Forschende, Klinikerinnen und Schadensminderungsakteure einladen." },
        { icon: "heartHandshake", text: "Integrationsgesprächsgruppen (substanzfrei, peer-led, mit klaren Grundregeln)." },
        { icon: "leaf", text: "Workshops zu Atemarbeit, Meditation, Achtsamkeit — nur mit ausgebildeten Facilitators." },
        { icon: "mapPin", text: "Labor- und Klinikbesuche, Museumsausflüge, Konferenzreisen." },
        { icon: "school", text: "Setzt euch für einen Wahlkurs oder ein Seminar in eurer Fakultät ein !!! (das hat an der Universität Zürich funktioniert)" },
      ],
      caseTitle: "Fallstudie: PALAs ursprüngliche vier Säulen",
      caseIntro: "Als PALA 2019 an der Universität Lausanne startete, nutzten wir genau vier Formate — und das hielt uns lange genug am Leben, um zu wachsen:",
      palaPillars: [
        "Monatliche Filmabende (öffentlich zugänglich).",
        "Zweiwöchentlicher Paperclub mit peer-reviewten Artikeln aus den Mitgliedern für Peer Education.",
        "Integrationsgesprächsgruppe (peer, substanzfrei).",
        "Ein Vorstoß für psychedelische Inhalte im offiziellen UNIL-Curriculum.",
      ],
    },
    swissModel: {
      title: "Visuelle Referenz: das Schweizer Modell",
      intro:
        "Das Modell: eine erste universitäre Vereinigung (PALA — der Samen) und was passiert, wenn mehrere lokale Vereinigungen sich zu einem nationalen Netzwerk (SPSN) mit rotierender Jahreskonferenz verbinden.",
      namingTitle: "Wählt einen einprägsamen Namen, ein Akronym und ein Logo: als allererstes. Dream It!",
      namingIntro:
        "Das klingt kosmetisch. Ist es nicht. Ein starkes Akronym und ein wiedererkennbares Logo sorgen dafür, dass Menschen euch erinnern, verlinken und entscheiden, ob sie kommen. Wählt sie an Tag eins.",
      namingAdvice: [
        "Macht das Akronym zu einem echten Wort, das eure Mission anklingen lässt. PALA verweist auf Huxleys utopische Insel in Island (1962), wo Psychedelika für Heilung und Gedeihen kulturell eingebettet sind.",
        "Baut den langen Namen aus: Psychedelic + eure Stadt + Universität/Studierende + ein positiver Rahmenbegriff (Awareness, Research, Education).",
        "Beauftragt vor dem Start ein klares rundes Logo; es funktioniert gut auf Social Media, Postern und Slides.",
        "Sichert Email, Social Media und eine One-Page-Website gleichzeitig.",
      ],
      figures: [
        { src: "/assets/pala.jpg", alt: "PALA-Modellfolie mit Zielen, Aktivitätsformaten, Schweizer Universitätsvereinigungen und Gründen, warum das lokale Modell funktioniert.", caption: "Abbildung 1 — Beispiel einer universitären Vereinigung: PALA, Lausanne (2019). Ziele, vier Kernformate und drei Gründe, warum es funktioniert." },
        { src: "/assets/spsn.jpg", alt: "Folie des Swiss Psychedelic Student Network mit lokalen Studierendenvereinigungen als nationalem Netzwerk und jährlicher Studierendenkonferenz.", caption: "Abbildung 2 — Ein nationales Netzwerk: SPSN verbindet 7 von 9 Schweizer Universitäten mit einer rotierenden Jahreskonferenz." },
      ],
    },
    kickstart: {
      title: "Praktischer Start und europäisches Netzwerk",
      intro: "Das sind die zwei konkreten Schritte, die jede Vereinigung von einer Idee zu einer real aktiven Gruppe gemacht haben.",
      actions: [
        { icon: "forms", title: "Aktion 1 — Ein Google Form für euer Land", paragraphs: ["Findet eure Leute, bevor etwas formal wird. Erstellt ein kurzes Google Form und verbreitet es über alle Kanäle: studentische WhatsApp-Gruppen, Fakultätslisten, Instagram, PAREA / PSNG / UNEPSI / SPSN-Netzwerke, Konferenzkontakte.", "Empfohlene Felder: Vor- und Nachname, Email, Telefonnummer, Universität und Stadt, Studienfach, Bereitschaft, eine Vereinigung an der eigenen Universität mitzugründen (Ja / Vielleicht / Nur neugierig), optionaler Motivationstext."] },
        { icon: "whatsapp", title: "Aktion 2 — Eine WhatsApp-Gruppe pro Land plus Stadt-Untergruppen", paragraphs: ["Sobald das Formular live ist, erstellt eine nationale WhatsApp-Community und fügt alle hinzu, die ja oder vielleicht gesagt haben. Innerhalb von zwei Wochen entstehen natürliche Stadtcluster; jedes wird zum Samen einer lokalen Universitätsvereinigung. Erstellt pro Stadt eine Untergruppe und lasst sie sich selbst organisieren.", "Genau so wuchs UNEPSI in Italien bottom-up und so setzte PSNG die ersten lokalen Ortsgruppen in Deutschland auf."] },
      ],
      networkTitle: "Ins europäische Netzwerk einsteigen",
      networkParagraphs: [
        "Ihr seid nicht allein. Nutzt diese Ressourcen vom ersten Tag an — Arbeit zu duplizieren, die bereits existiert, war unser größter Fehler am Anfang. Das Motto studentischer Zusammenarbeit lautet: “Copy-pase, Evidence-based!”",
        "Fragt diese Organisationen frei nach Dokumenten, Informationen und Tipps:",
      ],
      resources: sharedResources,
      timelineTitle: "Reale Entwicklung, die ihr zitieren könnt",
      timeline: [
        ["2019", "PALA wird an der Universität Lausanne als Studierendenvereinigung für Awareness, wissenschaftliche Bildung, Therapieverständnis und Prävention/Schadensminderung gegründet."],
        ["2022–2026", "Schweizer Gruppen koordinieren sich über SPSN, mit lokalen Vereinigungen in Lausanne, Genf, Freiburg, Bern, Neuenburg, Zürich und Basel."],
        ["2025–2026", "Das Modell reist über UNEPSI nach Italien und über PSNG nach Deutschland."],
        ["2026", "Der europäische Austausch geht über Foren wie PAREAs European Forum of National Psychedelic Societies weiter, um das Modell in weitere Länder zu tragen."],
      ],
      rememberTitle: "Merkt euch",
      remember: [
        "Just Do It. Das erste Treffen schlägt den perfekten Plan.",
        "Setzt realistische Erwartungen: 5 engagierte Menschen > 50 vage Interessierte.",
        "Ihr seid nicht allein — schreibt an ALPS, SPSN, UNEPSI, PSNG. Wir waren alle dort, wo ihr jetzt seid.",
        "Achtet den ethischen Verhaltenskodex. Legitimität und Ehrlichkeit sind eure wertvollsten Güter.",
      ],
    },
    footer: { version: "V1_20260507", builtWith: "Gebaut mit Switzer Font von", sourceLabel: "Quelle auf GitHub.com" },
  },
  it: {
    htmlLang: "it",
    draftBanner: "DRAFT TRANSLATION",
    languageSwitcherLabel: "Scegli lingua",
    meta: guideMeta.it,
    hero: {
      summary:
        "Una guida pratica per studenti pronti a portare educazione psichedelica basata sulle evidenze e riduzione del rischio nel proprio campus, collegandosi alla rete europea in crescita.",
      title: "Come creare un'associazione studentesca psichedelica nella tua università",
    },
    why: {
      label: "Perché iniziare",
      headline:
        "In tutta Europa l'interesse degli studenti per la scienza psichedelica sta crescendo rapidamente, ma la maggior parte delle università offre pochissimo spazio per affrontare il tema in modo critico, scientifico e comunitario.",
      paragraphs: [
        "Un'associazione studentesca risolve questo problema. Riconosciuta dall'università, vi dà una voce legittima, accesso a sale e fondi, e una piattaforma stabile per invitare ricercatori, proiettare film, organizzare journal club e ospitare discussioni di integrazione.",
        "Altrettanto importante: forma la prossima generazione di ricercatori, clinici, operatori di riduzione del rischio e contributori alle politiche pubbliche — radicati localmente, ma connessi oltre i confini. È il seme di un movimento.",
      ],
    },
    origin: {
      label: "Origine",
      title: "Da dove viene questa guida",
      paragraphs: [
        "Nel settembre 2019 abbiamo cofondato PALA — Psychedelic Association of Lausanne for Awareness — la prima associazione studentesca universitaria psichedelica a Losanna, in Svizzera. PALA ha dato origine allo Swiss Psychedelic Student Network (SPSN), che oggi riunisce gruppi attivi in 7 delle 9 università svizzere (Losanna, Ginevra, Neuchâtel, Zurigo, Basilea, Berna, Friburgo).",
        "Abbiamo poi contribuito a catalizzare reti sorelle in Italia (UNEPSI — University Network of Psychedelic Students Italy nel 2023, con gruppi attivi a Roma, Torino, Bologna e Padova) e in Germania (PSNG — Psychedelic Student Network Germany, lanciato nel 2025).",
        "Questa guida distilla ciò che ha funzionato — e ciò che non ha funzionato — in questi tre paesi, così potete accorciare il percorso nel vostro.",
      ],
    },
    principles: {
      label: "Cosa state costruendo",
      title: "Dai principi alla pratica nel campus",
      principleHeading: "Principio",
      campusHeading: "Come si manifesta nel campus",
      items: [
        { icon: "microscope", principle: "Basato sulle evidenze", campus: "Paper club, incontri con esperti, sintesi di ricerca e separazione chiara tra evidenze, domande aperte e opinioni personali." },
        { icon: "usersGroup", principle: "Guidato dagli studenti", campus: "Gli studenti locali scelgono formati, lingua, ritmo e partnership adatti alla cultura della loro università." },
        { icon: "school", principle: "Integrato nell'università", campus: "Il riconoscimento dà legittimità, accesso alle aule, visibilità nelle giornate di benvenuto, canali di finanziamento e una casa amministrativa responsabile." },
        { icon: "shieldCheck", principle: "Orientato alla riduzione del rischio", campus: "L'educazione include prevenzione, consapevolezza dei rischi e invio responsabile a servizi professionali quando necessario." },
        { icon: "network", principle: "In rete", campus: "Le associazioni locali restano indipendenti condividendo risorse, relatori e incontri annuali tramite reti nazionali." },
      ],
    },
    guideParts: [
      { ...guideParts[0], title: "Registrare", label: "Registrare l'associazione", partLabel: "Parte 1" },
      { ...guideParts[1], title: "Definire", label: "Definire la missione", partLabel: "Parte 2" },
      { ...guideParts[2], title: "Mappare", label: "Mappare il modello", partLabel: "Parte 3" },
      { ...guideParts[3], title: "Lanciare", label: "Lanciare la rete", partLabel: "Parte 4" },
    ],
    register: {
      title: "Registrare un'associazione studentesca nella tua università",
      intro:
        "Ogni università ha la propria burocrazia, ma lo scheletro è quasi identico nelle istituzioni europee. Seguite questi sei passaggi in ordine; ciascuno richiede di solito da pochi giorni a qualche settimana.",
      steps: [
        { icon: "fileText", title: "Trovate il regolamento amministrativo.", body: `Cercate sul sito della vostra università termini come "student associations", "groupes d'étudiants", "associazioni studentesche", "Hochschulgruppen". L'ufficio competente è di solito Servizi agli Studenti / Student Affairs / Vie Étudiante / Studierendenwerk. Scaricate il modello ufficiale di statuto; la maggior parte delle università ne fornisce uno.` },
        { icon: "usersGroup", title: "Formate un comitato fondatore di 5-10 studenti.", body: "Puntate sulla diversità interdisciplinare (psicologia, medicina, neuroscienze, filosofia, antropologia, diritto, arte, data science). Decidete almeno presidente, tesoriere e segretario; la maggior parte degli statuti richiede questi tre ruoli." },
        { icon: "clipboardCheck", title: "Redigete lo statuto.", body: "Usate il modello dell'università. Definite: nome, sede (l'università), scopo (educazione, prevenzione, riduzione del rischio — vedi Parte 2), regole di adesione, governance (assemblea generale, comitato esecutivo) e clausola di scioglimento. Mantenete lo scopo abbastanza ampio da evolvere." },
        { icon: "presentation", title: "Tenete un'assemblea costitutiva.", body: "Convocate i membri fondatori, votate lo statuto, eleggete il comitato e firmate il verbale costitutivo. Questo singolo documento è ciò che presenterete all'università." },
        { icon: "school", title: "Presentate la domanda e trovate un referente accademico.", body: "Molte università chiedono di indicare un professore che sostenga l'associazione. Scegliete una persona rispettata e possibilmente già curiosa della ricerca psichedelica: vi protegge politicamente e apre porte. Presentate statuto, verbale e lista membri all'ufficio studenti." },
        { icon: "buildingBank", title: "Aprite un conto bancario e, se richiesto, registrate l'associazione.", body: "In Svizzera, Italia, Germania, Francia, Spagna, ecc., le associazioni hanno una forma giuridica nazionale. La registrazione nazionale è facoltativa per attività solo universitarie, ma necessaria se volete ricevere fondi o firmare contratti." },
      ],
      tipTitle: "Consiglio: scegliete con cura il referente",
      tipParagraphs: [
        "Un referente accademico fa due cose: autorizza la vostra esistenza dentro l'istituzione e segnala agli amministratori scettici che non si tratta di un progetto marginale.",
        "In tutte le associazioni il referente proveniva da psichiatria, farmacologia o psicologia, ma anche filosofia o antropologia funzionano bene. Contano credibilità istituzionale e apertura.",
      ],
    },
    mission: {
      title: "Renderla un'associazione studentesca psichedelica",
      intro:
        "La struttura amministrativa è la stessa di qualsiasi club studentesco. Ciò che segue è quello che rende la vostra associazione specificamente psichedelica — e la mantiene credibile, sicura e accolta dall'università.",
      missionTitle: "Definire chiaramente la missione",
      missionIntro: "Prendete in prestito la formulazione su cui siamo convergenti in SPSN, UNEPSI e PSNG. Dichiarate esplicitamente cosa siete — e cosa non siete.",
      isLabel: "Cos'è",
      notLabel: "Cosa non è",
      isItems: [
        "Una rete studentesca orientata all'educazione e fondata scientificamente.",
        "Uno spazio di riflessione critica, dialogo interdisciplinare e cultura della riduzione del rischio.",
        "Un canale per la prossima generazione di ricercatori, clinici e contributori alle politiche.",
        "Uno spazio legale in cui parlare apertamente di psichedelici.",
      ],
      notItems: [
        "Non un sostituto della terapia o un servizio di intervento in crisi.",
        "Non uno spazio per promuovere consumo, reperimento o vendita di sostanze.",
        "Non un palco per promesse di guarigione o raccomandazioni personali non verificabili.",
      ],
      ethicsTitle: "Adottare un Codice di Condotta Etica dal primo giorno",
      ethics: [
        { icon: "heartHandshake", text: "Rispetto, inclusione ed eventi senza sostanze negli spazi universitari." },
        { icon: "microscope", text: "Integrità scientifica: distinguere ricerca consolidata, domande aperte ed esperienza personale." },
        { icon: "usersGroup", text: "Le esperienze personali possono essere condivise solo come prospettiva soggettiva, mai come consiglio generale." },
        { icon: "shieldCheck", text: "Nessuna pubblicità, mediazione o facilitazione dell'accesso a sostanze controllate." },
        { icon: "school", text: "Nessuna postura terapeutica o medica; indirizzare i partecipanti in difficoltà a servizi professionali." },
        { icon: "fileText", text: "Riservatezza dei contenuti personali condivisi nel gruppo." },
      ],
      formatsTitle: "Formati di attività che funzionano",
      formats: [
        { icon: "movie", text: "Proiezioni di film + discussione facilitata (bassa soglia, attira nuovi membri)." },
        { icon: "microscope", text: "Journal club / paperclub: leggere e analizzare un articolo peer-reviewed per sessione." },
        { icon: "book", text: "Club del libro: concordare i capitoli in anticipo e discuterli con facilitazione a rotazione." },
        { icon: "presentation", text: "Conferenze con esperti: invitare ricercatori, clinici, operatori di riduzione del rischio locali." },
        { icon: "heartHandshake", text: "Gruppi di discussione di integrazione (senza sostanze, tra pari, con regole chiare)." },
        { icon: "leaf", text: "Workshop su respirazione, meditazione, mindfulness — solo con facilitatori formati." },
        { icon: "mapPin", text: "Visite a laboratori e cliniche, musei, viaggi a conferenze." },
        { icon: "school", text: "Spingere per un corso opzionale o seminario nel curriculum della vostra facoltà !!! (ha funzionato all'Università di Zurigo)" },
      ],
      caseTitle: "Caso studio: i quattro pilastri originali di PALA",
      caseIntro: "Quando PALA è nata all'Università di Losanna nel 2019, abbiamo usato esattamente quattro formati — e questo ci ha tenuti vivi abbastanza a lungo per crescere:",
      palaPillars: [
        "Proiezioni mensili di film (aperte al pubblico).",
        "Paperclub bisettimanale con articoli peer-reviewed proposti dai membri per educazione tra pari.",
        "Gruppo di discussione di integrazione (tra pari, senza sostanze).",
        "Una spinta per inserire contenuti psichedelici nel curriculum ufficiale UNIL.",
      ],
    },
    swissModel: {
      title: "Riferimento visivo: il modello svizzero",
      intro:
        "Il modello: una prima associazione universitaria (PALA — il seme) e ciò che accade quando più associazioni locali si coordinano in una rete nazionale (SPSN) con una conferenza annuale itinerante.",
      namingTitle: "Scegliete un nome, un acronimo e un logo memorabili: la prima cosa da fare. Dream It!",
      namingIntro:
        "Sembra cosmetico. Non lo è. Un acronimo forte e un logo riconoscibile sono il modo in cui le persone si ricordano di voi, vi collegano ad altri e decidono se partecipare. Sceglieteli il primo giorno.",
      namingAdvice: [
        "Fate dell'acronimo una parola vera, evocativa della vostra missione. PALA rimanda all'isola utopica di Huxley in Island (1962), dove gli psichedelici sono integrati nella cultura per cura e fioritura.",
        "Costruite il nome lungo da: Psichedelico + la vostra città + Università/studenti + una cornice positiva (Awareness, Research, Education).",
        "Commissionate un logo circolare pulito prima del lancio; funziona bene su social, poster e slide.",
        "Bloccate email, social media e sito one-page nello stesso momento.",
      ],
      figures: [
        { src: "/assets/pala.jpg", alt: "Slide del modello PALA con obiettivi, formati di attività, associazioni universitarie svizzere e ragioni per cui il modello locale funziona.", caption: "Figura 1 — Esempio di associazione universitaria: PALA, Losanna (2019). Obiettivi, quattro formati centrali e tre ragioni per cui funziona." },
        { src: "/assets/spsn.jpg", alt: "Slide dello Swiss Psychedelic Student Network con associazioni locali collegate in una rete nazionale e conferenza studentesca annuale.", caption: "Figura 2 — Una rete nazionale: SPSN collega 7 delle 9 università svizzere con una conferenza annuale itinerante." },
      ],
    },
    kickstart: {
      title: "Avvio pratico e rete europea",
      intro: "Queste sono le due azioni concrete che hanno trasformato ogni associazione da idea a gruppo realmente attivo.",
      actions: [
        { icon: "forms", title: "Azione 1 — Un Google Form per il vostro paese", paragraphs: ["Prima di qualsiasi formalità, trovate le vostre persone. Create un breve Google Form e diffondetelo attraverso ogni canale disponibile: gruppi WhatsApp studenteschi, mailing list di facoltà, Instagram, reti PAREA / PSNG / UNEPSI / SPSN, contatti di conferenze.", "Campi consigliati: nome e cognome, email, telefono, università e città, ambito di studio, disponibilità ad aiutare a creare un'associazione nella propria università (Sì / Forse / Solo curioso), nota motivazionale opzionale."] },
        { icon: "whatsapp", title: "Azione 2 — Un gruppo WhatsApp per paese, più sottogruppi cittadini", paragraphs: ["Appena il form è online, create una community WhatsApp nazionale e aggiungete tutti coloro che hanno risposto sì o forse. Entro due settimane emergeranno cluster cittadini naturali: ognuno diventa il seme di un'associazione universitaria locale. Create un sottogruppo per città e lasciateli auto-organizzarsi.", "È esattamente così che UNEPSI è cresciuta dal basso in Italia e che PSNG ha seminato i primi Ortsgruppen locali in Germania."] },
      ],
      networkTitle: "Entrare nella rete europea",
      networkParagraphs: [
        "Non siete soli. Usate queste risorse dal primo giorno — duplicare lavoro già esistente è stato il nostro più grande errore all'inizio. Il motto della cooperazione studentesca è: “Copy-pase, Evidence-based!”",
        "Sentitevi liberi di chiedere a queste organizzazioni documenti, informazioni e consigli:",
      ],
      resources: sharedResources,
      timelineTitle: "Sviluppo reale che potete citare",
      timeline: [
        ["2019", "PALA nasce all'Università di Losanna come associazione studentesca per awareness, educazione scientifica, alfabetizzazione terapeutica e prevenzione/riduzione del rischio."],
        ["2022–2026", "I gruppi svizzeri si coordinano tramite SPSN, con associazioni locali a Losanna, Ginevra, Friburgo, Berna, Neuchâtel, Zurigo e Basilea."],
        ["2025–2026", "Il modello arriva in Italia tramite UNEPSI e in Germania tramite PSNG."],
        ["2026", "Lo scambio europeo continua attraverso forum come l'European Forum of National Psychedelic Societies di PAREA, per diffondere il modello in altri paesi."],
      ],
      rememberTitle: "Da ricordare",
      remember: [
        "Just Do It. Il primo incontro batte il piano perfetto.",
        "Stabilite aspettative realistiche: 5 persone impegnate > 50 interessate vagamente.",
        "Non siete soli — scrivete ad ALPS, SPSN, UNEPSI, PSNG. Ci siamo passati tutti.",
        "Onorate il Codice di Condotta Etica. Legittimità e onestà sono i vostri beni più preziosi.",
      ],
    },
    footer: { version: "V1_20260507", builtWith: "Costruito con Switzer Font di", sourceLabel: "Sorgente su GitHub.com" },
  },
  es: {
    htmlLang: "es",
    draftBanner: "DRAFT TRANSLATION",
    languageSwitcherLabel: "Elegir idioma",
    meta: guideMeta.es,
    hero: {
      summary:
        "Una guía práctica para estudiantes que quieren llevar educación psicodélica basada en evidencia y reducción de riesgos a su campus, conectándose con la red europea en crecimiento.",
      title: "Cómo crear una asociación estudiantil psicodélica en tu universidad",
    },
    why: {
      label: "Por qué empezar",
      headline:
        "En toda Europa, el interés estudiantil por la ciencia psicodélica crece con fuerza, pero la mayoría de universidades ofrece muy poco espacio para trabajar el tema de forma crítica, científica y comunitaria.",
      paragraphs: [
        "Una asociación estudiantil resuelve eso. Reconocida por la universidad, os da una voz legítima, acceso a salas y financiación, y una plataforma estable para invitar a investigadores, proyectar películas, organizar journal clubs y facilitar conversaciones de integración.",
        "Igual de importante: forma a la próxima generación de investigadores, clínicos, trabajadores de reducción de riesgos y personas que contribuirán a políticas públicas — con raíces locales, pero conectadas más allá de las fronteras. Esa es la semilla de un movimiento.",
      ],
    },
    origin: {
      label: "Origen",
      title: "De dónde viene esta guía",
      paragraphs: [
        "En septiembre de 2019 cofundamos PALA — Psychedelic Association of Lausanne for Awareness — la primera asociación estudiantil universitaria psicodélica en Lausana, Suiza. PALA sembró el Swiss Psychedelic Student Network (SPSN), que hoy reúne grupos activos en 7 de las 9 universidades suizas (Lausana, Ginebra, Neuchâtel, Zúrich, Basilea, Berna, Friburgo).",
        "Después ayudamos a catalizar redes hermanas en Italia (UNEPSI — University Network of Psychedelic Students Italy en 2023, con grupos activos en Roma, Turín, Bolonia y Padua) y Alemania (PSNG — Psychedelic Student Network Germany, lanzada en 2025).",
        "Esta guía destila lo que funcionó — y lo que no — en esos tres países, para que podáis acortar el camino en el vuestro.",
      ],
    },
    principles: {
      label: "Lo que estáis construyendo",
      title: "De los principios a la práctica en el campus",
      principleHeading: "Principio",
      campusHeading: "Cómo aparece en el campus",
      items: [
        { icon: "microscope", principle: "Basado en evidencia", campus: "Paper clubs, charlas de expertos, resúmenes de investigación y separación clara entre evidencia, preguntas abiertas y opinión personal." },
        { icon: "usersGroup", principle: "Liderado por estudiantes", campus: "Los estudiantes locales eligen formatos, idioma, ritmo y alianzas que encajan con la cultura de su universidad." },
        { icon: "school", principle: "Integrado en la universidad", campus: "El reconocimiento aporta legitimidad, acceso a salas, visibilidad en jornadas de bienvenida, rutas de financiación y un hogar administrativo responsable." },
        { icon: "shieldCheck", principle: "Orientado a reducción de riesgos", campus: "La educación incluye prevención, conciencia de riesgos y derivación responsable a servicios profesionales cuando haga falta." },
        { icon: "network", principle: "En red", campus: "Las asociaciones locales siguen siendo independientes mientras comparten recursos, ponentes y encuentros anuales mediante redes nacionales." },
      ],
    },
    guideParts: [
      { ...guideParts[0], title: "Registrar", label: "Registrar la asociación", partLabel: "Parte 1" },
      { ...guideParts[1], title: "Definir", label: "Definir la misión", partLabel: "Parte 2" },
      { ...guideParts[2], title: "Mapear", label: "Mapear el modelo", partLabel: "Parte 3" },
      { ...guideParts[3], title: "Lanzar", label: "Lanzar la red", partLabel: "Parte 4" },
    ],
    register: {
      title: "Registrar una asociación estudiantil en tu universidad",
      intro:
        "Cada universidad tiene su propia burocracia, pero el esqueleto es casi idéntico en las instituciones europeas. Seguid estos seis pasos en orden; cada uno suele tardar de unos días a unas semanas.",
      steps: [
        { icon: "fileText", title: "Encontrad la normativa administrativa.", body: `Buscad en la web de vuestra universidad términos como "student associations", "groupes d'étudiants", "associazioni studentesche", "Hochschulgruppen". La oficina relevante suele ser Student Affairs / Vie Étudiante / Studierendenwerk / Servicios al Estudiante. Descargad la plantilla oficial de estatutos; la mayoría de universidades ofrece una.` },
        { icon: "usersGroup", title: "Formad un comité fundador de 5-10 estudiantes.", body: "Buscad diversidad interdisciplinaria (psicología, medicina, neurociencia, filosofía, antropología, derecho, arte, ciencia de datos). Decidid al menos quién será presidente, tesorero y secretario; la mayoría de estatutos exige esos tres roles." },
        { icon: "clipboardCheck", title: "Redactad los estatutos.", body: "Usad la plantilla de la universidad. Definid: nombre, sede (la universidad), finalidad (educación, prevención, reducción de riesgos — ver Parte 2), reglas de membresía, gobierno (asamblea general, comité ejecutivo) y cláusula de disolución. Mantened la finalidad lo bastante amplia para evolucionar." },
        { icon: "presentation", title: "Celebrad una asamblea constitutiva.", body: "Convocad a los miembros fundadores, votad los estatutos, elegid el comité y firmad el acta. Ese único documento es lo que presentaréis a la universidad." },
        { icon: "school", title: "Presentad la solicitud y encontrad un padrino académico.", body: "Muchas universidades piden identificar a un profesor que avale la asociación. Elegid a alguien respetado e idealmente ya curioso por la investigación psicodélica: os protege políticamente y abre puertas. Presentad estatutos, acta y lista de miembros a la oficina estudiantil." },
        { icon: "buildingBank", title: "Abrid una cuenta bancaria y, si hace falta, registrad la asociación.", body: "En Suiza, Italia, Alemania, Francia, España, etc., las asociaciones tienen una forma jurídica nacional. Registrarse nacionalmente es opcional para actividad solo universitaria, pero necesario si queréis recibir subvenciones o firmar contratos." },
      ],
      tipTitle: "Consejo: elegid bien a vuestro padrino",
      tipParagraphs: [
        "Un padrino académico hace dos cosas: valida vuestra existencia dentro de la institución y señala a administradores escépticos que esto no es un proyecto marginal.",
        "En todas las asociaciones el padrino venía de psiquiatría, farmacología o psicología, pero filosofía o antropología funcionan igual de bien. Lo importante es credibilidad institucional y apertura.",
      ],
    },
    mission: {
      title: "Convertirla en una asociación estudiantil psicodélica",
      intro:
        "La estructura administrativa es la misma que la de cualquier club estudiantil. Lo que sigue es lo que hace que la vuestra sea específicamente psicodélica — y la mantiene creíble, segura y bienvenida por la universidad.",
      missionTitle: "Definir claramente la misión",
      missionIntro: "Usad la formulación a la que llegamos en SPSN, UNEPSI y PSNG. Decid explícitamente qué sois — y qué no sois.",
      isLabel: "Lo que es",
      notLabel: "Lo que no es",
      isItems: [
        "Una red estudiantil orientada a la educación y fundada científicamente.",
        "Un espacio de reflexión crítica, diálogo interdisciplinario y cultura de reducción de riesgos.",
        "Una vía para la próxima generación de investigadores, clínicos y contribuidores a políticas públicas.",
        "Un espacio legal donde hablar abiertamente de psicodélicos.",
      ],
      notItems: [
        "No es un sustituto de terapia ni un servicio de intervención en crisis.",
        "No es un espacio para promover consumo, abastecimiento o venta de sustancias.",
        "No es un escenario para promesas de curación o recomendaciones personales no verificables.",
      ],
      ethicsTitle: "Adoptar un Código de Conducta Ética desde el primer día",
      ethics: [
        { icon: "heartHandshake", text: "Respeto, inclusión y eventos sin sustancias en instalaciones universitarias." },
        { icon: "microscope", text: "Integridad científica: distinguir investigación establecida, preguntas abiertas y experiencia personal." },
        { icon: "usersGroup", text: "Las experiencias personales pueden compartirse solo como perspectiva subjetiva, nunca como consejo general." },
        { icon: "shieldCheck", text: "Nada de publicidad, mediación o facilitación de acceso a sustancias controladas." },
        { icon: "school", text: "Sin postura terapéutica o médica; derivar a participantes en dificultad a servicios profesionales." },
        { icon: "fileText", text: "Confidencialidad del contenido personal compartido en el grupo." },
      ],
      formatsTitle: "Formatos de actividad que funcionan",
      formats: [
        { icon: "movie", text: "Proyecciones de películas + discusión facilitada (baja barrera, atrae nuevos miembros)." },
        { icon: "microscope", text: "Journal club / paperclub: leer y analizar un artículo revisado por pares en cada sesión." },
        { icon: "book", text: "Club de lectura: acordar capítulos por adelantado y discutir con facilitación rotativa." },
        { icon: "presentation", text: "Charlas de expertos: invitar a investigadores, clínicos y trabajadores de reducción de riesgos locales." },
        { icon: "heartHandshake", text: "Grupos de discusión de integración (sin sustancias, entre pares, con reglas claras)." },
        { icon: "leaf", text: "Talleres de respiración, meditación, mindfulness — solo dirigidos por facilitadores formados." },
        { icon: "mapPin", text: "Visitas a laboratorios y clínicas, museos, viajes a conferencias." },
        { icon: "school", text: "Impulsar una asignatura optativa o seminario dentro del currículo de vuestra facultad !!! (funcionó en la Universidad de Zúrich)" },
      ],
      caseTitle: "Caso de estudio: los cuatro pilares originales de PALA",
      caseIntro: "Cuando PALA se lanzó en la Universidad de Lausana en 2019, usamos exactamente cuatro formatos — y eso nos mantuvo vivos el tiempo suficiente para crecer:",
      palaPillars: [
        "Proyecciones mensuales de películas (abiertas al público).",
        "Paperclub quincenal con artículos revisados por pares propuestos por miembros para educación entre pares.",
        "Grupo de discusión de integración (entre pares, sin sustancias).",
        "Un impulso para incluir contenido psicodélico en el currículo oficial de UNIL.",
      ],
    },
    swissModel: {
      title: "Referencia visual: el modelo suizo",
      intro:
        "El modelo: una primera asociación universitaria (PALA — la semilla) y lo que ocurre cuando varias asociaciones locales se coordinan en una red nacional (SPSN) con una conferencia anual rotativa.",
      namingTitle: "Elegid un nombre, acrónimo y logo memorables: lo primero que hay que hacer. Dream It!",
      namingIntro:
        "Suena cosmético. No lo es. Un acrónimo fuerte y un logo reconocible hacen que la gente os recuerde, os enlace y decida si asistir. Elegidlos el primer día.",
      namingAdvice: [
        "Haced que el acrónimo sea una palabra real, evocadora de vuestra misión. PALA remite a la isla utópica de Huxley en Island (1962), donde los psicodélicos están integrados culturalmente con fines de sanación y florecimiento.",
        "Construid el nombre largo desde: Psicodélico + vuestra ciudad + Universidad/estudiantes + una palabra positiva (Awareness, Research, Education).",
        "Encargad un logo circular limpio antes del lanzamiento; se reproduce bien en redes sociales, pósters y diapositivas.",
        "Reservad email, redes sociales y una web de una página al mismo tiempo.",
      ],
      figures: [
        { src: "/assets/pala.jpg", alt: "Diapositiva del modelo PALA con objetivos, formatos de actividad, asociaciones universitarias suizas y razones por las que funciona el modelo local.", caption: "Figura 1 — Ejemplo de asociación universitaria: PALA, Lausana (2019). Objetivos, cuatro formatos centrales y tres razones por las que funciona." },
        { src: "/assets/spsn.jpg", alt: "Diapositiva del Swiss Psychedelic Student Network mostrando asociaciones locales conectadas en una red nacional y conferencia estudiantil anual.", caption: "Figura 2 — Una red nacional: SPSN conecta 7 de 9 universidades suizas con una conferencia anual rotativa." },
      ],
    },
    kickstart: {
      title: "Arranque práctico y red europea",
      intro: "Estas son las dos acciones concretas que convirtieron cada asociación de una idea en un grupo realmente activo.",
      actions: [
        { icon: "forms", title: "Acción 1 — Un Google Form para vuestro país", paragraphs: ["Antes de cualquier formalidad, encontrad a vuestra gente. Cread un Google Form corto y difundidlo por todos los canales: grupos WhatsApp estudiantiles, listas de facultad, Instagram, redes PAREA / PSNG / UNEPSI / SPSN, contactos de conferencias.", "Campos recomendados: nombre y apellido, email, teléfono, universidad y ciudad, campo de estudio, disposición a ayudar a crear una asociación en su universidad (Sí / Quizás / Solo curiosidad), nota de motivación opcional."] },
        { icon: "whatsapp", title: "Acción 2 — Un grupo WhatsApp por país, más subgrupos por ciudad", paragraphs: ["En cuanto el formulario esté activo, cread una comunidad nacional de WhatsApp y añadid a quienes dijeron sí o quizás. En dos semanas veréis aparecer agrupaciones naturales por ciudad: cada una se convierte en la semilla de una asociación universitaria local. Cread un subgrupo por ciudad y dejad que se autoorganicen.", "Así es exactamente como UNEPSI creció desde abajo en Italia y como PSNG sembró sus primeros Ortsgruppen locales en Alemania."] },
      ],
      networkTitle: "Conectarse a la red europea",
      networkParagraphs: [
        "No estáis solos. Usad estos recursos desde el primer día — duplicar trabajo que ya existe fue el mayor error que cometimos al principio. El lema de la cooperación estudiantil es: “Copy-pase, Evidence-based!”",
        "Pedid libremente a estas organizaciones documentos, información y consejos:",
      ],
      resources: sharedResources,
      timelineTitle: "Desarrollo real que podéis citar",
      timeline: [
        ["2019", "PALA se funda en la Universidad de Lausana como asociación estudiantil para sensibilización, educación científica, alfabetización terapéutica y prevención/reducción de riesgos."],
        ["2022–2026", "Los grupos suizos se coordinan a través de SPSN, con asociaciones locales en Lausana, Ginebra, Friburgo, Berna, Neuchâtel, Zúrich y Basilea."],
        ["2025–2026", "El modelo viaja a Italia mediante UNEPSI y a Alemania mediante PSNG."],
        ["2026", "El intercambio europeo continúa mediante foros como el European Forum of National Psychedelic Societies de PAREA para difundir el modelo en otros países."],
      ],
      rememberTitle: "Recordad",
      remember: [
        "Just Do It. La primera reunión vence al plan perfecto.",
        "Poned expectativas realistas: 5 personas comprometidas > 50 vagas.",
        "No estáis solos — escribid a ALPS, SPSN, UNEPSI, PSNG. Todos hemos estado donde estáis.",
        "Honrad el Código de Conducta Ética. La legitimidad y la honestidad son vuestros activos más valiosos.",
      ],
    },
    footer: { version: "V1_20260507", builtWith: "Construido con Switzer Font de", sourceLabel: "Fuente en GitHub.com" },
  },
};

export const getLocalePath = (locale: Locale) => (locale === "en" ? "/" : `/${locale}/`);
