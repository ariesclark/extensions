<div align="center">
  <img
    src="https://files.aries.fyi/2024/03/31/a1a4f7062e683fef.png"
    alt="@ariesclark/string logo"
    width="100%"
  />
</div>

Fast, efficient, and easy-to-use string extensions for TypeScript.

## Packages

<div>
  <a href="https://npm.im/@ariesclark/extensions">
    <img
      src="https://files.aries.fyi/2024/03/31/bef04054b69ddc08.png"
      alt="@ariesclark/extensions"
      width="32%"
    />
  </a>
  <a href="https://npm.im/@ariesclark/array">
    <img
      src="https://files.aries.fyi/2024/03/31/47f1b3d44c9f72ee.png"
      alt="@ariesclark/array"
      width="32%"
    />
  </a>
  <a href="https://npm.im/@ariesclark/number">
    <img
      src="https://files.aries.fyi/2024/03/31/6f2514e5d32449c8.png"
      alt="@ariesclark/number"
      width="32%"
    />
  </a>
  <a href="https://npm.im/@ariesclark/object">
    <img
      src="https://files.aries.fyi/2024/03/31/83e8a81620e7baa8.png"
      alt="@ariesclark/object"
      width="32%"
    />
  </a>
  <a href="https://npm.im/@ariesclark/string">
    <img
      src="https://files.aries.fyi/2024/03/31/a1a4f7062e683fef.png"
      alt="@ariesclark/string"
      width="32%"
    />
  </a>
  <a href="https://npm.im/@ariesclark/time">
    <img
      src="https://files.aries.fyi/2024/04/01/d668dcdee6a6b8ce.png"
      alt="@ariesclark/time"
      width="32%"
    />
  </a>
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
