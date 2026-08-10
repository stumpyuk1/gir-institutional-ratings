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
    slug: "spending-composition-and-the-institutional-slide",
    title: "Spending composition and the 25-year institutional slide",
    date: "2026-08-10",
    excerpt:
      "Since 2000 the state has grown, but the mix has shifted toward transfers and health. Many of the institutions whose GIR ratings have fallen sit in the parts of the system that faced the tightest relative resource pressure against rising demand.",
    tags: ["Analysis", "Expenditure", "Trajectory"],
    body: [
      "Almost every major UK institution in the GIR set sits lower in 2026 than it did in 2000. The pattern is not uniform, and money is never the whole story. But the composition of public spending over those 25 years offers one important structural clue.",
      "Total government expenditure has risen as a share of GDP — from the high-30s in the late 1990s to the mid-40s in recent years, with a sharp pandemic spike. Within that larger total, the mix has changed. Social protection (state pensions, disability and sickness benefits, Universal Credit and its predecessors, housing support and related transfers) has remained the single largest block and has grown from roughly 11.2% of GDP in 2000/01 to about 13.3% in 2024/25. Health spending has risen even more steeply in relative terms, from under 5% of GDP at the turn of the century to over 8% in the latest outturn years.",
      "Education as a share of GDP is essentially flat over the same horizon. Defence has drifted modestly lower for most of the period before recent increases. Public order and safety — the COFOG heading that covers police, courts, prisons and fire — has hovered around 1.7–2.0% of GDP with limited real growth relative to caseload and complexity. Local government, which delivers a large share of social care and everyday services, has operated under repeated real-terms pressure against rising demographic demand.",
      "The institutions whose formal GIR ratings have deteriorated most clearly — Parliament’s legitimacy environment, the Police Service, Prisons & Probation, Prosecutorial Services, Local Government, parts of the regulatory state, and the operational face of the welfare system itself — sit largely in the areas where spending has either been constrained relative to demand or has expanded mainly as cash transfers rather than as capacity. Cash transfers can stabilise household incomes; they do not automatically rebuild institutional competence, court throughput, prison regimes, local authority capability or public trust in the organisations that deliver them.",
      "Health is the partial exception that proves the rule. NHS spending has grown substantially in both cash and GDP-share terms, yet the formal rating has still slipped. Volume of money is not the same as effective capacity. Workforce shortages, waiting lists, estate condition and rising complex demand have absorbed much of the increase. The same pattern appears, in sharper form, in disability and long-term sickness spending within social protection: the caseload and cost have expanded while assessment backlogs and claimant experience have remained material weaknesses in the DWP rating.",
      "None of this is a claim that welfare spending is the cause of institutional decline. Demographic ageing, the rise in health-related economic inactivity, policy choices on eligibility, and genuine increases in need all drive the transfer bill. The analytical point is narrower. When a growing share of the state’s resources is absorbed by transfers and by a health system under continuous demand pressure, the residual fiscal space available for the core institutions of order, justice, local delivery and regulatory competence becomes tighter. Those institutions then face higher expectations with thinner relative buffers. Over 25 years that combination shows up in the rating trajectory.",
      "Peer comparisons reinforce the picture. Several of the higher-rated international counterparts in justice, local government and policing operate in systems that either protect a higher share of resources for operational capacity or face less acute demographic and caseload pressure on the transfer side. The UK is not unique in the direction of travel; it is more exposed in the combination of transfer growth and capacity strain.",
      "GIR ratings are qualitative judgements, not spending ratios. Trust, performance, sustainability, international standing and adaptive capacity each have their own drivers. Spending composition is one structural background condition among several. It does, however, help explain why so many institutions that look solvent on a pure cash basis still feel impaired to the public and to the people who work inside them. The money has moved. The capacity, in too many cases, has not kept pace.",
    ],
  },
  {
    slug: "introducing-gb-institutional-ratings",
    title: "Introducing GB Institutional Ratings",
    date: "2026-08-10",
    excerpt:
      "A new framework for tracking the health of Britain’s core institutions — and how they compare with peers abroad.",
    tags: ["Launch", "Methodology"],
    body: [
      "Britain’s institutions are discussed constantly. Trust surveys, select committee reports, newspaper columns and social media all offer fragments of the picture. What has been missing is a consistent, comparative frame that treats institutional health as something that can be rated over time.",
      "GB Institutional Ratings (GIR) is that frame. It applies a five-pillar model — Public Trust, Performance, Sustainability, International Standing, and Adaptive Capacity — to the core UK institutions, and benchmarks each against six international peers.",
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
      "When the same five-pillar lens is applied to 2000 and 2026, a clear pattern emerges. Most of the UK institutions in the locked set have deteriorated. A few have held steady. None have improved on a net basis over the full period.",
      "The sharpest declines sit where public trust and operational capacity have both come under sustained pressure: Parliament, the Police Service, the NHS, Local Government, Prisons & Probation, and the Church of England. In each case the 2000 baseline was at least one full rating notch higher than the current formal rating.",
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
      "Each week the UK institutions receive one of three labels: Positive, Neutral or Negative pressure. The signal is based primarily on Public Trust — news flow from major UK outlets and specialist coverage, plus conversation volume and tone on X. A strict decision table governs when the signal can move.",
      "Hard constraints apply. A single story is not enough. Ambiguous or mixed weeks default to Neutral. The signal cannot, by design, change the formal rating. It is labelled provisional on every institution page.",
      "Peer institutions do not receive a weekly signal. Their formal ratings update only on the quarterly cycle, which keeps the comparative frame stable and avoids noise from foreign media cycles the team cannot track at the same intensity.",
      "The practical workflow is straightforward: a draft signal pack is produced, reviewed, and signed off before publication. Over time the signal archive will show whether weeks of Negative pressure cluster before formal outlook changes — or whether the two layers remain largely independent.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
