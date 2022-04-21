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
import {
  Asset,
  AssetFromJSON,
  AssetFromJSONTyped,
  AssetToJSON,
  AssetTreeLeaf,
  AssetTreeLeafFromJSON,
  AssetTreeLeafFromJSONTyped,
  AssetTreeLeafToJSON
} from "./";

/**
 *
 * @export
 * @interface AssetTree
 */
export interface AssetTree {
  /**
   *
   * @type {Asset}
   * @memberof AssetTree
   */
  asset: Asset;
  /**
   *
   * @type {Array<AssetTreeLeaf>}
   * @memberof AssetTree
   */
  children?: Array<AssetTreeLeaf>;
  /**
   *
   * @type {AssetTreeLeaf}
   * @memberof AssetTree
   */
  parent?: AssetTreeLeaf;
}

export function AssetTreeFromJSON(json: any): AssetTree {
  return AssetTreeFromJSONTyped(json, false);
}

export function AssetTreeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetTree {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    asset: AssetFromJSON(json["asset"]),
    children: !exists(json, "children") ? undefined : (json["children"] as Array<any>).map(AssetTreeLeafFromJSON),
    parent: !exists(json, "parent") ? undefined : AssetTreeLeafFromJSON(json["parent"])
  };
}

export function AssetTreeToJSON(value?: AssetTree | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    asset: AssetToJSON(value.asset),
    children: value.children === undefined ? null : (value.children as Array<any>).map(AssetTreeLeafToJSON),
    parent: AssetTreeLeafToJSON(value.parent)
  };
}
