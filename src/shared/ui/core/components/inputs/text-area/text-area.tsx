import React, { forwardRef } from "react";
import cx from "classnames";
import styles from "./text-area.module.scss";
import { IInput } from "shared/ui/core/components/inputs/text-input";

interface ITextArea extends Omit<IInput, "onChange"> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>((props: ITextArea, ref) => {
  return (
    <textarea
      autoComplete="off"
      className={cx(styles.input, props.className)}
      name={props.name}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      ref={ref}
      disabled={props.disabled}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
    />
  );
});
