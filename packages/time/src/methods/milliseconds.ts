import {
	durationUnit,
	type Duration,
	type DurationUnit,
	type Milliseconds
} from "../types";

import { InvalidDurationError } from "./duration";

const regex = /^(?<value>-?(?:\d+)?\.?\d+) *(?<type>.+)$/;

/**
 * Coerce a {@link Duration} to milliseconds.
 *
 * @returns The duration in milliseconds.
 * @throw {@link InvalidDurationError} if the duration is invalid.
 *
 * @example
 * ```typescript
 * ms("5m") // 300000, 5 minutes in milliseconds, short form.
 * ms(300000) // 300000, 5 minutes in milliseconds, pass-through.
 * ms("2 hours") // 7200000, 2 hours in milliseconds, long form.
 * ```
 */
export function milliseconds(duration: Duration): Milliseconds {
	if (typeof duration === "number") return duration;

	const groups = regex.exec(duration)?.groups as
		| { value: string | string; type: DurationUnit | undefined }
		| undefined;

	if (!groups || !groups.value || !groups.type) throw InvalidDurationError;

	const value = Number.parseFloat(groups.value);
	if (Number.isNaN(value)) throw InvalidDurationError;

	return value * durationUnit[groups.type][0];
}

/**
 * Short-hand for {@link milliseconds}.
 */
export const ms = milliseconds;
