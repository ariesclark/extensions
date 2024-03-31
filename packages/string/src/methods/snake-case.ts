import { lowercase } from "./lowercase";

export function snakeCase<T extends string>(value: T) {
	return value
		.split(/[\s_-]/)
		.filter(Boolean)
		.map((word) => lowercase(word))
		.join("_");
}
