/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * Returns the sum of the numbers.
 *
 * @param numbers The numbers to sum.
 * @returns The sum of the numbers.
 */
export function sum(...numbers: Array<number>): number {
	if (numbers.length === 0) return 0;
	if (numbers.length === 1) return numbers[0]!;
	if (numbers.length === 2) return numbers[0]! + numbers[1]!;

	return numbers.reduce((sum, number) => sum + number, 0);
}
