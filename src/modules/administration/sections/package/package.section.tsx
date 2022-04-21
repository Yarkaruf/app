import React from "react";
import { Container, Paragraph, Section } from "shared/ui/core/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import { IPackageList, PackageList } from "modules/administration/components";
import styles from "./package-section.module.scss";

interface IPackageSection extends ISectionHeading, IPackageList {}

export const PackageSection = (props: IPackageSection) => {
  return (
    <Section className={styles.section_bc}>
      <Container>
        <SectionHeading {...props} className={styles.title} />

        <Paragraph
          level={2}
          className={
            props.title === "Профессиональное администрирование сервера"
              ? styles.title_visible
              : styles.no_title_visible
          }
        >
          <br />
          Экономим ваши ресурсы, чтобы вы полностью сфокусировались на развитии проекта
        </Paragraph>
        <PackageList data={props.data} />

        <div className={styles.comment}>
          <img src="img/icons/question.svg" alt="?" className={styles.icon} />
          <Paragraph level={3} className={styles.description}>
            *пакеты по администрированию расходуются по количеству часов работы, либо по количеству обращений. 1
            обращение = 1 час работ, даже если время на решение вопроса заняло менее одного часа. **запросы, касающиеся
            аппаратной части сервера и работы сети, обрабатываются бесплатно.
          </Paragraph>
        </div>
      </Container>
    </Section>
  );
};
