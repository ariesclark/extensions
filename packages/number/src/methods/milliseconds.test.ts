import { expect, test } from "bun:test";

import { milliseconds } from "./milliseconds";

test("milliseconds", () => {
	expect(milliseconds(1)).toBe(1);
	expect(milliseconds("1ms")).toBe(1);
	expect(milliseconds("2ms")).toBe(2);

	expect(milliseconds(1000)).toBe(1000);
	expect(milliseconds("1s")).toBe(1000);
	expect(milliseconds("2s")).toBe(2000);
	expect(milliseconds("1 second")).toBe(1000);
	expect(milliseconds("2 seconds")).toBe(2000);

	expect(milliseconds(60_000)).toBe(60_000);
	expect(milliseconds("1m")).toBe(60_000);
	expect(milliseconds("2m")).toBe(120_000);
	expect(milliseconds("1 minute")).toBe(60_000);
	expect(milliseconds("2 minutes")).toBe(120_000);

	expect(milliseconds(3_600_000)).toBe(3_600_000);
	expect(milliseconds("1h")).toBe(3_600_000);
	expect(milliseconds("2h")).toBe(7_200_000);
	expect(milliseconds("1 hour")).toBe(3_600_000);
	expect(milliseconds("2 hours")).toBe(7_200_000);

	expect(milliseconds(86_400_000)).toBe(86_400_000);
	expect(milliseconds("1d")).toBe(86_400_000);
	expect(milliseconds("2d")).toBe(172_800_000);
	expect(milliseconds("1 day")).toBe(86_400_000);
	expect(milliseconds("2 days")).toBe(172_800_000);

	expect(milliseconds(604_800_000)).toBe(604_800_000);
	expect(milliseconds("1w")).toBe(604_800_000);
	expect(milliseconds("2w")).toBe(1_209_600_000);
	expect(milliseconds("1 week")).toBe(604_800_000);
	expect(milliseconds("2 weeks")).toBe(1_209_600_000);

	expect(milliseconds(31_557_600_000)).toBe(31_557_600_000);
	expect(milliseconds("1y")).toBe(31_557_600_000);
	expect(milliseconds("2y")).toBe(63_115_200_000);
	expect(milliseconds("1 year")).toBe(31_557_600_000);
	expect(milliseconds("2 years")).toBe(63_115_200_000);
});
