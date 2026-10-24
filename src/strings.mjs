/** @param {string} text */
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * @param {string} text
 * @param {number} max
 */
export function truncate(text, max) {
  if (max < 1) throw new RangeError('max must be at least 1');
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}
