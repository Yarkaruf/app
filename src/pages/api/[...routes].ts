import { proxyApi } from "@yoldi/utils/proxy-api";

export default proxyApi(process.env.API_URL!);
