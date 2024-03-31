/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { RandomFunction } from "../types";

/**
 * A random number generator function that returns a float between 0 and 1 using {@link crypto.getRandomValues}.
 * @returns A random float between 0 and 1.
 */
export const randomFloat: RandomFunction = () => {
	const [a] = crypto.getRandomValues(new Uint32Array(1));
	return a! / Math.pow(2, 32);
};
