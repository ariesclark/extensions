export function lowercase<T extends string>(value?: T): Lowercase<T> {
	if (!value) return "" as Lowercase<T>;
	return value.toLowerCase() as Lowercase<T>;
}
