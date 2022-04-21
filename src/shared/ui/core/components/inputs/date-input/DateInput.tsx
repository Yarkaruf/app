import React, { CSSProperties, forwardRef } from "react";
import cx from "classnames";
import styles from "./date-input.module.scss";
import { Paragraph } from "shared/ui/core/components";
import { Spacer } from "../../spacer/Spacer";

export interface IDateInput {
  name?: string;
  id?: string;
  className?: string;
  inputClassName?: string;

  placeholder?: string;
  label?: string;

  disabled?: boolean;

  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  autoFocus?: boolean;
  style?: CSSProperties;
}

export const DateInput = forwardRef<HTMLInputElement, IDateInput>((props: IDateInput, ref) => (
  <div className={cx(styles.container, props.className)} style={props.style}>
    <label>
      {props.label && (
        <>
          <Paragraph level={3} className={styles.label}>
            {props.label}
          </Paragraph>
          <Spacer size={"sm"} />
        </>
      )}

      <input
        autoComplete="off"
        type={"date"}
        className={cx(styles.input, props.inputClassName)}
        name={props.name}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        ref={ref}
        disabled={props.disabled}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
      />
    </label>
  </div>
));
