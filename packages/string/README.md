<div align="center">
  <img
    src="https://files.aries.fyi/2024/03/31/a1a4f7062e683fef.png"
    alt="@ariesclark/string logo"
    width="100%"
  />
	
</div>

## Installation

```sh
npm install @ariesclark/extensions
# Or directly, if you only need the string extension.
npm install @ariesclark/string
```

### Documentation

<!-- INSERT GENERATED DOCS START -->

### `lowercase` (function)

**Parameters:**

- value (`T`)

**returns:** Lowercase<T>

### `uppercase` (function)

Converts the string to uppercase, alias for `value.toUpperCase()`.

**Parameters:**

- value (`T`)

**returns:** Uppercase<T>

### `capitalize` (function)

Converts the first character of a string to uppercase.

**Parameters:**

- value (`T`)

**returns:** Capitalize<T>

### `uncapitalize` (function)

Converts the first character of a string to lowercase.

**Parameters:**

- value (`T`)

**returns:** Uncapitalize<T>

### `pascalCase` (function)

**Parameters:**

- value (`T`)

**returns:** string

### `camelCase` (function)

**Parameters:**

- value (`T`)

**returns:** string

### `loremIpsum` (function)

**Parameters:**

- words (`number`) - The number of words to generate.

**returns:** string

```ts
loremIpsum(5); // "Lorem ipsum dolor sit amet"
```

### `snakeCase` (function)

**Parameters:**

- value (`T`)

**returns:** string

### `titleCase` (function)

**Parameters:**

- value (`T`)

**returns:** string

### `trim` (function)

Remove leading & trailing characters from string, default is any whitespace.

**Parameters:**

- value (`string`)
- character (`string`)

**returns:** string

### `{ fromCharCode, fromCodePoint, raw }` (variable)

<!-- INSERT GENERATED DOCS END -->
