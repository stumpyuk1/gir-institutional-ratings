import Link from "next/link";
import { institutions } from "@/data/institutions";
import { posts } from "@/data/posts";
import { RatingBadge } from "@/components/RatingBadge";
import { SignalBadge } from "@/components/SignalBadge";
import { ShieldIcon } from "@/components/ShieldIcon";
import { ComparisonChart } from "@/components/ComparisonChart";

const SHORT: Record<string, string> = {
  monarchy: "Monarchy",
  parliament: "Parliament",
  "civil-service": "Civil Svc",
  judiciary: "Judiciary",
  "armed-forces": "Armed Forces",
  police: "Police",
  nhs: "NHS",
  "higher-education": "Universities",
  bbc: "BBC",
  "bank-of-england": "BoE",
  "hm-treasury": "Treasury",
  "local-government": "Local Gov",
  "church-of-england": "C of E",
  "prisons-probation": "Prisons",
  "state-school-system": "Schools",
  hmrc: "HMRC",
  "prosecutorial-services": "CPS/SFO",
  "fire-and-rescue": "Fire",
  "utility-regulators": "Utility Regs",
  "transport-infrastructure": "Transport",
  "welfare-pensions": "Welfare/DWP",
};

export default function DashboardPage() {
  const positive = institutions.filter((i) => i.weeklySignal === "Positive").length;
  const neutral = institutions.filter((i) => i.weeklySignal === "Neutral").length;
  const negative = institutions.filter((i) => i.weeklySignal === "Negative").length;

  const overviewRows = institutions.map((i) => ({
    label: SHORT[i.slug] ?? i.name,
    baseline2000: i.baseline2000,
    rating2026: i.formalRating,
    highlight: false,
  }));

  const latestPost = [...posts].sort((a, b) => b.date.localeCompare(a.date))[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <ShieldIcon className="h-24 w-24 shrink-0 sm:h-28 sm:w-28" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
            GB Institutional Ratings
          </h1>
          <p className="mt-2 text-xl font-medium text-[#C9A227] sm:text-2xl">
            Who still holds?
          </p>
          <p className="mt-3 max-w-2xl text-base text-gray-600">
            Formal quarterly ratings of UK institutional health, with weekly
            trust-pressure signals. Formal ratings are authoritative; weekly
            signals are provisional indicators of short-term pressure on Public Trust.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Formal update: 2026-Q2</span>
            <span>·</span>
            <span>Weekly signals: 3–9 Aug 2026</span>
          </div>
        </div>
      </div>

      <div className="mb-10 rounded-xl border border-[#0B1F3A]/10 bg-[#0B1F3A]/[0.03] px-5 py-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-[#0B1F3A]">
              From the blog
            </div>
            <p className="mt-1 text-sm text-gray-700">
              <span className="font-medium text-gray-900">{latestPost.title}</span>
              {" — "}
              {latestPost.excerpt}
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 text-sm font-semibold text-[#0B1F3A] hover:underline"
          >
            Read the blog →
          </Link>
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          This week’s trust-pressure snapshot
        </h2>
        <div className="mt-3 flex flex-wrap gap-6 text-sm">
          <div>
            <span className="font-semibold text-signal-positive">{positive}</span> Positive
          </div>
          <div>
            <span className="font-semibold text-signal-neutral">{neutral}</span> Neutral
          </div>
          <div>
            <span className="font-semibold text-signal-negative">{negative}</span> Negative
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Several institutions under continued negative trust pressure (Parliament, Police, NHS, Treasury, Local Government, Prisons & Probation, CPS/SFO, Utility Regulators, Welfare). Armed Forces, Fire, Transport Infrastructure and residual soft-power institutions remain relatively stable.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          25-year overview · all institutions
        </h2>
        <ComparisonChart rows={overviewRows} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {institutions.map((inst) => (
          <Link
            key={inst.slug}
            href={`/institutions/${inst.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-semibold text-gray-900 group-hover:text-gray-700">
                {inst.name}
              </h2>
              <RatingBadge rating={inst.formalRating} size="md" />
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <span>Outlook: {inst.formalOutlook}</span>
              <span>·</span>
              <span>
                2000: {inst.baseline2000}
                {inst.trajectory === "Deteriorating" && " ↓"}
                {inst.trajectory === "Improving" && " ↑"}
                {inst.trajectory === "Stable" && " →"}
              </span>
            </div>

            <div className="mt-4">
              <SignalBadge signal={inst.weeklySignal} />
            </div>

            <p className="mt-3 line-clamp-2 text-sm text-gray-600">
              {inst.signalDriver}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        <Link href="/methodology" className="font-medium text-gray-700 underline-offset-2 hover:underline">
          How ratings and weekly signals work →
        </Link>
      </div>
    </div>
  );
}
