import React, { CSSProperties, useState } from "react";
import cx from "classnames";
import { Loader } from "../loader";
import styles from "./button.module.scss";

export interface IButton {
  type?: "submit" | "button" | "reset";

  outline?: boolean;
  fullWidth?: boolean;
  autoWith?: boolean;

  loading?: boolean;

  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  id?: string;
  disabled?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;

  isSpan?: boolean;
}

export const Button = (props: IButton) => {
  const [_loading, setLoading] = useState(false);
  const loading = _loading || props.loading;

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || props.disabled || !props.onClick) return;
    try {
      setLoading(true);
      await props.onClick?.(e);
    } finally {
      setLoading(false);
    }
  };

  const className = cx(
    styles.button,
    props.outline && styles.outline,
    props.disabled && styles.disabled,
    props.fullWidth && styles.full_width,
    props.autoWith && styles.auto_width,
    props.className
  );

  if (props.isSpan) {
    return (
      <span className={className} onClick={onClick} style={props.style}>
        {loading && <Loader color={"currentColor"} className={styles.loader} />}
        <div className={cx(styles.button__content, loading && styles.button__content_transparent)}>{props.children}</div>
    </span>
    );
  }

  return (
    <button type={props.type} className={className} disabled={props.disabled} onClick={onClick} style={props.style}>
      {loading && <Loader color={"currentColor"} className={styles.loader} />}
      <div className={cx(styles.button__content, loading && styles.button__content_transparent)}>{props.children}</div>
    </button>
  );
};


