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

/**
 *
 * @export
 * @enum {string}
 */
export enum FinanceHistoryPaymentSystem {
  Paypal = "paypal",
  Card = "card",
  Balance = "balance",
  Modulbank = "modulbank",
  Stripe = "stripe",
  Bitcoin = "bitcoin"
}

export function FinanceHistoryPaymentSystemFromJSON(json: any): FinanceHistoryPaymentSystem {
  return FinanceHistoryPaymentSystemFromJSONTyped(json, false);
}

export function FinanceHistoryPaymentSystemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FinanceHistoryPaymentSystem {
  return json as FinanceHistoryPaymentSystem;
}

export function FinanceHistoryPaymentSystemToJSON(value?: FinanceHistoryPaymentSystem | null): any {
  return value as any;
}