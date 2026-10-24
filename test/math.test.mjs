import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum, mean, median } from '../src/math.mjs';

test('sum adds values', () => assert.equal(sum([1, 2, 3]), 6));
test('mean averages values', () => assert.equal(mean([2, 4]), 3));
test('mean rejects empty list', () => assert.throws(() => mean([]), RangeError));
test('median of odd-length list', () => assert.equal(median([3, 1, 2]), 2));
test('median of even-length list averages middle values', () => assert.equal(median([4, 1, 3, 2]), 2.5));
test('median rejects empty list', () => assert.throws(() => median([]), RangeError));
test('median does not mutate input', () => {
  const values = [3, 1, 2];
  median(values);
  assert.deepEqual(values, [3, 1, 2]);
});
test('median sorts numerically, not lexically', () => assert.equal(median([10, 2, 1]), 2));
test('median of large positive pair does not overflow', () =>
  assert.equal(median([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE));
test('median of large negative pair does not overflow', () =>
  assert.equal(median([-Number.MAX_VALUE, -Number.MAX_VALUE]), -Number.MAX_VALUE));
test('median of opposite extremes is zero', () => assert.equal(median([-Number.MAX_VALUE, Number.MAX_VALUE]), 0));
test('median keeps subnormal precision', () => assert.equal(median([Number.MIN_VALUE, Number.MIN_VALUE]), Number.MIN_VALUE));
