import {
	type Duration,
	type DurationLiteral,
	durationUnitValues,
	type DurationLiteralShort,
	type DurationLiteralLong
} from "../types";

import { ms } from "./milliseconds";

export const InvalidDurationError = new Error("Invalid duration.");

/**
 * Configuration options for {@link duration}.
 */
export interface DurationOptions {
	/**
	 * Whether to use a short format, e.g. `1d` instead of `1 day`.
	 *
	 * @default false
	 * @example
	 * ```typescript
	 * duration("1d", { short: false }); // "1 day"
	 * duration("1d", { short: true }); // "1d"
	 * ```
	 */
	short?: boolean;
}

/**
 * Format a {@link Duration} as a human-readable string.
 *
 * @param value {@link Duration} to format.
 * @param options {@link DurationOptions} to configure the output.
 * @returns
 */

export function duration(
	value: Duration,
	options?: DurationOptions & {
		short?: false | undefined;
	}
): DurationLiteralLong;

export function duration(
	value: Duration,
	options: DurationOptions & {
		short: true;
	}
): DurationLiteralShort;

export function duration(
	value: Duration,
	options?: DurationOptions
): DurationLiteral;

export function duration(
	value: Duration,
	options: DurationOptions = {}
): DurationLiteral {
	options = Object.assign({ short: false }, options);
	const milliseconds = ms(value);

	for (const [unit, short, singular, plural] of durationUnitValues) {
		if (milliseconds < unit) continue;

		const value = Math.floor(milliseconds / unit);

		return `${value}${
			options.short ? short : (` ${value === 1 ? singular : plural}` as const)
		}`;
	}

	throw new Error("Invalid duration.");
}
