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
    signalWeek: "17–23 Aug 2026",
    signalDriver: "No material new coverage of institutional standing or attendance this week.",
    summary: "The Church of England remains the established church with residual soft-power and civic roles. Attendance, membership and cultural authority have declined substantially since 2000; safeguarding failures have damaged trust.",
    trajectoryNotes: [
      "Weekly attendance and membership have fallen sharply over 25 years.",
      "Safeguarding scandals have been a major legitimacy hit.",
      "Civic and ceremonial roles continue."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Cultural residual respect remains, but active trust and identification have fallen.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate", snapshot: "Ceremonial, pastoral and civic functions continue to be delivered.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Declining attendance and giving, plus historic liabilities, create long-term pressure.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Anglican Communion role remains, but internal stresses are visible.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Safeguarding and cultural adaptation challenges persist.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Evangelische Kirche in Deutschland", country: "Germany", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Église catholique en France", country: "France", baseline2000: "A–", rating: "BBB+", outlook: "Stable" },
      { name: "United Church of Canada", country: "Canada", baseline2000: "A–", rating: "BBB+", outlook: "Stable" },
      { name: "Anglican Church of Australia", country: "Australia", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Protestantse Kerk in Nederland", country: "Netherlands", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Svenska kyrkan", country: "Sweden", baseline2000: "A", rating: "A–", outlook: "Stable" }
    ]
  },

  {
    id: "14",
    name: "Prisons & Probation",
    slug: "prisons-probation",
    formalRating: "BB+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "No dominant new overcrowding or disorder story this week.",
    summary: "The prison and probation system operates under chronic overcrowding, staffing and reoffending pressures. Public confidence in safety and rehabilitation outcomes is low; operational resilience is strained.",
    trajectoryNotes: [
      "Prison population and overcrowding pressures have been persistent.",
      "Staffing, violence and self-harm metrics have deteriorated over long periods.",
      "Probation reform and reoffending performance remain contested."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Weak", snapshot: "Low confidence in safety, order and rehabilitation outcomes.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under clear pressure", snapshot: "Overcrowding, violence and reoffending indicators are adverse.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under severe pressure", snapshot: "Capacity and workforce constraints are structural.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate under pressure", snapshot: "Some comparative strengths remain, but domestic stresses are visible.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Limited headroom for further population or demand shocks.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "German prison system", country: "Germany", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "French prison administration", country: "France", baseline2000: "BBB+", rating: "BBB", outlook: "Stable" },
      { name: "Correctional Service of Canada", country: "Canada", baseline2000: "A–", rating: "BBB+", outlook: "Stable" },
      { name: "Australian state prison systems", country: "Australia", baseline2000: "A–", rating: "BBB+", outlook: "Stable" },
      { name: "Dutch prison system", country: "Netherlands", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Swedish Prison and Probation Service", country: "Sweden", baseline2000: "A", rating: "A–", outlook: "Stable" }
    ]
  },

  {
    id: "15",
    name: "State School System",
    slug: "state-schools",
    formalRating: "A–",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Stable",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Quiet week; no major new attainment or industrial-action story.",
    summary: "The state school system remains a core public service with high parental engagement. Attainment gaps, workforce pressures and post-pandemic recovery continue to shape performance and public confidence.",
    trajectoryNotes: [
      "Overall attainment trends have been mixed across phases and cohorts.",
      "Teacher recruitment and retention pressures are material.",
      "Regional and socio-economic variation remains large."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate", snapshot: "Most parents still value local schools; system-level confidence is more mixed.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Adequate", snapshot: "Core delivery continues; attainment and recovery metrics vary.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Workforce and real-terms funding pressures persist.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "PISA and comparable metrics place England in the mid-to-upper range of developed systems.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Demonstrated resilience through pandemic disruption; recovery incomplete.", trend: "Stable" }
    ],
    peers: [
      { name: "German school system (Länder)", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "French school system", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Canadian provincial systems", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Australian state systems", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Dutch school system", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Swedish school system", country: "Sweden", baseline2000: "A", rating: "A–", outlook: "Stable" }
    ]
  },

  {
    id: "16",
    name: "HMRC",
    slug: "hmrc",
    formalRating: "A",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "A+",
    trajectory: "Stable",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "No major new tax-administration or customer-service story this week.",
    summary: "HMRC remains the core tax administration. Digitalisation has improved routine compliance, but customer service, complexity and enforcement capacity continue to attract criticism.",
    trajectoryNotes: [
      "Self-assessment and digital services have expanded.",
      "Customer service and telephone access have been long-running pressure points.",
      "Tax gap and enforcement performance remain under scrutiny."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Necessary institution; experience of interaction often drives dissatisfaction.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Adequate", snapshot: "Core collection functions work; service and complexity critiques persist.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Adequate", snapshot: "Digital investment continues; resource pressures visible in service channels.", trend: "Stable" },
      { name: "International Standing", judgement: "Strong residual", snapshot: "UK tax administration remains a reference point in OECD contexts.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "High capacity to handle volume shocks and policy changes.", trend: "Stable" }
    ],
    peers: [
      { name: "Bundeszentralamt für Steuern / Länder", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Direction générale des Finances publiques", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Canada Revenue Agency", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
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
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Quiet week; no major new disclosure or charging-decision controversy.",
    summary: "The Crown Prosecution Service and related prosecutorial functions remain central to the criminal justice system. Backlogs, disclosure failures and charging decisions have been sources of public and professional concern.",
    trajectoryNotes: [
      "Independence of prosecutorial decision-making remains a formal strength.",
      "Case backlogs and disclosure issues have been persistent operational challenges.",
      "High-profile charging and disclosure controversies have affected confidence."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Core function accepted; specific failures damage confidence.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under pressure", snapshot: "Backlogs and disclosure performance are material issues.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Resource constraints interact with volume and complexity.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "CPS model still studied; domestic operational stresses are visible.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has absorbed volume shocks; systemic pressures remain.", trend: "Stable" }
    ],
    peers: [
      { name: "Staatsanwaltschaften", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Ministère public", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Public Prosecution Service of Canada", country: "Canada", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "CDPP + state DPPs", country: "Australia", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Openbaar Ministerie", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Åklagarmyndigheten", country: "Sweden", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  },

  {
    id: "18",
    name: "Fire and Rescue Services",
    slug: "fire-rescue",
    formalRating: "A",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "A+",
    trajectory: "Stable",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Quiet week; no material new coverage affecting public trust in Fire and Rescue Services.",
    summary: "Fire and rescue services retain high public trust and operational respect. Prevention, response and resilience roles continue; funding and capacity variation across services is a background pressure.",
    trajectoryNotes: [
      "Public trust and respect remain high relative to most institutions.",
      "Incident volumes and risk profiles have shifted over time.",
      "Funding and crewing models vary significantly by service."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Strong", snapshot: "Consistently high public confidence and regard.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Strong", snapshot: "Core emergency response performance remains solid.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Adequate under pressure", snapshot: "Funding and capacity pressures exist but are managed.", trend: "Stable" },
      { name: "International Standing", judgement: "Strong residual", snapshot: "UK fire services remain a reference for professional standards.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Demonstrated capacity in major incidents and domestic support roles.", trend: "Stable" }
    ],
    peers: [
      { name: "German Feuerwehr systems", country: "Germany", baseline2000: "A+", rating: "A+", outlook: "Stable" },
      { name: "French SDIS / BSPP", country: "France", baseline2000: "A", rating: "A", outlook: "Stable" },
      { name: "Canadian municipal + provincial services", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Australian state fire services", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Dutch brandweer", country: "Netherlands", baseline2000: "A+", rating: "A+", outlook: "Stable" },
      { name: "Swedish fire and rescue services", country: "Sweden", baseline2000: "A+", rating: "A", outlook: "Stable" }
    ]
  }
];
