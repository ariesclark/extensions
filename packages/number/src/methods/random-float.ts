import type { RandomFunction } from "../types";

/**
 * A random number generator function that returns a float between 0 and 1 using {@link crypto.getRandomValues}.
 * @returns A random float between 0 and 1.
 */
export const randomFloat: RandomFunction = () => {
	const [value] = crypto.getRandomValues(new Uint8Array(1));
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return value!;
};
