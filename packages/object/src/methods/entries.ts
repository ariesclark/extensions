/**
 * An array of key-value pairs from an object.
 */
export type Entries<T extends Record<PropertyKey, unknown>> = ReadonlyArray<
	{ [K in keyof T]: [K, T[K]] }[keyof T]
>;

/**
 * Get an array of key-value pairs from an object, strictly-typed alias for {@link Object.entries}.
 *
 * @param object The object to get the key-value pairs from.
 * @returns An array of key-value pairs.
 *
 * @example
 * ```typescript
 * const object = { hello: "foo", world: "bar" };
 * console.log(entries(object)); // [["hello", "foo"], ["world", "bar"]]
 * ```
 */
export const entries = Object.entries as <
	T extends Record<PropertyKey, unknown>
>(
	object: T
) => Entries<T>;
