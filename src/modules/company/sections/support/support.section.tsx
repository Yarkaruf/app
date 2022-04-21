import React from "react";
import { Button, Container, Paragraph, Section, Title } from "shared/ui/core/components";
import styles from "./support.module.scss";

interface ISupportSection {}

export const SupportSection = (props: ISupportSection) => {
  return (
    <Section className={styles.section_bc}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <Title level={2} className={styles.title}>
              Отзывчивая и <br /> оперативная служба <br /> поддержки
            </Title>
            <Title level={3} customTag className={styles.subtitle}>
              В режиме 24/7
            </Title>
          </div>

          <div className={styles.right}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Paragraph>поможем выбрать оптимальный тариф</Paragraph>
              </li>
              <li className={styles.li}>
                <Paragraph>расскажем о нюансах технологических решений</Paragraph>
              </li>
              <li className={styles.li}>
                <Paragraph>ответим на ваши вопросы</Paragraph>
              </li>
            </ul>

            <Button
              onClick={() => {
                (window as any).jivo_api?.open();
              }}
              className={styles.button}
              fullWidth
            >
              Написать в чат
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
