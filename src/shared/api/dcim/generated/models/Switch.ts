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
import { Manufacturer, ManufacturerFromJSON, ManufacturerFromJSONTyped, ManufacturerToJSON } from "./";

/**
 *
 * @export
 * @interface Switch
 */
export interface Switch {
  /**
   *
   * @type {string}
   * @memberof Switch
   */
  readonly type: SwitchTypeEnum;
  /**
   *
   * @type {object}
   * @memberof Switch
   */
  outConnector: object;
  /**
   *
   * @type {Array<object>}
   * @memberof Switch
   */
  inConnectors: Array<object>;
  /**
   *
   * @type {string}
   * @memberof Switch
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Switch
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Switch
   */
  manufacturerId: string;
  /**
   *
   * @type {Manufacturer}
   * @memberof Switch
   */
  manufacturer: Manufacturer;
}

export function SwitchFromJSON(json: any): Switch {
  return SwitchFromJSONTyped(json, false);
}

export function SwitchFromJSONTyped(json: any, ignoreDiscriminator: boolean): Switch {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    outConnector: json["outConnector"],
    inConnectors: json["inConnectors"],
    id: json["id"],
    name: json["name"],
    manufacturerId: json["manufacturerId"],
    manufacturer: ManufacturerFromJSON(json["manufacturer"])
  };
}

export function SwitchToJSON(value?: Switch | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    outConnector: value.outConnector,
    inConnectors: value.inConnectors === undefined ? null : value.inConnectors,
    id: value.id === undefined ? null : value.id,
    name: value.name === undefined ? null : value.name,
    manufacturerId: value.manufacturerId === undefined ? null : value.manufacturerId,
    manufacturer: ManufacturerToJSON(value.manufacturer)
  };
}

/**
 * @export
 * @enum {string}
 */
export enum SwitchTypeEnum {
  Unknown = "Unknown",
  Processor = "Processor",
  RAM = "RAM",
  RAIDController = "RAIDController",
  PowerUnit = "PowerUnit",
  Platform = "Platform",
  NetworkInterface = "NetworkInterface",
  Disk = "Disk",
  Switch = "Switch"
}