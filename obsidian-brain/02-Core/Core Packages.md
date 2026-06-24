# Core Packages

#architecture #server #client

All 27 packages under `packages/core/` — the shared infrastructure every plugin builds on.

## Server-Side Core

| Package | Path | Purpose |
|---------|------|---------|
| `@nocobase/server` | `core/server` | Main Koa HTTP server, plugin loader |
| `@nocobase/database` | `core/database` | Sequelize ORM wrapper, multi-datasource |
| `@nocobase/resourcer` | `core/resourcer` | REST resource routing (`GET /api/users`) |
| `@nocobase/acl` | `core/acl` | Field-level access control lists |
| `@nocobase/auth` | `core/auth` | Authentication strategies & sessions |
| `@nocobase/actions` | `core/actions` | Standard CRUD action handlers |
| `@nocobase/evaluators` | `core/evaluators` | Formula/expression evaluation engine |
| `@nocobase/flow-engine` | `core/flow-engine` | DAG-based workflow engine |
| `@nocobase/cache` | `core/cache` | Caching layer abstractions |
| `@nocobase/lock-manager` | `core/lock-manager` | Distributed locking primitives |
| `@nocobase/logger` | `core/logger` | Structured logging |
| `@nocobase/telemetry` | `core/telemetry` | Usage analytics |
| `@nocobase/snowflake-id` | `core/snowflake-id` | Distributed unique ID generation |
| `@nocobase/data-source-manager` | `core/data-source-manager` | Multi-DB connection manager |
| `@nocobase/ai` | `core/ai` | AI/LLM integration core |

## Client-Side Core

| Package | Path | Purpose |
|---------|------|---------|
| `@nocobase/client` | `core/client` | v1 React frontend (SchemaComponent) |
| `@nocobase/client-v2` | `core/client-v2` | v2 React frontend (FlowEngine/FlowModel) |
| `@nocobase/sdk` | `core/sdk` | JS SDK for client-server communication |

## Tooling Core

| Package | Path | Purpose |
|---------|------|---------|
| `@nocobase/cli` | `core/cli` | `yarn nocobase` CLI commands |
| `@nocobase/build` | `core/build` | Build system orchestration |
| `@nocobase/app` | `core/app` | Application wrapper/bootstrapper |
| `@nocobase/create-nocobase-app` | `core/create-nocobase-app` | Project scaffolding (`npx create-nocobase-app`) |
| `@nocobase/devtools` | `core/devtools` | Dev utilities |
| `@nocobase/test` | `core/test` | Shared test infrastructure |

## Shared Utilities

| Package | Path | Purpose |
|---------|------|---------|
| `@nocobase/shared` | `core/shared` | Shared types & interfaces |
| `@nocobase/utils` | `core/utils` | General utility functions |

## All at Version

```
2.0.57
```

## Related Notes

- [[Architecture Overview]]
- [[Plugin Catalog]]
- [[Database Guide]]
