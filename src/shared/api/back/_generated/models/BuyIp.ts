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
 * @interface BuyIp
 */
export interface BuyIp {
  /**
   *
   * @type {string}
   * @memberof BuyIp
   */
  vdsId?: string;
  /**
   *
   * @type {string}
   * @memberof BuyIp
   */
  dedicId?: string;
  /**
   *
   * @type {number}
   * @memberof BuyIp
   */
  version: number;
  /**
   *
   * @type {string}
   * @memberof BuyIp
   */
  dataCenterName: string;
}

export function BuyIpFromJSON(json: any): BuyIp {
  return BuyIpFromJSONTyped(json, false);
}

export function BuyIpFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuyIp {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    vdsId: !exists(json, "vdsId") ? undefined : json["vdsId"],
    dedicId: !exists(json, "dedicId") ? undefined : json["dedicId"],
    version: json["version"],
    dataCenterName: json["dataCenterName"]
  };
}

export function BuyIpToJSON(value?: BuyIp | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    vdsId: value.vdsId === undefined ? null : value.vdsId,
    dedicId: value.dedicId === undefined ? null : value.dedicId,
    version: value.version === undefined ? null : value.version,
    dataCenterName: value.dataCenterName === undefined ? null : value.dataCenterName
  };
}
