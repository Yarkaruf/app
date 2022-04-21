import * as BackApi from "../_generated/apis";
import { Configuration, ConfigurationParameters } from "../_generated";
import { defaultConfig } from "../config";

export class SupportApi extends BackApi.SupportApi {
  constructor(config?: ConfigurationParameters) {
    super(new Configuration({ ...defaultConfig, ...config }));
  }
}
