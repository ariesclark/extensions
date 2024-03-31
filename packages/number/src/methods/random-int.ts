import { randomFloat } from "./random-float";

import type { RandomFunction } from "../types";

/**
 * Get a random value between `minimum` and `maximum`.
 *
 * @param minimum The minimum value, inclusive.
 * @param maximum The maximum value, inclusive.
 */
export function randomInt(
	minimum: number,
	maximum: number,
	random: RandomFunction = randomFloat
) {
	return Math.floor(random() * (maximum - minimum + 1)) + minimum;
}
