import { expect, test } from "bun:test";

import { sum } from "./sum";

test("sum: empty", () => {
	expect(sum()).toBe(0);
});

test("sum", () => {
	expect(sum(1, 2)).toBe(3);
});
