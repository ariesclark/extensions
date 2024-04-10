import { expect, test } from "bun:test";

import { clamp } from "./clamp";

test("clamp: lower bound, inclusive", () => {
	expect(clamp(-2, -2, 2)).toBe(-2);
});

test("clamp: middle", () => {
	expect(clamp(-1, -2, 2)).toBe(-1);
	expect(clamp(0, -2, 2)).toBe(0);
	expect(clamp(1, -2, 2)).toBe(1);
});

test("clamp: upper bound, inclusive", () => {
	expect(clamp(2, -2, 2)).toBe(2);
});
