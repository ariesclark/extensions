import { expect, test } from "bun:test";

import { keys } from "./keys";

test("keys", () => {
	expect(keys({ a: 1, b: 2 })).toEqual(["a", "b"]);
});
