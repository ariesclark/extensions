import { randomFloat } from "./random-float";

/**
 * A random number generator function that returns a float between 0 and 1.
 */
export type RandomFunction = () => number;

/**
 * The default random number generator function.
 * @see {@link randomFloat}.
 */
export const defaultRandom: RandomFunction = randomFloat;
let value: RandomFunction = defaultRandom;

/**
 * Get the current random number generator function, or set a new one.
 * @see {@link defaultRandom} for the default random number generator function.
 *
 * @param newValue The new random number generator function, or `undefined` to get the current value, or `null` to reset to the default.
 *
 * @example
 * ```typescript
 * import { randomFunction } from "@ariesclark/number/random-function";
 * import { randomInt } from "@ariesclark/number/random-int";
 *
 * randomInt() // Random number between 0 and 100.
 * randomFunction(() => 0.5);
 *
 * randomInt() // Always 50.
 * ```
 */
export function randomFunction(
	newValue?: RandomFunction | null
): RandomFunction {
	if (newValue) value = newValue;
	if (newValue === null) value = defaultRandom;
	return value;
}
