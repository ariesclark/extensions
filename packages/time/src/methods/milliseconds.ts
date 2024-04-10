import _ms from "ms";

import type { Duration, Milliseconds } from "../types";

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
