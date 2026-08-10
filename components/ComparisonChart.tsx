import { RatingCode } from "@/data/institutions";

/** Map rating codes to a 0–12 scale for chart height */
const SCORE: Record<string, number> = {
  AAA: 12,
  "AA+": 11,
  AA: 10,
  "AA–": 9,
  "AA-": 9,
  "A+": 8,
  A: 7,
  "A–": 6,
  "A-": 6,
  "BBB+": 5,
  BBB: 4,
  "BBB–": 3,
  "BBB-": 3,
  "BB+": 2,
  BB: 1,
  "BB–": 0,
  "BB-": 0,
  "B+": 0,
  B: 0,
  "B–": 0,
  "B-": 0,
};

function score(r: RatingCode): number {
  return SCORE[r] ?? 0;
}

function colorFor(r: RatingCode): string {
  const s = score(r);
  if (s >= 9) return "#0A7A3E";
  if (s >= 6) return "#2E8B57";
  if (s >= 3) return "#D4A017";
  if (s >= 1) return "#C75B12";
  return "#A31F1F";
}

export type ChartRow = {
  label: string;
  sublabel?: string;
  baseline2000: RatingCode;
  rating2026: RatingCode;
  highlight?: boolean;
};

export function ComparisonChart({
  title,
  rows,
}: {
  title?: string;
  rows: ChartRow[];
}) {
  const maxScore = 12;
  const barMaxH = 120;
  const groupW = 56;
  const gap = 28;
  const padL = 8;
  const padR = 8;
  const padT = 28;
  const padB = 72;
  const width = padL + padR + rows.length * groupW + (rows.length - 1) * gap;
  const height = padT + barMaxH + padB;

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
      {title && (
        <h3 className="mb-1 text-sm font-semibold text-gray-900">{title}</h3>
      )}
      <p className="mb-4 text-xs text-gray-500">
        2000 baseline (left) vs 2026 formal (right) · Higher bar = stronger rating
      </p>

      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gray-300" />
          2000
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#0B1F3A]" />
          2026
        </span>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[520px]"
        role="img"
        aria-label="Comparison of 2000 and 2026 institutional ratings"
      >
        {/* Y-axis guide lines */}
        {[0, 3, 6, 9, 12].map((tick) => {
          const y = padT + barMaxH - (tick / maxScore) * barMaxH;
          return (
            <g key={tick}>
              <line
                x1={padL}
                x2={width - padR}
                y1={y}
                y2={y}
                stroke="#E5E7EB"
                strokeWidth={1}
              />
              <text
                x={padL - 2}
                y={y + 3}
                textAnchor="end"
                fontSize={9}
                fill="#9CA3AF"
              >
                {tick === 12
                  ? "AAA"
                  : tick === 9
                    ? "AA–"
                    : tick === 6
                      ? "A–"
                      : tick === 3
                        ? "BBB–"
                        : "BB"}
              </text>
            </g>
          );
        })}

        {rows.map((row, i) => {
          const x0 = padL + i * (groupW + gap);
          const s0 = score(row.baseline2000);
          const s1 = score(row.rating2026);
          const h0 = (s0 / maxScore) * barMaxH;
          const h1 = (s1 / maxScore) * barMaxH;
          const barW = 20;
          const y0 = padT + barMaxH - h0;
          const y1 = padT + barMaxH - h1;

          return (
            <g key={i}>
              {/* 2000 bar */}
              <rect
                x={x0}
                y={y0}
                width={barW}
                height={h0}
                rx={3}
                fill="#D1D5DB"
              />
              <text
                x={x0 + barW / 2}
                y={y0 - 4}
                textAnchor="middle"
                fontSize={8}
                fill="#6B7280"
                fontWeight={600}
              >
                {row.baseline2000}
              </text>

              {/* 2026 bar */}
              <rect
                x={x0 + barW + 4}
                y={y1}
                width={barW}
                height={h1}
                rx={3}
                fill={row.highlight ? "#0B1F3A" : colorFor(row.rating2026)}
              />
              <text
                x={x0 + barW + 4 + barW / 2}
                y={y1 - 4}
                textAnchor="middle"
                fontSize={8}
                fill={row.highlight ? "#0B1F3A" : colorFor(row.rating2026)}
                fontWeight={700}
              >
                {row.rating2026}
              </text>

              {/* Label */}
              <text
                x={x0 + groupW / 2}
                y={padT + barMaxH + 16}
                textAnchor="middle"
                fontSize={10}
                fill={row.highlight ? "#0B1F3A" : "#374151"}
                fontWeight={row.highlight ? 700 : 500}
              >
                {row.label.length > 14
                  ? row.label.slice(0, 13) + "…"
                  : row.label}
              </text>
              {row.sublabel && (
                <text
                  x={x0 + groupW / 2}
                  y={padT + barMaxH + 30}
                  textAnchor="middle"
                  fontSize={9}
                  fill="#9CA3AF"
                >
                  {row.sublabel}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
