import { expect, test } from "bun:test";

import { loremIpsum } from "./lorem-ipsum";

test("loremIpsum", () => {
	expect(loremIpsum(0)).toBe("");
	expect(loremIpsum(128).split(" ")).toHaveLength(128);
});
