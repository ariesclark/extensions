import { expect, test, beforeAll, afterAll } from "bun:test";

import { relativeTime } from "./relative-time";
import { now } from "./now";
import { ms } from "./milliseconds";

beforeAll(() => {
	now("2024-01-01");
});

test("relativeTime", () => {
	expect(relativeTime(now())).toBe("just now");
	expect(relativeTime(now() + ms("5 seconds"))).toBe("in a few seconds");
	expect(relativeTime(now() + ms("1 day"))).toBe("in 1 day");

	expect(relativeTime(now() - ms("5 seconds"))).toBe("a few seconds ago");
	expect(relativeTime(now() - ms("1 day"))).toBe("1 day ago");
});

afterAll(() => {
	now(null);
});
