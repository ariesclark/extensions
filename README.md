<div align="center">
  <img
    src="https://files.aries.fyi/2024/03/31/bef04054b69ddc08.png"
    alt="@ariesclark/extensions logo"
    width="100%"
  />
</div>

This package is a collection of extensions for JavaScript objects, arrays, strings, numbers, and numerous other functions.

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
```

```typescript
import { identity, empty, pick } from '@ariesclark/extensions';

identity('lorem'); // 'lorem'
pick({ hello: 'world', lorem: 'ipsum' }, ['hello']); // { hello: 'world' }
// And so on...

```