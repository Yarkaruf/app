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
  Subscription,
  SubscriptionFromJSON,
  SubscriptionFromJSONTyped,
  SubscriptionToJSON,
  SubscriptionDiscount,
  SubscriptionDiscountFromJSON,
  SubscriptionDiscountFromJSONTyped,
  SubscriptionDiscountToJSON
} from "./";

/**
 *
 * @export
 * @interface SubscriptionItem
 */
export interface SubscriptionItem {
  /**
   *
   * @type {string}
   * @memberof SubscriptionItem
   */
  monthlyPrice: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionItem
   */
  hourlyPrice: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionItem
   */
  id: string;
  /**
   *
   * @type {boolean}
   * @memberof SubscriptionItem
   */
  discountable: boolean;
  /**
   *
   * @type {string}
   * @memberof SubscriptionItem
   */
  name: string;
  /**
   *
   * @type {object}
   * @memberof SubscriptionItem
   */
  metadata: object;
  /**
   *
   * @type {Subscription}
   * @memberof SubscriptionItem
   */
  subscription: Subscription;
  /**
   *
   * @type {Array<SubscriptionDiscount>}
   * @memberof SubscriptionItem
   */
  discounts?: Array<SubscriptionDiscount>;
}

export function SubscriptionItemFromJSON(json: any): SubscriptionItem {
  return SubscriptionItemFromJSONTyped(json, false);
}

export function SubscriptionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionItem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    monthlyPrice: json["monthlyPrice"],
    hourlyPrice: json["hourlyPrice"],
    id: json["id"],
    discountable: json["discountable"],
    name: json["name"],
    metadata: json["metadata"],
    subscription: SubscriptionFromJSON(json["subscription"]),
    discounts: !exists(json, "discounts")
      ? undefined
      : (json["discounts"] as Array<any>).map(SubscriptionDiscountFromJSON)
  };
}

export function SubscriptionItemToJSON(value?: SubscriptionItem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    monthlyPrice: value.monthlyPrice === undefined ? null : value.monthlyPrice,
    hourlyPrice: value.hourlyPrice === undefined ? null : value.hourlyPrice,
    id: value.id === undefined ? null : value.id,
    discountable: value.discountable === undefined ? null : value.discountable,
    name: value.name === undefined ? null : value.name,
    metadata: value.metadata,
    subscription: SubscriptionToJSON(value.subscription),
    discounts: value.discounts === undefined ? null : (value.discounts as Array<any>).map(SubscriptionDiscountToJSON)
  };
}