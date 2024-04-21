/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Callable } from "../types";

/**
 * Bind a set of parameters to a function, creating a new function that takes the remaining parameters.
 *
 * @param callable The function to bind the parameters to.
 * @param parameters The parameters to bind to the function.
 *
 * @returns A new function that takes the remaining parameters.
 */
export function bind<
	const T,
	const A extends Array<any>,
	const B extends Array<any>
>(callable: Callable<[...A, ...B], T>, ...parameters: A): Callable<B, T> {
	return callable.bind(null, ...parameters);
}
