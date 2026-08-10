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

export const institutions: Institution[] = [
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
  },
  {
    id: "7",
    name: "The National Health Service (NHS)",
    slug: "nhs",
    formalRating: "BBB+",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Negative",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Continued focus on waiting times, workforce pressures and service performance.",
    summary: "Overall public satisfaction remains near historic lows despite a modest recent uptick. Access and experience metrics are weak, while founding principles retain strong public support.",
    trajectoryNotes: [
      "BSA satisfaction recovered slightly in 2025 but remains very low by historical standards.",
      "Waiting lists and workforce shortages are binding constraints.",
      "Symbolic attachment to the NHS remains high."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Mixed – high attachment, low satisfaction", snapshot: "Founding principles strongly supported; delivery satisfaction low.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under clear pressure", snapshot: "Access and waiting-time performance remain weak.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under severe pressure", snapshot: "Demand, workforce and funding pressures interact strongly.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Clinical outcomes mixed; system design still widely studied.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Has absorbed major shocks but recovery capacity is constrained.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "French healthcare system", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "German GKV system", country: "Germany", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Nordic universal systems", country: "Sweden / Nordic", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Canadian Medicare", country: "Canada", baseline2000: "A+", rating: "A–", outlook: "Negative" },
      { name: "Australian Medicare + public hospitals", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Dutch regulated competition system", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" }
    ]
  },
  {
    id: "8",
    name: "Higher Education / Universities",
    slug: "higher-education",
    formalRating: "A+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "AA",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Steady background debate on value for money and international student dependence; no acute new shock.",
    summary: "Still a source of national pride and a major soft-power asset. Global research rankings remain strong, but domestic legitimacy and the financial model face growing pressure.",
    trajectoryNotes: [
      "Research excellence and international standing remain clear strengths.",
      "Graduate / non-graduate and political polarisation has increased.",
      "Financial model (fees + international students) is under strain."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate to Strong", snapshot: "Majority still see positive national impact, with emerging divides.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Strong", snapshot: "Research performance remains world-class in many fields.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Domestic fee freeze and international fee dependence create vulnerability.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "Disproportionate presence in global rankings.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate under pressure", snapshot: "Sector has expanded rapidly; adaptive capacity is now being tested.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "German university system", country: "Germany", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "French universities + grandes écoles", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Australian university system", country: "Australia", baseline2000: "AA", rating: "A+", outlook: "Negative" },
      { name: "Canadian university system", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Dutch universities", country: "Netherlands", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Nordic university systems", country: "Sweden / Denmark", baseline2000: "AA", rating: "AA–", outlook: "Stable" }
    ]
  },
  {
    id: "9",
    name: "The BBC",
    slug: "bbc",
    formalRating: "A",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "AA",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Background impartiality and Charter-related discussion; no single dominant new story this week.",
    summary: "Still the most used and relatively trusted news provider, but trust has fallen materially since the late 2010s. International soft power remains a major strength.",
    trajectoryNotes: [
      "Multi-year decline in trust metrics since ~2018.",
      "Impartiality controversies and Charter pressures are significant.",
      "World Service and global brand remain soft-power assets."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Still relatively trusted, but clear multi-year decline.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate to Strong", snapshot: "Reach remains high; digital transition ongoing.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Licence-fee model and funding debates continue.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "Major soft-power contribution via news and World Service.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate under pressure", snapshot: "Institutional culture of independence remains, but legitimacy is contested.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "ARD / ZDF", country: "Germany", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "France Télévisions / Radio France", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "CBC / Radio-Canada", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "ABC / SBS", country: "Australia", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "NHK", country: "Japan", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Nordic public broadcasters", country: "Nordic", baseline2000: "AA", rating: "AA–", outlook: "Stable" }
    ]
  },
  {
    id: "10",
    name: "The Bank of England",
    slug: "bank-of-england",
    formalRating: "A",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Steady focus on inflation path and rates; no acute institutional shock.",
    summary: "Operational independence and analytical capacity remain. Public and market confidence is lower than the pre-pandemic peak after the 2021–23 high-inflation episode.",
    trajectoryNotes: [
      "Net public satisfaction has fallen from strongly positive in the early independence years.",
      "Inflation-targeting credibility was damaged by the recent high-inflation period.",
      "Institutional framework of independence remains intact."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Net satisfaction near neutral after earlier high levels.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate", snapshot: "Inflation has returned toward target after a major miss.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Strong", snapshot: "Balance-sheet and operational capacity remain robust.", trend: "Stable" },
      { name: "International Standing", judgement: "Strong residual", snapshot: "Still a major and respected central bank.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Framework proved resilient through successive shocks.", trend: "Stable" }
    ],
    peers: [
      { name: "Federal Reserve", country: "United States", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "European Central Bank", country: "Euro area", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Bank of Canada", country: "Canada", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Reserve Bank of Australia", country: "Australia", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Sveriges Riksbank", country: "Sweden", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Swiss National Bank", country: "Switzerland", baseline2000: "AA+", rating: "AA", outlook: "Stable" }
    ]
  },
  {
    id: "11",
    name: "HM Treasury",
    slug: "hm-treasury",
    formalRating: "A–",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A+",
    trajectory: "Deteriorating",
    weeklySignal: "Negative",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Ongoing fiscal sustainability, debt and headroom debates dominate coverage.",
    summary: "Institutional capacity remains high, but fiscal rules and medium-term sustainability metrics are under persistent strain. Market credibility is maintained but fragile.",
    trajectoryNotes: [
      "From a position of strengthening credibility around 2000 to ongoing fiscal stress.",
      "Debt ratios and repeated shocks have weakened the perceived seriousness of the framework.",
      "Analytical capacity and market access remain strengths."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Shares in general low trust in government economic management.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under pressure", snapshot: "Fiscal outcomes and rule credibility have been tested repeatedly.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Public finances remain under significant medium-term pressure.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate to Strong", snapshot: "UK sovereign standing remains investment-grade and liquid.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has managed successive crises, but buffers are thinner.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Federal Ministry of Finance", country: "Germany", baseline2000: "AA+", rating: "AA", outlook: "Stable" },
      { name: "Ministry of Economy and Finance", country: "France", baseline2000: "A+", rating: "A", outlook: "Negative" },
      { name: "US Department of the Treasury", country: "United States", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Department of Finance", country: "Canada", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Australian Treasury", country: "Australia", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Ministry of Finance", country: "Netherlands", baseline2000: "AA+", rating: "AA", outlook: "Stable" }
    ]
  },
  {
    id: "12",
    name: "Local Government",
    slug: "local-government",
    formalRating: "BBB",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Negative",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Continued coverage of funding shortfalls, social care demand and Section 114 risks.",
    summary: "Chronic funding shortfalls relative to demand, especially in social care, have left the financial model widely regarded as unsustainable without major reform. Systemic impairment risk is material.",
    trajectoryNotes: [
      "Real-terms spending power in many services remains below 2010 levels.",
      "Rising demand (social care, temporary accommodation) has outpaced resources.",
      "Repeated financial stress events have become more frequent."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Trust in local political layers remains modest; service experience is mixed.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under pressure", snapshot: "Core service delivery is highly variable and under strain.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Weak", snapshot: "Financial model is widely viewed as unsustainable without reform.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Limited", snapshot: "No strong distinctive international profile.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under severe pressure", snapshot: "Multiple authorities have faced acute financial stress.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Municipalities and Länder", country: "Germany", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Collectivités territoriales", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Municipalities and provinces", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Kommuner and regions", country: "Sweden", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Municipalities and provinces", country: "Canada", baseline2000: "AA–", rating: "A", outlook: "Stable" },
      { name: "Local + state governments", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  },
  {
    id: "13",
    name: "The Church of England",
    slug: "church-of-england",
    formalRating: "BB+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Low volume week; long-run secularisation trends remain the dominant background factor.",
    summary: "Long-run decline in affiliation and attendance has continued. Residual establishment role and soft power via the Anglican Communion remain, but core vitality metrics point to clear impairment.",
    trajectoryNotes: [
      "Affiliation and weekly attendance have fallen substantially since 2000.",
      "‘No religion’ is now dominant among younger cohorts.",
      "Establishment links and Communion role provide residual standing."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Cultural residual respect exists alongside declining active identification.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Weakening", snapshot: "Core participation and vitality metrics have declined over decades.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Parish system and finances remain under strain from declining giving and rising costs.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong residual", snapshot: "Mother church of the Anglican Communion; soft-power links persist.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under strain", snapshot: "Adaptive efforts have not reversed the secularisation trend.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Church of Sweden", country: "Sweden", baseline2000: "A", rating: "BBB+", outlook: "Negative" },
      { name: "Church of Norway", country: "Norway", baseline2000: "A", rating: "BBB+", outlook: "Negative" },
      { name: "Church of Denmark", country: "Denmark", baseline2000: "A", rating: "BBB+", outlook: "Negative" },
      { name: "Evangelical Church in Germany (EKD)", country: "Germany", baseline2000: "A–", rating: "BBB", outlook: "Negative" },
      { name: "Church of Scotland", country: "Scotland", baseline2000: "A–", rating: "BB+", outlook: "Negative" },
      { name: "Other Nordic established churches", country: "Nordic", baseline2000: "A–", rating: "BBB", outlook: "Negative" }
    ]
  },
  {
    id: "14",
    name: "Prisons & Probation",
    slug: "prisons-probation",
    formalRating: "BBB",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A–",
    trajectory: "Deteriorating",
    weeklySignal: "Negative",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Ongoing coverage of overcrowding, staffing shortages and safety incidents across the estate.",
    summary: "The prison estate is chronically overcrowded and under-staffed. Safety, purposeful activity and resettlement performance have deteriorated; probation capacity remains stretched. The system is operationally impaired relative to its mandate.",
    trajectoryNotes: [
      "Prison population has risen substantially since 2000 while usable capacity has not kept pace.",
      "Assaults, self-harm and regime restrictions have been persistent inspectorate concerns.",
      "Probation unification and workload pressures have compounded delivery risk."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Public confidence in rehabilitation and safety is weak; punishment expectations remain high.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Weak", snapshot: "Overcrowding, limited regimes and elevated violence undermine core outcomes.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under severe pressure", snapshot: "Staffing shortages and estate condition are binding constraints.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Limited", snapshot: "UK system is not a positive international benchmark on overcrowding or outcomes.", trend: "Deteriorating" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under severe pressure", snapshot: "Little spare capacity to absorb further population or incident shocks.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Norwegian Correctional Service", country: "Norway", baseline2000: "AA–", rating: "AA–", outlook: "Stable" },
      { name: "Dutch prison & probation system", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "German prison system (Länder)", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Correctional Service of Canada", country: "Canada", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Australian state prison systems", country: "Australia", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "French prison administration", country: "France", baseline2000: "A–", rating: "BBB+", outlook: "Negative" }
    ]
  },
  {
    id: "15",
    name: "State School System",
    slug: "state-school-system",
    formalRating: "A–",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A+",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Background debate on attainment gaps, teacher recruitment and curriculum; no single dominant shock this week.",
    summary: "Attainment and inspection outcomes remain mixed by international standards. Teacher recruitment and retention are persistent constraints. Parental trust in local schools is often higher than trust in the system as a whole.",
    trajectoryNotes: [
      "PISA and domestic attainment trends show long-run pressure on relative performance.",
      "Workforce shortages and workload have become structural rather than cyclical.",
      "Academisation and accountability reforms reshaped the institutional map without clearly stabilising outcomes."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Trust in teachers and local schools often holds; confidence in the national system is weaker.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Outcomes are uneven; attainment gaps and post-pandemic recovery remain material.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Real-terms funding, capital condition and workforce supply are constrained.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "No longer a clear top-tier PISA performer; still a large, studied system.", trend: "Deteriorating" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate under pressure", snapshot: "Absorbed COVID disruption with lasting scars; reform capacity is contested.", trend: "Stable" }
    ],
    peers: [
      { name: "Finnish comprehensive school system", country: "Finland", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Singapore school system", country: "Singapore", baseline2000: "AA–", rating: "AA", outlook: "Stable" },
      { name: "German school system (Länder)", country: "Germany", baseline2000: "A+", rating: "A+", outlook: "Stable" },
      { name: "French school system", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Canadian provincial school systems", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Australian school systems", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  },
  {
    id: "16",
    name: "HMRC",
    slug: "hmrc",
    formalRating: "BBB",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "A+",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Steady background coverage of digital transition and taxpayer service; no acute new shock this week.",
    summary: "Revenue collection and tax-gap performance remain relatively strong by international standards, but public-facing service and trust have deteriorated sharply since the early 2000s. Digital-first delivery improved efficiency on paper while creating severe customer-service bottlenecks before channels matured. Recent stabilisation of call handling supports a Stable outlook at BBB.",
    trajectoryNotes: [
      "2000 baseline reflects combined Inland Revenue and HM Customs & Excise prior to the 2005 merger.",
      "Customer-service metrics reached multi-year lows in 2023–24 before partial recovery into 2026.",
      "Making Tax Digital has faced repeated delays and friction among small businesses and agents.",
      "Crisis delivery (e.g. COVID furlough schemes) showed strong adaptive capacity."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Material negative", snapshot: "Acceptance of tax as civic obligation remains; trust in operational fairness and responsiveness has fallen. Perceived enforcement asymmetry remains a legitimacy drag.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under strain", snapshot: "Tax gap near 5.8–6.4% of liability is respectable internationally; taxpayer experience and MTD delivery have been weaker.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Borderline", snapshot: "Very low cost-of-collection ratio (~0.52p per £1) but operationally brittle after headcount cuts ahead of digital maturity; legacy IT remains a capital pressure.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "High OECD standing on data exchange, digital tax architecture and anti-evasion cooperation; tax-gap methodology widely respected.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Demonstrated exceptional agility as emergency fiscal engine (e.g. COVID job retention and self-employment support schemes).", trend: "Stable" }
    ],
    peers: [
      { name: "Internal Revenue Service", country: "United States", baseline2000: "A", rating: "BBB+", outlook: "Stable" },
      { name: "Canada Revenue Agency", country: "Canada", baseline2000: "A+", rating: "A–", outlook: "Stable" },
      { name: "Australian Taxation Office", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Direction Générale des Finances Publiques", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Bundeszentralamt für Steuern", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Swedish Tax Agency (Skatteverket)", country: "Sweden", baseline2000: "AA–", rating: "A+", outlook: "Stable" }
    ]
  },
  {
    id: "17",
    name: "Prosecutorial Services (CPS / SFO)",
    slug: "prosecutorial-services",
    formalRating: "BBB+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Negative",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Ongoing coverage of charging delays, case attrition and court backlogs affecting prosecution outcomes.",
    summary: "Independent prosecution remains institutionally established, but public confidence is weak and operational throughput is constrained by court backlogs, charging delays and workforce pressure. The SFO retains niche strength on corporate enforcement and DPAs, while complex case disclosure and attrition remain material vulnerabilities.",
    trajectoryNotes: [
      "2000 baseline reflects CPS (Prosecution of Offences Act 1985) and SFO (Criminal Justice Act 1987) as a combined prosecutorial apparatus.",
      "Public confidence that prosecutors bring the right charge has stagnated near historic lows (~53%).",
      "Crown Court backlogs and pre-charge delays degrade system performance; SFO vacancy and disclosure pressures persist.",
      "International standing on Bribery Act enforcement and DPAs remains a relative strength."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Material negative", snapshot: "Confidence that the right charge is brought has stagnated at historic lows; attrition in rape and domestic abuse cases and long pre-charge waits damage legitimacy.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Borderline under strain", snapshot: "28-day charging performance improved but still missed target; Crown Court backlogs exceed 100,000 complex cases; SFO DPAs and corporate enforcement are stronger relative points.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Borderline", snapshot: "High prosecutor turnover, shortage of experienced Crown Advocates and ~14% SFO vacancy rate; reliance on external counsel strains budgets.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Common-law prosecutorial standards and Bribery Act / DPA practice remain internationally referenced.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Showed agility on public-order surges and emergency charging protocols, but structural court backlogs limit clean recovery capacity.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Director of Public Prosecutions / Commonwealth DPP", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Public Prosecution Service of Canada", country: "Canada", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Parquet National Financier / PPO", country: "France", baseline2000: "A–", rating: "A–", outlook: "Stable" },
      { name: "Federal Public Prosecutor General (GBA)", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Public Prosecution Service", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Department of Justice / Criminal Division", country: "United States", baseline2000: "A", rating: "A–", outlook: "Stable" }
    ]
  }
];

export function getInstitution(slug: string): Institution | undefined {
  return institutions.find((i) => i.slug === slug);
}

export function getRatingColor(rating: RatingCode): string {
  if (rating.startsWith("AA") || rating === "AAA") return "text-rating-aa";
  if (rating.startsWith("A")) return "text-rating-a";
  if (rating.startsWith("BBB")) return "text-rating-bbb";
  if (rating.startsWith("BB")) return "text-rating-bb";
  return "text-rating-b";
}

export function getRatingBg(rating: RatingCode): string {
  if (rating.startsWith("AA") || rating === "AAA") return "bg-rating-aa";
  if (rating.startsWith("A")) return "bg-rating-a";
  if (rating.startsWith("BBB")) return "bg-rating-bbb";
  if (rating.startsWith("BB")) return "bg-rating-bb";
  return "bg-rating-b";
}
