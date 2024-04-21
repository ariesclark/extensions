export const fromEntries = Object.fromEntries as <
	const T extends ReadonlyArray<readonly [PropertyKey, unknown]>
>(
	entries: T
) => { [K in T[number] as K[0]]: K[1] };
