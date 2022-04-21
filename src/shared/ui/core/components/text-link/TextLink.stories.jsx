import React from "react";
import { TextLink } from "./TextLink";

export default {
  title: "containers/TextLink",
  component: TextLink
};

export const basic = () => (
  <TextLink href="" as="">
    <>Basic link</>
  </TextLink>
);

export const targetBlank = () => (
  <TextLink href="" as="" targetBlank>
    <>Target _blank</>
  </TextLink>
);
