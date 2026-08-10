import { notFound } from "next/navigation";
import Link from "next/link";
import { getInstitution, institutions } from "@/data/institutions";
import { RatingBadge } from "@/components/RatingBadge";
import { SignalBadge } from "@/components/SignalBadge";
import { ComparisonChart } from "@/components/ComparisonChart";

export function generateStaticParams() {
  return institutions.map((i) => ({ slug: i.slug }));
}

export default async function InstitutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const inst = getInstitution(slug);
  if (!inst) notFound();

  const chartRows = [
    {
      label: "UK",
      sublabel: inst.name.length > 18 ? inst.name.slice(0, 17) + "…" : inst.name,
      baseline2000: inst.baseline2000,
      rating2026: inst.formalRating,
      highlight: true,
    },
    ...inst.peers.map((p) => ({
      label: p.country.split(" /")[0].split(" ")[0],
      sublabel: p.name.length > 16 ? p.name.slice(0, 15) + "…" : p.name,
      baseline2000: p.baseline2000,
      rating2026: p.rating,
      highlight: false,
    })),
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-gray-500 hover:text-gray-800"
      >
        ← Dashboard
      </Link>

      <div className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {inst.name}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Formal rating
            </div>
            <div className="mt-1 flex items-center gap-3">
              <RatingBadge rating={inst.formalRating} size="xl" />
              <span className="text-sm text-gray-600">
                Outlook: <strong>{inst.formalOutlook}</strong>
              </span>
            </div>
            <div className="mt-1 text-xs text-gray-400">
              As of {inst.formalDate}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
          <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
            This week’s trust-pressure signal
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <SignalBadge signal={inst.weeklySignal} />
            <span className="text-sm text-gray-600">{inst.signalWeek}</span>
          </div>
          <p className="mt-2 text-sm text-gray-700">{inst.signalDriver}</p>
          <p className="mt-1 text-xs text-gray-400">
            Provisional indicator only · Does not change the formal rating
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900">Current standing</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">{inst.summary}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900">25-year trajectory</h2>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">2000 baseline</span>
            <RatingBadge rating={inst.baseline2000} size="sm" />
          </div>
          <span className="text-gray-400">→</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">2026 formal</span>
            <RatingBadge rating={inst.formalRating} size="sm" />
          </div>
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
            {inst.trajectory}
          </span>
        </div>
        <ul className="mt-4 space-y-2">
          {inst.trajectoryNotes.map((note, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700">
              <span className="text-gray-400">•</span>
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Visual comparison
        </h2>
        <ComparisonChart
          title={`${inst.name} vs international peers`}
          rows={chartRows}
        />
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900">Five pillars (formal assessment)</h2>
        <div className="mt-4 space-y-4">
          {inst.pillars.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-gray-200 bg-white p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-gray-900">{p.name}</h3>
                <span className="text-xs font-medium text-gray-500">
                  {p.trend}
                </span>
              </div>
              <div className="mt-1 text-sm font-medium text-gray-700">
                {p.judgement}
              </div>
              <p className="mt-1 text-sm text-gray-600">{p.snapshot}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900">
          International peers
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Formal ratings only · 2000 baseline → 2026 current · No weekly signals
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  Institution
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  Country
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  2000
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  2026
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  Outlook
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {inst.peers.map((peer, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {peer.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{peer.country}</td>
                  <td className="px-4 py-3">
                    <RatingBadge rating={peer.baseline2000} size="sm" />
                  </td>
                  <td className="px-4 py-3">
                    <RatingBadge rating={peer.rating} size="sm" />
                  </td>
                  <td className="px-4 py-3 text-gray-600">{peer.outlook}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          ← Back to dashboard
        </Link>
      </div>
    </div>
  );
}
