import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as kit from '@mukundakatta/agentkit';

test('agentkit re-exports all 5 libraries', () => {
  assert.equal(typeof kit.fit, 'function');
  assert.equal(typeof kit.count, 'function');
  assert.equal(typeof kit.firewall, 'function');
  assert.equal(typeof kit.policy, 'function');
  assert.equal(typeof kit.record, 'function');
  assert.equal(typeof kit.traceTool, 'function');
  assert.equal(typeof kit.vet, 'function');
  assert.equal(typeof kit.validate, 'function');
  assert.equal(typeof kit.cast, 'function');
  assert.equal(typeof kit.extractJson, 'function');
  assert.equal(typeof kit.VERSION, 'string');
});
