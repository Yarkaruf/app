import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types";
import { DateInput, IDateInput } from "./DateInput";

interface IDateField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>
  extends Omit<ControllerProps<TFieldValues, TName>, "render">,
    Omit<IDateInput, "name" | "value" | "onChange" | "onBlur"> {}

export const DateField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: IDateField<TFieldValues, TName>
) => (
  <Controller
    {...props}
    control={props.control}
    render={({ field }) => (
      <DateInput
        value={new Date().toDateString()}
        onChange={e => e.target.valueAsDate && field.onChange(e.target.valueAsDate)}
        onBlur={field.onBlur}
        {...props}
      />
    )}
  />
);
