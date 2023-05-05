export type Dict<K extends string = string, V = unknown> = {
	[P in K]: V;
};
