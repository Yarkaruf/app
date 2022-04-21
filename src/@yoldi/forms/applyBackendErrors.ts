import { FieldValues, Path, UseFormReturn, UseFormSetError } from "react-hook-form";

export default function applyBackendErrors<T>(errors: { [key: string]: string }, setError: UseFormSetError<T>) {
  Object.entries(errors).forEach(([key, value]) => {
    setError(key as Path<T>, { message: value, type: "manual" });
  });
}

export function handleSubmit<T extends FieldValues = FieldValues>(form: UseFormReturn<T>, submit: (values: T) => void) {
  return form.handleSubmit(async values => {
    try {
      await submit(values as any);
    } catch (e) {
      try {
        const response = await e.json();
        applyBackendErrors<T>(response?.fields, form.setError);
      } catch (e) {
        console.error(e);
      }
    }
  });
}
