import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum, mean } from '../src/math.mjs';

test('sum adds values', () => assert.equal(sum([1, 2, 3]), 6));
test('mean averages values', () => assert.equal(mean([2, 4]), 3));
test('mean rejects empty list', () => assert.throws(() => mean([]), RangeError));
