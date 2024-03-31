import { randomFloat } from "@ariesclark/number/random-float";

import { randomIndex } from "./random-index";

import type { RandomFunction } from "@ariesclark/number";

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
