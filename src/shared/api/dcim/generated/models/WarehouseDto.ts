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
 * @interface WarehouseDto
 */
export interface WarehouseDto {
  /**
   *
   * @type {string}
   * @memberof WarehouseDto
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof WarehouseDto
   */
  locationId: string;
}

export function WarehouseDtoFromJSON(json: any): WarehouseDto {
  return WarehouseDtoFromJSONTyped(json, false);
}

export function WarehouseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WarehouseDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json["name"],
    locationId: json["locationId"]
  };
}

export function WarehouseDtoToJSON(value?: WarehouseDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name === undefined ? null : value.name,
    locationId: value.locationId === undefined ? null : value.locationId
  };
}