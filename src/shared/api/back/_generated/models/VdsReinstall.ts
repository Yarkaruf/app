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
 * @interface VdsReinstall
 */
export interface VdsReinstall {
  /**
   *
   * @type {Array<string>}
   * @memberof VdsReinstall
   */
  sshKeyIds: Array<string>;
  /**
   *
   * @type {string}
   * @memberof VdsReinstall
   */
  osId: string;
}

export function VdsReinstallFromJSON(json: any): VdsReinstall {
  return VdsReinstallFromJSONTyped(json, false);
}

export function VdsReinstallFromJSONTyped(json: any, ignoreDiscriminator: boolean): VdsReinstall {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sshKeyIds: json["sshKeyIds"],
    osId: json["osId"]
  };
}

export function VdsReinstallToJSON(value?: VdsReinstall | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sshKeyIds: value.sshKeyIds === undefined ? null : value.sshKeyIds,
    osId: value.osId === undefined ? null : value.osId
  };
}
