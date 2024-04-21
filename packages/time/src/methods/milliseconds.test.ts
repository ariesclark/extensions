import { expect, test } from "bun:test";

import { durationUnit, durationUnitsShort, type Duration } from "../types";

import { milliseconds } from "./milliseconds";
import { InvalidDurationError } from "./duration";

durationUnitsShort.toReversed().map((keyword) => {
	const [value, short, singular, plural] = durationUnit[keyword];

	test(`milliseconds: ${plural} (+value)`, () => {
		expect(milliseconds(value)).toBe(value);

		expect(milliseconds(`1${short}`)).toBe(value);
		expect(milliseconds(`1.5${short}`)).toBe(value * 1.5);
		expect(milliseconds(`2${short}`)).toBe(value * 2);

		expect(milliseconds(`1 ${singular}`)).toBe(value);
		expect(milliseconds(`1.5 ${singular}`)).toBe(value * 1.5);
		expect(milliseconds(`2 ${singular}`)).toBe(value * 2);

		expect(milliseconds(`1 ${plural}`)).toBe(value);
		expect(milliseconds(`1.5 ${plural}`)).toBe(value * 1.5);
		expect(milliseconds(`2 ${plural}`)).toBe(value * 2);
	});

	test(`milliseconds: ${plural} (-value)`, () => {
		expect(milliseconds(-value)).toBe(-value);

		expect(milliseconds(`-1${short}`)).toBe(-value);
		expect(milliseconds(`-1.5${short}`)).toBe(-(value * 1.5));
		expect(milliseconds(`-2${short}`)).toBe(-(value * 2));

		expect(milliseconds(`-1 ${singular}`)).toBe(-value);
		expect(milliseconds(`-1.5 ${singular}`)).toBe(-(value * 1.5));
		expect(milliseconds(`-2 ${singular}`)).toBe(-(value * 2));

		expect(milliseconds(`-1 ${plural}`)).toBe(-value);
		expect(milliseconds(`-1.5 ${plural}`)).toBe(-(value * 1.5));
		expect(milliseconds(`-2 ${plural}`)).toBe(-(value * 2));
	});
});

test("milliseconds: invalid", () => {
	expect(() => milliseconds("" as Duration)).toThrow(InvalidDurationError);
});
