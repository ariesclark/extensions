<div align="center">
  <img
    src="https://files.aries.fyi/2024/03/31/47f1b3d44c9f72ee.png"
    alt="@ariesclark/array logo"
    width="100%"
  />
	
</div>

## Installation

```sh
npm install @ariesclark/extensions
# Or directly, if you only need the array extension.
npm install @ariesclark/array
```

## Usage

```ts
import { Array, group, unique } from '@ariesclark/array';

const evenOdd = item => (item % 2 === 0 ? 'even' : 'odd');

let value = [1, 2, 3, 4, 5];

let result = Array.group(value, evenOdd);
result = group(value, evenOdd); // Shorthand, equivalent to the above, tree-shakable.

console.log(result);
// {
//   odd: [1, 3, 5],
//   even: [2, 4]
// }

result = unique(
  [
    { id: 1, name: 'Lorem ipsum' },
    { id: 2, name: 'Amet consectetur' },
    { id: 3, name: 'Sed do eiusmod' },
    { id: 2, name: 'Amet consectetur' }
  ],
  ({ id }) => id
);

console.log(result);
// [
//   { id: 1, name: "Lorem ipsum" },
//   { id: 2, name: "Amet consectetur" },
//   { id: 3, name: "Sed do eiusmod" }
// ]
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

Get a random index from an array, with an optional random number generator.

**Parameters:**

- array (`{ length: 0; }`)
- random (`RandomFunction`)

**returns:** null

```tsx
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
