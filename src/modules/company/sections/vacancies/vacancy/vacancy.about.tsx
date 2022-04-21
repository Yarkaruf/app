import React, { MutableRefObject, useRef } from "react";
import { Button, Container, Paragraph, Section, Title } from "shared/ui/core/components";
import styles from "./vacancy-about.module.scss";
import AppRouter from "router";
import { ScrollTo } from "react-scroll-to";
import { VacancyRequestForm } from "modules/company/containers";

export interface IVacaancyAbout {
  id: string;
  title: string;
  description: string;
  exp: string;
  city: string;
  text: string;
}

interface IVacancySection {
  data?: IVacaancyAbout;
}

export const VacancyAbout = ({ data }: IVacancySection) => {
  const formRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  return (
    <Section>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.heading_content}>
              <Title level={2} className={styles.title}>
                {data?.title}
              </Title>
              <Paragraph className={styles.city}>{data?.city}</Paragraph>
            </div>

            <div className={styles.vision}>
              <Button onClick={AppRouter.vacancies.open} className={styles.button}>
                Смотреть вакансии
              </Button>
            </div>
          </div>

          <div className={styles.text_wrap}>
            <Paragraph className={styles.text}>{data?.text}</Paragraph>
          </div>

          {/* <div ref={formRef} className={styles.form_block}>
            <div className={styles.form__column}>
              <Title level={3} customTag className={styles.form__title}>
                Откликнуться
              </Title>
            </div>

            <VacancyRequestForm className={styles.form} />
          </div> // TODO подрубить когда будет готов бэк */}
        </div>
      </Container>
    </Section>
  );
};
