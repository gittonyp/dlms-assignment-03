# Assignment 03 — Agile Version-Control Workflow (DLMS)

Local simulation of the GitHub feature-branch workflow. Branch creation,
commits, conflict resolution, and merges run in isolated `/tmp` demo
repositories so the surrounding assignmentengine repo is never touched.
GitHub-only actions (Pull Request pages, peer-review UI) have no terminal
equivalent and are documented below as manual steps.

## Contents

- `src/loginValidation.js` — DLMS-25 User Login (feature/user-login)
- `src/bookCreation.js` — DLMS-26 Book Creation (feature/book-creation)
- `src/bookUpdate.js` — DLMS-27 Book Update (feature/book-update)
- `tests/unit/*.test.js` — 8 Vitest cases across the three modules
- `scripts/demo_init.sh` — Step 1: git init + initial commit
- `scripts/demo_branches.sh` — Step 2: create the three feature branches
- `scripts/demo_commits.sh` — Steps 3-5: implement + commit per branch
- `scripts/demo_merge.sh` — Steps 8-10: merge, resolve conflict, summary
- `scripts/merged_summary.js` — Step 10: merged-branch summary table

## Local verification

Prerequisite: Node 22, git.

Run: npm install

Run: bash scripts/demo_init.sh

Run: bash scripts/demo_branches.sh

Run: bash scripts/demo_commits.sh

Run: bash scripts/demo_merge.sh

Run: npm test

Run: npm run coverage

Run: node scripts/merged_summary.js

## GitHub-only steps (no terminal equivalent)

- Step 6: Create Pull Request — done on the GitHub Compare page.
- Step 7: Peer code review and approval — done in the Pull Request Files view.
- Step 9 merge button / branch protection — done in the Pull Request UI.
  The local `demo_merge.sh` performs the equivalent merges with git directly.
