/* eslint-disable unicorn/numeric-separators-style */
import { expect, test } from "bun:test";

import { InvalidTimestampError, timestamp } from "./timestamp";

test("timestamp: date", () => {
	expect(timestamp(new Date(1))).toBe(1);
	expect(timestamp(new Date("2024-01-1"))).toBe(1704067200000);
	expect(() => timestamp(new Date(""))).toThrow(InvalidTimestampError);

	const now = new Date();
	expect(timestamp(now)).toBe(now.getTime());
});

test("timestamp: number", () => {
	expect(timestamp(1)).toBe(1);
	expect(timestamp(1704067200000)).toBe(1704067200000);
	expect(() => timestamp(Number.NaN)).toThrow(InvalidTimestampError);

	const now = Date.now();
	expect(timestamp(now)).toBe(now);
});

test("timestamp: string", () => {
	expect(timestamp("2024-01-1")).toBe(1704067200000);
	expect(timestamp("2024-01-01T07:00:00.000Z")).toBe(1704092400000);
	expect(() => timestamp("")).toThrow(InvalidTimestampError);
});
