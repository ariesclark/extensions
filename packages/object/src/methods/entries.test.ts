import { expect, test } from "bun:test";

import { entries } from "./entries";

test("entries: empty", () => {
	expect(entries({})).toEqual([]);
});

test("entries", () => {
	expect(entries({ hello: "world" })).toEqual([["hello", "world"]]);
	expect(entries({ hello: 1, world: 2 })).toEqual([
		["hello", 1],
		["world", 2]
	]);
});
