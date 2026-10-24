import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/strings.mjs';

test('slugify lowercases and hyphenates', () => assert.equal(slugify('  Hello, World! '), 'hello-world'));
