import React from "react";
import styles from "shared/ui/core/components/hr/hr.module.scss";
import cx from "classnames";

interface IHr {
  className?: string;
}

export const Hr = (props: IHr) => <div className={cx(styles.hr, props.className)} />;
