/* eslint-disable unicorn/prefer-code-point */
/* eslint-disable unicorn/prefer-math-trunc */

import type { RandomFunction } from "./random-function";

function cyrb128(value: string) {
	let h1 = 1_779_033_703,
		h2 = 3_144_134_277,
		h3 = 1_013_904_242,
		h4 = 2_773_480_762;

	for (let index = 0, k; index < value.length; index++) {
		k = value.charCodeAt(index);
		h1 = h2 ^ Math.imul(h1 ^ k, 597_399_067);
		h2 = h3 ^ Math.imul(h2 ^ k, 2_869_860_233);
		h3 = h4 ^ Math.imul(h3 ^ k, 951_274_213);
		h4 = h1 ^ Math.imul(h4 ^ k, 2_716_044_179);
	}

	h1 = Math.imul(h3 ^ (h1 >>> 18), 597_399_067);
	h2 = Math.imul(h4 ^ (h2 >>> 22), 2_869_860_233);
	h3 = Math.imul(h1 ^ (h3 >>> 17), 951_274_213);
	h4 = Math.imul(h2 ^ (h4 >>> 19), 2_716_044_179);

	(h1 ^= h2 ^ h3 ^ h4), (h2 ^= h1), (h3 ^= h1), (h4 ^= h1);
	return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0] as const;
}

function sfc32(a: number, b: number, c: number, d: number) {
	return function () {
		a |= 0;
		b |= 0;
		c |= 0;
		d |= 0;

		const t = (((a + b) | 0) + d) | 0;

		d = (d + 1) | 0;
		a = b ^ (b >>> 9);
		b = (c + (c << 3)) | 0;
		c = (c << 21) | (c >>> 11);
		c = (c + t) | 0;

		return (t >>> 0) / 4_294_967_296;
	};
}

/**
 * Create a pseudo-random number generator from a seed.
 *
 * @example
 * ```typescript
 * import { pseudoRandomFloat, randomFunction, randomInt } from "@ariesclark/number";
 *
 * randomFunction(pseudoRandomFloat("hello world"));
 * randomInt(); // Predictable random number, based on the seed.
 * ```
 */
export function pseudoRandomFloat(seed: string): RandomFunction {
	const [a, b, c, d] = cyrb128(seed);
	return sfc32(a, b, c, d);
}
