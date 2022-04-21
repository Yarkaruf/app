import React, { forwardRef } from "react";
import { IInput } from "shared/ui/core/components/inputs/text-input";
import ReactInputMask from "react-input-mask";
import styles from "shared/ui/core/components/inputs/text-input/text-input.module.scss";
import cx from "classnames";


interface IPhoneInput extends IInput {
}

export const PhoneInput = forwardRef<HTMLInputElement, IPhoneInput>((props: IPhoneInput, ref) => {
    return (
      <ReactInputMask
        mask="+7 (999) 999-99-99"
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={cx(styles.input, props.className)}
      >
        {() => (
          <input
            type="tel"
            ref={ref}
            autoComplete="off"
            {...props}
            className={cx(styles.input, props.className)}
          />
        )}
      </ReactInputMask>
    );
  }
);
