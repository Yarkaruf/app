import React from "react";
import styles from "./tariffs-filter.module.scss";
import { Checkbox, Paragraph } from "shared/ui/core/components";
import cx from "classnames";

export type IDataCenterCity = "spb" | "moscow" | "amsterdam" | undefined;
export type IDataCenterGpu = { withGpu?: boolean; withOutGpu?: boolean } | undefined;
export type IDataCenterCurrency = { rub?: boolean; dollar?: boolean } | undefined;

interface ITariffsFilter {
  city: IDataCenterCity;
  gpu: IDataCenterGpu;
  currency: IDataCenterCurrency;

  onChangeCity: (value: IDataCenterCity) => void;
  onChangeGpu: (values: IDataCenterGpu) => void;
  onChangeCurrency: (values: IDataCenterCurrency) => void;

  className?: string;
}

export const TariffsFilter = (props: ITariffsFilter) => {
  return (
    <div className={cx(styles.filter, props.className)}>
      <div className={styles.row}>
        <div className={styles.item}>
          <Paragraph level={3} className={styles.label}>
            Дата центры
          </Paragraph>
          <div className={styles.inputs}>
            <Checkbox
              value={true}
              onChange={() => {}}
              label="Санкт-Петербург"
              className={styles.checkbox}
              disabled={true}
            />

            <Checkbox value={true} onChange={() => {}} label="Москва" className={styles.checkbox} disabled={true} />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.item}>
          <Paragraph level={3} className={styles.label}>
            Наличие видеокарты
          </Paragraph>

          <div className={styles.inputs}>
            <Checkbox
              value={props.gpu?.withOutGpu || false}
              onChange={() => props.onChangeGpu({ withOutGpu: true, withGpu: false })}
              label="без GPU"
              className={styles.checkbox}
            />

            <Checkbox
              value={props.gpu?.withGpu || false}
              onChange={() => props.onChangeGpu({ withOutGpu: false, withGpu: true })}
              label="c GPU"
              className={styles.checkbox}
              disabled={true}
            />
          </div>
        </div>

        <div className={styles.item}>
          <Paragraph level={3} className={styles.label}>
            Валюта
          </Paragraph>

          <div className={styles.inputs}>
            <Checkbox
              value={props.currency?.rub || false}
              onChange={() => props.onChangeCurrency({ dollar: false, rub: true })}
              label="рубли, ₽"
              className={styles.checkbox}
            />

            <Checkbox
              value={props.currency?.dollar || false}
              onChange={() => props.onChangeCurrency({ dollar: true, rub: false })}
              label="доллары, $"
              className={styles.checkbox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
