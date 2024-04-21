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

### `clamp` (function)

Clamps a number within the range specified by the minimum and maximum values.

**Parameters:**

- /\*\*

* The value to clamp.
  \*/
  value (`number`)

- /\*\*

* The minimum value, inclusive.
  \*/
  minimum (`number`)

- /\*\*

* The maximum value, inclusive.
  \*/
  maximum (`number`)

**returns:** number

### `randomFloat` (function)

[object Object],[object Object],[object Object],[object Object],[object Object]

### `RandomFunction` (type)

A random number generator function that returns a float between 0 and 1.

### `defaultRandom` (variable: RandomFunction)

The default random number generator function.

### `randomFunction` (function)

Get the current random number generator function, or set a new one.

**Parameters:**

- newValue (`RandomFunction`) - The new random number generator function, or `undefined` to get the current value, or `null` to reset to the default.

**returns:** RandomFunction

```typescript
import { randomFunction } from '@ariesclark/number/random-function';
import { randomInt } from '@ariesclark/number/random-int';

randomInt(); // Random number between 0 and 100.
randomFunction(() => 0.5);

randomInt(); // Always 50.
```

### `pseudoRandomFloat` (function)

Create a pseudo-random number generator from a seed.

**Parameters:**

- seed (`string`)

**returns:** RandomFunction

```typescript
import {
  pseudoRandomFloat,
  randomFunction,
  randomInt
} from '@ariesclark/number';

randomFunction(pseudoRandomFloat('hello world'));
randomInt(); // Predictable random number, based on the seed.
```

### `randomInt` (function)

Get a random value between `minimum` and `maximum`.

**Parameters:**

- /\*\*

* The minimum value, inclusive, defaults to `0`
  \*/
  minimum (`number`)

- /\*\*

* The maximum value, inclusive, defaults to `100`
  \*/
  maximum (`number`)

- /\*\*

* The random number generator function.
  \*/
  random (`RandomFunction`)

**returns:** number

### `{ EPSILON, MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE, NEGATIVE_INFINITY,

// eslint-disable-next-line no-shadow-restricted-names
NaN, POSITIVE_INFINITY, isFinite, isInteger, isNaN, isSafeInteger, parseFloat, parseInt }` (variable)

### `sum` (function)

Returns the sum of the numbers.

**Parameters:**

- numbers (`number[]`) - The numbers to sum.

**returns:** number

### `average` (function)

Returns the average of the numbers.

**Parameters:**

- numbers (`number[]`) - The numbers to average.

**returns:** number

### `median` (function)

Returns the median of the numbers.

**Parameters:**

- numbers (`number[]`) - The numbers to find the median of.

**returns:** number

<!-- INSERT GENERATED DOCS END -->
