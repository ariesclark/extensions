import { expect, test } from "bun:test";

import { timestamp } from "./timestamp";

test("timestamp", () => {
	expect(timestamp(1)).toBe(1);
	expect(timestamp(1_704_067_200_000)).toBe(1_704_067_200_000);
	expect(timestamp("2024-01-01T00:00:00.000Z")).toBe(1_704_067_200_000);

	const now = new Date();
	expect(timestamp(now)).toBe(now.getTime());
});
