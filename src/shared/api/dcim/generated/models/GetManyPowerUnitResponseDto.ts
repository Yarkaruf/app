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
import { PowerUnit, PowerUnitFromJSON, PowerUnitFromJSONTyped, PowerUnitToJSON } from "./";

/**
 *
 * @export
 * @interface GetManyPowerUnitResponseDto
 */
export interface GetManyPowerUnitResponseDto {
  /**
   *
   * @type {Array<PowerUnit>}
   * @memberof GetManyPowerUnitResponseDto
   */
  data: Array<PowerUnit>;
  /**
   *
   * @type {number}
   * @memberof GetManyPowerUnitResponseDto
   */
  count: number;
  /**
   *
   * @type {number}
   * @memberof GetManyPowerUnitResponseDto
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof GetManyPowerUnitResponseDto
   */
  page: number;
  /**
   *
   * @type {number}
   * @memberof GetManyPowerUnitResponseDto
   */
  pageCount: number;
}

export function GetManyPowerUnitResponseDtoFromJSON(json: any): GetManyPowerUnitResponseDto {
  return GetManyPowerUnitResponseDtoFromJSONTyped(json, false);
}

export function GetManyPowerUnitResponseDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetManyPowerUnitResponseDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(PowerUnitFromJSON),
    count: json["count"],
    total: json["total"],
    page: json["page"],
    pageCount: json["pageCount"]
  };
}

export function GetManyPowerUnitResponseDtoToJSON(value?: GetManyPowerUnitResponseDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(PowerUnitToJSON),
    count: value.count === undefined ? null : value.count,
    total: value.total === undefined ? null : value.total,
    page: value.page === undefined ? null : value.page,
    pageCount: value.pageCount === undefined ? null : value.pageCount
  };
}
