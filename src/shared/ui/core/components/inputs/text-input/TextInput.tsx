import React, { CSSProperties, forwardRef } from "react";
import cx from "classnames";
import styles from "./text-input.module.scss";

export type InputType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "time"
  | "url"
  | "week"
  | "color"
  | "date"
  | "datetime-local"
  | "month";

export interface IInput {
  name?: string;
  type?: InputType;
  id?: string;
  className?: string;

  placeholder?: string;

  disabled?: boolean;

  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  autoFocus?: boolean;
  style?: CSSProperties;
  onBlur?: (e: any) => void;

}

export const TextInput = forwardRef<HTMLInputElement, IInput>((props: IInput, ref) => (
  <input
    autoComplete="off"
    type={props.type || "text"}
    className={cx(styles.input, props.className)}
    name={props.name}
    id={props.id}
    value={props.value}
    placeholder={props.placeholder}
    ref={ref}
    disabled={props.disabled}
    onChange={props.onChange}
    autoFocus={props.autoFocus}
    onBlur={props.onBlur}
  />
));
