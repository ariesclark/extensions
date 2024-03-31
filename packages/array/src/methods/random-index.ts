import { randomFloat } from "@ariesclark/number/random-float";

import type { RandomFunction } from "@ariesclark/number";

/**
 * Get a random index from an array, with an optional random number generator.
 *
 * @example
 * const value = ["lorem", "ipsum", "dolor", "sit", "amet"];
 *
 * randomIndex(value); // 3, eventually.
 * randomIndex(value); // 0, eventually.
 * randomIndex(value); // 2, eventually.
 */
export function randomIndex(
	array: { length: 0 },
	random?: RandomFunction
): null;
export function randomIndex(
	array: { length: number },
	random?: RandomFunction
): number;
export function randomIndex(
	array: { length: number },
	random: RandomFunction = randomFloat
): number | null {
	if (array.length === 0) return null;
	return Math.floor(random() * array.length);
}
