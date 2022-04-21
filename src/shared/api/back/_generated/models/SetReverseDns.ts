/* tslint:disable */
/* eslint-disable */
/**
 * Medialand API
 * Medialand API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface SetReverseDns
 */
export interface SetReverseDns {
  /**
   *
   * @type {string}
   * @memberof SetReverseDns
   */
  reverseDns: string | undefined;
}

export function SetReverseDnsFromJSON(json: any): SetReverseDns {
  return SetReverseDnsFromJSONTyped(json, false);
}

export function SetReverseDnsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetReverseDns {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    reverseDns: json["reverseDns"] === null ? undefined : json["reverseDns"]
  };
}

export function SetReverseDnsToJSON(value?: SetReverseDns | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    reverseDns: value.reverseDns === undefined ? null : value.reverseDns
  };
}
