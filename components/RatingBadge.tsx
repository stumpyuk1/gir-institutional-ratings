import { RatingCode } from "@/data/institutions";
import clsx from "clsx";

const RATING_BG: Record<string, string> = {
  AAA: "#0A7A3E",
  "AA+": "#0A7A3E",
  AA: "#0A7A3E",
  "AA–": "#0A7A3E",
  "AA-": "#0A7A3E",
  "A+": "#2E8B57",
  A: "#2E8B57",
  "A–": "#2E8B57",
  "A-": "#2E8B57",
  "BBB+": "#D4A017",
  BBB: "#D4A017",
  "BBB–": "#D4A017",
  "BBB-": "#D4A017",
  "BB+": "#C75B12",
  BB: "#C75B12",
  "BB–": "#C75B12",
  "BB-": "#C75B12",
  "B+": "#A31F1F",
  B: "#A31F1F",
  "B–": "#A31F1F",
  "B-": "#A31F1F",
};

function bgFor(rating: RatingCode): string {
  if (RATING_BG[rating]) return RATING_BG[rating];
  if (rating.startsWith("AA") || rating === "AAA") return "#0A7A3E";
  if (rating.startsWith("A")) return "#2E8B57";
  if (rating.startsWith("BBB")) return "#D4A017";
  if (rating.startsWith("BB")) return "#C75B12";
  return "#A31F1F";
}

export function RatingBadge({
  rating,
  size = "md",
}: {
  rating: RatingCode;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizeClasses = {
    sm: "text-sm px-2 py-0.5",
    md: "text-base px-2.5 py-1",
    lg: "text-xl px-3 py-1.5",
    xl: "text-3xl px-4 py-2",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center font-bold tracking-tight rounded-md text-white shadow-sm",
        sizeClasses[size]
      )}
      style={{ backgroundColor: bgFor(rating) }}
    >
      {rating}
    </span>
  );
}
