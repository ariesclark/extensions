import { expect, test } from "bun:test";

import { noop } from "./noop";

test("noop", () => {
	// Always returns undefined.
	expect(noop()).toBeUndefined();
});
