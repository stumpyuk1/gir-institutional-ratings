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
    signalWeek: "17–23 Aug 2026",
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
    formalRating: "BBB",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Quiet week; no single institutional trust shock specific to Parliament.",
    summary: "Trust in government and the system of governing are at or near historic lows. The legislature remains operationally functional, but domestic legitimacy is clearly impaired.",
    trajectoryNotes: [
      "Public trust in MPs and the system of government has fallen to near-historic lows.",
      "Westminster remains the dominant legislative forum, but perceptions of effectiveness and integrity are weak.",
      "Constitutional stress tests (Brexit, prorogation, standards cases) have been absorbed but have left residual legitimacy damage."
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
    formalRating: "A–",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "No significant new coverage of capability, impartiality or delivery this week.",
    summary: "Still more trusted than politicians, but perceptions of bureaucracy and mixed delivery performance have grown. Professional core and impartiality norms hold under sustained pressure.",
    trajectoryNotes: [
      "Capability and delivery critiques have intensified since the 2010s.",
      "Impartiality norms remain a relative strength versus many peers.",
      "Workforce size and composition debates continue."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate", snapshot: "Higher trust than elected politicians but lower than historic baselines.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Delivery performance mixed; major programme failures visible.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Adequate", snapshot: "Headcount and pay pressures ongoing but not existential.", trend: "Stable" },
      { name: "International Standing", judgement: "Strong residual", snapshot: "UK civil service model still referenced internationally.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has absorbed major political and delivery shocks while retaining core norms.", trend: "Stable" }
    ],
    peers: [
      { name: "Bundesverwaltung", country: "Germany", baseline2000: "AA", rating: "A+", outlook: "Stable" },
      { name: "Fonction publique", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Public Service of Canada", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Australian Public Service", country: "Australia", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Rijksoverheid", country: "Netherlands", baseline2000: "AA", rating: "A+", outlook: "Stable" },
      { name: "Regeringskansliet / agencies", country: "Sweden", baseline2000: "AA", rating: "A+", outlook: "Stable" }
    ]
  },

  {
    id: "4",
    name: "The Judiciary",
    slug: "judiciary",
    formalRating: "AA–",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Quiet week; no major new confidence or backlog stories dominating coverage.",
    summary: "Formal independence remains robust and international rankings relatively high, but public confidence and operational pressures (backlogs, resources) have deteriorated.",
    trajectoryNotes: [
      "Independence and rule-of-law standing remain high by international comparison.",
      "Court backlogs and resource constraints have grown.",
      "Public confidence measures have softened from earlier peaks."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Strong residual", snapshot: "Still among the more trusted institutions, but confidence has eased.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Backlogs and delays are material operational issues.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Resource and estate pressures are significant.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "UK judiciary retains high international regard for independence and quality.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Institutional independence has proven resilient under political pressure.", trend: "Stable" }
    ],
    peers: [
      { name: "Bundesverfassungsgericht / courts", country: "Germany", baseline2000: "AA+", rating: "AA", outlook: "Stable" },
      { name: "Conseil constitutionnel / courts", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Supreme Court / Federal Court", country: "Canada", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "High Court / Federal Court", country: "Australia", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Hoge Raad / courts", country: "Netherlands", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Högsta domstolen / courts", country: "Sweden", baseline2000: "AA+", rating: "AA", outlook: "Stable" }
    ]
  },

  {
    id: "5",
    name: "The Armed Forces",
    slug: "armed-forces",
    formalRating: "A+",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA–",
    trajectory: "Stable",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Quiet week; no material new coverage affecting public trust in the Armed Forces.",
    summary: "Public trust remains high relative to almost every other UK institution. Operational professionalism and alliance contribution continue, while personnel and equipment pressures persist.",
    trajectoryNotes: [
      "Public trust and respect remain high by UK institutional standards.",
      "Recruitment, retention and equipment readiness are persistent challenges.",
      "Alliance and operational performance continue to be strengths."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Strong", snapshot: "Consistently among the most trusted UK institutions.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Operational capability maintained but stretched by readiness and platform issues.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Personnel, housing and equipment pressures are material.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "Still a significant NATO and expeditionary contributor.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Demonstrated adaptive capacity in recent operations and domestic support roles.", trend: "Stable" }
    ],
    peers: [
      { name: "Bundeswehr", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Positive" },
      { name: "Forces armées françaises", country: "France", baseline2000: "A+", rating: "A+", outlook: "Stable" },
      { name: "Canadian Armed Forces", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Australian Defence Force", country: "Australia", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Royal Netherlands Armed Forces", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Swedish Armed Forces", country: "Sweden", baseline2000: "A", rating: "A+", outlook: "Positive" }
    ]
  },

  {
    id: "6",
    name: "The Police Service",
    slug: "police",
    formalRating: "BBB",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Negative",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Police Federation chairman and three other senior officials arrested on suspicion of fraud and bribery in a City of London Police corruption investigation.",
    summary: "Public confidence that local police do a good job has fallen substantially since the early 2000s. Victim satisfaction and detection performance have declined; the consent model is under clear strain.",
    trajectoryNotes: [
      "Public confidence metrics have declined markedly from early-2000s levels.",
      "A series of high-profile integrity and performance failures have compounded pressure.",
      "Reform and vetting efforts continue but legitimacy challenges persist."
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
