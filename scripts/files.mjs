import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

export function sourceFiles(dirs = ['src', 'test', 'scripts']) {
  const out = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) walk(path);
      else if (path.endsWith('.mjs')) out.push(path);
    }
  };
  dirs.forEach(walk);
  return out;
}
