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
 * @interface Rack
 */
export interface Rack {
  /**
   *
   * @type {number}
   * @memberof Rack
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Rack
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof Rack
   */
  locationId: number;
  /**
   *
   * @type {number}
   * @memberof Rack
   */
  devices: number;
  /**
   *
   * @type {number}
   * @memberof Rack
   */
  units: number;
}

export function RackFromJSON(json: any): Rack {
  return RackFromJSONTyped(json, false);
}

export function RackFromJSONTyped(json: any, ignoreDiscriminator: boolean): Rack {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    locationId: json["locationId"],
    devices: json["devices"],
    units: json["units"]
  };
}

export function RackToJSON(value?: Rack | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id === undefined ? null : value.id,
    name: value.name === undefined ? null : value.name,
    locationId: value.locationId === undefined ? null : value.locationId,
    devices: value.devices === undefined ? null : value.devices,
    units: value.units === undefined ? null : value.units
  };
}
