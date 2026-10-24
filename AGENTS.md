# multica-sandbox — agent rules

Disposable repository for Multica smoke tests. No production code, no secrets, no deployments.

- Package manager: pnpm (`pnpm install --frozen-lockfile`). Checks: `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`. Run all four before opening a PR.
- Work only in the Multica-provided worktree, on a branch named after the issue key (e.g. `ROB-12-short-name`).
- File ownership: `src/math.mjs` + `test/math.test.mjs` and `src/strings.mjs` + `test/strings.test.mjs` are separate units. Edit only the files your issue owns.
- `main` is protected: open a PR, never push to `main`, never force-push, never merge your own PR. A human approves and merges.
- Do not change `.github/workflows/**` unless the issue explicitly owns it.
