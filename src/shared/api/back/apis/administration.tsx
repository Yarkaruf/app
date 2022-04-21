import * as BackApi from "../_generated/apis";
import { Configuration, ConfigurationParameters } from "../_generated";
import { defaultConfig } from "../config";

export class AdministrationApi extends BackApi.AdministrationApi {
  constructor(config?: ConfigurationParameters) {
    super(new Configuration({ ...defaultConfig, ...config }));
  }
}
