import { expect, test } from "bun:test";

import { median } from "./median";

test("median: empty", () => {
	expect(median()).toBe(0);
});

test("median", () => {
	expect(median(1, 2, 3)).toBe(2);
	expect(median(2, 3, 1)).toBe(2);

	expect(median(1, 2, 3, 4)).toBe(2.5);
});
