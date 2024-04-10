import { expect, test } from "bun:test";
import { identity } from "@ariesclark/object";

import { unique } from "./unique";

test("unique: empty", () => {
	expect(unique([], identity)).toHaveLength(0);
});

test("unique: non-mutative", () => {
	const a = ["hello", "world"];
	const b = unique(a, identity);

	expect(b).toEqual(["hello", "world"]);
	expect(b).not.toBe(a);
});

test("unique", () => {
	expect(unique([], identity)).toHaveLength(0);
	expect(unique(["hello", "world", "world"], identity)).toEqual([
		"hello",
		"world"
	]);

	expect(
		unique(
			// An array of 100 objects with a `hello` property from 0 to 49, repeated twice.
			Array.from({ length: 100 }, (_, index) => ({
				hello: Math.floor(index / 2)
			})),
			({ hello }) => hello
		)
	).toEqual(
		// An array of 50 objects with a `hello` property from 0 to 49.
		Array.from({ length: 50 }, (_, index) => ({
			hello: index
		}))
	);
});
