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
 * @interface CreateProject
 */
export interface CreateProject {
  /**
   *
   * @type {string}
   * @memberof CreateProject
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof CreateProject
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CreateProject
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof CreateProject
   */
  imageId?: string;
}

export function CreateProjectFromJSON(json: any): CreateProject {
  return CreateProjectFromJSONTyped(json, false);
}

export function CreateProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    userId: json["userId"],
    name: json["name"],
    description: json["description"],
    imageId: !exists(json, "imageId") ? undefined : json["imageId"]
  };
}

export function CreateProjectToJSON(value?: CreateProject | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    userId: value.userId === undefined ? null : value.userId,
    name: value.name === undefined ? null : value.name,
    description: value.description === undefined ? null : value.description,
    imageId: value.imageId === undefined ? null : value.imageId
  };
}
