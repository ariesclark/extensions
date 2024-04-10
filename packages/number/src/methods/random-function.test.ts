import { expect, test } from "bun:test";

import { defaultRandom, randomFunction } from "./random-function";
import { randomInt } from "./random-int";

test("randomFunction: defaultRandom", () => {
	expect(randomFunction()).toBeTypeOf("function");
	expect(randomFunction()).toBe(defaultRandom);
});

test("randomFunction: assignment", () => {
	// eslint-disable-next-line unicorn/consistent-function-scoping
	const a = () => 0.5;

	expect(randomFunction(a)).toBe(a);
	expect(randomFunction()).toBe(a);

	expect(randomFunction()()).toBe(0.5);
	expect(randomInt()).toBe(50);

	randomFunction(null);
	expect(randomFunction()).toBe(defaultRandom);
});
