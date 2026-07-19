# Tech Stack

#architecture

## Full Stack at a Glance

| Layer | Technology | Version |
|-------|-----------|---------|
| **Runtime** | Node.js | 20.16.0 (Volta pinned) |
| **Package Manager** | Yarn | 1.22.22 |
| **Monorepo** | Yarn Workspaces + Lerna | — |
| **Backend** | Koa | 2.x |
| **ORM** | Sequelize (via @nocobase/database) | — |
| **Frontend (v1)** | React + Formily + SchemaComponent | React 18.0.0 |
| **Frontend (v2)** | React + FlowEngine/FlowModel | React 18.0.0 |
| **UI Components** | Ant Design | **5.24.2** (pinned) |
| **Forms** | @formily/antd-v5 | 1.2.3 (pinned) |
| **Date Library** | Day.js | 1.11.13 (pinned) |
| **Build** | Custom NocoBase CLI | — |
| **Testing (unit)** | Vitest | 1.5.0 |
| **Testing (E2E)** | Playwright | — |
| **TypeScript** | — | 5.1.3 |
| **Linting** | ESLint 8.57.1 + Prettier | — |
| **Commit Hooks** | lint-staged + commitlint | — |
| **i18n** | i18next | — |
| **Styling** | @emotion (CSS-in-JS) + Ant Design theming | — |
| **Databases** | PostgreSQL · MySQL · SQLite · MariaDB | — |

## Dependency Pins (Resolutions in root package.json)

These are pinned globally to prevent version drift:

```json
"resolutions": {
  "antd": "5.24.2",
  "react": "18.0.0",
  "react-dom": "18.0.0",
  "@types/react": "18.3.18",
  "dayjs": "1.11.13",
  "@formily/antd-v5": "1.2.3"
}
```

## Docker Images

Variants for each supported DB in `docker/`.

## CI/CD

GitHub Actions in `.github/workflows/`.

## Related Notes

- [[Architecture Overview]]
- [[Core Packages]]
