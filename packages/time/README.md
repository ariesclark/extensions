<div align="center">
  <img
    src="https://files.aries.fyi/2024/04/01/d668dcdee6a6b8ce.png"
    alt="@ariesclark/time logo"
    width="100%"
  />
</div>

Fast, efficient, and easy-to-use time functions for TypeScript.

## Packages

<div>
  <a href="https://npm.im/@ariesclark/extensions">
    <img
      src="https://files.aries.fyi/2024/04/20/a0b2e8dffa0c5b78.png"
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
  <a href="https://npm.im/@ariesclark/function">
    <img
      src="https://files.aries.fyi/2024/04/20/d6b1bb165fc4a46f.png"
      alt="@ariesclark/function"
      width="32%"
    />
  </a>
</div>

## Installation

```sh
npm install @ariesclark/extensions
# Or directly, if you only need the number extension.
npm install @ariesclark/number
```

### Documentation

<!-- INSERT GENERATED DOCS START -->

### `MaybeSuffix` (type)

### `Milliseconds` (type)

A duration in milliseconds.

### `DurationLiteral` (type)

### `Duration` (type)

A duration value.

Supports the following formats in both short and long form:

- `ms` (milliseconds) e.g. `20ms` or `20` as a number.
- `s` (seconds) e.g. `1s` or `1 second`.
- `m` (minutes) e.g. `2m` or `2 minutes`.
- `h` (hours) e.g. `3h` or `3 hours`.
- `d` (days) e.g. `4d` or `4 days`.
- `w` (weeks) e.g. `5w` or `5 weeks`.
- `y` (years) e.g. `6y` or `6 years`.

### `milliseconds` (function)

[object Object],[object Object],[object Object]

**Parameters:**

- value (`Duration`)

**returns:** number

```tsx
ms('5m'); // 300000, 5 minutes in milliseconds, short form.
ms(300000); // 300000, 5 minutes in milliseconds, pass-through.
ms('2 hours'); // 7200000, 2 hours in milliseconds, long form.
```

### `ms` (variable)

[object Object],[object Object],[object Object]

### `now` (function)

Current time in milliseconds.

**returns:** number

### `Timestamp` (type)

[object Object],[object Object],[object Object],[object Object],[object Object]

### `InvalidTimestampError` (variable)

### `timestamp` (function)

[object Object],[object Object],[object Object]

**Parameters:**

- timestamp (`Timestamp`)

**returns:** number

### `randomTime` (function)

**Parameters:**

- offset (`Duration`)
- anchor (`number`)

**returns:** number

<!-- INSERT GENERATED DOCS END -->
