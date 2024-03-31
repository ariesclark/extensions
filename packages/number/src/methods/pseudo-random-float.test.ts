import { expect, test } from "bun:test";

import { pseudoRandomFloat } from "./pseudo-random-float";

const iterations = 10_000;

test("pseudoRandomFloat", () => {
	const values: Array<number> = [];
	const randomFloat = pseudoRandomFloat("hello world");

	expect(randomFloat()).toBe(0.256_895_406_870_171_4);
	expect(randomFloat()).toBe(0.868_628_776_399_418_7);
	expect(randomFloat()).toBe(0.739_243_932_301_178_6);

	for (let index = 0; index < iterations; index++) {
		const value = randomFloat();
		values.push(value);

		expect(value).toBeTypeOf("number");
		expect(value).toBeGreaterThanOrEqual(0);
		expect(value).toBeLessThanOrEqual(1);
	}

	expect(randomFloat()).toBe(0.005_856_769_159_436_226);
	expect(randomFloat()).toBe(0.584_341_293_433_681_1);
	expect(randomFloat()).toBe(0.965_443_406_254_053_1);

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
