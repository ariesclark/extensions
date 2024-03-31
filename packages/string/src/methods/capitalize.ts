type Capitalize<T> = T extends `${infer F}${infer R}`
	? `${Uppercase<F>}${R}`
	: T;

export function capitalize<T extends string>(value: T): Capitalize<T> {
	return (value.charAt(0).toUpperCase() + value.slice(1)) as Capitalize<T>;
}
