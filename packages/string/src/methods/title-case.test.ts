import { expect, test } from "bun:test";

import { titleCase } from "./title-case";

test("titleCase", () => {
	expect(titleCase("hello world")).toBe("Hello World");
	expect(titleCase("Hello World")).toBe("Hello World");
	expect(titleCase("hello-world")).toBe("Hello World");
	expect(titleCase("Hello-World")).toBe("Hello World");
	expect(titleCase("hello_world")).toBe("Hello World");
	expect(titleCase("Hello_World")).toBe("Hello World");
});
