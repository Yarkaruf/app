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
 * @interface SetUserAddress
 */
export interface SetUserAddress {
  /**
   *
   * @type {string}
   * @memberof SetUserAddress
   */
  countryName: string;
  /**
   *
   * @type {string}
   * @memberof SetUserAddress
   */
  cityName: string;
  /**
   *
   * @type {string}
   * @memberof SetUserAddress
   */
  address: string;
  /**
   *
   * @type {string}
   * @memberof SetUserAddress
   */
  postcode: string;
}

export function SetUserAddressFromJSON(json: any): SetUserAddress {
  return SetUserAddressFromJSONTyped(json, false);
}

export function SetUserAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetUserAddress {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    countryName: json["countryName"],
    cityName: json["cityName"],
    address: json["address"],
    postcode: json["postcode"]
  };
}

export function SetUserAddressToJSON(value?: SetUserAddress | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    countryName: value.countryName === undefined ? null : value.countryName,
    cityName: value.cityName === undefined ? null : value.cityName,
    address: value.address === undefined ? null : value.address,
    postcode: value.postcode === undefined ? null : value.postcode
  };
}
