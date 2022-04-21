import React from "react";
import { Container, Section } from "shared/ui/core/components";
import styles from "./administration-tariffs.module.scss";
import { AdministrationTariffsList, IAdministrationTariffsList } from "modules/administration/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import { AdministrationTariff } from "shared/api";

interface IAdministrationTariffsSection extends Omit<IAdministrationTariffsList, "onBuy">, ISectionHeading {}

export const AdministrationTariffsSection = (props: IAdministrationTariffsSection) => {
  const onBuy = (it: AdministrationTariff) => {};

  return (
    <Section className={styles.section_bc}>
      <Container>
        <>
          <h2 className={styles.text}>Профессиональная поддержка и консультации в рамках оплаченного пакета</h2>
          <AdministrationTariffsList {...props} onBuy={onBuy} />
        </>
      </Container>
    </Section>
  );
};
