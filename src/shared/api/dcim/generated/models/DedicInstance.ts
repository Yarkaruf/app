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
 * @interface DedicInstance
 */
export interface DedicInstance {
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  subscriptionId: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  projectId: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  dataCenterId: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  osId: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  tariffId: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  status: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  primaryIp4: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  primaryIp6: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof DedicInstance
   */
  hostname: string;
  /**
   *
   * @type {Date}
   * @memberof DedicInstance
   */
  createdAt: Date;
}

export function DedicInstanceFromJSON(json: any): DedicInstance {
  return DedicInstanceFromJSONTyped(json, false);
}

export function DedicInstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DedicInstance {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    subscriptionId: json["subscriptionId"],
    projectId: json["projectId"],
    dataCenterId: json["dataCenterId"],
    osId: json["osId"],
    tariffId: json["tariffId"],
    status: json["status"],
    primaryIp4: json["primaryIp4"],
    primaryIp6: json["primaryIp6"],
    password: json["password"],
    name: json["name"],
    hostname: json["hostname"],
    createdAt: new Date(json["createdAt"])
  };
}

export function DedicInstanceToJSON(value?: DedicInstance | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id === undefined ? null : value.id,
    subscriptionId: value.subscriptionId === undefined ? null : value.subscriptionId,
    projectId: value.projectId === undefined ? null : value.projectId,
    dataCenterId: value.dataCenterId === undefined ? null : value.dataCenterId,
    osId: value.osId === undefined ? null : value.osId,
    tariffId: value.tariffId === undefined ? null : value.tariffId,
    status: value.status === undefined ? null : value.status,
    primaryIp4: value.primaryIp4 === undefined ? null : value.primaryIp4,
    primaryIp6: value.primaryIp6 === undefined ? null : value.primaryIp6,
    password: value.password === undefined ? null : value.password,
    name: value.name === undefined ? null : value.name,
    hostname: value.hostname === undefined ? null : value.hostname,
    createdAt: value.createdAt.toISOString()
  };
}