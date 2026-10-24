import { test } from 'node:test';
import assert from 'node:assert/strict';

// Deliberate failure: proves a red CI check blocks merging into main. Never merge this PR.
test('deliberate CI gate failure', () => assert.equal(1 + 1, 3));
