import { expect, test } from "bun:test";

import { lowercase } from "./lowercase";

test("lowercase", () => {
	expect(lowercase("hello world")).toBe("hello world");
	expect(lowercase("Hello World")).toBe("hello world");
	expect(lowercase("HELLO WORLD")).toBe("hello world");
});
