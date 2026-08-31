import type { Institution } from "./institutions-part1";

export const part2: Institution[] = [

  {
    id: "7",
    name: "The National Health Service (NHS)",
    slug: "nhs",
    formalRating: "BBB+",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "Operational strain stories present but no new dominant trust or access crisis this week.",
    summary: "The NHS retains strong symbolic attachment as a national institution, but satisfaction with access and waiting times has been low for years. Financial and workforce pressures remain intense.",
    trajectoryNotes: [
      "Public attachment to founding principles remains high.",
      "Delivery satisfaction and waiting-time performance have deteriorated markedly since the early 2000s.",
      "Workforce and capacity constraints are structural."
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
    formalRating: "A",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "Quiet week with no material new legitimacy or value-for-money stories.",
    summary: "UK universities retain strong global research standing and soft-power value. Domestic legitimacy is under pressure from student debt, industrial action and perceived value-for-money questions.",
    trajectoryNotes: [
      "Research intensity and global rankings remain a comparative strength.",
      "Domestic political and student-finance pressures have risen.",
      "International student fee dependence creates financial concentration risk."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate to Strong", snapshot: "Majority still see positive national impact, with emerging divides.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Strong", snapshot: "Research performance and graduate outcomes remain competitive internationally.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Fee freezes, pension costs and international student concentration create vulnerability.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "Multiple institutions in global top tiers; soft-power asset.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has adapted to successive funding regimes, but current pressures are material.", trend: "Stable" }
    ],
    peers: [
      { name: "German higher education system", country: "Germany", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "French grandes écoles + universities", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Canadian universities", country: "Canada", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Australian universities", country: "Australia", baseline2000: "AA–", rating: "A", outlook: "Stable" },
      { name: "Dutch universities", country: "Netherlands", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "US research universities (public + private)", country: "United States", baseline2000: "AA", rating: "AA–", outlook: "Stable" }
    ]
  },

  {
    id: "9",
    name: "The BBC",
    slug: "bbc",
    formalRating: "A–",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "AA–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "No dominant new impartiality or funding crisis story this week.",
    summary: "The BBC remains a major soft-power and cultural institution with high reach. Trust in its impartiality has declined and the licence-fee settlement remains politically contested.",
    trajectoryNotes: [
      "Reach and soft-power contribution remain substantial.",
      "Impartiality perceptions and culture-war framing have intensified.",
      "Funding model faces long-term structural challenge."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Still widely used, but impartiality trust has fallen.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Strong residual", snapshot: "News and cultural output retain scale and quality in many areas.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Licence-fee real-terms pressure and commercial competition.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "Still a major global news and soft-power brand.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has navigated successive charter reviews, but legitimacy cushion is thinner.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "ARD / ZDF", country: "Germany", baseline2000: "AA", rating: "A+", outlook: "Stable" },
      { name: "France Télévisions / Radio France", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "CBC / Radio-Canada", country: "Canada", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "ABC (Australia)", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "NPO", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "SVT / SR", country: "Sweden", baseline2000: "AA", rating: "AA–", outlook: "Stable" }
    ]
  },

  {
    id: "10",
    name: "Bank of England",
    slug: "bank-of-england",
    formalRating: "AA–",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AAA",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "Quiet week on monetary policy and institutional standing.",
    summary: "Operational independence and technical credibility remain high. The inflation episode of 2021–23 and subsequent policy response dented the near-perfect pre-crisis reputation, but the institution retains strong comparative standing.",
    trajectoryNotes: [
      "Independence framework introduced in 1997 remains the cornerstone.",
      "2021–23 inflation overshoot and subsequent tightening cycle tested credibility.",
      "Financial stability and payment-system roles continue to be core strengths."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Strong residual", snapshot: "Still one of the more trusted economic institutions despite the inflation episode.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Strong", snapshot: "Technical capacity and operational delivery remain high.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Strong", snapshot: "Balance-sheet and operational model remain robust.", trend: "Stable" },
      { name: "International Standing", judgement: "Strong", snapshot: "Still a first-tier central bank in global forums.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Demonstrated capacity through multiple crises; learning from 2021–23 continues.", trend: "Stable" }
    ],
    peers: [
      { name: "European Central Bank", country: "Euro area", baseline2000: "AAA", rating: "AA+", outlook: "Stable" },
      { name: "Federal Reserve", country: "United States", baseline2000: "AAA", rating: "AA+", outlook: "Stable" },
      { name: "Bundesbank (within Eurosystem)", country: "Germany", baseline2000: "AAA", rating: "AA+", outlook: "Stable" },
      { name: "Bank of Canada", country: "Canada", baseline2000: "AAA", rating: "AA+", outlook: "Stable" },
      { name: "Reserve Bank of Australia", country: "Australia", baseline2000: "AAA", rating: "AA", outlook: "Stable" },
      { name: "Sveriges Riksbank", country: "Sweden", baseline2000: "AAA", rating: "AA", outlook: "Stable" }
    ]
  },

  {
    id: "11",
    name: "HM Treasury",
    slug: "hm-treasury",
    formalRating: "A",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "AA",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "No major new fiscal or institutional-credibility story this week.",
    summary: "Treasury retains core fiscal and economic coordination functions. Credibility has been tested by successive fiscal events and the 2022 mini-budget episode; medium-term fiscal framework remains a work in progress.",
    trajectoryNotes: [
      "Fiscal rules and OBR framework provide institutional anchors.",
      "2022 market reaction to the mini-budget was a clear credibility stress test.",
      "Debt and interest-cost trajectory remain structural constraints."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Adequate under pressure", snapshot: "Viewed as competent but politically exposed.", trend: "Stable" },
      { name: "Performance & Effectiveness", judgement: "Adequate", snapshot: "Core fiscal machinery functions; strategic economic performance mixed.", trend: "Stable" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Public debt trajectory and interest costs constrain room for manoeuvre.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong residual", snapshot: "Still a first-tier finance ministry in G7/G20 contexts.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has managed multiple crises; political insulation is limited.", trend: "Stable" }
    ],
    peers: [
      { name: "Federal Ministry of Finance", country: "Germany", baseline2000: "AA+", rating: "AA", outlook: "Stable" },
      { name: "Ministère de l’Économie et des Finances", country: "France", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Department of Finance Canada", country: "Canada", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Treasury (Australia)", country: "Australia", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "Ministry of Finance", country: "Netherlands", baseline2000: "AA", rating: "AA–", outlook: "Stable" },
      { name: "US Treasury", country: "United States", baseline2000: "AAA", rating: "AA+", outlook: "Stable" }
    ]
  },

  {
    id: "12",
    name: "Local Government",
    slug: "local-government",
    formalRating: "BBB",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "24–30 Aug 2026",
    signalDriver: "No single dominant section 114 or service-collapse story this week.",
    summary: "Local government delivers a wide range of essential services under sustained funding pressure. Multiple section 114 notices and service reductions have become more frequent; the overall system is under clear strain.",
    trajectoryNotes: [
      "Funding and demand pressures have intensified over two decades.",
      "Section 114 notices and effective bankruptcies have risen.",
      "Service variation across England is large."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Local services often valued, but confidence in the system is low.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under pressure", snapshot: "Core services under strain; some authorities in acute difficulty.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under severe pressure", snapshot: "Multiple authorities in or near effective insolvency.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "English local government model still studied, but current stresses are visible.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Some authorities adapt; system-level resilience is weak.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "German Länder + municipalities", country: "Germany", baseline2000: "AA", rating: "A+", outlook: "Stable" },
      { name: "French collectivités territoriales", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Municipalities and provinces", country: "Canada", baseline2000: "AA–", rating: "A", outlook: "Stable" },
      { name: "Local + state governments", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Dutch municipalities + provinces", country: "Netherlands", baseline2000: "AA–", rating: "A+", outlook: "Stable" },
      { name: "Swedish municipalities + regions", country: "Sweden", baseline2000: "AA", rating: "A+", outlook: "Stable" }
    ]
  }
];
