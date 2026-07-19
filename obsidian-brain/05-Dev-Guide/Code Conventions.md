# Code Conventions

#dev-guide

## TypeScript

```ts
// ❌ Avoid any
function process(data: any) { ... }

// ✅ Use specific types or unknown + guard
function process(data: unknown) {
  if (isMyType(data)) { ... }
}
```

No `as any`. Use a named type or a type guard instead.

## Async Patterns

```ts
// ❌ fire-and-forget with void
void someAsyncCall();

// ✅ direct invocation
someAsyncCall();

// ❌ async IIFE in event handler
button.onClick = runAsyncTask((async () => { ... })());

// ✅ named async function
async function handleClick() { ... }
button.onClick = handleClick;
```

## Comments

Write **no comments** by default. Only add one when the WHY is non-obvious (a hidden constraint, a workaround for a specific bug, a subtle invariant).

```ts
// ❌ describes WHAT (already obvious from code)
// Iterate over users and update each one
users.forEach(user => updateUser(user));

// ✅ explains WHY (non-obvious constraint)
// Sequelize bulk update bypasses hooks; use individual updates to fire audit events
users.forEach(user => updateUser(user));
```

## UI Components

Use **Ant Design v5**. Follow antd v5 conventions and APIs.

```tsx
import { Button, Table, Form } from 'antd';
// Not: import Button from 'antd/lib/button';
```

## Accessibility

All frontend components:
- Add ARIA attributes (`aria-label`, `role`, `aria-describedby`)
- Use semantic HTML (`<button>` not `<div onClick>`)
- Ensure keyboard navigation works (Tab, Enter, Escape)

## No Premature Abstractions

Three similar lines > a helper function that saves one line. Don't design for hypothetical future needs.

## Error Handling

Only validate at system boundaries (user input, external APIs). Trust internal code. Don't add fallbacks for scenarios that can't happen.

## Related Notes

- [[Dev Workflow]]
- [[Internationalization]]
- [[Testing Guide]]
