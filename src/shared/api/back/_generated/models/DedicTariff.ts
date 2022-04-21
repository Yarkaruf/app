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
 * @interface DedicTariff
 */
export interface DedicTariff {
  /**
   *
   * @type {string}
   * @memberof VdsTariff
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof VdsTariff
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof VdsTariff
   */
  cores: number;
  /**
   *
   * @type {number}
   * @memberof VdsTariff
   */
  ram: number;
  /**
   *
   * @type {number}
   * @memberof VdsTariff
   */
  storage: string;
  /**
   *
   * @type {string}
   * @memberof VdsTariff
   */
  instanceMonthPrice: string;
  /**
   *
   * @type {string}
   * @memberof VdsTariff
   */
  instanceHourPrice: string;
  /**
   *
   * @type {string}
   * @memberof VdsTariff
   */
  proBackupMonthPrice: string;
  /**
   *
   * @type {string}
   * @memberof VdsTariff
   */
  cpu: string;
  /**
   *
   * @type {string}
   * @memberof VdsTariff
   */
  geforce: number;
  /**
   *
   * @type {number}
   * @memberof VdsTariff
   */
}

export function DedicTariffFromJSON(json: any): DedicTariff {
  return DedicTariffFromJSONTyped(json, false);
}

export function DedicTariffFromJSONTyped(json: any, ignoreDiscriminator: boolean): DedicTariff {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    cores: json["cores"],
    ram: json["ram"],
    storage: json["storage"],
    instanceMonthPrice: json["instanceMonthPrice"],
    instanceHourPrice: json["instanceHourPrice"],
    proBackupMonthPrice: json["proBackupMonthPrice"],
    cpu: json["cpu"],
    geforce: json["geforce"]
  };
}

export function DedicTariffToJSON(value?: DedicTariff | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    instanceMonthPrice: value.instanceMonthPrice === undefined ? null : value.instanceMonthPrice,
    id: value.id === undefined ? null : value.id,
    name: value.name === undefined ? null : value.name,
    cores: value.cores === undefined ? null : value.cores,
    ram: value.ram === undefined ? null : value.ram,
    storage: value.storage === undefined ? null : value.storage
  };
}
