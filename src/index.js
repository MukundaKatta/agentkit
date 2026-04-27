/**
 * agentkit — the agent reliability stack.
 *
 * Re-exports all five sibling libraries under one import. Use the namespaced
 * forms when you need a single thing (`import { fit } from '@mukundakatta/agentkit'`),
 * or the subpath imports for the full surface of one library
 * (`import { fit, count, OverBudgetError } from '@mukundakatta/agentkit/fit'`).
 *
 * Pipeline pattern:
 *   import { fit, firewall, expectSnapshot, vet, cast } from '@mukundakatta/agentkit';
 *   //       ^fit messages    ^sandbox network  ^snapshot tools  ^vet args  ^validate output
 */

// Most-used surfaces re-exported at the root for one-line ergonomics.
export { fit, count, OverBudgetError } from '@mukundakatta/agentfit';
export { firewall, wrapFetch, policy, check, PolicyViolation } from '@mukundakatta/agentguard';
export { record, traceTool, expectSnapshot, diff } from '@mukundakatta/agentsnap';
export { vet, validate, adapters as vetAdapters, ToolArgError } from '@mukundakatta/agentvet';
export { cast, extractJson, adapters as castAdapters, CastError } from '@mukundakatta/agentcast';

export const VERSION = '0.1.0';
