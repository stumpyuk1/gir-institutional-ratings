import type { Institution } from "./institutions-part1";

export const part3: Institution[] = [

  {
    id: "13",
    name: "The Church of England",
    slug: "church-of-england",
    formalRating: "BBB+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "No material new coverage of institutional standing or attendance this week.",
    summary: "The Church of England remains the established church with residual soft-power and civic roles. Attendance, membership and cultural authority have declined substantially since 2000; safeguarding failures have damaged trust.",
    trajectoryNotes: [
      "Weekly attendance and membership have fallen sharply over 25 years.",
      "Safeguarding scandals have been a major legitimacy hit.",
      "Civic and ceremonial roles continue."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Cultural residual respect remains, but active trust and identification have fallen.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Parochial and civic functions continue amid resource constraints.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Declining active membership and endowment pressures.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Anglican Communion role persists; domestic decline is visible.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Institutional adaptation is slow relative to the scale of decline.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Evangelische Kirche in Deutschland", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Église protestante unie de France + Catholic Church", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "United Church / Anglican Church of Canada", country: "Canada", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Uniting Church / Anglican Church of Australia", country: "Australia", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Protestantse Kerk in Nederland", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Church of Sweden", country: "Sweden", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  },

  {
    id: "14",
    name: "Prisons & Probation",
    slug: "prisons-probation",
    formalRating: "BB+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "BBB+",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "No dominant new overcrowding or disorder story this week.",
    summary: "The prison and probation system operates under chronic overcrowding, staffing shortages and high reoffending rates. Safety and rehabilitation performance have deteriorated relative to the early 2000s baseline.",
    trajectoryNotes: [
      "Prison population and density pressures have intensified.",
      "Staffing and safety metrics have deteriorated.",
      "Probation reforms have had mixed results."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Weak", snapshot: "Low public confidence in rehabilitation and safety outcomes.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Impaired", snapshot: "Overcrowding, violence and reoffending remain high.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under severe pressure", snapshot: "Capacity and staffing constraints are structural.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Lagging", snapshot: "Comparative performance on safety and rehabilitation is weak among peers.", trend: "Deteriorating" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Weak", snapshot: "Limited spare capacity to absorb further pressure.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "German prison & probation system", country: "Germany", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "French prison administration", country: "France", baseline2000: "BBB+", rating: "BBB", outlook: "Negative" },
      { name: "Correctional Service of Canada", country: "Canada", baseline2000: "A–", rating: "BBB+", outlook: "Stable" },
      { name: "Australian state prison systems", country: "Australia", baseline2000: "A–", rating: "BBB+", outlook: "Stable" },
      { name: "Dutch prison & probation service", country: "Netherlands", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Swedish Prison and Probation Service", country: "Sweden", baseline2000: "A", rating: "A–", outlook: "Stable" }
    ]
  },

  {
    id: "15",
    name: "State School System",
    slug: "state-school-system",
    formalRating: "BBB+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "Quiet week; no major new attainment or industrial-action story.",
    summary: "The state school system continues to deliver universal provision. Attainment gaps, teacher recruitment/retention and post-pandemic recovery pressures have eroded the overall profile from the early-2000s baseline.",
    trajectoryNotes: [
      "International comparative attainment (PISA etc.) has been mixed to soft.",
      "Teacher supply and workload pressures are persistent.",
      "Academy and free-school reforms produced mixed results."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Schools remain valued locally; system-level confidence is lower.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under pressure", snapshot: "Attainment and progress measures show persistent gaps.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Real-terms funding and recruitment challenges.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Mixed PISA and TIMSS standing relative to peers.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Demonstrated resilience in the pandemic; recovery uneven.", trend: "Stable" }
    ],
    peers: [
      { name: "German state school systems", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "French école publique", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Canadian provincial systems", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Australian state systems", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Dutch primary & secondary system", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Swedish school system", country: "Sweden", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  },

  {
    id: "16",
    name: "HMRC",
    slug: "hmrc",
    formalRating: "A–",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Stable",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "No major new tax-administration or customer-service story this week.",
    summary: "HMRC collects the bulk of UK tax revenue with improving digital channels. Customer service performance and complexity of the tax code remain persistent criticisms; compliance yield is a relative strength.",
    trajectoryNotes: [
      "Digital transformation (Making Tax Digital etc.) has progressed.",
      "Customer service and phone-wait metrics have been weak for extended periods.",
      "Tax-gap estimates show mixed progress."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Seen as necessary but often frustrating to deal with.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Adequate", snapshot: "Revenue collection is effective; service experience is mixed.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Adequate", snapshot: "Operational model is large-scale and relatively stable.", trend: "Stable" },
      { name: "International Standing", judgement: "Adequate to Strong", snapshot: "Digital tax administration is studied by peers.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Handled COVID support schemes and subsequent recovery at scale.", trend: "Stable" }
    ],
    peers: [
      { name: "Bundeszentralamt für Steuern / Länder", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Direction générale des Finances publiques", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Canada Revenue Agency", country: "Canada", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Australian Taxation Office", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Belastingdienst", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Skatteverket", country: "Sweden", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  },

  {
    id: "17",
    name: "Prosecutorial Services",
    slug: "prosecutorial-services",
    formalRating: "A–",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "Quiet week; no major new disclosure or charging-decision controversy.",
    summary: "The Crown Prosecution Service and related prosecutorial functions operate under caseload and disclosure pressures. Public confidence has been affected by high-profile failures and backlogs in the wider criminal justice system.",
    trajectoryNotes: [
      "Disclosure failures and charging delays have been recurring issues.",
      "Caseload and resource pressures interact with court backlogs.",
      "Independence norms remain formally strong."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "High-profile failures have damaged confidence.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under pressure", snapshot: "Backlogs and disclosure quality remain concerns.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Resource constraints relative to caseload.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "CPS model still referenced, but domestic pressures are visible.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has absorbed successive reform programmes; capacity remains constrained.", trend: "Stable" }
    ],
    peers: [
      { name: "German public prosecutors (Staatsanwaltschaft)", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Parquet / ministère public", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Public Prosecution Service of Canada", country: "Canada", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Australian state DPPs + CDPP", country: "Australia", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Openbaar Ministerie", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Åklagarmyndigheten", country: "Sweden", baseline2000: "A+", rating: "A", outlook: "Stable" }
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
    signalWeek: "24–30 Aug 2026",
    signalDriver: "Quiet week after last month's wildfire coverage; no new dominant trust story.",
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
      { name: "Australian state fire services", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Brandweer Nederland", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Canadian Municipal Fire Services", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Swedish Civil Protection & Rescue (MSB)", country: "Sweden", baseline2000: "AA–", rating: "A+", outlook: "Stable" }
    ]
  }
];
