/**
 * @internal
 */
export type MaybeSuffix<T extends string | number, S extends string> =
	| `${T}${S}`
	| T;

/**
 * A duration in milliseconds.
 */
export type Milliseconds = number;

/**
 * A random number generator function that returns a float between 0 and 1.
 */
export type RandomFunction = () => number;
