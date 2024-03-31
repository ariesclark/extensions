import { expect, test } from "bun:test";

import { omit } from "./omit";

test("omit", () => {
	const a = { a: 1, b: 2, c: 3 };

	expect(omit(a, [])).toEqual(a);
	expect(omit(a, ["a"])).toEqual({ b: 2, c: 3 });
	expect(omit(a, ["a", "b"])).toEqual({ c: 3 });

	// Must not mutate the original object.
	expect(omit(a, [])).not.toBe(a);
	expect(omit(a, ["a"])).not.toBe(a);
});
