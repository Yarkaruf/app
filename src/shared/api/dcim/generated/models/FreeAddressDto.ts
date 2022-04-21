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
 * @interface FreeAddressDto
 */
export interface FreeAddressDto {
  /**
   *
   * @type {string}
   * @memberof FreeAddressDto
   */
  address: string;
}

export function FreeAddressDtoFromJSON(json: any): FreeAddressDto {
  return FreeAddressDtoFromJSONTyped(json, false);
}

export function FreeAddressDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FreeAddressDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    address: json["address"]
  };
}

export function FreeAddressDtoToJSON(value?: FreeAddressDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    address: value.address === undefined ? null : value.address
  };
}
