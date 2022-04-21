import { delay } from "@yoldi/utils/helpers";

export const retry404 = async <Result>(method: () => Promise<Result>): Promise<Result> => {
  while (true) {
    try {
      return await method();
    } catch (e) {
      if (e?.status === 404) {
        await delay(100);
        continue;
      }
      throw e;
    }
  }
};
