import { lowercase } from "./lowercase";
import { uppercase } from "./uppercase";

type Capitalize<T> = T extends `${infer F}${infer R}`
	? `${Uppercase<F>}${R}`
	: T;

/**
 * Converts the first character of a string to uppercase.
 */
export function capitalize<T extends string>(value: T): Capitalize<T> {
	return (uppercase(value.charAt(0)) + value.slice(1)) as Capitalize<T>;
}

capitalize("hello"); // "Hello"

type Uncapitalize<T> = T extends `${infer F}${infer R}`
	? `${Lowercase<F>}${R}`
	: T;

/**
 * Converts the first character of a string to lowercase.
 */
export function uncapitalize<T extends string>(value: T): Uncapitalize<T> {
	return (lowercase(value.charAt(0)) + value.slice(1)) as Uncapitalize<T>;
}
