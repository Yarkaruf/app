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
 * @interface PlatformConnector
 */
export interface PlatformConnector {
  /**
   *
   * @type {string}
   * @memberof PlatformConnector
   */
  type: PlatformConnectorTypeEnum;
  /**
   *
   * @type {string}
   * @memberof PlatformConnector
   */
  id: string;
  /**
   *
   * @type {number}
   * @memberof PlatformConnector
   */
  index: number;
}

export function PlatformConnectorFromJSON(json: any): PlatformConnector {
  return PlatformConnectorFromJSONTyped(json, false);
}

export function PlatformConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformConnector {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    id: json["id"],
    index: json["index"]
  };
}

export function PlatformConnectorToJSON(value?: PlatformConnector | null): any {
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
export enum PlatformConnectorTypeEnum {
  DiskConnector = "DiskConnector",
  EthernetConnector = "EthernetConnector",
  PCIConnector = "PCIConnector",
  PowerUnitConnector = "PowerUnitConnector",
  PlatformConnector = "PlatformConnector",
  RAMConnector = "RAMConnector",
  ProcessorConnector = "ProcessorConnector",
  Unknown = "Unknown"
}
