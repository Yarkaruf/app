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
import { AssetDto, AssetDtoFromJSON, AssetDtoFromJSONTyped, AssetDtoToJSON } from "./";

/**
 *
 * @export
 * @interface CreateManyAssetDto
 */
export interface CreateManyAssetDto {
  /**
   *
   * @type {Array<AssetDto>}
   * @memberof CreateManyAssetDto
   */
  bulk: Array<AssetDto>;
}

export function CreateManyAssetDtoFromJSON(json: any): CreateManyAssetDto {
  return CreateManyAssetDtoFromJSONTyped(json, false);
}

export function CreateManyAssetDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateManyAssetDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    bulk: (json["bulk"] as Array<any>).map(AssetDtoFromJSON)
  };
}

export function CreateManyAssetDtoToJSON(value?: CreateManyAssetDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    bulk: (value.bulk as Array<any>).map(AssetDtoToJSON)
  };
}