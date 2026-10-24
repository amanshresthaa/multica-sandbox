import { execFileSync } from 'node:child_process';
import { sourceFiles } from './files.mjs';

// Dependency-free syntax check of every module (no TypeScript in this sandbox).
for (const file of sourceFiles()) execFileSync(process.execPath, ['--check', file], { stdio: 'inherit' });
console.log('typecheck: ok');
