import { expect, test } from "bun:test";

import { snakeCase } from "./snake-case";

test("snakeCase", () => {
	expect(snakeCase("hello world")).toBe("hello_world");
	expect(snakeCase("Hello World")).toBe("hello_world");
	expect(snakeCase("hello-world")).toBe("hello_world");
	expect(snakeCase("Hello-World")).toBe("hello_world");
	expect(snakeCase("hello_world")).toBe("hello_world");
	expect(snakeCase("Hello_World")).toBe("hello_world");
});
