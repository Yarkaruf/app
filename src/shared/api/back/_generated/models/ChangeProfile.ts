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
 * @interface ChangeProfile
 */
export interface ChangeProfile {
  /**
   *
   * @type {string}
   * @memberof ChangeProfile
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ChangeProfile
   */
  countryName?: string;
  /**
   *
   * @type {string}
   * @memberof ChangeProfile
   */
  cityName?: string;
  /**
   *
   * @type {string}
   * @memberof ChangeProfile
   */
  address?: string;
  /**
   *
   * @type {string}
   * @memberof ChangeProfile
   */
  postcode?: string;
}

export function ChangeProfileFromJSON(json: any): ChangeProfile {
  return ChangeProfileFromJSONTyped(json, false);
}

export function ChangeProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeProfile {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, "name") ? undefined : json["name"],
    countryName: !exists(json, "countryName") ? undefined : json["countryName"],
    cityName: !exists(json, "cityName") ? undefined : json["cityName"],
    address: !exists(json, "address") ? undefined : json["address"],
    postcode: !exists(json, "postcode") ? undefined : json["postcode"]
  };
}

export function ChangeProfileToJSON(value?: ChangeProfile | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name === undefined ? null : value.name,
    countryName: value.countryName === undefined ? null : value.countryName,
    cityName: value.cityName === undefined ? null : value.cityName,
    address: value.address === undefined ? null : value.address,
    postcode: value.postcode === undefined ? null : value.postcode
  };
}