export const addComma = (number: number | string) => {
  var temp = "";
  var _number = String(number).split(".")[0];
  var _number2 =
    String(number).split(".").length > 1 ? String(number).split(".")[1] : "";

  for (var i = 0; i < _number.length; i++) {
    temp += _number[i];
    if ((i + 1) % 3 === _number.length % 3 && i !== _number.length - 1) {
      temp += ",";
    }
  }

  if (_number2 !== "") return temp + "." + _number2;
  return temp;
};

import { v4 } from "uuid";

export { v4 as uuid };

export * from "./constants";
export * from "./createEmotionCache";
export * from "./api";
export * from "./types";
export * from "./translate";
export { default as useLongPress } from "./longPress";
