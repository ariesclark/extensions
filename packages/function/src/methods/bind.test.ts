import { expect, test } from "bun:test";

import { bind } from "./bind";

const sum = (a: number, b: number): number => a + b;

test("bind", () => {
	expect(sum(1, 2)).toBe(3);

	const addOne = bind(sum, 1);

	expect(addOne).not.toBe(sum);
	expect(addOne(2)).toBe(3);
});
