/**
 * Groups the items in the array by the given function.
 *
 * @example
 * group([1, 2, 3, 4, 5], (item) => item % 2 === 0 ? "even" : "odd");
 * // {
 * //   odd: [1, 3, 5],
 * //   even: [2, 4]
 * // }
 */
export const group = <T, R extends PropertyKey>(
	array: Array<T>,
	by: (item: T) => R
): Record<R, Array<T>> => {
	return array.reduce(
		(accumulator, item) => {
			const key = by(item);

			if (!accumulator[key]) {
				accumulator[key] = [];
			}

			accumulator[key].push(item);
			return accumulator;
		},
		{} as Record<R, Array<T>>
	);
};
