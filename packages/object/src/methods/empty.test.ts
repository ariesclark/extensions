import { expect, test } from "bun:test";

import { empty } from "./empty";

test("empty", () => {
	expect(empty(undefined)).toBeTrue();
	expect(empty(null)).toBeTrue();
	expect(empty("")).toBeTrue();
	expect(empty([])).toBeTrue();
	expect(empty({})).toBeTrue();

	expect(empty({ key: "value" })).toBeFalse();
	expect(empty([1])).toBeFalse();
	expect(empty("value")).toBeFalse();
	expect(empty(1)).toBeFalse();
	expect(empty(false)).toBeFalse();
	expect(empty(true)).toBeFalse();
	expect(empty(0)).toBeFalse();
});
