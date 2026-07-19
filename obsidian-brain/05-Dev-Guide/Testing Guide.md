# Testing Guide

#testing #dev-guide

## Test Runner

Vitest 1.5.0 for unit and integration tests. Playwright for E2E.

## Run a Single Test File

```bash
# Server test
yarn test packages/core/server/src/__tests__/Application.test.ts

# Client test (with verbose output)
yarn test packages/core/flow-engine/src/__tests__/flow-engine.test.ts --run --reporter=verbose
```

## Run All Tests

```bash
yarn test            # all (sequential)
yarn test:server     # server only
yarn test:client     # client only
yarn e2e             # Playwright end-to-end
```

## CRITICAL: Server Test Sequencing

> Server tests **must run sequentially** — parallel execution causes DB interference.

```bash
# ✅ OK — sequential
yarn test packages/core/server/src/__tests__/

# ❌ DO NOT — parallel flags
yarn test --parallel packages/core/server/
```

## Test File Location

Co-locate tests next to source:

```
packages/plugins/@nocobase/plugin-my-plugin/
└── src/
    ├── server/
    │   ├── collections/
    │   │   └── __tests__/
    │   │       └── my-collection.test.ts
    │   └── index.ts
    └── client/
        └── __tests__/
            └── MyComponent.test.tsx
```

## Naming

- Unit/integration: `*.test.ts` or `*.spec.ts`
- E2E: `*.e2e.ts` (Playwright)

## Test Utilities

Shared infrastructure in `packages/core/test/`:

```ts
import { createMockServer, MockServer } from '@nocobase/test';

let app: MockServer;

beforeEach(async () => {
  app = await createMockServer({ plugins: ['my-plugin'] });
});

afterEach(async () => {
  await app.destroy();
});
```

## Related Notes

- [[Dev Workflow]]
- [[Code Conventions]]
