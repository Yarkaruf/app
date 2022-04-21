import React from "react";
import cx from "classnames";
import styles from "./popup.module.scss"

export interface IPopup {
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Popup = (props: IPopup) => (
  <div className={cx(styles.popup, props.className, props.active && styles.active)}>
    <div className={styles.content}>
      {props.children}
    </div>
  </div>
);
