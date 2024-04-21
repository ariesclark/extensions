/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * A function that takes a set of arguments and returns a value.
 */
export type Callable<A extends Array<any>, R> = (...parameters: A) => R;
export type AnyCallable = Callable<Array<any>, any>;
