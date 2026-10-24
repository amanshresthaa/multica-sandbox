/** @param {number[]} values */
export function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

/** @param {number[]} values */
export function mean(values) {
  if (values.length === 0) throw new RangeError('mean of empty list');
  return sum(values) / values.length;
}
