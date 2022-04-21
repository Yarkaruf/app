import { defaultConfig } from "shared/api/dcim/dedic.config";
import { Configuration, ConfigurationParameters, DCIMApi } from "../generated";
import { DedicApi as OtherDedicApi } from "../generated/apis/DedicApi";
export class DedicApi extends OtherDedicApi {
  constructor(config?: ConfigurationParameters) {
    super(new Configuration({ ...defaultConfig, ...config }));
  }
}
