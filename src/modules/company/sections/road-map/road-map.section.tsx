import React from "react";
import { Container, Paragraph, Section, Title } from "shared/ui/core/components";
import styles from "./road-map.module.scss";

interface IRoadMapSection {}

export const RoadMapSection = (props: IRoadMapSection) => {
  return (
    <Section className={styles.section_bc}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Item
            key="1"
            title="Первый этап"
            date="2 квартал 2022"
            items={[
              "Виртуальные серверы",
              "Выделенные серверы",
              "Выделенные серверы with GPU",
              "Глобальные VLAN между ЦОД"
            ]}
          />

          <Item
            key="12"
            title="Второй этап"
            date="2 квартал 2022"
            items={[
              "Удаленный рабочий стол с GPU",
              "Виртуальные серверы with GPU",
              "Облачные базы данных MySQL™ и PostgreSQL",
              "Система защиты от DDoS-атак на базе AI"
            ]}
          />

          <Item
            key="3"
            title="Третий этап"
            date="3 квартал 2022"
            items={[
              "Cloud Public/Cloud Private/IaaS",
              "Облачное хранилище",
              "Мобильная панель управления услугами Android/iOS",
              "Собственный ЦОД на жидкостном охлаждении",
              "Предиктивная система мониторинга серверного оборудования на базе AI"
            ]}
          />

          <Item
            key="4"
            title="Четвёртый этап"
            date="4 квартал 2022"
            items={["Кластер Kubernetes", "Миграция между дата-центрами", "DNS"]}
          />

          <Item
            key="5"
            title="Пятый этап"
            date="1 квартал 2023"
            items={["Нейронные сети", "Регистрация доменов", "Балансировщик нагрузок", "CDN"]}
          />
        </div>
      </Container>
    </Section>
  );
};

interface IItem {
  title: string;
  date: string;
  items: string[];
}

const Item = (props: IItem) => (
  <div className={styles.item}>
    <div className={styles.item__content}>
      <Title level={3} customTag className={styles.title}>
        {props.title}
      </Title>

      <Paragraph className={styles.date} level={1}>
        {props.date}
      </Paragraph>

      <ul className={styles.ul}>
        {props.items.map((it, key) => (
          <li className={styles.li} key={key}>
            <Paragraph level={3} className={styles.text}>
              {it}
            </Paragraph>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
