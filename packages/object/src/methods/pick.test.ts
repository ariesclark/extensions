import { expect, test } from "bun:test";

import { pick } from "./pick";

test("pick", () => {
	const a = { a: 1, b: 2, c: 3 };

	expect(pick(a, [])).toEqual({});
	expect(pick(a, ["a"])).toEqual({ a: 1 });
	expect(pick(a, ["a", "b"])).toEqual({ a: 1, b: 2 });
	expect(pick(a, ["a", "b", "c"])).toEqual(a);

	// Must not mutate the original object.
	expect(pick(a, [])).not.toBe(a);
	expect(pick(a, ["a"])).not.toBe(a);
});
