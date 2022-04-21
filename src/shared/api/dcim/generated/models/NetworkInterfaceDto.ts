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
 * @interface NetworkInterfaceDto
 */
export interface NetworkInterfaceDto {
  /**
   *
   * @type {string}
   * @memberof NetworkInterfaceDto
   */
  readonly type: NetworkInterfaceDtoTypeEnum;
  /**
   *
   * @type {object}
   * @memberof NetworkInterfaceDto
   */
  outConnector: object;
  /**
   *
   * @type {Array<object>}
   * @memberof NetworkInterfaceDto
   */
  inConnectors: Array<object>;
  /**
   *
   * @type {string}
   * @memberof NetworkInterfaceDto
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof NetworkInterfaceDto
   */
  manufacturerId: string;
}

export function NetworkInterfaceDtoFromJSON(json: any): NetworkInterfaceDto {
  return NetworkInterfaceDtoFromJSONTyped(json, false);
}

export function NetworkInterfaceDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkInterfaceDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    outConnector: json["outConnector"],
    inConnectors: json["inConnectors"],
    name: json["name"],
    manufacturerId: json["manufacturerId"]
  };
}

export function NetworkInterfaceDtoToJSON(value?: NetworkInterfaceDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    outConnector: value.outConnector,
    inConnectors: value.inConnectors === undefined ? null : value.inConnectors,
    name: value.name === undefined ? null : value.name,
    manufacturerId: value.manufacturerId === undefined ? null : value.manufacturerId
  };
}

/**
 * @export
 * @enum {string}
 */
export enum NetworkInterfaceDtoTypeEnum {
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
