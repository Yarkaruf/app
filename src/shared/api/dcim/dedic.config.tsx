import nodeFetch from "node-fetch";

export const defaultConfig =
  typeof window !== "undefined"
    ? // client
      {
        basePath: ""
      }
    : // server
      {
        basePath: process.env.DEDIC_API_URL,
        fetchApi: nodeFetch as any
      };
