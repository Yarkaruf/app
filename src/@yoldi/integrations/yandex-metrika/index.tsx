import React from "react";
import Router from "next/router";
import html from "./html";

export const ym = (...args: any[]) => {
  if (typeof window === "undefined") return;
  (window as any).ym(process.env.YANDEX_METRIKA_COUNTER, ...args);
};

Router.events.on("routeChangeStart", ({ url, as, options }) => {
  ym("hit", as);
  return true;
});

export const ymReachGoal = (target: string) => {
  ym("reachGoal", target);
};

export default html;
