import { Signal } from "@/data/institutions";
import clsx from "clsx";

export function SignalBadge({ signal }: { signal: Signal }) {
  const styles = {
    Positive: "bg-teal-50 text-signal-positive border-teal-200",
    Neutral: "bg-gray-50 text-signal-neutral border-gray-200",
    Negative: "bg-rose-50 text-signal-negative border-rose-200",
  };

  const icons = {
    Positive: "↑",
    Neutral: "○",
    Negative: "↓",
  };

  return (
    <span className={clsx("signal-badge", styles[signal])}>
      <span className="font-bold">{icons[signal]}</span>
      <span>{signal} pressure</span>
    </span>
  );
}
