import React from "react";
import styles from "./info-list.module.scss";
import { Paragraph, Title } from "shared/ui/core/components";
import cx from "classnames";



export interface IInfoList {
  data: IInfoItem[];
}

export const InfoList = (props: IInfoList) => {

  return (
    <div className={styles.container}>
      {props.data.map((it, key) => (
        <InfoItem {...it} key={key}/>
      ))}
    </div>
  );
};


interface IInfoItem {
  title: string;
  data: {title?: string; value?: string}[];
  className?: string;
}

const InfoItem = (props: IInfoItem) => (
  <div className={cx(styles.item, props.className)}>
    <Title level={3} className={styles.title}>{props.title}</Title>

    <ul className={styles.list}>
      {props.data.map((it, key) => (
        <li className={styles.li} key={key}>
          <Paragraph level={1} className={styles.text}>
            {it.title && (<span className={styles.bold}>{it.title}: </span>)} {it.value}
          </Paragraph>
        </li>
      ))}
    </ul>
  </div>
);
