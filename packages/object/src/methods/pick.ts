export const pick = <T extends object, K extends keyof T>(
	object: T,
	keys: Array<K>
): Pick<T, K> => {
	const returnValue = {} as Pick<T, K>;

	for (const key of keys) {
		returnValue[key] = object[key];
	}

	return returnValue;
};
