/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { average } from "./average";

/**
 * Returns the median of the numbers.
 * @see https://en.wikipedia.org/wiki/Median
 *
 * @param numbers The numbers to find the median of.
 * @returns The median of the numbers.
 */
export function median(...numbers: Array<number>): number {
	if (numbers.length === 0) return 0;
	if (numbers.length === 1) return numbers[0]!;

	numbers = numbers.toSorted((a, b) => a - b);
	if (numbers.length === 3) return numbers[1]!;

	const middle = Math.floor(numbers.length / 2);

	if (numbers.length % 2 === 0)
		return average(numbers[middle - 1]!, numbers[middle]!);

	return numbers[middle]!;
}
