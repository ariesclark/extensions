import { timestamp, type Timestamp } from "./timestamp";

import type { Milliseconds } from "../types";

let value: Milliseconds | null = null;

/**
 * Current time in milliseconds, or optionally set a fixed value for all future calls.
 *
 * @param newValue New value to set, or `undefined` to get the current value, or `null` to reset to the current time.
 *
 * @example
 * ```typescript
 * import { now } from "@ariesclark/time";
 *
 * now(); // Current time.
 *
 * now("2024-01-01"); // Set to a fixed time, at January 1st, 2024.
 * now(); // January 1st, 2024, as set above.
 * now() // Same as above, unchanged.
 *
 * now(null); // Reset to current time.
 * now(); // Current time again.
 * ```
 */
export function now(newValue?: Timestamp | null): Milliseconds {
	if (newValue) value = timestamp(newValue);
	if (newValue === null) value = null;

	return value || (Date.now() as Milliseconds);
}
