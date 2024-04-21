import { expect, test } from "bun:test";

import { average } from "./average";

test("average: empty", () => {
	expect(average()).toBe(0);
});

test("average", () => {
	expect(average(1, 2, 3)).toBe(2);
	expect(average(1, 2, 3, 4)).toBe(2.5);
	expect(average(0, 0.5, 1)).toBe(0.5);
	expect(average(2, 3)).toBe(2.5);
});
