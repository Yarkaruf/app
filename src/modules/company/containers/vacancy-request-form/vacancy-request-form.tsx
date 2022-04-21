import React, { useState } from "react";
import { useAppForm } from "@yoldi/forms/useAppForm";
import cx from "classnames";
import styles from "./vacancy-request-form.module.scss";
import {
  Button,
  Checkbox,
  FileInput,
  Form,
  PhoneInput,
  TextArea,
  TextInput,
  TextLink
} from "shared/ui/core/components";

interface IVacancyRequestForm {
  className?: string;
}

export const VacancyRequestForm = (props: IVacancyRequestForm) => {
  const form = useAppForm({
    onSubmit: values => {
      console.log(values);
    }
  });

  const [agree, setAgree] = useState(false);

  return (
    <Form onSubmit={form.onSubmit} className={cx(styles.form, props.className)}>
      <TextInput {...form.register("name")} placeholder="Введите имя" className={styles.input} />

      <TextInput
        {...form.register("email", {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Неверный email"
          }
        })}
        placeholder="Введите e-mail"
        type="email"
        className={styles.input}
      />

      <PhoneInput
        {...form.register("phone", {
          pattern: {
            value: /^\+\d.\(\d{3}\).\d{3}\-\d{2}\-\d{2}$/i,
            message: "Неверный телефон"
          }
        })}
        placeholder="Введите телефон"
        className={styles.input}
      />

      <TextArea
        {...form.register("message")}
        placeholder="Введите комментарий (ссылку на ваше резюме и портфолио)"
        className={styles.text_area}
      />

      <FileInput className={styles.file_input} {...form.register("file", { required: false })} />

      <Checkbox
        value={agree}
        onChange={() => setAgree(!agree)}
        label={
          <>
            Я даю Согласие на обработку персональных данных на условиях, определенных
            <TextLink href="/documents/privacy-policy.pdf" targetBlank appearance="primary" className={styles.link}>
              Политикой конфиденциальности
            </TextLink>
          </>
        }
        className={styles.checkbox_wrap}
        labelClassName={styles.checkbox}
      />
      {form.globalError}

      <Button type="submit" fullWidth className={styles.button} disabled={!form.formState.isValid || !agree}>
        Отправить отклик
      </Button>
    </Form>
  );
};
