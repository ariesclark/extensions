import { type RandomFunction, randomFunction } from "./random-function";

/**
 * Get a random value between `minimum` and `maximum`.
 */
export function randomInt(
	/**
	 * The minimum value, inclusive, defaults to `0`
	 */
	minimum: number = 0,
	/**
	 * The maximum value, inclusive, defaults to `100`
	 */
	maximum: number = 100,
	/**
	 * The random number generator function.
	 */
	random: RandomFunction = randomFunction()
) {
	return Math.floor(random() * (maximum - minimum + 1)) + minimum;
}
