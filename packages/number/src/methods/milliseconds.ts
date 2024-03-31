import _ms from "ms";

import type { MaybeSuffix, Milliseconds } from "../types";

type DurationUnit =
	| "ms"
	| "s"
	| "m"
	| "h"
	| "d"
	| "w"
	| "y"
	| MaybeSuffix<"second" | "minute" | "hour" | "day" | "week" | "year", "s">;

type DurationLiteral = `${MaybeSuffix<number, " ">}${DurationUnit}`;

/**
 * A duration value.
 *
 *  Supports the following formats in both short and long form:
 * - `ms` (milliseconds) e.g. `20ms`
 * - `s` (seconds) e.g. `1s` or `1 second`
 * - `m` (minutes) e.g. `2m` or `2 minutes`
 * - `h` (hours) e.g. `3h` or `3 hours`
 * - `d` (days) e.g. `4d` or `4 days`
 * - `w` (weeks) e.g. `5w` or `5 weeks`
 * - `y` (years) e.g. `6y` or `6 years`
 */
export type Duration = DurationLiteral | Milliseconds;

/**
 * Coerce a {@link Duration} to milliseconds.
 *
 * @returns The duration in milliseconds.
 *
 * @example
 * ms("5m") // 300000, 5 minutes in milliseconds, short form.
 * ms(300000) // 300000, 5 minutes in milliseconds, pass-through.
 * ms("2 hours") // 7200000, 2 hours in milliseconds, long form.
 */
export function milliseconds(value: Duration): Milliseconds {
	return (typeof value === "string" ? _ms(value) : value) as Milliseconds;
}

/**
 * Short-hand for {@link milliseconds}.
 */
export const ms = milliseconds;
