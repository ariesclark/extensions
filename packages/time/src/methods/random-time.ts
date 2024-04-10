import { randomInt } from "@ariesclark/number/random-int";
import {
	type RandomFunction,
	randomFunction
} from "@ariesclark/number/random-function";

import { milliseconds } from "./milliseconds";
import { now } from "./now";
import { timestamp, type Timestamp } from "./timestamp";

import type { Duration, Milliseconds } from "../types";

/**
 * Get a random time within a specified range.
 *
 * @param offset {@link Duration} to offset from, e.g. `1d` for up to 1 day in the future, `-1w` for up to 1 week ago, defaulting to up to `1 year` in the future.
 * @param anchor {@link Timestamp} to anchor the offset to, defaulting to {@link now}.
 * @param random {@link RandomFunction} to use for randomness, defaulting to {@link randomFunction}.
 *
 * @example
 * ```typescript
 * import { randomTime, now } from "@ariesclark/time";
 *
 * randomTime(); // Up to 1 year in the future.
 *
 * randomTime("1d"); // Up to 1 day in the future.
 * randomTime("1d", now()); // Up to 1 day after `now`, same as above.
 * randomTime("-1d"); // Up to 1 day ago.
 *
 * randomTime("1 week", "2024-01-01"); // Up to 1 week after January 1st, 2024.
 * randomTime("-1 week", "2024-01-01"); // Up to 1 week before January 1st, 2024.
 *
 * // Custom source of randomness.
 * import { pseudoRandomFloat } from "@ariesclark/number";
 *
 * const randomFloat = pseudoRandomFloat("hello world"); // Seeded pseudo-random number generator.
 * randomTime("1 week", "2024-01-01", randomFloat); //
 * ```
 */
export function randomTime(
	offset: Duration = "1 year",
	anchor: Timestamp = now(),
	random: RandomFunction = randomFunction()
): Milliseconds {
	return timestamp(anchor) - randomInt(0, -milliseconds(offset), random);
}
