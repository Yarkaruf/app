import React from "react";
import cx from "classnames";
import styles from "./paragraph.module.scss";

export type ParagraphLevel = 1 | 2 | 3 | 4 ;

interface IParagraph {
  children: React.ReactNode;
  level: ParagraphLevel;

  weight?: "normal" | 400 | 700 | "bold";

  uppercase?: boolean;
  isPlaceholder?: boolean;
  isSpan?: boolean;
  className?: string;
}

export const Paragraph = (props: IParagraph) => {
  const paragraphClass: "p1" | "p2" | "p3" | "p4"  = `p${props.level}` as
    | "p1"
    | "p2"
    | "p3"
    | "p4";
  const Tag = props.isSpan ? "span" : "p";

  return (
    <Tag
      className={cx(
        styles[paragraphClass],
        props.className,
        props.uppercase && styles.uppercase,
        props.isPlaceholder && styles.placeholder
      )}
      style={{ fontWeight: props.weight }}
    >
      {props.children}
    </Tag>
  );
};

Paragraph.defaultProps = {
  level: 2
}
