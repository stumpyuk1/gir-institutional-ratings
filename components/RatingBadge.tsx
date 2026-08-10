import { RatingCode, getRatingBg } from "@/data/institutions";
import clsx from "clsx";

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
        "rating-badge shadow-sm",
        getRatingBg(rating),
        sizeClasses[size]
      )}
    >
      {rating}
    </span>
  );
}
