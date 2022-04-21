import React, { useState } from "react";
import { Container, Section } from "shared/ui/core/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import styles from "./tariffs-section.module.scss";
import {
  IDataCenterCity,
  IDataCenterCurrency,
  IDataCenterGpu,
  TariffsFilter
} from "modules/servers/components/tariffs";
import { TariffsList } from "modules/servers/components/tariffs-dedic/tariffs-list";
import { TariffWithProcessor } from "pages/dedic";

interface ITariffsSection extends ISectionHeading {
  data?: TariffWithProcessor[];
  usdRubRate: string;
  href: string;
  title: string;
  description: string;
}

export const TariffsSection = (props: ITariffsSection) => {
  const [city, setCity] = useState<IDataCenterCity>();
  const [gpu, setGpu] = useState<IDataCenterGpu>({ withGpu: false, withOutGpu: true });
  const [currency, setCurrency] = useState<IDataCenterCurrency>({ rub: true, dollar: false });

  return (
    <>
      <Section className={styles.section_tariffs_bc}>
        <Container>
          <SectionHeading title={props.title} description={props.description} className={styles.heading} />

          <TariffsFilter
            city={city}
            onChangeCity={setCity}
            gpu={gpu}
            onChangeGpu={setGpu}
            currency={currency}
            onChangeCurrency={setCurrency}
            className={styles.filter}
          />
          <TariffsList
            data={props.data}
            href={props.href}
            usdRubRate={props.usdRubRate}
            showUSD={currency?.dollar}
            // className="test"
          />
        </Container>
      </Section>
    </>
  );
};
