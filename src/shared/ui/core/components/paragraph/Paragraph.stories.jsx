import React from "react";
import { Paragraph } from "./Paragraph";

export default {
  title: "containers/Paragraph",
  component: Paragraph
};

export const p1 = () => <Paragraph level={1}>Paragraph level 1</Paragraph>;
export const p2 = () => <Paragraph level={2}>Paragraph level 2</Paragraph>;
export const p3 = () => <Paragraph level={3}>Paragraph level 3</Paragraph>;
export const uppercase = () => (
  <Paragraph level={1} uppercase>
    Paragraph level 1 uppercase
  </Paragraph>
);
export const span = () => (
  <Paragraph level={1} isSpan>
    Span level 1
  </Paragraph>
);
export const placeholder = () => (
  <Paragraph level={1} isPlaceholder>
    Placeholder level 1
  </Paragraph>
);
