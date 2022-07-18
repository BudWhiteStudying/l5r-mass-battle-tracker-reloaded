import {isNull, isUndefined} from "lodash"

export function isNullOrEmptyString(value: any): boolean {
  return isNull(value) || isUndefined(value) || value === "";
}