import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import applyBackendErrors from "@yoldi/forms/applyBackendErrors";
import * as React from "react";
import { useState } from "react";
import { UseFormProps } from "react-hook-form/dist/types";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import { FieldPath } from "react-hook-form/dist/types/utils";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import { IModal } from "shared/ui/core/components/modal";

export interface IUseModalFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object,
  TResponse extends any = void
> extends UseFormProps<TFieldValues, TContext> {
  onSubmit: (value: TFieldValues) => TResponse;
}

export type UseModalFormRegister<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  name: TFieldName,
  options?: RegisterOptions<TFieldValues, TFieldName>
) => UseFormRegisterReturn & { error?: string };

export interface IUseModalForm<TFieldValues extends FieldValues = FieldValues> extends UseFormReturn<TFieldValues> {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  onCancel: () => void;
  globalError?: string;
  setGlobalError: (message?: string) => void;
  cleanGlobalError: () => void;
  submitProps: { loading: boolean; disabled: boolean };
  register: UseModalFormRegister<TFieldValues>;
}

export const useModalForm = <TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(
  modal: IModal<TFieldValues, any>,
  props: IUseModalFormProps<TFieldValues, TContext>
): IUseModalForm<TFieldValues> => {
  const form = useForm<TFieldValues, TContext>({ mode: "all", ...props });

  const [globalError, setGlobalError] = useState<string>();
  const cleanGlobalError = () => setGlobalError(undefined);

  const onSubmit = form.handleSubmit(async values => {
    try {
      const resp = await props.onSubmit(values as any);
      await modal.onSuccess?.(resp, values as any);
      await modal.close();
      cleanGlobalError();
    } catch (error) {
      try {
        const response = await error.json();

        if (response?.fields) {
          applyBackendErrors<TFieldValues>(response?.fields, form.setError);
        }

        if (response?.message) {
          setGlobalError(response?.message);
        }
      } catch (e) {
        console.error(error);
        console.error(e);
      }
    }
  });

  const submitProps = {
    loading: form.formState.isSubmitting,
    disabled: !form.formState.isValid
  };

  const register = (name: FieldPath<TFieldValues>, options: any) => ({
    ...form.register(name, { required: true, ...options }),
    error: (form.formState.errors as any)?.[name]?.message
  });

  return {
    ...form,
    onSubmit,
    globalError,
    setGlobalError,
    cleanGlobalError,
    submitProps,
    register,
    onCancel: modal.close
  };
};
