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
import { Transfer, TransferFromJSON, TransferFromJSONTyped, TransferToJSON } from "./";

/**
 *
 * @export
 * @interface TicketDto
 */
export interface TicketDto {
  /**
   *
   * @type {Array<Transfer>}
   * @memberof TicketDto
   */
  transfers: Array<Transfer>;
}

export function TicketDtoFromJSON(json: any): TicketDto {
  return TicketDtoFromJSONTyped(json, false);
}

export function TicketDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    transfers: (json["transfers"] as Array<any>).map(TransferFromJSON)
  };
}

export function TicketDtoToJSON(value?: TicketDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    transfers: (value.transfers as Array<any>).map(TransferToJSON)
  };
}