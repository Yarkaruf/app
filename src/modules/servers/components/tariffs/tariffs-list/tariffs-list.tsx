import React from "react";
import { VdsTariff } from "shared/api";
import styles from "modules/servers/components/tariffs/tariffs-list/tariffs-list.module.scss";
import { Button, Icon, Paragraph, Title, Container } from "shared/ui/core/components";
import cx from "classnames";
import formatMoney from "@yoldi/utils/format/money";

export interface IServerTariff extends Partial<VdsTariff> {}

interface ITariffsList {
  data?: IServerTariff[];
  href: string;

  usdRubRate: string;
  showUSD?: boolean;

  className?: string;
}

export const TariffsList = (props: ITariffsList) => {
  return (
    <div className={cx(styles.list, props.className)}>
      {props.data?.map(it => (
        <TariffItem
          key={it.id}
          {...it}
          href={`${props.href}?tariffId=${it.id}`}
          showUSD={props.showUSD}
          usdRubRate={props.usdRubRate}
        />
      ))}
    </div>
  );
};

interface ITariffItem extends IServerTariff {
  href: string;

  usdRubRate: string;
  showUSD?: boolean;
}

const TariffItem = (props: ITariffItem) => (
  <a className={styles.item} href={props.href}>
    <div className={styles.title_wrap}>
      <Icon name="check-round" className={styles.title_icon} />
      <Title level={4} className={styles.title}>
        {props.name}
      </Title>
    </div>

    <div className={styles.details}>
      <ul className={styles.details__list}>
        {props.storage && (
          <li className={styles.details__li}>
            <Paragraph className={styles.info} level={2}>
              <span className={styles.bold}>{props.storage / 1000} gb&nbsp;</span> SSD NVMe
            </Paragraph>
          </li>
        )}

        {props.cores && (
          <li className={styles.details__li}>
            <Paragraph className={styles.info} level={2}>
              <span className={styles.bold}>{props.cores} vCPU&nbsp;</span> core
            </Paragraph>
          </li>
        )}

        {props.ram && (
          <li className={styles.details__li}>
            <Paragraph className={styles.info} level={2}>
              <span className={styles.bold}>{props.ram / 1000} gb&nbsp;</span> RAM
            </Paragraph>
          </li>
        )}
      </ul>

      <ul className={styles.details__list}>
        <li className={styles.details__li}>
          <Paragraph className={styles.info} level={2}>
            <span className={styles.bold}>100 mb/s&nbsp;</span> Безлимитный трафик
          </Paragraph>
        </li>

        <li className={styles.details__li}>
          <Paragraph className={styles.info} level={2}>
            <span className={styles.bold}>Без GPU</span>
          </Paragraph>
        </li>
      </ul>
    </div>

    <div className={styles.right_col}>
      <div className={styles.tariffs_prices}>
        {props.instanceMonthPrice && (
          <Paragraph className={styles.info} level={1} weight={700}>
            {props.showUSD ? (
              <>{formatMoney(parseFloat(props.instanceMonthPrice) / parseFloat(props.usdRubRate), "$/мес")}</>
            ) : (
              <>{formatMoney(props.instanceMonthPrice, "")} ₽/мес</>
            )}
          </Paragraph>
        )}

        {props.instanceHourPrice && (
          <Paragraph className={styles.info} level={1} weight={700}>
            {props.showUSD ? (
              <>{formatMoney(parseFloat(props.instanceHourPrice) / parseFloat(props.usdRubRate), "$/час", 2)}</>
            ) : (
              <>{formatMoney(props.instanceHourPrice, "")} ₽/час</>
            )}
          </Paragraph>
        )}
      </div>

      <Button isSpan fullWidth className={styles.item__button}>
        Заказать
      </Button>
    </div>
  </a>
);
