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
 * @interface DiskConnector
 */
export interface DiskConnector {
  /**
   *
   * @type {string}
   * @memberof DiskConnector
   */
  type: DiskConnectorTypeEnum;
  /**
   *
   * @type {string}
   * @memberof DiskConnector
   */
  id: string;
  /**
   *
   * @type {number}
   * @memberof DiskConnector
   */
  index: number;
  /**
   *
   * @type {string}
   * @memberof DiskConnector
   */
  diskInterfaceType: DiskConnectorDiskInterfaceTypeEnum;
  /**
   *
   * @type {string}
   * @memberof DiskConnector
   */
  size: DiskConnectorSizeEnum;
}

export function DiskConnectorFromJSON(json: any): DiskConnector {
  return DiskConnectorFromJSONTyped(json, false);
}

export function DiskConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiskConnector {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    id: json["id"],
    index: json["index"],
    diskInterfaceType: json["diskInterfaceType"],
    size: json["size"]
  };
}

export function DiskConnectorToJSON(value?: DiskConnector | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type === undefined ? null : value.type,
    id: value.id === undefined ? null : value.id,
    index: value.index === undefined ? null : value.index,
    diskInterfaceType: value.diskInterfaceType === undefined ? null : value.diskInterfaceType,
    size: value.size === undefined ? null : value.size
  };
}

/**
 * @export
 * @enum {string}
 */
export enum DiskConnectorTypeEnum {
  DiskConnector = "DiskConnector",
  EthernetConnector = "EthernetConnector",
  PCIConnector = "PCIConnector",
  PowerUnitConnector = "PowerUnitConnector",
  PlatformConnector = "PlatformConnector",
  RAMConnector = "RAMConnector",
  ProcessorConnector = "ProcessorConnector",
  Unknown = "Unknown"
}
/**
 * @export
 * @enum {string}
 */
export enum DiskConnectorDiskInterfaceTypeEnum {
  SAS = "SAS",
  SATA = "SATA",
  U2 = "U2",
  M2 = "M2"
}
/**
 * @export
 * @enum {string}
 */
export enum DiskConnectorSizeEnum {
  THREEPOINTFIVE = "THREE_POINT_FIVE",
  TWOPOINTFIVE = "TWO_POINT_FIVE"
}