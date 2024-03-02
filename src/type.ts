type CamelCase<T extends string> = T extends `${infer First}_${infer Rest}`
    ? `${Lowercase<First>}${Capitalize<CamelCase<Rest>>}`
    : Lowercase<T>;

type ParentNested<T> = {
    [K in keyof T as CamelCase<K & string>]: T[K] extends object
    ? ParentNested<T[K]>
    : T[K];
};

export type { ParentNested as CamelCase };