# Plugin Catalog

#plugin

106 official plugins under `packages/plugins/@nocobase/`. Each follows the scaffold layout and is versioned at `2.0.57`.

## New Plugin Location

```
packages/plugins/@nocobase/plugin-<name>/
├── src/
│   ├── client/     ← React frontend
│   └── server/     ← Koa server-side
│       └── migrations/  ← DB migrations
├── package.json
└── tsconfig.json
```

---

## Field Plugins

| Plugin | Purpose |
|--------|---------|
| `plugin-field-china-region` | China region selector field |
| `plugin-field-code` | Code editor field |
| `plugin-field-formula` | Formula computed field |
| `plugin-field-m2m-array` | Many-to-many stored as array |
| `plugin-field-markdown-vditor` | Markdown editor field (Vditor) |
| `plugin-field-sequence` | Auto-sequence/serial field |
| `plugin-field-sort` | Drag-to-sort field |
| `plugin-snapshot-field` | Point-in-time snapshot of related record |
| `plugin-field-attachment-url` | File attachment via URL |

---

## Workflow Plugins

> See [[Workflow Engine]] for the full breakdown.

| Plugin | Purpose |
|--------|---------|
| `plugin-workflow` | Core workflow engine |
| `plugin-workflow-action-trigger` | Trigger on user action |
| `plugin-workflow-aggregate` | Aggregate data node |
| `plugin-workflow-custom-action-trigger` | Custom action trigger |
| `plugin-workflow-date-calculation` | Date math node |
| `plugin-workflow-delay` | Wait/delay node |
| `plugin-workflow-dynamic-calculation` | Dynamic expression node |
| `plugin-workflow-javascript` | Run JS code node |
| `plugin-workflow-json-query` | JSONPath query node |
| `plugin-workflow-loop` | Loop node |
| `plugin-workflow-mailer` | Send email node |
| `plugin-workflow-manual` | Human-in-the-loop node |
| `plugin-workflow-notification` | Push notification node |
| `plugin-workflow-parallel` | Parallel execution node |
| `plugin-workflow-request` | HTTP request node |
| `plugin-workflow-request-interceptor` | Intercept & modify requests |
| `plugin-workflow-response-message` | Custom API response node |
| `plugin-workflow-sql` | Execute SQL node |
| `plugin-workflow-test` | Test/mock workflow |
| `plugin-workflow-variable` | Variable assignment node |
| `plugin-workflow-cc` | CC / notification routing |
| `plugin-workflow-json-variable-mapping` | Map JSON to variables |

---

## Block / UI Plugins

| Plugin | Purpose |
|--------|---------|
| `plugin-block-grid-card` | Grid card layout block |
| `plugin-block-iframe` | Embed iframe block |
| `plugin-block-list` | List view block |
| `plugin-block-markdown` | Markdown display block |
| `plugin-block-multi-step-form` | Multi-step form block |
| `plugin-block-template` | Reusable block templates |
| `plugin-block-tree` | Tree view block |
| `plugin-block-workbench` | Workbench block |
| `plugin-calendar` | Calendar view |
| `plugin-charts` | Charts/analytics block |
| `plugin-data-visualization` | Data visualization |
| `plugin-data-visualization-echarts` | ECharts renderer |
| `plugin-kanban` | Kanban board block |
| `plugin-gantt` | Gantt chart block |
| `plugin-map` | Map view block |
| `plugin-embed` | Page embed block |

---

## Data Source Plugins

| Plugin | Purpose |
|--------|---------|
| `plugin-data-source-main` | Default main database |
| `plugin-data-source-manager` | Multi-datasource manager UI |
| `plugin-collection-sql` | SQL collection (virtual table) |
| `plugin-collection-fdw` | Foreign Data Wrapper collection |
| `plugin-collection-tree` | Adjacency list tree collection |

---

## Auth / User Plugins

| Plugin | Purpose |
|--------|---------|
| `plugin-auth` | Core auth (local username/password) |
| `plugin-auth-sms` | SMS OTP authentication |
| `plugin-users` | User management |
| `plugin-departments` | Org chart / departments |
| `plugin-verification` | Verification codes |
| `plugin-api-keys` | API key management |

---

## File Management

| Plugin | Purpose |
|--------|---------|
| `plugin-file-manager` | File upload/storage (S3, local, etc.) |
| `plugin-file-previewer-office` | Office document preview |
| `plugin-backup-restore` | Database backup & restore |

---

## Action Plugins

| Plugin | Purpose |
|--------|---------|
| `plugin-action-bulk-edit` | Bulk edit selected records |
| `plugin-action-bulk-update` | Bulk update via form |
| `plugin-action-custom-request` | Custom HTTP action button |
| `plugin-action-duplicate` | Duplicate record action |
| `plugin-action-export` | Export to Excel/CSV |
| `plugin-action-import` | Import from Excel/CSV |
| `plugin-action-print` | Print record action |

---

## Notification Plugins

| Plugin | Purpose |
|--------|---------|
| `plugin-notification-manager` | Notification channel manager |
| `plugin-notification-email` | Email notifications |
| `plugin-notification-in-app-message` | In-app message center |
| `plugin-notifications` | General notification framework |

---

## Administrative Plugins

| Plugin | Purpose |
|--------|---------|
| `plugin-acl` | ACL roles & permissions UI |
| `plugin-audit-logs` | Audit trail logging |
| `plugin-localization` | In-app translation management |
| `plugin-system-settings` | System settings UI |
| `plugin-environment-variables` | Env var management UI |
| `plugin-theme-editor` | Visual theme customization |
| `plugin-ui-schema-storage` | JSON schema persistence |
| `plugin-ui-templates` | UI template library |
| `plugin-license` | License management |

---

## AI Plugins

| Plugin | Purpose |
|--------|---------|
| `plugin-ai` | AI integration UI & tools |
| `plugin-ai-gigachat` | GigaChat LLM connector |

---

## Mobile

| Plugin | Purpose |
|--------|---------|
| `plugin-mobile` | Mobile-optimized layout |
| `plugin-mobile-client` | Mobile client shell |

---

## Example Plugins (Educational)

Located in `packages/plugins/@nocobase-example/`. 20 examples covering:
- Custom blocks, fields, actions
- ACL middleware
- Resource extensions
- Nested blocks & popups

---

## Related Notes

- [[Architecture Overview]]
- [[Workflow Engine]]
- [[Database Guide]]
