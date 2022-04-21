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
import { RAIDController, RAIDControllerFromJSON, RAIDControllerFromJSONTyped, RAIDControllerToJSON } from "./";

/**
 *
 * @export
 * @interface GetManyRAIDControllerResponseDto
 */
export interface GetManyRAIDControllerResponseDto {
  /**
   *
   * @type {Array<RAIDController>}
   * @memberof GetManyRAIDControllerResponseDto
   */
  data: Array<RAIDController>;
  /**
   *
   * @type {number}
   * @memberof GetManyRAIDControllerResponseDto
   */
  count: number;
  /**
   *
   * @type {number}
   * @memberof GetManyRAIDControllerResponseDto
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof GetManyRAIDControllerResponseDto
   */
  page: number;
  /**
   *
   * @type {number}
   * @memberof GetManyRAIDControllerResponseDto
   */
  pageCount: number;
}

export function GetManyRAIDControllerResponseDtoFromJSON(json: any): GetManyRAIDControllerResponseDto {
  return GetManyRAIDControllerResponseDtoFromJSONTyped(json, false);
}

export function GetManyRAIDControllerResponseDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetManyRAIDControllerResponseDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(RAIDControllerFromJSON),
    count: json["count"],
    total: json["total"],
    page: json["page"],
    pageCount: json["pageCount"]
  };
}

export function GetManyRAIDControllerResponseDtoToJSON(value?: GetManyRAIDControllerResponseDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(RAIDControllerToJSON),
    count: value.count === undefined ? null : value.count,
    total: value.total === undefined ? null : value.total,
    page: value.page === undefined ? null : value.page,
    pageCount: value.pageCount === undefined ? null : value.pageCount
  };
}
