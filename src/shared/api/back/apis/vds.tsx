import * as BackApi from "../_generated/apis";
import { Configuration, ConfigurationParameters } from "../_generated";
import { defaultConfig } from "../config";

export class VdsApi extends BackApi.VdsApi {
  constructor(config?: ConfigurationParameters) {
    super(new Configuration({ ...defaultConfig, ...config }));
  }
}
