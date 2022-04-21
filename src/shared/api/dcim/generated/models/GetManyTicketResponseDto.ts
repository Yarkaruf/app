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
import { Ticket, TicketFromJSON, TicketFromJSONTyped, TicketToJSON } from "./";

/**
 *
 * @export
 * @interface GetManyTicketResponseDto
 */
export interface GetManyTicketResponseDto {
  /**
   *
   * @type {Array<Ticket>}
   * @memberof GetManyTicketResponseDto
   */
  data: Array<Ticket>;
  /**
   *
   * @type {number}
   * @memberof GetManyTicketResponseDto
   */
  count: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTicketResponseDto
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTicketResponseDto
   */
  page: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTicketResponseDto
   */
  pageCount: number;
}

export function GetManyTicketResponseDtoFromJSON(json: any): GetManyTicketResponseDto {
  return GetManyTicketResponseDtoFromJSONTyped(json, false);
}

export function GetManyTicketResponseDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetManyTicketResponseDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(TicketFromJSON),
    count: json["count"],
    total: json["total"],
    page: json["page"],
    pageCount: json["pageCount"]
  };
}

export function GetManyTicketResponseDtoToJSON(value?: GetManyTicketResponseDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(TicketToJSON),
    count: value.count === undefined ? null : value.count,
    total: value.total === undefined ? null : value.total,
    page: value.page === undefined ? null : value.page,
    pageCount: value.pageCount === undefined ? null : value.pageCount
  };
}