import { expect, test } from "bun:test";

import { capitalize, uncapitalize } from "./capitalize";

test("capitalize", () => {
	expect(capitalize("foo")).toBe("Foo");
	expect(capitalize("Foo")).toBe("Foo");
});

test("uncapitalize", () => {
	expect(uncapitalize("Foo")).toBe("foo");
	expect(uncapitalize("foo")).toBe("foo");
});
