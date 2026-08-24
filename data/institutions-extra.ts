export const extraInstitutions = [
  {
    id: "19",
    name: "Economic & Utility Regulators",
    slug: "utility-regulators",
    formalRating: "BB",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Quiet week; no new dominant regulatory failure or pricing controversy.",
    summary: "Public trust in economic utility regulators has collapsed relative to the early post-privatisation period. Price-control frameworks failed to prevent underinvestment and environmental harm in water, while the energy retail crisis exposed gaps in resilience oversight. International standing of the historic RPI-X model has faded; enforcement is widely seen as reactive.",
    trajectoryNotes: [
      "2000 baseline reflects the early post-privatisation framework under Ofgas/OFFER (merged into Ofgem) and Ofwat.",
      "Sewage discharges, water company leverage and energy supplier failures after 2021–23 severely damaged legitimacy.",
      "Record underperformance penalties reflect reactive policing rather than proactive prevention.",
      "Political pressure for structural regulatory overhaul remains elevated."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Material negative", snapshot: "Trust in water and energy regulation is among the lowest of any economic institution.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under severe pressure", snapshot: "Price controls failed to deliver investment and environmental outcomes; enforcement is seen as lagging.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Regulated companies’ leverage and capital programmes create ongoing tension with bill affordability.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Weakened", snapshot: "The UK’s historic regulatory model has lost comparative prestige.", trend: "Deteriorating" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Under pressure", snapshot: "Reactive capacity exists, but structural reform pressure is high.", trend: "Deteriorating" }
    ],
    peers: [
      { name: "Bundesnetzagentur + state regulators", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "CRE + other regulators", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Canadian energy + utility boards", country: "Canada", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "AER + state regulators", country: "Australia", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "ACM", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Energimarknadsinspektionen + others", country: "Sweden", baseline2000: "A", rating: "A–", outlook: "Stable" }
    ]
  },
  {
    id: "20",
    name: "Transport Infrastructure Bodies",
    slug: "transport-infrastructure",
    formalRating: "BBB+",
    formalOutlook: "Stable",
    formalDate: "2026-Q2",
    baseline2000: "A",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "Quiet week; no dominant performance or disruption story.",
    summary: "National Highways, Network Rail and related bodies deliver and maintain core transport infrastructure. Performance, disruption and major-project delivery have been sources of public and political frustration; the institutional model remains under review.",
    trajectoryNotes: [
      "Road and rail performance metrics have been mixed to adverse over long periods.",
      "Major project delivery (cost and schedule) has been a recurring criticism.",
      "Funding and governance arrangements continue to evolve."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Under pressure", snapshot: "Users experience disruption; institutional confidence is modest.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Under pressure", snapshot: "Reliability and major-project outcomes are frequently criticised.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Under pressure", snapshot: "Capital programmes and maintenance backlogs create ongoing tension.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Some technical strengths remain; overall comparative standing has softened.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Adequate", snapshot: "Has managed major shocks; structural capacity constraints persist.", trend: "Stable" }
    ],
    peers: [
      { name: "Autobahn GmbH + DB InfraGO", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "SNCF Réseau + road agencies", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Transport Canada + provinces", country: "Canada", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Infrastructure Australia + state bodies", country: "Australia", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Rijkswaterstaat + ProRail", country: "Netherlands", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Trafikverket", country: "Sweden", baseline2000: "A", rating: "A–", outlook: "Stable" }
    ]
  },
  {
    id: "21",
    name: "Welfare & Pensions System (DWP)",
    slug: "dwp",
    formalRating: "BBB",
    formalOutlook: "Negative",
    formalDate: "2026-Q2",
    baseline2000: "A–",
    trajectory: "Deteriorating",
    weeklySignal: "Neutral",
    signalWeek: "17–23 Aug 2026",
    signalDriver: "No major new backlog or assessment stories dominating this week.",
    summary: "The Department for Work and Pensions administers the core welfare and state-pension system. Digital UC simplified routine claims, but trust among vulnerable groups is damaged by disability delays and assessment experience. Large-volume payment execution continues; health-related inactivity and legacy IT remain structural challenges.",
    trajectoryNotes: [
      "Universal Credit rollout completed the major structural reform.",
      "Disability assessment and PIP/UC health experiences have been major legitimacy issues.",
      "Pensioner support and core payment execution remain relatively robust."
    ],
    pillars: [
      { name: "Public Trust & Respect", judgement: "Material negative", snapshot: "Digital UC simplified routine claims, but trust among vulnerable groups is damaged by disability delays and assessment experience.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Borderline under strain", snapshot: "Large-volume payment execution and improving fraud/error (~3.3%); customer service and health assessment backlogs are major failure points.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Speculative", snapshot: "Rising long-term sickness/disability caseload and legacy IT modernisation risk constrain the operating model.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Adequate", snapshot: "Universal Credit single-benefit model and RTI integration remain widely studied by OECD analysts.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "High adaptive capacity on crisis claim surges (e.g. COVID); structural health-related inactivity continues to stretch capacity.", trend: "Stable" }
    ],
    peers: [
      { name: "Social Security Administration", country: "United States", baseline2000: "A–", rating: "BBB+", outlook: "Negative" },
      { name: "Services Australia / Centrelink", country: "Australia", baseline2000: "A–", rating: "A–", outlook: "Stable" },
      { name: "CAF / France Travail", country: "France", baseline2000: "A–", rating: "BBB+", outlook: "Stable" },
      { name: "Bundesagentur für Arbeit", country: "Germany", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "ESDC / Service Canada", country: "Canada", baseline2000: "A–", rating: "A–", outlook: "Stable" },
      { name: "Försäkringskassan", country: "Sweden", baseline2000: "A", rating: "A–", outlook: "Stable" }
    ]
  }
];
