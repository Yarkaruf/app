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
import { Tariff, TariffFromJSON, TariffFromJSONTyped, TariffToJSON } from "./";

/**
 *
 * @export
 * @interface GetManyTariffResponseDto
 */
export interface GetManyTariffResponseDto {
  /**
   *
   * @type {Array<Tariff>}
   * @memberof GetManyTariffResponseDto
   */
  data: Array<Tariff>;
  /**
   *
   * @type {number}
   * @memberof GetManyTariffResponseDto
   */
  count: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTariffResponseDto
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTariffResponseDto
   */
  page: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTariffResponseDto
   */
  pageCount: number;
}

export function GetManyTariffResponseDtoFromJSON(json: any): GetManyTariffResponseDto {
  return GetManyTariffResponseDtoFromJSONTyped(json, false);
}

export function GetManyTariffResponseDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetManyTariffResponseDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(TariffFromJSON),
    count: json["count"],
    total: json["total"],
    page: json["page"],
    pageCount: json["pageCount"]
  };
}

export function GetManyTariffResponseDtoToJSON(value?: GetManyTariffResponseDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(TariffToJSON),
    count: value.count === undefined ? null : value.count,
    total: value.total === undefined ? null : value.total,
    page: value.page === undefined ? null : value.page,
    pageCount: value.pageCount === undefined ? null : value.pageCount
  };
}
