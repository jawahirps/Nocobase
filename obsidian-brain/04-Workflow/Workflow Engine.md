# Workflow Engine

#workflow #plugin

The workflow system is a DAG-based automation engine. Workflows are visual, configurable, and extensible via plugins.

## Architecture

```
Trigger → Node → Node → Node → ...
            ↓ (branch)
           Node
```

- Each workflow is a **DAG** (Directed Acyclic Graph)
- **Triggers** start a workflow (action, schedule, data event)
- **Nodes** are processing steps
- Parallel branches supported via `plugin-workflow-parallel`

## Core Package

```
packages/plugins/@nocobase/plugin-workflow/
```

## Node Types (by plugin)

### Triggers
| Plugin | Trigger |
|--------|---------|
| `plugin-workflow` | Collection event (create/update/delete) |
| `plugin-workflow-action-trigger` | User clicks action button |
| `plugin-workflow-custom-action-trigger` | Custom programmatic trigger |

### Data Nodes
| Plugin | Node |
|--------|------|
| `plugin-workflow-aggregate` | Sum/count/avg a collection |
| `plugin-workflow-json-query` | JSONPath query on data |
| `plugin-workflow-json-variable-mapping` | Map JSON fields to variables |
| `plugin-workflow-sql` | Execute raw SQL |
| `plugin-workflow-variable` | Set/get variables |

### Logic Nodes
| Plugin | Node |
|--------|------|
| `plugin-workflow-loop` | Iterate over array |
| `plugin-workflow-parallel` | Fork parallel branches |
| `plugin-workflow-delay` | Wait N seconds/minutes |
| `plugin-workflow-date-calculation` | Date arithmetic |
| `plugin-workflow-dynamic-calculation` | Expression evaluation |

### Integration Nodes
| Plugin | Node |
|--------|------|
| `plugin-workflow-request` | HTTP request to external API |
| `plugin-workflow-mailer` | Send email |
| `plugin-workflow-notification` | Send in-app/push notification |
| `plugin-workflow-javascript` | Run custom JavaScript |

### Human-in-the-Loop
| Plugin | Node |
|--------|------|
| `plugin-workflow-manual` | Wait for human approval/input |
| `plugin-workflow-cc` | Notify users (CC) |

### Response
| Plugin | Node |
|--------|------|
| `plugin-workflow-response-message` | Return custom API response |
| `plugin-workflow-request-interceptor` | Intercept & transform requests |

## Creating a Custom Node

```ts
// packages/plugins/@nocobase/plugin-workflow/src/server/instructions/
import { Instruction } from '@nocobase/plugin-workflow';

export class MyInstruction extends Instruction {
  async run(node, input, processor) {
    const result = await doSomething(node.config, input);
    return { status: JOB_STATUS.RESOLVED, result };
  }
}

// Register in plugin
workflow.registerInstruction('my-node', MyInstruction);
```

## Related Notes

- [[Plugin Catalog]]
- [[Architecture Overview]]
