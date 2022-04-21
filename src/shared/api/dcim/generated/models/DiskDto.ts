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
 * @interface DiskDto
 */
export interface DiskDto {
  /**
   *
   * @type {string}
   * @memberof DiskDto
   */
  readonly type: DiskDtoTypeEnum;
  /**
   *
   * @type {object}
   * @memberof DiskDto
   */
  outConnector: object;
  /**
   *
   * @type {Array<object>}
   * @memberof DiskDto
   */
  inConnectors: Array<object>;
  /**
   *
   * @type {string}
   * @memberof DiskDto
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof DiskDto
   */
  manufacturerId: string;
  /**
   *
   * @type {string}
   * @memberof DiskDto
   */
  diskType: DiskDtoDiskTypeEnum;
  /**
   *
   * @type {number}
   * @memberof DiskDto
   */
  volume: number;
}

export function DiskDtoFromJSON(json: any): DiskDto {
  return DiskDtoFromJSONTyped(json, false);
}

export function DiskDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiskDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    outConnector: json["outConnector"],
    inConnectors: json["inConnectors"],
    name: json["name"],
    manufacturerId: json["manufacturerId"],
    diskType: json["diskType"],
    volume: json["volume"]
  };
}

export function DiskDtoToJSON(value?: DiskDto | null): any {
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
    manufacturerId: value.manufacturerId === undefined ? null : value.manufacturerId,
    diskType: value.diskType === undefined ? null : value.diskType,
    volume: value.volume === undefined ? null : value.volume
  };
}

/**
 * @export
 * @enum {string}
 */
export enum DiskDtoTypeEnum {
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
export enum DiskDtoDiskTypeEnum {
  SSD = "SSD",
  HDD = "HDD"
}