// await delay(1000)
export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// [1, 2, 2, 2, 3, 3].filter(onlyUnique) == [1, 2, 3]
export const onlyUnique = <T>(value: T, index: number, array: T[]) => array.indexOf(value) === index;

// range(4, 10) === [4, 5, 6, 7, 8, 9, 10]
export const range = (from: number, to: number): number[] => {
  const res = [];

  if (from < to) {
    for (let i = from; i <= to; i++) {
      res.push(i);
    }
  } else {
    for (let i = from; i >= to; i--) {
      res.push(i);
    }
  }

  return res;
};

// array(5, it => it) => [0, 1, 2, 3, 4]
export const array = <T = any>(size: number, init: (key: number) => T) => {
  return range(0, size - 1).map(init);
};

// duplicate("123", 3) => ["123", "123", "123"]
export const duplicate = <T = any>(item: string, count: number) => array(count, () => item);

export const isBrowser = () => typeof window !== "undefined";

export const isServer = () => typeof window === "undefined";

export const isDev = () => process.env.NODE_ENV !== "production";

export const isProd = () => process.env.NODE_ENV !== "production";

export const pluralize = (
  num: number | undefined | null,
  options: {
    one: (num: number) => string;
    few: (num: number) => string;
    many: (num: number) => string;

    [valueNum: string]: (num: number) => string;
  }
) => {
  if (options["value" + num]) return options["value" + num](num!);

  if (!num) return options.many(0);

  const _num = Math.abs(num);

  const res = _num % 100;
  if (11 <= res && res <= 20) return options.many(num);

  const rest = _num % 10;
  if (rest === 0) return options.many(num);
  if (rest === 1) return options.one(num);
  if (rest < 5) return options.few(num);
  return options.many(num);
};

export const unflat = <T extends any>(arr: T[], step: number) => {
  const size = Math.ceil(arr.length / step);
  const result = array(size, it => [it * step, it * step + step]);
  return result.map(([start, end]) => arr.slice(start, end));
};

export function shallowEqualObjects(objA: any, objB: any) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    const key = aKeys[i];

    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }

  return true;
}

export const toMap = <Value extends any>(
  obj: { [key: string]: Value },
  { key, value }: { key: string; value: Value }
) => {
  obj[key] = value;
  return obj;
};

export const toIdMap = <Value extends { id: string }>(obj: { [id: string]: Value }, value: Value) => {
  obj[value.id] = value;
  return obj;
};

export const createIdMap = <Value extends { id: string }>(arr?: Value[]): { [id: string]: Value } => {
  return (arr || []).reduce(toIdMap, {});
};

export const onlyDigits = (value: string) => value.replace(/[^0-9]/g, "");
