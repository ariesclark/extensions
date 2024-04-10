/* eslint-disable unicorn/numeric-separators-style */
import { expect, test } from "bun:test";

import { pseudoRandomFloat } from "./pseudo-random-float";

const iterations = 10000;

test("pseudoRandomFloat: predictability", () => {
	const randomFloat = pseudoRandomFloat("hello world");

	expect(randomFloat()).toBe(0.2568954068701714);
	expect(randomFloat()).toBe(0.8686287763994187);
	expect(randomFloat()).toBe(0.7392439323011786);
});

test("pseudoRandomFloat: distribution", () => {
	const values: Array<number> = [];
	const randomFloat = pseudoRandomFloat("hello world");

	for (let index = 0; index < iterations; index++) {
		const value = randomFloat();
		values.push(value);

		expect(value).toBeTypeOf("number");
		expect(value).toBeGreaterThanOrEqual(0);
		expect(value).toBeLessThanOrEqual(1);
	}

	for (const value of Object.values(
		values.reduce(
			(distribution, value) => {
				const key = Math.floor(value * 10);
				distribution[key] = (distribution[key] ?? 0) + 1;
				return distribution;
			},
			{} as Record<number, number>
		)
	)) {
		expect(value / iterations).toBeCloseTo(0.1, 1);
	}
});
