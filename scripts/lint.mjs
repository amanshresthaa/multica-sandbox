import { readFileSync } from 'node:fs';
import { sourceFiles } from './files.mjs';

const problems = [];
for (const file of sourceFiles()) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (/\s+$/.test(line)) problems.push(`${file}:${i + 1} trailing whitespace`);
    if (/\bconsole\.log\(/.test(line) && file.startsWith('src')) problems.push(`${file}:${i + 1} console.log in src`);
    if (/\t/.test(line)) problems.push(`${file}:${i + 1} tab indentation`);
  });
}
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log('lint: ok');
