import { expect, test } from "bun:test";
import { pseudoRandomFloat } from "@ariesclark/number";

import { randomItem } from "./random-item";

test("randomItem: empty", () => {
	expect(randomItem([])).toBeNull();
});

test("randomItem", () => {
	const randomFloat = pseudoRandomFloat("hello world");
	const array = ["lorem", "ipsum", "dolor", "sit", "amet"];

	expect(randomItem(array, randomFloat)).toBe("ipsum");
	expect(randomItem(array, randomFloat)).toBe("amet");
	expect(randomItem(array, randomFloat)).toBe("sit");
});
