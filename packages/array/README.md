<div align="center">
  <img
    src="https://files.aries.fyi/2024/03/31/47f1b3d44c9f72ee.png"
    alt="@ariesclark/array logo"
    width="100%"
  />
</div>

Fast, efficient, and easy-to-use array extensions for TypeScript.

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
# Or directly, if you only need the array extension.
npm install @ariesclark/array
```

### Documentation

<!-- INSERT GENERATED DOCS START -->

### `group` (function)

Groups the items in the array by the given function.

```tsx
group([1, 2, 3, 4, 5], item => (item % 2 === 0 ? 'even' : 'odd'));
// {
//   odd: [1, 3, 5],
//   even: [2, 4]
// }
```

### `randomIndex` (function)

Get a random index from an array.

**Parameters:**

- array (`{ length: 0; }`)
- random (`RandomFunction`)

**returns:** null

```typescript
const value = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];

randomIndex(value); // 3, eventually.
randomIndex(value); // 0, eventually.
randomIndex(value); // 2, eventually.
```

### `randomIndex` (function)

**Parameters:**

- array (`{ length: number; }`)
- random (`RandomFunction`)

**returns:** null

### `randomIndex` (function)

**Parameters:**

- array (`{ length: number; }`)
- random (`RandomFunction`)

**returns:** null

### `randomItem` (function)

Get a random item from an array, with an optional random number generator.

**Parameters:**

- array (`{ length: 0; }`)
- random (`RandomFunction`)

**returns:** null

```tsx
const value = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];

randomItem(value); // "amet", eventually.
randomItem(value); // "dolor", eventually.
randomItem(value); // "lorem", eventually.
```

### `randomItem` (function)

**Parameters:**

- array (`{ [index: number]: T; length: number; }`)
- random (`RandomFunction`)

**returns:** null

### `randomItem` (function)

**Parameters:**

- array (`{ [index: number]: T; length: number; }`)
- random (`RandomFunction`)

**returns:** null

### `unique` (function)

Returns a new array with unique values based on the `by` function.

**Parameters:**

- array (`T[]`)
- by (`(value: T) => unknown`)

**returns:** T[]

### `{ from, fromAsync, isArray, of }` (variable)

<!-- INSERT GENERATED DOCS END -->
