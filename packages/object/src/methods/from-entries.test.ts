import { expect, test } from "bun:test";

import { fromEntries } from "./from-entries";

test("fromEntries: empty", () => {
	expect(fromEntries([])).toEqual({});
});

test("fromEntries", () => {
	expect(fromEntries([["hello", "world"]])).toEqual({ hello: "world" });
	expect(
		fromEntries([
			["hello", 1],
			["world", 2]
		])
	).toEqual({
		hello: 1,
		world: 2
	});
});
