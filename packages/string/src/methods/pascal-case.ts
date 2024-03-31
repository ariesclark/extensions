import { lowercase } from "./lowercase";
import { capitalize } from "./capitalize";

export function pascalCase<T extends string>(value: T): string {
	return value
		.split(/[\s_-]/)
		.filter(Boolean)
		.map((word) => capitalize(lowercase(word)))
		.join("");
}
