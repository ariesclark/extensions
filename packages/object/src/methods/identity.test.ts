import { expect, test } from "bun:test";

import { identity } from "./identity";

test("identity", () => {
	expect(identity(1)).toBe(1);
	expect(identity("hello")).toBe("hello");

	const object = {};
	expect(identity(object)).toBe(object);
});
