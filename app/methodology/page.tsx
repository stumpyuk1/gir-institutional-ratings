import Link from "next/link";

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-gray-500 hover:text-gray-800"
      >
        ← Dashboard
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
        Methodology
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        How GB Institutional Ratings work.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">The dual-track model</h2>
        <p className="text-gray-700 leading-relaxed">
          The framework uses two complementary layers:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>
            <strong>Formal ratings</strong> (authoritative) — full five-pillar assessments updated quarterly for the 21 UK institutions and their international peers.
          </li>
          <li>
            <strong>Weekly Trust-Pressure Signal</strong> (provisional) — a simple directional indicator (Positive / Neutral / Negative pressure) focused on short-term Public Trust for UK institutions only. It cannot change the formal rating.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Five pillars</h2>
        <ol className="list-decimal space-y-2 pl-5 text-gray-700">
          <li>Public Trust & Respect</li>
          <li>Performance & Effectiveness</li>
          <li>Financial / Operational Sustainability</li>
          <li>International Standing & Soft/Hard Power Contribution</li>
          <li>Shock Absorption & Adaptive Capacity</li>
        </ol>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Rating scale</h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 text-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr>
                <td className="px-4 py-2 font-medium">AAA – AA–</td>
                <td className="px-4 py-2 text-gray-600">Strong overall profile with only manageable vulnerabilities</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">A+ – A–</td>
                <td className="px-4 py-2 text-gray-600">Adequate capacity, yet material vulnerabilities exist</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">BBB+ – BBB–</td>
                <td className="px-4 py-2 text-gray-600">Speculative / borderline — competence or legitimacy under clear strain</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">BB+ and below</td>
                <td className="px-4 py-2 text-gray-600">Clear impairment</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700">
          Outlook (Positive / Stable / Negative) reflects expected direction over a 2–5 year horizon.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Weekly Trust-Pressure Signal</h2>
        <p className="text-gray-700 leading-relaxed">
          Each week the 21 UK institutions receive a directional signal based primarily on short-term movements in Public Trust, using:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-gray-700">
          <li>News flow (major UK outlets + specialist coverage) classified as Clearly Positive / Negative / Mixed / Quiet</li>
          <li>X conversation volume and sentiment</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          A strict decision table and hard constraints apply (single stories alone cannot move the signal; ambiguous cases default to Neutral). The signal is explicitly non-authoritative and labelled as provisional.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Peers</h2>
        <p className="text-gray-700 leading-relaxed">
          Each UK institution is benchmarked against six core international peers. Peers receive formal quarterly ratings only — no weekly signals.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Limitations</h2>
        <p className="text-gray-700 leading-relaxed">
          Ratings are qualitative and interpretive. They prioritise long-run trends and institutional capacity over short-term politics. Modest differences between careful analysts are expected. The weekly signal reflects media and social attention and can be noisy; the formal rating remains the sole authoritative judgement.
        </p>
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
