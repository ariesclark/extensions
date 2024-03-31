/**
 * Remove leading & trailing characters from string, default is any whitespace.
 */
export function trim(value: string, character?: string) {
	if (!character) return value.trim();
	return value.replaceAll(new RegExp(`^${character}+|${character}+$`, "g"), "");
}
