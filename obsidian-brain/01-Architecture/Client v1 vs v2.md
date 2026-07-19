# Client v1 vs v2

#architecture #client

Nocobase ships **two React frontend runtimes** that coexist in the same app.

## Quick Reference

| | v1 (Legacy) | v2 (Modern) |
|--|-------------|-------------|
| Package | `@nocobase/client` | `@nocobase/client-v2` |
| Source | `src/client/` | `src/client-v2/` |
| Paradigm | `SchemaComponent` (JSON schema → React) | `FlowEngine` / `FlowModel` |
| Status | Maintained, no new features | Active development target |
| Import from other | May import v2 | **Must NOT import v1** |

## v1 — SchemaComponent Runtime

- UI rendered from **JSON Schema stored in database**
- Components registered via `SchemaComponent.extend()`
- Schema editing happens in-browser (drag & drop)
- Most existing plugins use v1

## v2 — FlowEngine Runtime

- Declarative `FlowModel` describes page structure
- More predictable render lifecycle
- Better for complex stateful pages
- New plugin work should target v2 when possible

## How to Tell Which Runtime a File Uses

```bash
# v1 indicators
grep -r "SchemaComponent\|@nocobase/client'" packages/plugins/my-plugin/src/client/

# v2 indicators  
grep -r "FlowEngine\|FlowModel\|@nocobase/client-v2" packages/plugins/my-plugin/src/client/
```

## Import Rule (CRITICAL)

```ts
// ✅ OK — v1 importing from v2
import { FlowModel } from '@nocobase/client-v2';

// ❌ FORBIDDEN — v2 importing from v1
import { SchemaComponent } from '@nocobase/client'; // in client-v2 code
```

## Related Notes

- [[Architecture Overview]]
- [[Core Packages]]
