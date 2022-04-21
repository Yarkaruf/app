import React from "react";
import { Container, Paragraph, Section, Title } from "shared/ui/core/components";
import styles from "./ask-question-section.module.scss";
import { AskQuestionForm } from "modules/company/containers";

interface IAskQuestionSection {}

export const AskQuestionSection = (props: IAskQuestionSection) => {
  return (
    <Section className={styles.section_bc}>
      <Container>
        <div className={styles.content}>
          <Title level={3} className={styles.title}>
            Задать вопрос
          </Title>

          {/* <AskQuestionForm /> TODO подцепить после доработки API бэка*/}
          <Paragraph className={styles.text}>
            Ответим на ваши вопросы
            <a href="mailto:support@sshvps.net">&nbsp; support@sshvps.net</a>
          </Paragraph>
        </div>
      </Container>
    </Section>
  );
};
