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
 * @interface Profile
 */
export interface Profile {
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof Profile
   */
  emailConfirmed: boolean;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  countryName?: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  cityName?: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  address?: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  postcode?: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  phone?: string;
  /**
   *
   * @type {boolean}
   * @memberof Profile
   */
  blocked: boolean;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  blockingReason?: string;
}

export function ProfileFromJSON(json: any): Profile {
  return ProfileFromJSONTyped(json, false);
}

export function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    emailConfirmed: json["emailConfirmed"],
    email: json["email"],
    countryName: !exists(json, "countryName") ? undefined : json["countryName"],
    cityName: !exists(json, "cityName") ? undefined : json["cityName"],
    address: !exists(json, "address") ? undefined : json["address"],
    postcode: !exists(json, "postcode") ? undefined : json["postcode"],
    phone: !exists(json, "phone") ? undefined : json["phone"],
    blocked: json["blocked"],
    blockingReason: !exists(json, "blockingReason") ? undefined : json["blockingReason"]
  };
}

export function ProfileToJSON(value?: Profile | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id === undefined ? null : value.id,
    name: value.name === undefined ? null : value.name,
    emailConfirmed: value.emailConfirmed === undefined ? null : value.emailConfirmed,
    email: value.email === undefined ? null : value.email,
    countryName: value.countryName === undefined ? null : value.countryName,
    cityName: value.cityName === undefined ? null : value.cityName,
    address: value.address === undefined ? null : value.address,
    postcode: value.postcode === undefined ? null : value.postcode,
    phone: value.phone === undefined ? null : value.phone,
    blocked: value.blocked === undefined ? null : value.blocked,
    blockingReason: value.blockingReason === undefined ? null : value.blockingReason
  };
}
