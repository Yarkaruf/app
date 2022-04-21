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

import * as runtime from "../runtime";
import useSWR, { ConfigInterface } from "swr";

import { AdminName, AdminNameFromJSON, AdminNameToJSON } from "../models";

interface AdminNamesRequest {
  ids: Array<string>;
}

/**
 *
 */
export class AdminApi extends runtime.BaseAPI {
  /**
   */
  private async adminNamesRaw(requestParameters: AdminNamesRequest): Promise<runtime.ApiResponse<Array<AdminName>>> {
    this.adminNamesValidation(requestParameters);
    const context = this.adminNamesContext(requestParameters);
    const response = await this.request(context);

    return new runtime.JSONApiResponse(response, jsonValue => jsonValue.map(AdminNameFromJSON));
  }

  /**
   */
  private adminNamesValidation(requestParameters: AdminNamesRequest) {
    if (requestParameters.ids === null || requestParameters.ids === undefined) {
      throw new runtime.RequiredError(
        "ids",
        "Required parameter requestParameters.ids was null or undefined when calling adminNames."
      );
    }
  }

  /**
   */
  private adminNamesContext(requestParameters: AdminNamesRequest): runtime.RequestOpts {
    const queryParameters: any = {};

    if (requestParameters.ids) {
      queryParameters["ids"] = requestParameters.ids;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    return {
      path: `/api/admin/names`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }

  /**
   */
  adminNames = async (ids: Array<string>): Promise<Array<AdminName>> => {
    const response = await this.adminNamesRaw({ ids: ids });
    return await response.value();
  };

  useAdminNames(ids: Array<string>, config?: ConfigInterface<Array<AdminName>, Error>) {
    let valid = true;

    if (ids === null || ids === undefined || Number.isNaN(ids)) {
      valid = false;
    }

    const context = this.adminNamesContext({ ids: ids! });
    const { headers, ...swrKey } = context;
    return useSWR(JSON.stringify(swrKey), valid ? () => this.adminNames(ids!) : undefined, config);
  }
}
