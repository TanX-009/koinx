export default function parseCurrency(raw, currency) {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });

  return formatter.format(raw);
}
