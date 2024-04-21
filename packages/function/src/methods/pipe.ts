import type { AnyCallable, Callable } from "../types";

/**
 * Pipe a value through a series of functions, where the output of each function is the input of the next.
 * Eventually [tc39/proposal-pipeline-operator](https://github.com/tc39/proposal-pipeline-operator) will be
 * available in JavaScript, but until then, this function can be used to achieve a similar result.
 *
 * @param value The value to pipe through the functions.
 * @param callables A series of functions to pipe the value through.
 * @returns
 */
export function pipe<const T0, T1>(
	argument0: T0,
	argument1: Callable<[T0], T1>
): T1;

export function pipe<const T0, T1, T2>(
	argument0: T0,
	argument1: Callable<[T0], T1>,
	argument2: Callable<[T1], T2>
): T2;

export function pipe<const T0, T1, T2, T3>(
	argument0: T0,
	argument1: Callable<[T0], T1>,
	argument2: Callable<[T1], T2>,
	argument3: Callable<[T2], T3>
): T3;

export function pipe<const T0, T1, T2, T3, T4>(
	argument0: T0,
	argument1: Callable<[T0], T1>,
	argument2: Callable<[T1], T2>,
	argument3: Callable<[T2], T3>,
	argument4: Callable<[T3], T4>
): T4;

export function pipe<const T0, T1, T2, T3, T4, T5>(
	argument0: T0,
	argument1: Callable<[T0], T1>,
	argument2: Callable<[T1], T2>,
	argument3: Callable<[T2], T3>,
	argument4: Callable<[T3], T4>,
	argument5: Callable<[T4], T5>
): T5;

export function pipe<const T0, T1, T2, T3, T4, T5, T6>(
	argument0: T0,
	argument1: Callable<[T0], T1>,
	argument2: Callable<[T1], T2>,
	argument3: Callable<[T2], T3>,
	argument4: Callable<[T3], T4>,
	argument5: Callable<[T4], T5>,
	argument6: Callable<[T5], T6>
): T6;

export function pipe<const T0, T1, T2, T3, T4, T5, T6, T7>(
	argument0: T0,
	argument1: Callable<[T0], T1>,
	argument2: Callable<[T1], T2>,
	argument3: Callable<[T2], T3>,
	argument4: Callable<[T3], T4>,
	argument5: Callable<[T4], T5>,
	argument6: Callable<[T5], T6>,
	argument7: Callable<[T6], T7>
): T7;

export function pipe<const T0, T1, T2, T3, T4, T5, T6, T7, T9>(
	argument0: T0,
	argument1: Callable<[T0], T1>,
	argument2: Callable<[T1], T2>,
	argument3: Callable<[T2], T3>,
	argument4: Callable<[T3], T4>,
	argument5: Callable<[T4], T5>,
	argument6: Callable<[T5], T6>,
	argument7: Callable<[T6], T7>,
	argument8: Callable<[T7], T9>
): T9;

export function pipe(
	value: unknown,
	...callables: Array<AnyCallable>
): unknown {
	for (const callable of callables) value = callable(value);
	return value;
}

export declare function pipex<const T0, T1, T2>(
	argument1: Callable<[T0], T1>,
	argument2: Callable<[T1], T2>
): Callable<[T0], T2>;
