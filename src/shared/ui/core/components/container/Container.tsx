import React from "react";
import styles from "./container.module.scss";
import cx from "classnames";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export const Container = (props: IContainer) => (
  <div className={cx(styles.container, props.className)}>{props.children}</div>
);
