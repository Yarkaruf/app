import { proxyApi } from "@yoldi/utils/proxy-api";

export default proxyApi(process.env.DCIM_API_URL!);
