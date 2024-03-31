import { expect, test } from "bun:test";

import { randomIndex } from "./random-index";

const iterations = 10_000;

test("randomIndex", () => {
	const indexes: Array<number> = [];
	const items = Array.from({ length: iterations / 1000 }, () => 1);

	expect(randomIndex([])).toBeNull();

	for (let index = 0; index < iterations; index++) {
		const value = randomIndex(items);
		indexes.push(value);

		expect(value).toBeDefined();
		expect(value).toBeTypeOf("number");
	}
});
