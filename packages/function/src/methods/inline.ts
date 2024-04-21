import type { AnyCallable, Callable } from "../types";

/**
 * Create a function that calls all the provided functions with the same arguments.
 *
 * @param callables An array of functions to call.
 * @returns A function that calls all the provided functions with the same arguments, and returns the last value.
 */
export function inline<T extends AnyCallable>(
	...callables: Array<T | undefined | null>
): Callable<Parameters<T>, ReturnType<T>> {
	return function (...parameters) {
		let value = undefined as unknown as ReturnType<T>;
		for (const callable of callables) value = callable?.(...parameters);

		return value;
	};
}
