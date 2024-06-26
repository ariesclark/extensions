export const {
	EPSILON,
	MAX_SAFE_INTEGER,
	MAX_VALUE,
	MIN_SAFE_INTEGER,
	MIN_VALUE,
	NEGATIVE_INFINITY,
	// eslint-disable-next-line no-shadow-restricted-names
	NaN,
	POSITIVE_INFINITY,
	isFinite,
	isInteger,
	isNaN,
	isSafeInteger,
	parseFloat,
	parseInt
} = Number;

export * from "./methods/clamp";
export * from "./methods/pseudo-random-float";
export * from "./methods/random-float";
export * from "./methods/random-function";
export * from "./methods/random-int";
