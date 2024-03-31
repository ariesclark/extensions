import { expect, test } from "bun:test";

import { camelCase } from "./camel-case";

test("camelCase", () => {
	expect(camelCase("hello world")).toBe("helloWorld");
	expect(camelCase("Hello World")).toBe("helloWorld");
	expect(camelCase("hello-world")).toBe("helloWorld");
	expect(camelCase("Hello-World")).toBe("helloWorld");
	expect(camelCase("hello_world")).toBe("helloWorld");
	expect(camelCase("Hello_World")).toBe("helloWorld");
});
