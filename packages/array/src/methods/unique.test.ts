import { expect, test } from "bun:test";
import { identity } from "@ariesclark/object";

import { unique } from "./unique";

test("unique", () => {
	expect(unique([], identity)).toHaveLength(0);
	expect(unique(["hello", "world", "world"], identity)).toEqual([
		"hello",
		"world"
	]);

	expect(
		unique(
			// An array of 100 objects with a value property from 0 to 49, repeated twice.
			Array.from({ length: 100 }, (_, index) => ({
				value: Math.floor(index / 2)
			})),
			({ value }) => value
		)
	).toEqual(
		// An array of 50 objects with a value property from 0 to 49.
		Array.from({ length: 50 }, (_, index) => ({
			value: index
		}))
	);
});
