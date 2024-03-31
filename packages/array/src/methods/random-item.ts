import { randomFloat } from "@ariesclark/number/random-float";
import type { RandomFunction } from "@ariesclark/number"

export function randomItem<T>(
	array: ReadonlyArray<T>,
	random: RandomFunction = randomFloat
) {
	return array[Math.floor(random() * array.length)];
}
