import React, { MutableRefObject, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const KeyName = {
  ESC: ["Escape", "Esc"]
};

export const useKeyDown = (id: string | string[] | string[][], handler: (e?: KeyboardEvent) => void) => {
  React.useEffect(() => {
    const keys = [id].flat(Infinity);

    const handle = (e: KeyboardEvent) => {
      if (keys.includes(e.key)) handler(e);
    };

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [id, handler]);
};

export const useDidMount = (func: () => any) => {
  useEffect(() => {
    func();
  }, []);
};

export const useInterval = (callback: (...args: any) => void, delay: number) => {
  const savedCallback = useRef((...args: any) => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args: any) => savedCallback.current(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useClickOutside = <T extends any>(
  ref: MutableRefObject<T | undefined>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || (ref.current as any).contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export const usePageQueryStr = (name: string): string | undefined => {
  const router = useRouter();
  if (!router.query[name]) return undefined;
  return router.query[name] + "";
};
export const usePageQueryInt = (name: string) => {
  const router = useRouter();
  if (!router.query[name]) return undefined;
  return parseInt(router.query[name] as string);
};
