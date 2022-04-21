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
 * @interface UpdateProject
 */
export interface UpdateProject {
  /**
   *
   * @type {string}
   * @memberof UpdateProject
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof UpdateProject
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof UpdateProject
   */
  imageId?: string;
}

export function UpdateProjectFromJSON(json: any): UpdateProject {
  return UpdateProjectFromJSONTyped(json, false);
}

export function UpdateProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json["name"],
    description: json["description"],
    imageId: !exists(json, "imageId") ? undefined : json["imageId"]
  };
}

export function UpdateProjectToJSON(value?: UpdateProject | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name === undefined ? null : value.name,
    description: value.description === undefined ? null : value.description,
    imageId: value.imageId === undefined ? null : value.imageId
  };
}