# agentkit

**The agent reliability stack in one install.** Five small, focused, zero-dep libraries that fix the boring problems every long-running agent eventually hits.

```bash
npm install @mukundakatta/agentkit
```

```js
import { fit, firewall, expectSnapshot, vet, cast } from '@mukundakatta/agentkit';
```

## What's in the box

| Symbol | From | What it does |
|---|---|---|
| `fit`, `count`, `OverBudgetError` | [`agentfit`](https://www.npmjs.com/package/@mukundakatta/agentfit) | Fit messages into a token budget |
| `firewall`, `wrapFetch`, `policy`, `check`, `PolicyViolation` | [`agentguard`](https://www.npmjs.com/package/@mukundakatta/agentguard) | Network-egress firewall for tools |
| `record`, `traceTool`, `expectSnapshot`, `diff` | [`agentsnap`](https://www.npmjs.com/package/@mukundakatta/agentsnap) | Snapshot tests for tool-call traces |
| `vet`, `validate`, `vetAdapters`, `ToolArgError` | [`agentvet`](https://www.npmjs.com/package/@mukundakatta/agentvet) | Validate tool args before execution |
| `cast`, `extractJson`, `castAdapters`, `CastError` | [`agentcast`](https://www.npmjs.com/package/@mukundakatta/agentcast) | Structured-output enforcer |

`adapters` is re-exported as `vetAdapters` and `castAdapters` to avoid the name collision. For the full surface of any one library, use the subpath import:

```js
import * as fitLib from '@mukundakatta/agentkit/fit';
import * as guardLib from '@mukundakatta/agentkit/guard';
// ...
```

## Pipeline

The libraries compose into a natural agent reliability pipeline — **fit → guard → snap → vet → cast**:

```
fit messages       → fit a chat history into the model's budget
firewall fetches   → block tool fetches outside the allowlist
expectSnapshot     → diff this run's tool calls against a baseline
vet args           → validate args before each tool runs
cast output        → validate the model's structured response
```

You don't have to use all five — pick the ones you need. They share no state and are deliberately uncoupled.

## Why a meta-package

Every individual library is one `npm install` away too. `agentkit` exists because the typical real-world setup uses three or more of them, and a single package makes the dependency story cleaner: one row in `package.json`, one `import` line, one version to bump.

## Sibling MCP servers

Each library also ships as an MCP server so Claude Desktop, Cursor, Cline, Windsurf, and Zed can call them mid-conversation:

```bash
npx -y @mukundakatta/agentfit-mcp
npx -y @mukundakatta/agentguard-mcp
npx -y @mukundakatta/agentsnap-mcp
npx -y @mukundakatta/agentvet-mcp
npx -y @mukundakatta/agentcast-mcp
```

## License

MIT
