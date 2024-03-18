import type { CamelCase } from "./type";

export default function ObjectConvertionKeysToCamelCase<T>(obj: T): CamelCase<T> {
    const camelObj: any = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const camelKey = key.toLowerCase().replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
            if (typeof obj[key] == 'object') {
                if (!obj[key]) camelObj[camelKey.charAt(0).toLowerCase() + camelKey.slice(1)] = obj[key]
                else camelObj[camelKey.charAt(0).toLowerCase() + camelKey.slice(1)] = ObjectConvertionKeysToCamelCase(obj[key]);
            }
            else camelObj[camelKey.charAt(0).toLowerCase() + camelKey.slice(1)] = obj[key];
        }
    }
    return camelObj;
};
