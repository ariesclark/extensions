import { expect, test } from "bun:test";

import { trim } from "./trim";

test("trim", () => {
	expect(trim(" hello world ")).toBe("hello world");
	expect(trim("\nhello world\n")).toBe("hello world");

	expect(trim("hello world", "hello")).toBe(" world");
	expect(trim("hello world", "world")).toBe("hello ");
});
