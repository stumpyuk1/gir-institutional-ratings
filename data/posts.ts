export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "introducing-gb-institutional-ratings",
    title: "Introducing GB Institutional Ratings",
    date: "2026-08-10",
    excerpt:
      "A new framework for tracking the health of Britain’s core institutions — and how they compare with peers abroad.",
    tags: ["Launch", "Methodology"],
    body: [
      "Britain’s institutions are discussed constantly. Trust surveys, select committee reports, newspaper columns and social media all offer fragments of the picture. What has been missing is a consistent, comparative frame that treats institutional health as something that can be rated over time.",
      "GB Institutional Ratings (GIR) is that frame. It applies a five-pillar model — Public Trust, Performance, Sustainability, International Standing, and Adaptive Capacity — to thirteen core UK institutions, and benchmarks each against six international peers.",
      "Ratings use a familiar AAA-to-BB scale with Positive, Stable or Negative outlooks. The formal assessment is updated quarterly. A separate weekly trust-pressure signal tracks short-term direction of travel for UK institutions only, without changing the formal rating.",
      "The aim is not to declare winners and losers, but to make trajectories visible. A 2000 baseline for every institution and peer lets readers see what has strengthened, what has eroded, and where the UK now sits relative to comparable systems abroad.",
      "This site is the public face of that work. Formal ratings, peer tables, trajectory notes and the weekly signal will all live here. A short methodology page explains the rules; this blog will cover findings, updates and the reasoning behind material changes.",
    ],
  },
  {
    slug: "the-25-year-picture",
    title: "The 25-year picture: what the 2000 baselines show",
    date: "2026-08-10",
    excerpt:
      "Almost every major UK institution sits lower in 2026 than it did at the turn of the century. The pattern is uneven — and revealing.",
    tags: ["Ratings", "Trajectory"],
    body: [
      "When the same five-pillar lens is applied to 2000 and 2026, a clear pattern emerges. Most of the thirteen UK institutions have deteriorated. A few have held steady. None have improved on a net basis over the full period.",
      "The sharpest declines sit where public trust and operational capacity have both come under sustained pressure: Parliament, the Police Service, the NHS, Local Government, and the Church of England. In each case the 2000 baseline was at least one full rating notch higher than the current formal rating.",
      "Institutions with stronger residual trust and clearer performance mandates — the Armed Forces in particular — have been more resilient. Soft-power assets such as the Monarchy and the BBC retain international standing even as domestic legitimacy has narrowed.",
      "Peer comparisons matter. Nordic and German counterparts in several domains (healthcare, local government, public broadcasting, central banking) have also faced pressure, but often from a higher starting point and with smaller absolute declines. The UK is not uniquely stressed; it is, in several cases, more exposed.",
      "The baselines are qualitative and open to challenge. They are also the only way to distinguish a temporary dip from a structural slide. Future quarterly updates will test whether any of the Negative outlooks begin to stabilise — or whether the deterioration continues.",
    ],
  },
  {
    slug: "how-the-weekly-signal-works",
    title: "How the weekly trust-pressure signal works",
    date: "2026-08-10",
    excerpt:
      "A directional indicator for short-term pressure on Public Trust — deliberately separate from the formal rating.",
    tags: ["Methodology", "Weekly signal"],
    body: [
      "Formal ratings change slowly. Public attention does not. The weekly trust-pressure signal exists to capture short-term direction of travel without contaminating the quarterly formal assessment.",
      "Each week the thirteen UK institutions receive one of three labels: Positive, Neutral or Negative pressure. The signal is based primarily on Public Trust — news flow from major UK outlets and specialist coverage, plus conversation volume and tone on X. A strict decision table governs when the signal can move.",
      "Hard constraints apply. A single story is not enough. Ambiguous or mixed weeks default to Neutral. The signal cannot, by design, change the formal rating. It is labelled provisional on every institution page.",
      "Peer institutions do not receive a weekly signal. Their formal ratings update only on the quarterly cycle, which keeps the comparative frame stable and avoids noise from foreign media cycles the team cannot track at the same intensity.",
      "The practical workflow is straightforward: a draft signal pack is produced, reviewed, and signed off before publication. Over time the signal archive will show whether weeks of Negative pressure cluster before formal outlook changes — or whether the two layers remain largely independent.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
