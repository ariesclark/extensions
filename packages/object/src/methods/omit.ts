export function omit<T extends object, K extends keyof T>(
	object: T,
	keys: Array<K>
): Omit<T, K> {
	const returnValue = { ...object };

	for (const key of keys) {
		// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
		delete returnValue[key];
	}

	return returnValue;
}
