export const {
	assign,
	create,
	defineProperties,
	defineProperty,
	// entries,
	freeze,
	// fromEntries,
	getOwnPropertyDescriptor,
	getOwnPropertyDescriptors,
	getOwnPropertyNames,
	getOwnPropertySymbols,
	getPrototypeOf,
	hasOwn,
	is,
	isExtensible,
	isFrozen,
	isSealed,
	// keys,
	preventExtensions,
	seal,
	setPrototypeOf,
	values
} = Object;

export * from "./methods/empty";
export * from "./methods/entries";
export * from "./methods/from-entries";
export * from "./methods/identity";
export * from "./methods/keys";
export * from "./methods/omit";
export * from "./methods/pick";
