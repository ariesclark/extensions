/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { sum } from "./sum";

/**
 * Returns the average of the numbers.
 *
 * @param numbers The numbers to average.
 * @returns The average of the numbers.
 */
export function average(...numbers: Array<number>): number {
	if (numbers.length === 0) return 0;
	if (numbers.length === 1) return numbers[0]!;

	return sum(...numbers) / numbers.length;
}
