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
  ServerConfig,
  ServerConfigFromJSON,
  ServerConfigFromJSONTyped,
  ServerConfigToJSON,
  ServerCredentialsCollection,
  ServerCredentialsCollectionFromJSON,
  ServerCredentialsCollectionFromJSONTyped,
  ServerCredentialsCollectionToJSON,
  ServerInterface,
  ServerInterfaceFromJSON,
  ServerInterfaceFromJSONTyped,
  ServerInterfaceToJSON,
  ServerRole,
  ServerRoleFromJSON,
  ServerRoleFromJSONTyped,
  ServerRoleToJSON,
  ServerTestResultDto,
  ServerTestResultDtoFromJSON,
  ServerTestResultDtoFromJSONTyped,
  ServerTestResultDtoToJSON
} from "./";

/**
 *
 * @export
 * @interface Server
 */
export interface Server {
  /**
   *
   * @type {number}
   * @memberof Server
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  status: ServerStatusEnum;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  primaryIp4?: string;
  /**
   *
   * @type {number}
   * @memberof Server
   */
  dataCenterId?: number;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  primaryIp6?: string;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  type: ServerTypeEnum;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  name: string | undefined;
  /**
   *
   * @type {ServerRole}
   * @memberof Server
   */
  role?: ServerRole;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  serial?: string;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  assetTag: string;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  platformId: string | undefined;
  /**
   *
   * @type {number}
   * @memberof Server
   */
  position: number;
  /**
   *
   * @type {Array<ServerInterface>}
   * @memberof Server
   */
  interfaces?: Array<ServerInterface>;
  /**
   *
   * @type {number}
   * @memberof Server
   */
  rackId: number | undefined;
  /**
   *
   * @type {ServerConfig}
   * @memberof Server
   */
  config: ServerConfig;
  /**
   *
   * @type {ServerCredentialsCollection}
   * @memberof Server
   */
  credentials?: ServerCredentialsCollection;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  tariffId: string | undefined;
  /**
   *
   * @type {string}
   * @memberof Server
   */
  userId: string | undefined;
  /**
   *
   * @type {Array<ServerTestResultDto>}
   * @memberof Server
   */
  tests?: Array<ServerTestResultDto>;
}

export function ServerFromJSON(json: any): Server {
  return ServerFromJSONTyped(json, false);
}

export function ServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Server {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    status: json["status"],
    primaryIp4: !exists(json, "primaryIp4") ? undefined : json["primaryIp4"],
    dataCenterId: !exists(json, "dataCenterId") ? undefined : json["dataCenterId"],
    primaryIp6: !exists(json, "primaryIp6") ? undefined : json["primaryIp6"],
    type: json["type"],
    name: json["name"] === null ? undefined : json["name"],
    role: !exists(json, "role") ? undefined : ServerRoleFromJSON(json["role"]),
    serial: !exists(json, "serial") ? undefined : json["serial"],
    assetTag: json["assetTag"],
    platformId: json["platformId"] === null ? undefined : json["platformId"],
    position: json["position"],
    interfaces: !exists(json, "interfaces")
      ? undefined
      : (json["interfaces"] as Array<any>).map(ServerInterfaceFromJSON),
    rackId: json["rackId"] === null ? undefined : json["rackId"],
    config: ServerConfigFromJSON(json["config"]),
    credentials: !exists(json, "credentials") ? undefined : ServerCredentialsCollectionFromJSON(json["credentials"]),
    tariffId: json["tariffId"] === null ? undefined : json["tariffId"],
    userId: json["userId"] === null ? undefined : json["userId"],
    tests: !exists(json, "tests") ? undefined : (json["tests"] as Array<any>).map(ServerTestResultDtoFromJSON)
  };
}

export function ServerToJSON(value?: Server | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id === undefined ? null : value.id,
    status: value.status === undefined ? null : value.status,
    primaryIp4: value.primaryIp4 === undefined ? null : value.primaryIp4,
    dataCenterId: value.dataCenterId === undefined ? null : value.dataCenterId,
    primaryIp6: value.primaryIp6 === undefined ? null : value.primaryIp6,
    type: value.type === undefined ? null : value.type,
    name: value.name === undefined ? null : value.name,
    role: ServerRoleToJSON(value.role),
    serial: value.serial === undefined ? null : value.serial,
    assetTag: value.assetTag === undefined ? null : value.assetTag,
    platformId: value.platformId === undefined ? null : value.platformId,
    position: value.position === undefined ? null : value.position,
    interfaces: value.interfaces === undefined ? null : (value.interfaces as Array<any>).map(ServerInterfaceToJSON),
    rackId: value.rackId === undefined ? null : value.rackId,
    config: ServerConfigToJSON(value.config),
    credentials: ServerCredentialsCollectionToJSON(value.credentials),
    tariffId: value.tariffId === undefined ? null : value.tariffId,
    userId: value.userId === undefined ? null : value.userId,
    tests: value.tests === undefined ? null : (value.tests as Array<any>).map(ServerTestResultDtoToJSON)
  };
}

/**
 * @export
 * @enum {string}
 */
export enum ServerStatusEnum {
  Planned = "planned",
  Active = "active",
  Offline = "offline",
  Failed = "failed",
  Staged = "staged"
}
/**
 * @export
 * @enum {string}
 */
export enum ServerTypeEnum {
  SWITCH = "SWITCH",
  SERVER = "SERVER",
  CUSTOMERHYPERVISOR = "CUSTOMER_HYPERVISOR",
  CUSTOMERSERVER = "CUSTOMER_SERVER"
}