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
 * @interface SshKeyData
 */
export interface SshKeyData {
  /**
   *
   * @type {string}
   * @memberof SshKeyData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof SshKeyData
   */
  value: string;
}

export function SshKeyDataFromJSON(json: any): SshKeyData {
  return SshKeyDataFromJSONTyped(json, false);
}

export function SshKeyDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SshKeyData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json["name"],
    value: json["value"]
  };
}

export function SshKeyDataToJSON(value?: SshKeyData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name === undefined ? null : value.name,
    value: value.value === undefined ? null : value.value
  };
}
