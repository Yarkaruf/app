import { defaultConfig } from "shared/api/dcim/dedic.config";
import { Configuration, ConfigurationParameters } from "../generated";
import { DCIMApi as OtherDCIMApi } from "../generated/apis/DCIMApi";
export class DCIMApi extends OtherDCIMApi {
  constructor(config?: ConfigurationParameters) {
    super(new Configuration({ ...defaultConfig, ...config }));
  }
}
