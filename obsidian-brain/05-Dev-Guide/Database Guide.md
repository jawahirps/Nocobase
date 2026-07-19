# Database Guide

#database #dev-guide

## Supported Backends

| Database | Docker Config |
|----------|--------------|
| PostgreSQL | `docker/` |
| MySQL | `docker/` |
| SQLite | `docker/` |
| MariaDB | `docker/` |

## ORM

Sequelize via `@nocobase/database` wrapper. All DB access goes through the resourcer + collection API — raw Sequelize only when necessary.

## Collections (Tables)

Define collections in `src/server/collections/`:

```ts
// packages/plugins/@nocobase/plugin-my-plugin/src/server/collections/my-table.ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'my_table',
  fields: [
    { type: 'string', name: 'title' },
    { type: 'integer', name: 'count' },
    { type: 'belongsTo', name: 'user', target: 'users' },
  ],
});
```

New collections and columns **auto-sync** to DB on `yarn nocobase upgrade`. No migration needed for additions.

## When to Write a Migration

Write a migration for:
- Renaming a column
- Changing a column type
- Dropping a column or table
- Adding an index to an existing table
- Any destructive schema change

**NOT needed for:**
- Adding new collections
- Adding new columns (auto-synced)
- Adding new indexes on new tables

## Migration File

```
packages/plugins/@nocobase/plugin-my-plugin/
└── src/server/migrations/
    └── 20240601000000-rename-column.ts
```

```ts
import { Migration } from '@nocobase/server';
import { DataTypes } from '@nocobase/database';

export default class extends Migration {
  appVersion = '<=2.0.57';

  async up() {
    const queryInterface = this.db.sequelize.getQueryInterface();
    await queryInterface.renameColumn('my_table', 'old_name', 'new_name');
  }

  async down() {
    const queryInterface = this.db.sequelize.getQueryInterface();
    await queryInterface.renameColumn('my_table', 'new_name', 'old_name');
  }
}
```

Import column types from `DataTypes` — don't reuse type names from neighboring migrations without verifying.

## Multi-Datasource

Multiple DB connections managed by `@nocobase/data-source-manager`. Access via:

```ts
const db = app.dataSourceManager.dataSources.get('mySource').collectionManager.db;
```

## Related Notes

- [[Core Packages]]
- [[Plugin Catalog]]
- [[Dev Workflow]]
