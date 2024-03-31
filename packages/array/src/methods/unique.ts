/**
 * Returns a new array with unique values based on the `by` function.
 */
export function unique<T>(array: Array<T>, by: (value: T) => unknown) {
	if (array.length === 0) return [];

	return [...new Set(array.map((value) => by(value)))].map((key) => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return array.find((value) => by(value) === key)!;
	});
}
