import React from "react";
import styles from "./checkbox.module.scss";
import cx from "classnames";
import { Paragraph } from "../paragraph/Paragraph";
import { Icon } from "../icon/Icon";

interface ICheckbox {
  value: boolean;
  onChange: () => void;

  disabled?: boolean;

  label?: string | React.ReactNode;

  className?: string;
  labelClassName?: string;
}

export const Checkbox = (props: ICheckbox) => {
  return (
    <label className={cx(styles.checkbox, props.className, props.disabled && styles.label_disabled)}>
      <input
        className={styles.input}
        type="checkbox"
        checked={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />

      <div>{props.value && <Icon name="check" strokeIcon className={styles.check} />}</div>

      <Paragraph level={2} weight={700} className={cx(styles.label, props.labelClassName, props.disabled && styles.label_disabled)}>
        {props.label}
      </Paragraph>
    </label>
  );
};
