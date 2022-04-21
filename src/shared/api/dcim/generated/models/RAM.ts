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
 * @interface RAM
 */
export interface RAM {
  /**
   *
   * @type {string}
   * @memberof RAM
   */
  readonly type: RAMTypeEnum;
  /**
   *
   * @type {object}
   * @memberof RAM
   */
  outConnector: object;
  /**
   *
   * @type {Array<object>}
   * @memberof RAM
   */
  inConnectors: Array<object>;
  /**
   *
   * @type {string}
   * @memberof RAM
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof RAM
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof RAM
   */
  manufacturerId: string;
  /**
   *
   * @type {Manufacturer}
   * @memberof RAM
   */
  manufacturer: Manufacturer;
  /**
   *
   * @type {number}
   * @memberof RAM
   */
  volume: number;
  /**
   *
   * @type {number}
   * @memberof RAM
   */
  frequency: number;
  /**
   *
   * @type {string}
   * @memberof RAM
   */
  ramType: RAMRamTypeEnum;
}

export function RAMFromJSON(json: any): RAM {
  return RAMFromJSONTyped(json, false);
}

export function RAMFromJSONTyped(json: any, ignoreDiscriminator: boolean): RAM {
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
    manufacturer: ManufacturerFromJSON(json["manufacturer"]),
    volume: json["volume"],
    frequency: json["frequency"],
    ramType: json["ramType"]
  };
}

export function RAMToJSON(value?: RAM | null): any {
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
    manufacturer: ManufacturerToJSON(value.manufacturer),
    volume: value.volume === undefined ? null : value.volume,
    frequency: value.frequency === undefined ? null : value.frequency,
    ramType: value.ramType === undefined ? null : value.ramType
  };
}

/**
 * @export
 * @enum {string}
 */
export enum RAMTypeEnum {
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
/**
 * @export
 * @enum {string}
 */
export enum RAMRamTypeEnum {
  DDR2 = "DDR2",
  DDR3 = "DDR3",
  DDR4 = "DDR4",
  DDR5 = "DDR5"
}
