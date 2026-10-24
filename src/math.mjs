/** @param {number[]} values */
export function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

/** @param {number[]} values */
export function mean(values) {
  if (values.length === 0) throw new RangeError('mean of empty list');
  return sum(values) / values.length;
}

/** @param {number[]} values */
export function median(values) {
  if (values.length === 0) throw new RangeError('median of empty list');
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}
