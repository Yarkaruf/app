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
import { RAM, RAMFromJSON, RAMFromJSONTyped, RAMToJSON } from "./";

/**
 *
 * @export
 * @interface GetManyRAMResponseDto
 */
export interface GetManyRAMResponseDto {
  /**
   *
   * @type {Array<RAM>}
   * @memberof GetManyRAMResponseDto
   */
  data: Array<RAM>;
  /**
   *
   * @type {number}
   * @memberof GetManyRAMResponseDto
   */
  count: number;
  /**
   *
   * @type {number}
   * @memberof GetManyRAMResponseDto
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof GetManyRAMResponseDto
   */
  page: number;
  /**
   *
   * @type {number}
   * @memberof GetManyRAMResponseDto
   */
  pageCount: number;
}

export function GetManyRAMResponseDtoFromJSON(json: any): GetManyRAMResponseDto {
  return GetManyRAMResponseDtoFromJSONTyped(json, false);
}

export function GetManyRAMResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetManyRAMResponseDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(RAMFromJSON),
    count: json["count"],
    total: json["total"],
    page: json["page"],
    pageCount: json["pageCount"]
  };
}

export function GetManyRAMResponseDtoToJSON(value?: GetManyRAMResponseDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(RAMToJSON),
    count: value.count === undefined ? null : value.count,
    total: value.total === undefined ? null : value.total,
    page: value.page === undefined ? null : value.page,
    pageCount: value.pageCount === undefined ? null : value.pageCount
  };
}