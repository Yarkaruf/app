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
 * @interface RamConfigurationDto
 */
export interface RamConfigurationDto {
  /**
   *
   * @type {number}
   * @memberof RamConfigurationDto
   */
  volume: number;
  /**
   *
   * @type {string}
   * @memberof RamConfigurationDto
   */
  type: RamConfigurationDtoTypeEnum;
}

export function RamConfigurationDtoFromJSON(json: any): RamConfigurationDto {
  return RamConfigurationDtoFromJSONTyped(json, false);
}

export function RamConfigurationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RamConfigurationDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    volume: json["volume"],
    type: json["type"]
  };
}

export function RamConfigurationDtoToJSON(value?: RamConfigurationDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    volume: value.volume === undefined ? null : value.volume,
    type: value.type === undefined ? null : value.type
  };
}

/**
 * @export
 * @enum {string}
 */
export enum RamConfigurationDtoTypeEnum {
  DDR2 = "DDR2",
  DDR3 = "DDR3",
  DDR4 = "DDR4",
  DDR5 = "DDR5"
}