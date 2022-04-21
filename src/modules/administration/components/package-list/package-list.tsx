import React from "react";
import styles from "./pacage-list.module.scss";
import { Icon } from "shared/ui/core/components";

export interface IPackageList {
  data: string[];
}

export const PackageList = (props: IPackageList) => {
  return (
    <div className={styles.container}>
      <ul className={props.data[0] === "Настройка сервера" ? styles.list : styles.list_flex}>
        {props.data.map((it, key) => (
          <li className={styles.li} key={key}>
            <Icon name="check-round" className={styles.icon} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};
