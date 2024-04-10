<div align="center">
  <img
    src="https://files.aries.fyi/2024/03/31/83e8a81620e7baa8.png"
    alt="@ariesclark/object logo"
    width="100%"
  />
</div>

Fast, efficient, and easy-to-use object extensions for TypeScript.

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
# Or directly, if you only need the object extension.
npm install @ariesclark/object
```

### Documentation

<!-- INSERT GENERATED DOCS START -->

### `empty` (function)

**Parameters:**

- value (`unknown`)

**returns:** boolean

### `identity` (function)

A function that returns the value passed to it, unchanged.

**Parameters:**

- value (`T`)

**returns:** T

### `keys` (function)

**Parameters:**

- object (`T`)

**returns:** (keyof T)[]

### `omit` (function)

**Parameters:**

- object (`T`)
- keys (`K[]`)

**returns:** Omit<T, K>

### `pick` (function)

### `{ assign, create, defineProperties, defineProperty, entries, freeze, fromEntries, getOwnPropertyDescriptor, getOwnPropertyDescriptors, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf, hasOwn, is, isExtensible, isFrozen, isSealed,

// keys,
preventExtensions, seal, setPrototypeOf, values }` (variable)

<!-- INSERT GENERATED DOCS END -->
