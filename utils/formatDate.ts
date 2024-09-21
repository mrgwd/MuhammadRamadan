export function formatDate(
  date: string,
  month: "2-digit" | "short" | "long" = "short",
  day: "2-digit" | "numeric" = "numeric",
  year: "2-digit" | "numeric" = "numeric",
): string {
  return new Date(date).toLocaleDateString("en-US", {
    month,
    day,
    year,
  });
}
