import { lowercase } from "./lowercase";
import { capitalize } from "./capitalize";

export function titleCase<T extends string>(value: T) {
	return value
		.split(/[\s_-]/)
		.filter(Boolean)
		.map((word) => capitalize(lowercase(word)))
		.join(" ");
}
