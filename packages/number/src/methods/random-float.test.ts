import { expect, test } from "bun:test";

import { randomFloat } from "./random-float";

const iterations = 10_000;

test("randomFloat: distribution", () => {
	const values: Array<number> = [];

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
