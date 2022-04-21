import React, { forwardRef, useState } from "react";
import cx from "classnames";
import styles from "./link-button.module.scss";
import { Loader } from "shared/ui/core/components/loader";
import { Paragraph } from "shared/ui/core/components/paragraph";

interface ILinkButton {
  children: React.ReactNode;
  onClick?: () => any;
  className?: string;
  appearance: "primary" | "dark" | "light" | "white";
  bordered?: boolean;
  disabled?: boolean;
  active?: boolean;
}

export const LinkButton = forwardRef<HTMLButtonElement, ILinkButton>((props: ILinkButton, ref) => {
  const [loading, setLoading] = useState(false);

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || props.disabled) return;
    e.preventDefault();
    try {
      setLoading(true);
      await props.onClick?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={cx(
        styles.button,
        styles[props.appearance],
        props.bordered && styles._bordered,
        loading && styles.loading,
        props.active && styles.active,
        props.className
      )}
      disabled={props.disabled}
      onClick={onClick}
      ref={ref}
    >
      {loading ? (
        <div className={styles.loader_wrap}>
          <Loader color={props.appearance} className={styles.loader} />
          <Paragraph level={3}>Загрузка</Paragraph>
        </div>
      ) : (
        props.children
      )}
    </button>
  );
})

LinkButton.defaultProps = {
  appearance: "primary"
};
