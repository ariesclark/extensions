import { keys } from "@ariesclark/object/keys";
import { unique } from "@ariesclark/array/unique";

/**
 * A duration in milliseconds.
 */
export type Milliseconds = number;

type DurationUnitDefinition = [
	value: number,
	short: string,
	singular: string,
	plural: string
];

const milliseconds = [
	1,
	"ms",
	"millisecond",
	"milliseconds"
] as const satisfies DurationUnitDefinition;

const seconds = [
	1e3,
	"s",
	"second",
	"seconds"
] as const satisfies DurationUnitDefinition;

const minutes = [
	6e4,
	"m",
	"minute",
	"minutes"
] as const satisfies DurationUnitDefinition;

const hours = [
	3.6e6,
	"h",
	"hour",
	"hours"
] as const satisfies DurationUnitDefinition;

const days = [
	8.64e7,
	"d",
	"day",
	"days"
] as const satisfies DurationUnitDefinition;

const weeks = [
	6.048e8,
	"w",
	"week",
	"weeks"
] as const satisfies DurationUnitDefinition;

const months = [
	2.628e9,
	"mo",
	"month",
	"months"
] as const satisfies DurationUnitDefinition;

const years = [
	3.154e10,
	"y",
	"year",
	"years"
] as const satisfies DurationUnitDefinition;

/**
 * @internal
 */
export const durationUnit = {
	years,
	year: years,
	y: years,

	months,
	month: months,
	mo: months,

	weeks,
	week: weeks,
	w: weeks,

	days,
	day: days,
	d: days,

	hours,
	hour: hours,
	h: hours,

	minutes,
	minute: minutes,
	m: minutes,

	seconds,
	second: seconds,
	s: seconds,

	milliseconds,
	millisecond: milliseconds,
	ms: milliseconds
} satisfies Record<string, DurationUnitDefinition>;

export const durationUnitValues = unique(
	Object.values(durationUnit),
	([value]) => value
);

export const durationUnits = keys(durationUnit);
export type DurationUnit = keyof typeof durationUnit;

export const durationUnitsShort = durationUnitValues.map((a) => a[1]);
export type ShortDurationUnit = (typeof durationUnitsShort)[number];

export const durationUnitsSingular = durationUnitValues.map((a) => a[2]);
export type SingularDurationUnit = (typeof durationUnitsSingular)[number];

export const durationUnitsPlural = durationUnitValues.map((a) => a[3]);
export type PluralDurationUnit = (typeof durationUnitsPlural)[number];

export const longDurationUnits = [
	...durationUnitsSingular,
	...durationUnitsPlural
];

export type LongDurationUnit = (typeof longDurationUnits)[number];

export type DurationLiteralShort = `${number}${ShortDurationUnit}`;

export type DurationLiteralSingular = `${number} ${SingularDurationUnit}`;
export type DurationLiteralPlural = `${number} ${PluralDurationUnit}`;
export type DurationLiteralLong =
	| DurationLiteralSingular
	| DurationLiteralPlural;

export type DurationLiteral = DurationLiteralShort | DurationLiteralLong;

/**
 * A duration value.
 *
 *  Supports the following formats in both short and long form:
 * - `ms` (milliseconds) e.g. `1ms` or `1` as a number.
 * - `s` (seconds) e.g. `2s` or `2 second`.
 * - `m` (minutes) e.g. `3m` or `3 minutes`.
 * - `h` (hours) e.g. `4h` or `4 hours`.
 * - `d` (days) e.g. `5d` or `5 days`.
 * - `w` (weeks) e.g. `6w` or `6 weeks`.
 * - `mo` (months) e.g. `7mo` or `7 months`.
 * - `y` (years) e.g. `8y` or `8 years`.
 */
export type Duration = DurationLiteral | Milliseconds;
