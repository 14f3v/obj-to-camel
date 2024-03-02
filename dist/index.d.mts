type CamelCase<T extends string> = T extends `${infer First}_${infer Rest}` ? `${Lowercase<First>}${Capitalize<CamelCase<Rest>>}` : Lowercase<T>;

declare function ObjectConvertionKeysToCamelCase<T extends Record<string, any>>(obj: T): {
    [K in keyof T as CamelCase<K & string>]: T[K];
};

export { ObjectConvertionKeysToCamelCase as default };
