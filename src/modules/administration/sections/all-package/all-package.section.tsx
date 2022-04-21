import React from "react";
import { Container, Paragraph, Section } from "shared/ui/core/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import { IPackageList, PackageList } from "modules/administration/components";
import styles from "./all-package-section.module.scss";
import { Icon } from "shared/ui/core/components";

interface IAllPackageSection extends ISectionHeading, IPackageList {}

export const AllPackage = (props: IAllPackageSection) => {
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
          Экономим ваши ресурсы, чтобы вы полностью сфокусировались на развитии проекта
        </Paragraph>
        <div className={styles.note}>
          <ul className={styles.listB}>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Настройка сервера;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Установка и настройка базового программного обеспечения на
              сервере;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Настройка операционной системы (Linux, FreeBSD, Windows) на
              максимальную производительность, оптимизацию работы сервисов;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Настройка и оптимизация работы MySQL сервера;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Установка специфического ПО для решения определённых задач,
              обновление, перенастройка ПО, поддержка установленного ПО и системы портов (репозиториев) в актуальном
              состоянии;{" "}
            </li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Настройка безопасности системы;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Мониторинг работы сервера: Zabbix, Cacti, Pandora, Munin, и
              т.п.;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Настройка резервного копирования;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Написание или правка системных скриптов, автоматизация задач;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Помощь в отражении DDoS-атак;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Помощь в настройке VOIP-телефонии;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Настройка Firewall и безопасности доступа к серверу;{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Icon name="plus" className={styles.icon} /> Поднятие VPN;{" "}
            </li>
          </ul>
        </div>

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
