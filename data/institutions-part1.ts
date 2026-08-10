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
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Quiet week with limited new coverage of institutional standing.",
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
    weeklySignal: "Negative",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Continued coverage of low trust in the political system and governing effectiveness.",
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
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Limited major coverage; ongoing debates about capability and impartiality continue at background level.",
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
    signalWeek: "3–9 Aug 2026",
    signalDriver: "No major new trust shocks this week; backlog and confidence themes remain background factors.",
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
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Steady positive residual sentiment; no major negative institutional stories this week.",
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
    weeklySignal: "Negative",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Ongoing coverage of confidence, performance variation and legitimacy challenges.",
    summary: "Public confidence that local police do a good job has fallen substantially since the early 2000s. Victim satisfaction and detection performance have declined; the consent model is under clear strain.",
    trajectoryNotes: [
      "CSEW confidence and ‘good job’ ratings have trended down over two decades.",
      "Force variation in performance remains high.",
      "Legitimacy and fairness perceptions continue to be tested."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Confidence and satisfaction metrics well below early-2000s levels.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under pressure", snapshot: "Detection rates and victim satisfaction have declined.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Demand pressures and resource constraints are material.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Consent model still referenced internationally, but domestic strain is visible.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Reform capacity exists but legitimacy challenges are persistent.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "State police / BKA", country: "Germany", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "National Police + Gendarmerie", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "National Police", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "RCMP + provincial forces", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "State & federal police", country: "Australia", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Swedish Police Authority", country: "Sweden", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  }
];
