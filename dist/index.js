"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => ObjectConvertionKeysToCamelCase
});
module.exports = __toCommonJS(src_exports);
function ObjectConvertionKeysToCamelCase(obj) {
  const camelObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelKey = key.toLowerCase().replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
      if (typeof obj[key] == "object") {
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
//# sourceMappingURL=index.js.map