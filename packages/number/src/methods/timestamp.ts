import type { Milliseconds } from "../types";

/**
 * A timestamp, either a {@link Date} object, a {@link Milliseconds} value, or a `string`.
 * @returns The timestamp in milliseconds.
 */
export type Timestamp = Date | Milliseconds | string;

export const InvalidTimestampError = new TypeError("Invalid timestamp value.");

/**
 * Coerce a {@link Timestamp} to milliseconds.
 */
export function timestamp(timestamp: Timestamp): Milliseconds {
	if (typeof timestamp === "number") return timestamp;

	const value =
		timestamp instanceof Date ? timestamp.getTime() : Date.parse(timestamp);
	if (!Number.isNaN(value)) return value;

	throw InvalidTimestampError;
}
