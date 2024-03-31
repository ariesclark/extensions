import { randomFloat } from "@ariesclark/number/random-float";

import type { RandomFunction } from "@ariesclark/number";

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
