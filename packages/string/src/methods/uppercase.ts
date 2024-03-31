/**
 * Converts the string to uppercase, alias for `value.toUpperCase()`.
 */
export function uppercase<T extends string>(value?: T): Uppercase<T> {
	if (!value) return "" as Uppercase<T>;
	return value.toUpperCase() as Uppercase<T>;
}
