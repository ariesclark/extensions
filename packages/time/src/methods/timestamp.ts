import type { Milliseconds } from "../types";

/**
 * A timestamp, either a {@link Date} object, a {@link Milliseconds} value, or a `string`.
 */
export type Timestamp = Date | Milliseconds | string;

export const InvalidTimestampError = new TypeError("Invalid timestamp.");

/**
 * Coerce a {@link Timestamp} to milliseconds.
 */
export function timestamp(timestamp: Timestamp): Milliseconds {
	const value =
		typeof timestamp === "number"
			? timestamp
			: timestamp instanceof Date
				? timestamp.getTime()
				: Date.parse(timestamp);

	if (!Number.isNaN(value)) return value;
	throw InvalidTimestampError;
}
