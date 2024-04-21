import { expect, test } from "bun:test";

import { pipe } from "./pipe";
import { bind } from "./bind";

const add = (a: number, b: number): number => a + b;
const add2 = bind(add, 2);

const mul = (a: number, b: number): number => a * b;
const mul3 = bind(mul, 3);

test("pipe", () => {
	expect(pipe(1, add2, mul3)).toBe(9);
});
