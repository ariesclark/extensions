/**
 * Returns an array of a given object's own enumerable property names.
 * @param object - The object whose enumerable own property names are to be returned.
 *
 * @example
 * ```typescript
 * import { Object, keys } from "@ariesclark/object";
 *
 * Object.keys({ a: 1, b: 2 }); // ["a", "b"]
 * keys({ a: 1, b: 2 }); // ["a", "b"], equivalent.
 * ```
 */
export const keys = Object.keys as <T extends object>(
	object: T
) => Array<keyof T>;
