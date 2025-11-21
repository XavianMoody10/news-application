export function convertDate(dateStr) {
  const date = new Date(dateStr);

  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatted;
}
