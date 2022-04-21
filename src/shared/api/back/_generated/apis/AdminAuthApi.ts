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

import { SignIn, SignInFromJSON, SignInToJSON, Token, TokenFromJSON, TokenToJSON } from "../models";

interface SignInRequest {
  signIn: SignIn;
}

/**
 *
 */
export class AdminAuthApi extends runtime.BaseAPI {
  /**
   */
  private async refreshAccessTokenRaw(): Promise<runtime.ApiResponse<Token>> {
    this.refreshAccessTokenValidation();
    const context = this.refreshAccessTokenContext();
    const response = await this.request(context);

    return new runtime.JSONApiResponse(response, jsonValue => TokenFromJSON(jsonValue));
  }

  /**
   */
  private refreshAccessTokenValidation() {}

  /**
   */
  private refreshAccessTokenContext(): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    return {
      path: `/api/admin/auth/refresh-access-token`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }

  /**
   */
  refreshAccessToken = async (): Promise<Token> => {
    const response = await this.refreshAccessTokenRaw();
    return await response.value();
  };

  /**
   */
  private async signInRaw(requestParameters: SignInRequest): Promise<runtime.ApiResponse<Token>> {
    this.signInValidation(requestParameters);
    const context = this.signInContext(requestParameters);
    const response = await this.request(context);

    return new runtime.JSONApiResponse(response, jsonValue => TokenFromJSON(jsonValue));
  }

  /**
   */
  private signInValidation(requestParameters: SignInRequest) {
    if (requestParameters.signIn === null || requestParameters.signIn === undefined) {
      throw new runtime.RequiredError(
        "signIn",
        "Required parameter requestParameters.signIn was null or undefined when calling signIn."
      );
    }
  }

  /**
   */
  private signInContext(requestParameters: SignInRequest): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    return {
      path: `/api/admin/auth/sign-in`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: SignInToJSON(requestParameters.signIn)
    };
  }

  /**
   */
  signIn = async (signIn: SignIn): Promise<Token> => {
    const response = await this.signInRaw({ signIn: signIn });
    return await response.value();
  };
}
