import { expect, test } from "bun:test";

import { pascalCase } from "./pascal-case";

test("pascalCase", () => {
	expect(pascalCase("hello world")).toBe("HelloWorld");
	expect(pascalCase("Hello World")).toBe("HelloWorld");
	expect(pascalCase("hello-world")).toBe("HelloWorld");
	expect(pascalCase("Hello-World")).toBe("HelloWorld");
	expect(pascalCase("hello_world")).toBe("HelloWorld");
	expect(pascalCase("Hello_World")).toBe("HelloWorld");
});
