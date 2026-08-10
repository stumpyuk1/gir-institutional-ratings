import type { Institution } from "./institutions-part1";

export const part2: Institution[] = [

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
  }
];
