import { proxyApi } from "@yoldi/utils/proxy-api";

export default proxyApi(process.env.DEDIC_API_URL!);
