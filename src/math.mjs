/** @param {number[]} values */
export function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

/** @param {number[]} values */
export function mean(values) {
  if (values.length === 0) throw new RangeError('mean of empty list');
  return sum(values) / values.length;
}

/**
 * Inputs are assumed to be finite numbers; NaN and non-number values are
 * not validated and give unspecified results.
 * @param {number[]} values
 */
export function median(values) {
  if (values.length === 0) throw new RangeError('median of empty list');
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? midpoint(sorted[mid - 1], sorted[mid]) : sorted[mid];
}

/**
 * Average of two numbers that does not overflow for large finite inputs.
 * Uses (a + b) / 2 when the sum is finite, which keeps subnormal precision
 * that a / 2 + b / 2 would lose.
 * @param {number} a
 * @param {number} b
 */
function midpoint(a, b) {
  const total = a + b;
  return Number.isFinite(total) ? total / 2 : a / 2 + b / 2;
}
