import { expect, test } from "bun:test";

import { group } from "./group";

test("group", () => {
	expect(
		group([1, 2, 3, 4, 5], (item: number) => (item % 2 === 0 ? "even" : "odd"))
	).toEqual({
		odd: [1, 3, 5],
		even: [2, 4]
	});
});
