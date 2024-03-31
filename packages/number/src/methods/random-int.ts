import { randomFloat } from "./random-float";

import type { RandomFunction } from "../types";

/**
 * Get a random value between `minimum` and `maximum`.
 *
 * @param minimum The minimum value, inclusive, defaults to `0`.
 * @param maximum The maximum value, inclusive, defaults to `100`.
 */
export function randomInt(
	minimum: number = 0,
	maximum: number = 100,
	random: RandomFunction = randomFloat
) {
	return Math.floor(random() * (maximum - minimum + 1)) + minimum;
}
