import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

test('android platform present', () => {
  assert.ok(fs.existsSync(path.join(root, 'android')));
});

test('capacitor appId is street pool', () => {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'capacitor.config.json'), 'utf8'));
  assert.equal(cfg.appId, 'com.block.streetpool');
  assert.equal(cfg.appName, '方块街头桌球');
});

test('pool web entry present', () => {
  assert.ok(fs.existsSync(path.join(root, 'index.html')));
  assert.ok(fs.existsSync(path.join(root, 'www', 'index.html')));
});
