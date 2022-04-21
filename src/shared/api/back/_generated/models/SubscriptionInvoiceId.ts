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
 * @interface SubscriptionInvoiceId
 */
export interface SubscriptionInvoiceId {
  /**
   *
   * @type {string}
   * @memberof SubscriptionInvoiceId
   */
  invoiceId: string;
}

export function SubscriptionInvoiceIdFromJSON(json: any): SubscriptionInvoiceId {
  return SubscriptionInvoiceIdFromJSONTyped(json, false);
}

export function SubscriptionInvoiceIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionInvoiceId {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    invoiceId: json["invoiceId"]
  };
}

export function SubscriptionInvoiceIdToJSON(value?: SubscriptionInvoiceId | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    invoiceId: value.invoiceId === undefined ? null : value.invoiceId
  };
}
