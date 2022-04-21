import React from "react";
import { Loader } from "./Loader";

export default {
  title: "Components/loader",
  component: Loader
};

export const basic = () => (
  <div style={{ backgroundColor: "#0058B4", width: 50, height: 20 }}>
    <Loader />
  </div>
);

export const primary = () => (
  <div style={{ width: 50, height: 20 }}>
    <Loader color="primary" />
  </div>
);

export const secondary = () => (
  <div style={{ width: 50, height: 20 }}>
    <Loader color="secondary" />
  </div>
);
