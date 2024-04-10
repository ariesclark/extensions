import { duration } from "./duration";
import { now } from "./now";
import { type Timestamp, timestamp } from "./timestamp";

export function timeAgo(value: Timestamp, anchor: Timestamp = now()): string {
	const difference = timestamp(anchor) - timestamp(value);

	const seconds = Math.floor(difference / 1000);
	if (seconds < 5) return "just now";

	return `${duration(difference)} ago`;
}
