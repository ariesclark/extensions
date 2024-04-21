import { duration } from "./duration";
import { now } from "./now";
import { type Timestamp, timestamp } from "./timestamp";

export function relativeTime(
	value: Timestamp,
	anchor: Timestamp = now()
): string {
	const difference = timestamp(anchor) - timestamp(value);
	const seconds = Math.floor(difference / 1000);

	if (Math.abs(difference) !== difference) {
		if (seconds > -60) return "in a few seconds";

		return `in ${duration(-difference)}`;
	}

	if (seconds < 5) return "just now";
	if (seconds < 60) return "a few seconds ago";

	return `${duration(difference)} ago`;
}
