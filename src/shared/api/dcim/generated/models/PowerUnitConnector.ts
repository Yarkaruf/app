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
 * @interface PowerUnitConnector
 */
export interface PowerUnitConnector {
  /**
   *
   * @type {string}
   * @memberof PowerUnitConnector
   */
  type: PowerUnitConnectorTypeEnum;
  /**
   *
   * @type {string}
   * @memberof PowerUnitConnector
   */
  id: string;
  /**
   *
   * @type {number}
   * @memberof PowerUnitConnector
   */
  index: number;
}

export function PowerUnitConnectorFromJSON(json: any): PowerUnitConnector {
  return PowerUnitConnectorFromJSONTyped(json, false);
}

export function PowerUnitConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PowerUnitConnector {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    id: json["id"],
    index: json["index"]
  };
}

export function PowerUnitConnectorToJSON(value?: PowerUnitConnector | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type === undefined ? null : value.type,
    id: value.id === undefined ? null : value.id,
    index: value.index === undefined ? null : value.index
  };
}

/**
 * @export
 * @enum {string}
 */
export enum PowerUnitConnectorTypeEnum {
  DiskConnector = "DiskConnector",
  EthernetConnector = "EthernetConnector",
  PCIConnector = "PCIConnector",
  PowerUnitConnector = "PowerUnitConnector",
  PlatformConnector = "PlatformConnector",
  RAMConnector = "RAMConnector",
  ProcessorConnector = "ProcessorConnector",
  Unknown = "Unknown"
}
