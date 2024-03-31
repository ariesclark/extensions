import { randomFloat } from "@ariesclark/number/random-float";

import { randomIndex } from "./random-index";

import type { RandomFunction } from "@ariesclark/number";

/**
 * Get a random item from an array, with an optional random number generator.
 *
 * @example
 * const value = ["lorem", "ipsum", "dolor", "sit", "amet"];
 *
 * randomItem(value); // "amet", eventually.
 * randomItem(value); // "dolor", eventually.
 * randomItem(value); // "lorem", eventually.
 */
export function randomItem(array: { length: 0 }, random?: RandomFunction): null;
export function randomItem<T>(
	array: { length: number; [index: number]: T },
	random?: RandomFunction
): T;

export function randomItem<T>(
	array: { length: number; [index: number]: T },
	random: RandomFunction = randomFloat
): T | null {
	if (array.length === 0) return null;
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return array[randomIndex(array, random)]!;
}
