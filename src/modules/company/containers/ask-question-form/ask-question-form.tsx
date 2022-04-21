import React, { useState } from "react";
import { useAppForm } from "@yoldi/forms/useAppForm";
import {
  Button,
  Checkbox,
  Form,
  Paragraph,
  PhoneInput,
  TextArea,
  TextInput,
  TextLink
} from "shared/ui/core/components";
import styles from "./ask-question-form.module.scss";
import cx from "classnames";
import { Question, SupportApi } from "shared/api";

interface IAskQuestionForm {
  className?: string;
}

const supportApi = new SupportApi();

export const AskQuestionForm = (props: IAskQuestionForm) => {
  const [success, setSuccess] = useState(false);

  const form = useAppForm<Question>({
    onSubmit: !success ? supportApi.sendQuestion : () => {},
    onSuccess: () => {
      setSuccess(true);
    }
  });

  const [agree, setAgree] = useState(false);

  return (
    <Form onSubmit={form.onSubmit} className={cx(styles.form, props.className)}>
      <TextInput {...form.register("theme")} placeholder="Введите тему запроса" className={styles.input} />
      <TextInput {...form.register("name")} placeholder="Введите имя" className={styles.input} />
      <TextInput
        {...form.register("company", { required: false })}
        placeholder="Укажите название вашей компании"
        className={styles.input}
      />
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

      <TextArea {...form.register("message")} placeholder="Введите  ваше сообщение" className={styles.text_area} />

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

      <Button type="submit" fullWidth className={styles.button} disabled={!form.formState.isValid || !agree}>
        {success ? "✓ Отправлено" : "Отправить"}
      </Button>
    </Form>
  );
};
