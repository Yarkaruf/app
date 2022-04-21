import React from "react";
import cx from "classnames";
import styles from "./spacer.module.scss";

interface ISpacer {
  size: "sm" | "md" | "lg" | "xl";
  horizontal?: boolean;

  className?: string;
}

export const Spacer = (props: ISpacer) => {
  const className = cx(props.className, styles[props.size], props.horizontal && styles.horizontal);

  return <div className={className} />;
};
