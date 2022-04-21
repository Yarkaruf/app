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
import { DiskDto, DiskDtoFromJSON, DiskDtoFromJSONTyped, DiskDtoToJSON } from "./";

/**
 *
 * @export
 * @interface CreateManyDiskDto
 */
export interface CreateManyDiskDto {
  /**
   *
   * @type {Array<DiskDto>}
   * @memberof CreateManyDiskDto
   */
  bulk: Array<DiskDto>;
}

export function CreateManyDiskDtoFromJSON(json: any): CreateManyDiskDto {
  return CreateManyDiskDtoFromJSONTyped(json, false);
}

export function CreateManyDiskDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateManyDiskDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    bulk: (json["bulk"] as Array<any>).map(DiskDtoFromJSON)
  };
}

export function CreateManyDiskDtoToJSON(value?: CreateManyDiskDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    bulk: (value.bulk as Array<any>).map(DiskDtoToJSON)
  };
}