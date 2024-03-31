import { uncapitalize } from "./capitalize";
import { pascalCase } from "./pascal-case";

export function camelCase<T extends string>(value: T) {
	return uncapitalize(pascalCase(value));
}
