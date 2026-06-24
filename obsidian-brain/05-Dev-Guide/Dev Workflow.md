# Dev Workflow

#dev-guide

## Setup & Start

```bash
# Install dependencies
yarn install

# Start development (hot reload)
yarn dev

# Build for production
yarn build
```

## Branch Convention

Development branch for active work: `claude/ecstatic-wozniak-cmy6rk`

```bash
git checkout claude/ecstatic-wozniak-cmy6rk
git push -u origin claude/ecstatic-wozniak-cmy6rk
```

## Commit Convention (Conventional Commits)

```
<type>(<scope>): <message>

# Examples:
fix(plugin-workflow): handle null trigger config
feat(client-v2): add FlowModel pagination support
chore: update dependency versions
docs: update CHANGELOG
```

Types: `feat` · `fix` · `chore` · `docs` · `refactor` · `test` · `perf`

## Pre-Commit Checklist

- [ ] `yarn eslint --fix` on all touched files
- [ ] No new `any` types introduced
- [ ] No hardcoded user-facing strings (use `t()`)
- [ ] DB changes have a migration file
- [ ] Tests pass: `yarn test <path>`

## Plugin Scaffold

New plugin location:
```
packages/plugins/@nocobase/plugin-<name>/
```

Reuse the existing scaffold — do **not** invent a new layout.

## Upgrade & DB Sync

```bash
# Sync new collections/columns to DB (runs migrations too)
yarn nocobase upgrade
```

New collections and columns are auto-synced on upgrade. Only manually-altered tables need explicit migration files.

## ESLint

```bash
# Fix a specific file
yarn eslint --fix packages/plugins/my-plugin/src/client/index.tsx

# Fix entire plugin
yarn eslint --fix packages/plugins/@nocobase/plugin-my-plugin/src/
```

## Related Notes

- [[Testing Guide]]
- [[Code Conventions]]
- [[Database Guide]]
- [[Internationalization]]
