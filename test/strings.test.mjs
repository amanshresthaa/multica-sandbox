import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify, truncate } from '../src/strings.mjs';

test('slugify lowercases and hyphenates', () => assert.equal(slugify('  Hello, World! '), 'hello-world'));

test('truncate returns text unchanged when within max', () => {
  assert.equal(truncate('hello', 5), 'hello');
  assert.equal(truncate('hi', 5), 'hi');
});

test('truncate shortens text longer than max with an ellipsis', () => {
  assert.equal(truncate('hello world', 6), 'hello…');
  assert.equal(truncate('hello', 1), '…');
});

test('truncate throws RangeError when max < 1', () => {
  assert.throws(() => truncate('hello', 0), RangeError);
  assert.throws(() => truncate('hello', -3), RangeError);
});
