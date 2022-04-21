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
 * @interface OperatingSystem
 */
export interface OperatingSystem {
  /**
   *
   * @type {string}
   * @memberof OperatingSystem
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof OperatingSystem
   */
  release: string;
  /**
   *
   * @type {string}
   * @memberof OperatingSystem
   */
  distributor: string;
  /**
   *
   * @type {string}
   * @memberof OperatingSystem
   */
  description: string;
  /**
   *
   * @type {object}
   * @memberof OperatingSystem
   */
  meta: object;
}

export function OperatingSystemFromJSON(json: any): OperatingSystem {
  return OperatingSystemFromJSONTyped(json, false);
}

export function OperatingSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperatingSystem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    release: json["release"],
    distributor: json["distributor"],
    description: json["description"],
    meta: json["meta"]
  };
}

export function OperatingSystemToJSON(value?: OperatingSystem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id === undefined ? null : value.id,
    release: value.release === undefined ? null : value.release,
    distributor: value.distributor === undefined ? null : value.distributor,
    description: value.description === undefined ? null : value.description,
    meta: value.meta
  };
}