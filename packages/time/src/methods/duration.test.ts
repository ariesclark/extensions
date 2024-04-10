import { expect, test } from "bun:test";

import { durationUnit, durationUnitsShort } from "../types";

import { type DurationOptions, duration } from "./duration";

durationUnitsShort.reverse().map((keyword) => {
	const [value, short, singular, plural] = durationUnit[keyword];

	test(`duration: ${plural}, long form`, () => {
		const options: DurationOptions = { short: false };

		expect(duration(value, options)).toBe(`1 ${singular}`);
		expect(duration(value * 1.5, options)).toBe(`1 ${singular}`);
		expect(duration(value * 2, options)).toBe(`2 ${plural}`);
		expect(duration(`1${short}`, options)).toBe(`1 ${singular}`);
		expect(duration(`1.5${short}`, options)).toBe(`1 ${singular}`);
		expect(duration(`2${short}`, options)).toBe(`2 ${plural}`);
	});

	test(`duration: ${plural}, long form, negative`, () => {
		const options: DurationOptions = { short: false };

		expect(duration(-value, options)).toBe(`-1 ${singular}`);
		expect(duration(-value * 1.5, options)).toBe(`-1 ${singular}`);
		expect(duration(-value * 2, options)).toBe(`-2 ${plural}`);
		expect(duration(`-1${short}`, options)).toBe(`-1 ${singular}`);
		expect(duration(`-1.5${short}`, options)).toBe(`-1 ${singular}`);
		expect(duration(`-2${short}`, options)).toBe(`-2 ${plural}`);
	});

	test(`duration: ${plural}, short form`, () => {
		const options: DurationOptions = { short: true };

		expect(duration(value, options)).toBe(`1${short}`);
		expect(duration(value * 1.5, options)).toBe(`1${short}`);
		expect(duration(value * 2, options)).toBe(`2${short}`);
		expect(duration(`1${short}`, options)).toBe(`1${short}`);
		expect(duration(`1.5${short}`, options)).toBe(`1${short}`);
		expect(duration(`2${short}`, options)).toBe(`2${short}`);
	});

	test(`duration: ${plural}, short form, negative`, () => {
		const options: DurationOptions = { short: true };

		expect(duration(-value, options)).toBe(`-1${short}`);
		expect(duration(-value * 1.5, options)).toBe(`-1${short}`);
		expect(duration(-value * 2, options)).toBe(`-2${short}`);
		expect(duration(`-1${short}`, options)).toBe(`-1${short}`);
		expect(duration(`-1.5${short}`, options)).toBe(`-1${short}`);
		expect(duration(`-2${short}`, options)).toBe(`-2${short}`);
	});
});
