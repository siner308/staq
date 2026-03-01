# sync-docs

Review the current state of `src/command.js` and all documentation files (`README.md`, `docs/llms-full.txt`, `docs/llms.txt`) and identify any gaps or outdated content.

## What to check

For each of the following areas, compare the actual implementation in `src/command.js` against what the docs describe:

1. **Command behavior** — Does each command's description match what the code actually does?
   - `st merge`: squash-merge, branch deletion, restack children
   - `st merge-all`: DFS order, branch deletion per PR, merge order table, failure guidance
   - `st restack`: rebase children, conflict output
   - `st discover`: tree output format (indented list, ⚠️ on stale nodes, no `→ child` suffix)
   - `st help`: current output format

2. **Output examples** — Are any hardcoded output examples in the docs out of sync with the actual output format in the code?

3. **New behaviors not yet documented** — Any code paths that have no corresponding documentation?

4. **Removed or changed behaviors** — Any docs that describe behavior that no longer exists in the code?

## What to produce

Output a clear report with:

- **Up to date**: items that are correctly documented
- **Needs update**: specific diffs — what the doc says vs what the code does, with file:line references
- **Missing**: behaviors in code with no documentation

Then apply all necessary updates to `README.md`, `docs/llms-full.txt`, and `docs/llms.txt`, keeping the writing style consistent with the existing English prose in each file.
