import { toMap } from "../helpers";

type PromisesObject<T> = { [key: string]: Promise<T> };

type extractPromiseType<Type> = Type extends Promise<infer T> ? T : never;

type PromiseResult<TObj> = { [P in keyof TObj]: extractPromiseType<TObj[P]> };

declare global {
  interface PromiseConstructor {
    allValues<TObj>(object: TObj): Promise<PromiseResult<TObj>>;
  }
}

Promise.allValues = async function<TObj>(object: TObj): Promise<PromiseResult<TObj>> {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const results = await Promise.all(values);

  return keys
    .map((it, key) => ({
      key: it,
      value: results[key]
    }))
    .reduce(toMap, {}) as PromiseResult<TObj>;
};

export default {};
