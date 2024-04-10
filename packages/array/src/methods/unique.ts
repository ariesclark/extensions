import { identity } from "@ariesclark/object/identity";

/**
 * Returns a new array with unique values based on the `by` function.
 *
 * If multiple values are considered equal, the first value is kept.
 *
 * @param array The array to filter.
 * @param by The function to determine uniqueness, defaulting to {@link identity}.
 *
 * @example
 * ```typescript
 * import { unique } from "@ariesclark/array";
 * import { identity } from "@ariesclark/object";
 *
 * // without `by`, uses the identity function.
 * unique([1, 1, 2]); // [1, 2]
 * unique([1, 1, 2], identity); // [1, 2], same as above.
 *
 * unique([
 * 	{ id: 1 },
 * 	{ id: 1 },
 * 	{ id: 2 }
 * ], ({ id }) => id);
 * // [{ id: 1 }, { id: 2 }]
 * ```
 */
export function unique<T>(
	array: ArrayLike<T> & Iterable<T>,
	by: (value: T) => unknown = identity
): Array<T> {
	if (array.length === 0) return [];

	// Fast path for identity function, using a Set.
	if (by === identity) return [...new Set(array)];

	const seen = new Map<unknown, T>();

	for (const element of array) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const value = element!;
		const key = by(value);

		if (!seen.has(key)) seen.set(key, value);
	}

	return [...seen.values()];
}
