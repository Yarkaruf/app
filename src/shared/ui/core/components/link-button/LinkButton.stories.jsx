import React from "react";
import { LinkButton } from "./LinkButton";

export default {
  title: "containers/LinkButton",
  component: LinkButton,
  argTypes: {
    onClick: { action: "onClick" }
  }
};

export const basic = args => (
  <LinkButton onClick={() => args.onClick()}>
    <>Basic LinkButton</>
  </LinkButton>
);
