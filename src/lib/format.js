const DAY = 86_400_000;

// 57000 -> "£57k". When min and max are the same, show one number.
export function formatSalary(min, max, currency = "GBP") {
  if (min == null && max == null) return null;

  const money = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    notation: "compact",
    maximumFractionDigits: 0,
  });

  const low = money.format(min ?? max).replace(/K$/, "k");
  const high = money.format(max ?? min).replace(/K$/, "k");
  return low === high ? low : `${low} - ${high}`;
}

// Date -> "today", "yesterday", "2 days ago" or "3 months ago"
export function formatRelative(date, now = new Date()) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const days = Math.round((date.getTime() - now.getTime()) / DAY);

  if (Math.abs(days) < 30) return rtf.format(days, "day");
  return rtf.format(Math.round(days / 30), "month");
}

// Date -> "Dec 12, 12:00 PM"
export function formatInterviewTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}