import { expect, test, beforeAll, afterAll } from "bun:test";

import { randomTime } from "./random-time";
import { now } from "./now";
import { timestamp } from "./timestamp";

beforeAll(() => {
	now("2024-01-01");
});

test("randomTime: offset", () => {
	expect(randomTime(0)).toBe(now());

	expect(randomTime("1s")).toBeGreaterThan(now());
	expect(randomTime("-1s")).toBeLessThan(now());
});

test("randomTime: anchor", () => {
	const anchor = timestamp("2025-01-01");

	expect(randomTime(0, anchor)).toBe(anchor);
	expect(randomTime("1s", anchor)).toBeGreaterThan(anchor);
	expect(randomTime("-1s", anchor)).toBeLessThan(anchor);
});

afterAll(() => {
	now(null);
});
