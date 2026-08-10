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
