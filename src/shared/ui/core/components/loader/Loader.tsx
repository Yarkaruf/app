import React from "react";
import cx from "classnames";
import styles from "./loader.module.scss";

type loaderColor = "primary" | "dark" | "light" | "white" | "currentColor";

interface ILoader {
  color?: loaderColor;
  className?: string;
}

export const Loader = (props: ILoader) => {
  const className = cx(
    styles.loader,
    props.color ? styles[props.color] : styles.primary,
    props.className
  );
  return (
    <div className={className}>
      <div className={styles.loader__inner} />
    </div>
  );
};
