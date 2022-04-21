import React from "react";
import styles from "./numbered-card-list.module.scss";
import { Paragraph, Title } from "shared/ui/core/components";

export interface INumberedCardList {
  data: { title: string; text: string }[];
}

export const NumberedCardList = (props: INumberedCardList) => {

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {props.data.map((it, key) => (
          <div className={styles.item}>
            <Title level={3} customTag className={styles.number}>{key + 1}</Title>

            <div className={styles.content}>
              <Paragraph weight={700} className={styles.title}>{it.title}</Paragraph>
              <Paragraph className={styles.text}>{it.text}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
