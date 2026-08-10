import type { Institution } from "./institutions-part1";

export const part3: Institution[] = [

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
  },

  {
    id: "18",
    name: "Fire and Rescue Services",
    slug: "fire-and-rescue",
    formalRating: "A–",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A+",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "3–9 Aug 2026",
    signalDriver: "Steady residual public goodwill; background coverage of culture and on-call staffing pressures without a single dominant shock.",
    summary: "External public trust remains among the highest of any UK public service, and emergency response is still broadly effective. Lengthening response times, on-call recruitment/retention pressure, post-Grenfell building-safety demands, and HMICFRS findings on culture and misconduct have eroded the overall profile from a clear A+ baseline.",
    trajectoryNotes: [
      "2000 baseline reflects the combined local authority fire brigades across England, Wales, Scotland and Northern Ireland prior to later mergers and inspectorate reforms.",
      "Public affection remains high (~80%+ positive sentiment) even as internal culture and misconduct issues have become more visible.",
      "On-call staffing and capital pressures (fleet, stations, specialist capability) are structural constraints.",
      "International standing on USAR and post-Grenfell technical contribution remains a strength."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Strong positive externally", snapshot: "Highest public affection among blue-light services; internal culture, bullying and misconduct findings are a growing legitimacy risk.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Adequate under strain", snapshot: "Emergency response generally effective; primary-fire response times have lengthened; building-safety enforcement capacity is under pressure.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Borderline under strain", snapshot: "On-call recruitment/retention headwinds, reduced whole-time headcount since 2010, and rising capital costs for fleet and specialist equipment.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "Operational guidance, USAR capability and post-2017 building fire-safety technical contribution retain high OECD standing.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Strong resilience on floods, wildfires and multi-agency emergencies; workforce planning and cultural reform capacity remain uneven across services.", trend: "Stable" }
    ],
    peers: [
      { name: "Sapeurs-Pompiers / SDIS", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Berufsfeuerwehr & Freiwillige Feuerwehr", country: "Germany", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Fire and Rescue NSW / State Fire Services", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Major US Fire Departments / FDNY", country: "United States", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Canadian Municipal Fire Services", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Swedish Civil Protection & Rescue (MSB)", country: "Sweden", baseline2000: "AA–", rating: "A+", outlook: "Stable" }
    ]
  }
];
