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
      { name: "Public Trust & Respect", judgement: "Material negative", snapshot: "Acceptance of tax as civic obligation remains; trust in operational fairness and responsiveness has fallen.", trend: "Deteriorating" },
      { name: "Performance & Effectiveness", judgement: "Adequate under strain", snapshot: "Tax gap near 5.8–6.4% of liability is respectable internationally; taxpayer experience and MTD delivery have been weaker.", trend: "Deteriorating" },
      { name: "Financial / Operational Sustainability", judgement: "Borderline", snapshot: "Very low cost-of-collection ratio but operationally brittle after headcount cuts ahead of digital maturity.", trend: "Deteriorating" },
      { name: "International Standing", judgement: "Strong", snapshot: "High OECD standing on data exchange, digital tax architecture and anti-evasion cooperation.", trend: "Stable" },
      { name: "Shock Absorption & Adaptive Capacity", judgement: "Strong", snapshot: "Demonstrated exceptional agility as emergency fiscal engine during COVID support schemes.", trend: "Stable" }
    ],
    peers: [
      { name: "Internal Revenue Service", country: "United States", baseline2000: "A", rating: "BBB+", outlook: "Stable" },
      { name: "Canada Revenue Agency", country: "Canada", baseline2000: "A+", rating: "A–", outlook: "Stable" },
      { name: "Australian Taxation Office", country: "Australia", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Direction Générale des Finances Publiques", country: "France", baseline2000: "A", rating: "A–", outlook: "Stable" },
      { name: "Bundeszentralamt für Steuern", country: "Germany", baseline2000: "A+", rating: "A", outlook: "Stable" },
      { name: "Swedish Tax Agency (Skatteverket)", country: "Sweden", baseline2000: "AA–", rating: "A+", outlook: "Stable" }
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
