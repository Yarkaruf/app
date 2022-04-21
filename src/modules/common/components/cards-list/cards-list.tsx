import React from "react";
import { Paragraph } from "shared/ui/core/components";
import styles from "./cards-list.module.scss";


export interface ICardsList {
  data: string[]
}

export const CardsList = (props: ICardsList) => {

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {props.data.map((it, key) => (
          <div className={styles.item} key={key}>
            <Paragraph weight={700}>{it}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};
