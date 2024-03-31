<div align="center">
  <img
    src="https://files.aries.fyi/2024/03/31/6f2514e5d32449c8.png"
    alt="@ariesclark/number logo"
    width="100%"
  />
</div>

Fast, efficient, and easy-to-use number extensions for TypeScript.

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

### `RandomFunction` (type)

A random number generator function that returns a float between 0 and 1.

### `Duration` (type)

A duration value.

Supports the following formats in both short and long form:

- `ms` (milliseconds) e.g. `20ms`
- `s` (seconds) e.g. `1s` or `1 second`
- `m` (minutes) e.g. `2m` or `2 minutes`
- `h` (hours) e.g. `3h` or `3 hours`
- `d` (days) e.g. `4d` or `4 days`
- `w` (weeks) e.g. `5w` or `5 weeks`
- `y` (years) e.g. `6y` or `6 years`

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

### `pseudoRandomFloat` (function)

Create a pseudo-random number generator from a seed.

**Parameters:**

- seed (`string`)

**returns:** RandomFunction

### `randomFloat` (function)

[object Object],[object Object],[object Object]

### `randomInt` (function)

Get a random value between `minimum` and `maximum`.

**Parameters:**

- minimum (`number`) - The minimum value, inclusive, defaults to `0`.
- maximum (`number`) - The maximum value, inclusive, defaults to `100`.
- random (`RandomFunction`)

**returns:** number

### `Timestamp` (type)

[object Object],[object Object],[object Object],[object Object],[object Object]

### `InvalidTimestampError` (variable)

### `timestamp` (function)

[object Object],[object Object],[object Object]

**Parameters:**

- timestamp (`Timestamp`)

**returns:** number

### `{ EPSILON, MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE, NEGATIVE_INFINITY,

// eslint-disable-next-line no-shadow-restricted-names
NaN, POSITIVE_INFINITY, isFinite, isInteger, isNaN, isSafeInteger, parseFloat, parseInt }` (variable)

<!-- INSERT GENERATED DOCS END -->
