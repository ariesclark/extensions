import { expect, test } from "bun:test";

import { uppercase } from "./uppercase";

test("lowercase", () => {
	expect(uppercase("hello world")).toBe("HELLO WORLD");
	expect(uppercase("Hello World")).toBe("HELLO WORLD");
	expect(uppercase("HELLO WORLD")).toBe("HELLO WORLD");
});
