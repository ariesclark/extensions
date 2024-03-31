import type { Milliseconds } from "../types";

/**
 * A timestamp, either a {@link Date} object, a {@link Milliseconds} value, or a `string`.
 * @returns The timestamp in milliseconds.
 */
export type Timestamp = Date | Milliseconds | string;

/**
 * Coerce a {@link Timestamp} to milliseconds.
 */
export function timestamp(value: Timestamp): Milliseconds {
	if (typeof value === "string") return Date.parse(value);
	if (value instanceof Date) return value.getTime();
	return value;
}
