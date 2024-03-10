export default function round(value, precision = 2) {
  return (
    Math.round((value + Number.EPSILON) * Math.pow(10, precision)) /
    Math.pow(10, precision)
  );
}
