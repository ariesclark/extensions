import { expect, test } from "bun:test";
import { pseudoRandomFloat } from "@ariesclark/number";

import { randomIndex } from "./random-index";

test("randomIndex: empty", () => {
	expect(randomIndex([])).toBeNull();
});

test("randomIndex", () => {
	const randomFloat = pseudoRandomFloat("hello world");
	const array = ["lorem", "ipsum", "dolor", "sit", "amet"];

	expect(randomIndex(array, randomFloat)).toBe(1);
	expect(randomIndex(array, randomFloat)).toBe(4);
	expect(randomIndex(array, randomFloat)).toBe(3);
});
