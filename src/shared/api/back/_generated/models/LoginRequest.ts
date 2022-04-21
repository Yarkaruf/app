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
 * @interface LoginRequest
 */
export interface LoginRequest {
  /**
   *
   * @type {string}
   * @memberof LoginRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof LoginRequest
   */
  password: string;
}

export function LoginRequestFromJSON(json: any): LoginRequest {
  return LoginRequestFromJSONTyped(json, false);
}

export function LoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    email: json["email"],
    password: json["password"]
  };
}

export function LoginRequestToJSON(value?: LoginRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    email: value.email === undefined ? null : value.email,
    password: value.password === undefined ? null : value.password
  };
}