type CamelCase<T extends string> = T extends `${infer First}_${infer Rest}`
    ? `${Lowercase<First>}${Capitalize<CamelCase<Rest>>}`
    : Lowercase<T>;

export type { CamelCase };