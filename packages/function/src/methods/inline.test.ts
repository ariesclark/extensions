import { expect, test } from "bun:test";

import { inline } from "./inline";

test("inline: empty", () => {
	const a = inline();

	expect(a).toBeFunction();
	expect(a()).toBeUndefined();
});

test("inline: last value", () => {
	const a = inline(
		() => 1,
		() => 2,
		() => 3
	);

	expect(a).toBeFunction();

	// Always returns the last value.
	expect(a()).toBe(3);
});

test("inline: arguments", () => {
	const a = inline(
		(a: number) => a * 1,
		(a) => a * 2,
		(a) => a * 3
	);

	expect(a).toBeFunction();

	// Always returns the last value.
	expect(a(3)).toBe(9);
});
