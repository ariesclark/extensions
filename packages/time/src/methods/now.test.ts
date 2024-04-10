/* eslint-disable unicorn/numeric-separators-style */
import { expect, test } from "bun:test";

import { now } from "./now";

test("now", () => {
	expect(now()).toBe(Date.now());

	expect(now("2024-01-01")).toBe(1704067200000);
	expect(now()).toBe(1704067200000);

	expect(now(null)).toBe(Date.now());
	expect(now()).toBe(Date.now());
});
