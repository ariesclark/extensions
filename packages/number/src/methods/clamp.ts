/**
 * Clamps a number within the range specified by the minimum and maximum values.
 */
export function clamp(
	/**
	 * The value to clamp.
	 */
	value: number,
	/**
	 * The minimum value, inclusive.
	 */
	minimum: number,
	/**
	 * The maximum value, inclusive.
	 */
	maximum: number
	/**
	 * The random number generator function.
	 */
) {
	return Math.min(Math.max(value, minimum), maximum);
}
