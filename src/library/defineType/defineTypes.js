import { defineType } from "./defineType";

export function defineTypes() {
  const arrayTypes = [];
  for (var i = 0; i < arguments.length; i++) {
    arrayTypes.push(defineType(arguments[i]));
  }
  return arrayTypes;
};