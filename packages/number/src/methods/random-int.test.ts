import { expect, test } from "bun:test";

import { pseudoRandomFloat } from "./pseudo-random-float";
import { randomInt } from "./random-int";

test("randomInt", () => {
	for (let index = 0; index < 1000; index++) {
		const a = randomInt();

		expect(a).toBeTypeOf("number");
		expect(a).toBeGreaterThanOrEqual(0);
		expect(a).toBeLessThanOrEqual(100);

		const b = randomInt(1, 1);

		expect(b).toBeTypeOf("number");
		expect(b).toBe(1);

		const c = randomInt(1, 10);

		expect(c).toBeTypeOf("number");
		expect(c).toBeGreaterThanOrEqual(1);
		expect(c).toBeLessThanOrEqual(10);
	}
});

test("randomInt: random override", () => {
	const randomFloat = pseudoRandomFloat("hello world");

	expect(randomInt(1, 10, randomFloat)).toBe(3);
	expect(randomInt(1, 10, randomFloat)).toBe(9);
	expect(randomInt(1, 10, randomFloat)).toBe(8);
});
