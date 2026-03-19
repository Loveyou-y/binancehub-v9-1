#!/usr/bin/env node
import fs from 'node:fs/promises';

const raw = await fs.readFile(new URL('../data.json', import.meta.url), 'utf8');
const data = JSON.parse(raw || '[]');

if (!Array.isArray(data) || data.length < 20) {
  console.error(`[validate] data.json too small: ${Array.isArray(data) ? data.length : 'invalid'}`);
  process.exit(1);
}

const required = ['id', 'cat', 'title', 'drawer'];
let bad = 0;
for (const item of data) {
  for (const k of required) if (!(k in item)) bad++;
  if (!item?.drawer?.details?.length) bad++;
  if (!item?.drawer?.steps?.length) bad++;
  const txt = `${item.subtitle || ''} ${(item.drawer?.steps || []).join(' ')}`.toLowerCase();
  if (/security check|max challenge attempts exceeded|verify that you are human|cloudflare/.test(txt)) bad++;
}

if (bad > 0) {
  console.error(`[validate] failed with ${bad} quality issues`);
  process.exit(1);
}

console.log(`[validate] ok: ${data.length} cards`);
