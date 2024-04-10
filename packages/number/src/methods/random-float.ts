import type { RandomFunction } from "./random-function";

/**
 * A random number generator function that returns a float between 0 and 1.
 * Internally uses {@link crypto.getRandomValues} if available, or {@link Math.random} as a fallback on unsupported platforms.
 *
 * @returns A random float between 0 and 1.
 */
export const randomFloat: RandomFunction = () => {
	if (typeof crypto === "undefined" || !crypto.getRandomValues)
		return Math.random();

	const [a] = crypto.getRandomValues(new Uint32Array(1));
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return a! / Math.pow(2, 32);
};
