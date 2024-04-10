import {
	type RandomFunction,
	randomFunction
} from "@ariesclark/number/random-function";

/**
 * Get a random index from an array.
 *
 * @example
 * ```typescript
 * const value = ["lorem", "ipsum", "dolor", "sit", "amet"];
 *
 * randomIndex(value); // 3, eventually.
 * randomIndex(value); // 0, eventually.
 * randomIndex(value); // 2, eventually.
 * ```
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
	random: RandomFunction = randomFunction()
): number | null {
	if (array.length === 0) return null;
	return Math.floor(random() * array.length);
}
