import React from "react";
import styles from "./switch-input.module.scss";
import cx from "classnames";
import { Paragraph } from "shared/ui/core/components/";

interface ISwitchInput {
  value: boolean;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;

  className?: string;
}

export const SwitchInput = (props: ISwitchInput) => (
  <label className={cx(styles.container, props.className)}>
    {props.label && (
      <Paragraph level={3} className={styles.label}>
        {props.label}
      </Paragraph>
    )}

    <input className={styles.input} type="checkbox" checked={props.value} onChange={e => props.onChange(e)} />
    <span className={styles.status} />
  </label>
);
