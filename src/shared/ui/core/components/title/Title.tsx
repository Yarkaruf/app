import React from "react";
import cx from "classnames";
import style from "./title.module.scss";

export type TitleLevel = 1 | 2 | 3 | 4;

interface ITitle {
  level: TitleLevel;
  children: React.ReactNode;
  customTag?: boolean;
  className?: string;
}

export const Title = (props: ITitle) => {
  const headerTag: "h1" | "h2" | "h3" | "h4" = `h${props.level}` as "h1" | "h2" | "h3" | "h4";
  const Tag = props.customTag ? "div" : headerTag;

  return <Tag className={cx(style[headerTag], props.className)}>{props.children}</Tag>;
};
