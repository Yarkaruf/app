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
 * @interface VdsRestore
 */
export interface VdsRestore {
  /**
   *
   * @type {string}
   * @memberof VdsRestore
   */
  backupId: string;
}

export function VdsRestoreFromJSON(json: any): VdsRestore {
  return VdsRestoreFromJSONTyped(json, false);
}

export function VdsRestoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): VdsRestore {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    backupId: json["backupId"]
  };
}

export function VdsRestoreToJSON(value?: VdsRestore | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    backupId: value.backupId === undefined ? null : value.backupId
  };
}
