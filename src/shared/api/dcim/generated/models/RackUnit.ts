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
 * @interface RackUnit
 */
export interface RackUnit {
  /**
   *
   * @type {boolean}
   * @memberof RackUnit
   */
  isOccupied: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RackUnit
   */
  isOccupationPlanned: boolean;
  /**
   *
   * @type {number}
   * @memberof RackUnit
   */
  serverId: number | undefined;
  /**
   *
   * @type {number}
   * @memberof RackUnit
   */
  unit: number;
}

export function RackUnitFromJSON(json: any): RackUnit {
  return RackUnitFromJSONTyped(json, false);
}

export function RackUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): RackUnit {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    isOccupied: json["isOccupied"],
    isOccupationPlanned: json["isOccupationPlanned"],
    serverId: json["serverId"] === null ? undefined : json["serverId"],
    unit: json["unit"]
  };
}

export function RackUnitToJSON(value?: RackUnit | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    isOccupied: value.isOccupied === undefined ? null : value.isOccupied,
    isOccupationPlanned: value.isOccupationPlanned === undefined ? null : value.isOccupationPlanned,
    serverId: value.serverId === undefined ? null : value.serverId,
    unit: value.unit === undefined ? null : value.unit
  };
}
