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
 * @interface DedicReinstall
 */
export interface DedicReinstall {
  /**
   *
   * @type {Array<string>}
   * @memberof DedicReinstall
   */
  sshKeyIds: Array<string>;
  /**
   *
   * @type {string}
   * @memberof DedicReinstall
   */
  osId: string;
}

export function DedicReinstallFromJSON(json: any): DedicReinstall {
  return DedicReinstallFromJSONTyped(json, false);
}

export function DedicReinstallFromJSONTyped(json: any, ignoreDiscriminator: boolean): DedicReinstall {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sshKeyIds: json["sshKeyIds"],
    osId: json["osId"]
  };
}

export function DedicReinstallToJSON(value?: DedicReinstall | null): any {
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
