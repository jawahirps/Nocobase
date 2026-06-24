# Architecture Overview

#architecture

Nocobase is an **open-source, plugin-first, no-code platform** built as a microkernel. Everything lives in plugins — the core just wires them together.

## High-Level Diagram

```
┌──────────────────────────────────────────────────────┐
│                    Browser / App                      │
│  ┌─────────────────────────┐  ┌──────────────────┐   │
│  │  Client v1 (legacy)     │  │  Client v2 (new) │   │
│  │  @nocobase/client       │  │  @nocobase/client│   │
│  │  SchemaComponent        │  │  -v2 FlowEngine  │   │
│  └──────────┬──────────────┘  └────────┬─────────┘   │
│             │  may import v2 →         │              │
└─────────────┼────────────────────────-─┼──────────────┘
              │  REST / WebSocket        │
┌─────────────▼──────────────────────────▼──────────────┐
│                 Koa HTTP Server                        │
│  ┌──────────┐  ┌────────────┐  ┌──────────────────┐  │
│  │ Resourcer│  │    ACL     │  │  Auth / Session  │  │
│  └──────────┘  └────────────┘  └──────────────────┘  │
│  ┌──────────────────────────────────────────────────┐ │
│  │           Plugin Manager (microkernel)           │ │
│  │  106+ official plugins loaded at runtime         │ │
│  └──────────────────────────────────────────────────┘ │
│  ┌──────────────────────────────────────────────────┐ │
│  │          Database (Sequelize ORM)                │ │
│  │  PostgreSQL · MySQL · SQLite · MariaDB           │ │
│  └──────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────┘
```

## Key Architectural Principles

- **Everything is a plugin** — even built-in features like users, ACL, and file manager
- **Two frontend runtimes** — see [[Client v1 vs v2]]
- **Pluggable databases** — swap backends via datasource plugins
- **Schema-driven UI** — JSON schema stored in DB renders the frontend
- **Workflow as first-class** — [[Workflow Engine]] is core, not bolted on

## Monorepo Layout

```
packages/
├── core/        ← 27 shared infrastructure packages
├── plugins/
│   ├── @nocobase/          ← 106 official plugins
│   └── @nocobase-example/  ← 20 educational examples
└── presets/     ← compiled preset bundles
```

## Import Rules (STRICT)

| Direction | Allowed? |
|-----------|----------|
| v1 client → v2 client | ✅ Yes |
| v2 client → v1 client | ❌ **NEVER** |
| Plugin → core | ✅ Yes |
| Core → plugin | ❌ No |

## Related Notes

- [[Core Packages]]
- [[Plugin Catalog]]
- [[Client v1 vs v2]]
- [[Tech Stack]]
