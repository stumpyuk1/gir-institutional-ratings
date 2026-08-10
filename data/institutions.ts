import type { Institution } from "./institutions-part1";
import { part1 } from "./institutions-part1";
import { part2 } from "./institutions-part2";
import { part3 } from "./institutions-part3";
import { extraInstitutions } from "./institutions-extra";

export type { RatingCode, Outlook, Signal, Trajectory, Institution } from "./institutions-part1";

export const institutions: Institution[] = [
  ...part1,
  ...part2,
  ...part3,
  ...(extraInstitutions as Institution[]),
];

export function getInstitution(slug: string): Institution | undefined {
  return institutions.find((i) => i.slug === slug);
}

export function getRatingColor(rating: import("./institutions-part1").RatingCode): string {
  if (rating.startsWith("AA") || rating === "AAA") return "text-rating-aa";
  if (rating.startsWith("A")) return "text-rating-a";
  if (rating.startsWith("BBB")) return "text-rating-bbb";
  if (rating.startsWith("BB")) return "text-rating-bb";
  return "text-rating-b";
}

export function getRatingBg(rating: import("./institutions-part1").RatingCode): string {
  if (rating.startsWith("AA") || rating === "AAA") return "bg-rating-aa";
  if (rating.startsWith("A")) return "bg-rating-a";
  if (rating.startsWith("BBB")) return "bg-rating-bbb";
  if (rating.startsWith("BB")) return "bg-rating-bb";
  return "bg-rating-b";
}
