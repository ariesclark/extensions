import { expect, test } from "bun:test";

import { randomItem } from "./random-item";

const iterations = 10_000;

test("randomItem", () => {
	const values: Array<number> = [];
	const items = Array.from({ length: iterations / 1000 }, (_, index) => index);

	expect(randomItem([])).toBeNull();

	for (let index = 0; index < iterations; index++) {
		const value = randomItem(items);
		values.push(value);

		expect(value).toBeDefined();
		expect(value).toBeTypeOf("number");
	}

	for (const item of items) {
		expect(values).toContain(item);
	}
});
