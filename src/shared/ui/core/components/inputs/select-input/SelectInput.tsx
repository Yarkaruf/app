import React, { CSSProperties } from "react";
import ReactSelect from "react-select";
import { Spacer } from "../../spacer/Spacer";
import styles from "./select-input.module.scss";
import { Paragraph } from "shared/ui/core/components/paragraph";

export interface ISelectOption<ID extends any = string> {
  value: ID;
  label: string;
}

export interface ISelectInput<ID extends any = string> {
  label?: string;
  options?: ISelectOption<ID>[];
  placeholder?: string;
  value?: ID;
  onChange: (value: ID) => void;
  onBlur?: () => void;
  style?: CSSProperties;

  className?: string;
}

export const SelectInput = <ID extends any = string>(props: ISelectInput<ID>) => {
  const selectStyles = {
    container: (base: any, state: any) => ({
      ...base,
      ...props.style,
      minHeight: "44px",
      height: "44px"
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: "44px",
      height: "44px",
      border: "1px solid #D7DDF4",
      boxShadow: "none",
      borderRadius: "4px",
      cursor: "pointer",
      paddingLeft: 0,
      "&:hover": {
        borderColor: "#D7DDF4"
      }
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      minHeight: "44px",
      height: "44px",
      paddingLeft: 16
    }),
    indicatorSeparator: () => ({ display: "none" }),
    menu: (provided: any) => ({
      ...provided,
      marginTop: 0,
      borderRadius: "4px",
      boxShadow: "none",
      border: "1px solid #D7DDF4",
      zIndex: 1000
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: "0"
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: "16px",
      paddingLeft: "16px",
      paddingRight: "16px",
      transition: ".3s",
      cursor: "pointer",
      position: "relative"
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      paddingLeft: "0",
      paddingRight: "20",
      height: "44px"
    }),
    singleValue: (provided: any) => ({
      ...provided,
      fontSize: "16px"
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontSize: "16px",
      color: "#9EA4B9"
    })
  };

  return (
    <div className={props.className}>
      {props.label && (
        <>
          <Paragraph level={3} className={styles.label}>
            {props.label}
          </Paragraph>
          <Spacer size={"sm"} />
        </>
      )}

      <ReactSelect
        {...props}
        styles={selectStyles}
        value={props.options?.find(it => it.value === props.value)}
        onBlur={props.onBlur}
        onChange={e => {
          if (!e) return;
          if (Array.isArray(e)) return;

          props.onChange((e as { value: ID }).value);
        }}
      />
    </div>
  );
};
