import React from "react";
import styles from "modules/common/components/advantages-list/advantages-list.module.scss";
import cx from "classnames";
import { Icon, Paragraph, Title } from "shared/ui/core/components";

export interface IAdvantagesList {
  items: { title?: React.ReactNode; text: React.ReactNode }[];
  columns: 1 | 2 | 3;

  className?: string;
}

export const AdvantagesList = (props: IAdvantagesList) => {
  return (
    <div className={cx(props.className, styles.container, styles[`columns_${props.columns}`])}>
      {props.items.map((it, key) => (
        <div key={key} className={styles.item}>
          {it.title && (
            <div className={styles.item__box}>
              <Icon name="check-round" className={styles.item__icon} />
              <div className={styles.item__row}>
                <Title level={3} className={styles.item__title}>
                  {it.title}
                </Title>
              </div>
            </div>
          )}
          <div className={styles.item__row}>
            {!it.title && <Icon name="advantage" className={cx(styles.item__icon, styles.no_title)} />}
            <Paragraph level={2} className={cx(styles.item__text, !it.title && styles.text_color)}>
              {it.text}
            </Paragraph>
          </div>
        </div>
      ))}
    </div>
  );
};

AdvantagesList.defaultProps = {
  columns: 1
};
