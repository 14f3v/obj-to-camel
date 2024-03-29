// src/index.ts
function ObjectConvertionKeysToCamelCase(obj) {
  const camelObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelKey = key.toLowerCase().replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
      if (obj[key] instanceof Object && !(obj[key] instanceof Date)) {
        if (!obj[key])
          camelObj[camelKey.charAt(0).toLowerCase() + camelKey.slice(1)] = obj[key];
        else
          camelObj[camelKey.charAt(0).toLowerCase() + camelKey.slice(1)] = ObjectConvertionKeysToCamelCase(obj[key]);
      } else
        camelObj[camelKey.charAt(0).toLowerCase() + camelKey.slice(1)] = obj[key];
    }
  }
  return camelObj;
}
export {
  ObjectConvertionKeysToCamelCase as default
};
//# sourceMappingURL=index.mjs.map