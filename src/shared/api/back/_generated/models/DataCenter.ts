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
 * @interface DataCenter
 */
export interface DataCenter {
  /**
   *
   * @type {string}
   * @memberof DataCenter
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof DataCenter
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof DataCenter
   */
  country: string;
  /**
   *
   * @type {string}
   * @memberof DataCenter
   */
  city: string;
}

export function DataCenterFromJSON(json: any): DataCenter {
  return DataCenterFromJSONTyped(json, false);
}

export function DataCenterFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataCenter {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    country: json["country"],
    city: json["city"]
  };
}

export function DataCenterToJSON(value?: DataCenter | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id === undefined ? null : value.id,
    name: value.name === undefined ? null : value.name,
    country: value.country === undefined ? null : value.country,
    city: value.city === undefined ? null : value.city
  };
}
