import React from "react";
import { Container, Paragraph, Section } from "shared/ui/core/components";
import { Title } from "shared/ui/core/components";
import { IPackageList, PackageList } from "modules/administration/components";
import styles from "./profesional-section.module.scss";
import Link from "next/link";

export const ProfeshionalSecctions = () => {
  return (
    <Section className={styles.section_pr}>
      <Container>
        <div className={styles.prof_bc}>
          <Title level={2} className={styles.title}>
            Профессиональная поддержка <br />и консультации в&nbsp;рамках оплаченного пакета
          </Title>
          <div className={styles.comment}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.item_top}>
                  <Paragraph className={styles.name}>Разовый</Paragraph>
                  <Paragraph className={styles.price}>990 р</Paragraph>
                </div>
                <div className={styles.item_bottom}>
                  <Paragraph className={styles.time}>
                    1 час работы <br /> 1 обращение*
                  </Paragraph>
                  <Link href={process.env.APP_URL + "/administration"}>
                    <button className={styles.buttons}>Заказать</button>
                  </Link>
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.item_top}>
                  <Paragraph className={styles.name}>Минимальный</Paragraph>
                  <Paragraph className={styles.price}>2 900 р</Paragraph>
                </div>
                <div className={styles.item_bottom}>
                  <Paragraph className={styles.time}>
                    5 часов работы <br /> до 5 обращений*
                  </Paragraph>
                  <Link href={process.env.APP_URL + "/administration"}>
                    <button className={styles.buttons}>Заказать</button>
                  </Link>
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.item_top}>
                  <Paragraph className={styles.name}>Оптимальный</Paragraph>
                  <Paragraph className={styles.price}>4 900 р</Paragraph>
                </div>
                <div className={styles.item_bottom}>
                  <Paragraph className={styles.time}>
                    15 часов работы <br /> до 15 обращений*
                  </Paragraph>
                  <Link href={process.env.APP_URL + "/administration"}>
                    <button className={styles.buttons}>Заказать</button>
                  </Link>
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.item_top}>
                  <Paragraph className={styles.name}>Безлимитный</Paragraph>
                  <Paragraph className={styles.price}>14 900 р</Paragraph>
                </div>
                <div className={styles.item_bottom}>
                  <Paragraph className={styles.time}>
                    Неограниченное <br /> количество обращений
                  </Paragraph>
                  <Link href={process.env.APP_URL + "/administration"}>
                    <button className={styles.buttons}>Заказать</button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
