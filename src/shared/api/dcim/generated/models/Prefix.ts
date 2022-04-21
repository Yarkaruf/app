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
 * @interface Prefix
 */
export interface Prefix {
  /**
   *
   * @type {string}
   * @memberof Prefix
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof Prefix
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Prefix
   */
  role: string;
  /**
   *
   * @type {Array<string>}
   * @memberof Prefix
   */
  tags: Array<string>;
}

export function PrefixFromJSON(json: any): Prefix {
  return PrefixFromJSONTyped(json, false);
}

export function PrefixFromJSONTyped(json: any, ignoreDiscriminator: boolean): Prefix {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json["name"],
    id: json["id"],
    role: json["role"],
    tags: json["tags"]
  };
}

export function PrefixToJSON(value?: Prefix | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name === undefined ? null : value.name,
    id: value.id === undefined ? null : value.id,
    role: value.role === undefined ? null : value.role,
    tags: value.tags === undefined ? null : value.tags
  };
}
