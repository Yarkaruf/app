import React from "react";
import styles from "./administration-tariffs-list.module.scss";
import { AdministrationTariff } from "shared/api";
import { Button, Paragraph, Title } from "shared/ui/core/components";
import formatHours from "shared/ui/core/utils/format/hours";
import { pluralize } from "@yoldi/utils/helpers";

export interface IAdministrationTariffsList {
  tariffs?: AdministrationTariff[];
  onBuy: (tariff: AdministrationTariff) => void;

  href: string;
}

export const AdministrationTariffsList = (props: IAdministrationTariffsList) => {
  return (
    <div className={styles.container}>
      {props.tariffs?.map(it => (
        <a className={styles.item} key={it.id} href={`${props.href}?administrationTariffId=${it.id}`}>
          <div className={styles.top}>
            <Title level={4} customTag className={styles.name}>
              {it.name}
            </Title>
            <Title level={3} customTag className={styles.price}>
              {it.price}&nbsp;
              <span>p</span>
            </Title>
          </div>

          <div className={styles.bottom}>
            <div className={styles.text_wrap}>
              <Paragraph className={styles.text}>
                {it.unlimited ? (
                  "Неограниченно обращений"
                ) : (
                  <>
                    {formatHours(it.hours)} работы
                    <br />
                    {pluralize(it.hours, {
                      one: it => `${it} обращение`,
                      few: it => `${it} обращения`,
                      many: it => `${it} обращений`
                    })}
                  </>
                )}
              </Paragraph>
            </div>

            <Button isSpan className={styles.button} onClick={() => props.onBuy(it)}>
              Заказать
            </Button>
          </div>
        </a>
      ))}
    </div>
  );
};
