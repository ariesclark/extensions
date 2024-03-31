export function empty(value: unknown): boolean {
	return (
		value === undefined ||
		value === null ||
		value === "" ||
		(Array.isArray(value) && value.length === 0) ||
		(value instanceof Object && Object.keys(value).length === 0)
	);
}
