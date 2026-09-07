export type RatingCode =
  | "AAA" | "AA+" | "AA" | "AA–"
  | "A+" | "A" | "A–"
  | "BBB+" | "BBB" | "BBB–"
  | "BB+" | "BB" | "BB–"
  | "B+" | "B" | "B–";

export type Outlook = "Positive" | "Stable" | "Negative";
export type Signal = "Positive" | "Neutral" | "Negative";
export type Trajectory = "Improving" | "Stable" | "Deteriorating";

export interface Institution {
  id: string;
  name: string;
  slug: string;
  formalRating: RatingCode;
  formalOutlook: Outlook;
  formalDate: string;
  baseline2000: RatingCode;
  trajectory: Trajectory;
  weeklySignal: Signal;
  signalWeek: string;
  signalDriver: string;
  summary: string;
  trajectoryNotes: string[];
  pillars: {
    name: string;
    judgement: string;
    snapshot: string;
    trend: Trajectory;
  }[];
  peers: { name: string; country: string; baseline2000: RatingCode; rating: RatingCode; outlook: Outlook }[];
}

export const part1: Institution[] = [

  {
    id: "1",
    name: "The Monarchy",
    slug: "monarchy",
    formalRating: "A+",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "31 Aug – 6 Sep 2026",
    signalDriver: "Quiet week with no material new coverage of institutional standing or legitimacy.",
    summary: "Public support for remaining a monarchy has fallen to a 33-year low, driven by a sharp generational split. Soft power and ceremonial roles remain strong, but the long-term legitimacy base has narrowed.",
    trajectoryNotes: [
      "Support among 18–34s has roughly halved since the early 2010s.",
      "Satisfaction with King Charles remains respectable but below the late Queen’s long-run average.",
      "Soft-power and ceremonial performance continue to be institutional strengths."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Majority still support the institution, but generational erosion is clear.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Strong", snapshot: "Ceremonial and soft-power roles continue to be delivered effectively.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Adequate", snapshot: "Sovereign Grant model remains, with rising scrutiny of value for money.", trend: "Stable" },
      { name: "International Standing", judgement: "Strong", snapshot: "Still a significant soft-power asset for the UK.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has managed recent family controversies, but adaptive pressure from younger cohorts is rising.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "House of Orange-Nassau", country: "Netherlands", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "House of Bernadotte", country: "Sweden", baseline2000: "AA+", rating: "AA", outlook: "Stable" },
      { name: "House of Glücksburg", country: "Norway", baseline2000: "AA", rating: "AA", outlook: "Stable" },
      { name: "House of Glücksburg", country: "Denmark", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "House of Bourbon", country: "Spain", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "House of Saxe-Coburg and Gotha", country: "Belgium", baseline2000: "AA–", rating: "A+", outlook: "Stable" }
    ]
  },

  {
    id: "2",
    name: "Parliament (Westminster)",
    slug: "parliament",
    formalRating: "BBB+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "31 Aug – 6 Sep 2026",
    signalDriver: "Quiet week; no single institutional trust shock specific to Parliament.",
    summary: "Trust in government and the system of governing are at or near historic lows. The legislature remains operationally functional, but domestic legitimacy is clearly impaired.",
    trajectoryNotes: [
      "Diffuse support for the political system has eroded over 25 years.",
      "BSA measures of trust in governments to put nation above party remain near record lows.",
      "International standing of the Westminster model persists despite domestic strain."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Weak", snapshot: "Near-historic lows on multiple trust and system-confidence measures.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Legislative and scrutiny functions continue, but quality of outcomes is widely questioned.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Adequate", snapshot: "Estate and resource issues long-standing but not the primary rating driver.", trend: "Stable" },
      { name: "International Standing", judgement: "Strong residual", snapshot: "Westminster model retains prestige even as domestic trust has fallen.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Has absorbed multiple scandals and constitutional stress tests, but legitimacy cushion is thin.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Bundestag / Bundesrat", country: "Germany", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "National Assembly / Senate", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Parliament of Canada", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Parliament of Australia", country: "Australia", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "States General", country: "Netherlands", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Riksdag", country: "Sweden", baseline2000: "AA+", rating: "AA", outlook: "Stable" }
    ]
  },

  {
    id: "3",
    name: "The Civil Service",
    slug: "civil-service",
    formalRating: "A",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "31 Aug – 6 Sep 2026",
    signalDriver: "No significant new coverage of capability, impartiality or delivery this week.",
    summary: "Still more trusted than politicians, but perceptions of bureaucracy and mixed delivery performance have grown. Professional core and impartiality norms hold under sustained pressure.",
    trajectoryNotes: [
      "Trust relative to politicians remains a comparative strength.",
      "Capability and project-delivery critiques have become more persistent.",
      "Impartiality norms remain formally strong."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate", snapshot: "Higher than politicians, but public views of bureaucracy and innovation are mixed.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Mixed delivery record on major projects and reforms.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Adequate", snapshot: "Workforce and capability pressures are material.", trend: "Stable" },
      { name: "International Standing", judgement: "Strong residual", snapshot: "Whitehall model still carries respect among peer administrations.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has managed successive government transitions, but reform capacity is contested.", trend: "Stable" }
    ],
    peers: [
      { name: "Federal Civil Service", country: "Germany", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Fonction publique", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Public Service of Canada", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Australian Public Service", country: "Australia", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Dutch civil service", country: "Netherlands", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Singapore Civil Service", country: "Singapore", baseline2000: "AA–", rating: "AA", outlook: "Stable" }
    ]
  },

  {
    id: "4",
    name: "The Judiciary",
    slug: "judiciary",
    formalRating: "A",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "AA–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "31 Aug – 6 Sep 2026",
    signalDriver: "Quiet week; no major new confidence or backlog stories dominating coverage.",
    summary: "Formal independence remains robust and international rankings relatively high, but public confidence and operational pressures (backlogs, resources) have deteriorated.",
    trajectoryNotes: [
      "Sharp drop in public confidence recorded in recent Gallup data.",
      "Independence is preserved; legitimacy cushion has thinned.",
      "Access-to-justice and caseload pressures are material."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Confidence has fallen; independence still valued.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Backlogs and delay are persistent concerns.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Resource constraints affect capacity.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "UK judiciary retains high comparative standing.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Institutional independence provides resilience, but operational strain is real.", trend: "Stable" }
    ],
    peers: [
      { name: "Federal Courts / FCC", country: "Germany", baseline2000: "AA+", rating: "AA", outlook: "Stable" },
      { name: "Conseil d’État / Cour de cassation", country: "France", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Federal & provincial courts", country: "Canada", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Federal & state courts", country: "Australia", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Dutch judiciary", country: "Netherlands", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "US federal judiciary", country: "United States", baseline2000: "AA–", rating: "A", outlook: "Negative" }
    ]
  },

  {
    id: "5",
    name: "The Armed Forces",
    slug: "armed-forces",
    formalRating: "AA–",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA",
    trajectory: "Stable",
    weeklySignal: "Neutral",
    signalWeek: "31 Aug – 6 Sep 2026",
    signalDriver: "Quiet week; no material new coverage affecting public trust in the Armed Forces.",
    summary: "Public trust remains high relative to almost every other UK institution. Operational professionalism and alliance contribution continue, while personnel and equipment pressures persist.",
    trajectoryNotes: [
      "Consistently one of the highest-trust UK institutions.",
      "Recruitment, retention and mass have been longer-term constraints.",
      "Alliance contribution and professional reputation remain strong."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Strong", snapshot: "Top-tier public trust and respect rankings.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Strong", snapshot: "High professional standards and alliance interoperability.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Personnel and equipment readiness constraints are material.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "Significant hard and soft power contribution.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Institutional culture and operational adaptability remain assets.", trend: "Stable" }
    ],
    peers: [
      { name: "French Armed Forces", country: "France", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Bundeswehr", country: "Germany", baseline2000: "A", rating: "A+", outlook: "Positive" },
      { name: "Australian Defence Force", country: "Australia", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Canadian Armed Forces", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Royal Netherlands Armed Forces", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Swedish Armed Forces", country: "Sweden", baseline2000: "A", rating: "A+", outlook: "Positive" }
    ]
  },

  {
    id: "6",
    name: "The Police Service",
    slug: "police",
    formalRating: "A–",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A+",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "31 Aug – 6 Sep 2026",
    signalDriver: "No dominant new legitimacy or operational-failure story this week.",
    summary: "Public confidence remains under sustained pressure from high-profile misconduct cases, operational performance concerns and perceptions of differential treatment. Core capability and most officers continue to deliver, but the legitimacy cushion has thinned markedly over two decades.",
    trajectoryNotes: [
      "Multiple high-profile misconduct and culture stories have compounded.",
      "Trust measures have fallen more sharply than for most peer institutions.",
      "Operational demand and resource pressures remain material."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Confidence has fallen; legitimacy questions are persistent.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Core functions continue amid high demand and scrutiny.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Workforce, demand and specialisation pressures are material.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Model retains comparative interest despite domestic challenges.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Has absorbed successive scandals, but adaptive capacity is contested.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "German police", country: "Germany", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "French police", country: "France", baseline2000: "A", rating: "A–", outlook: "Negative" },
      { name: "Canadian police", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Australian police", country: "Australia", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Dutch police", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Swedish police", country: "Sweden", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  }

];
