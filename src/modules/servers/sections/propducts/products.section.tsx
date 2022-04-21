import React from "react";
import { Container, Section } from "shared/ui/core/components";
import { SectionHeading } from "shared/ui/components";
import { ProductsList } from "modules/servers/components";
import styles from "./products-section.module.scss";

interface IProductsSection {}

export const ProductsSection = (props: IProductsSection) => {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Надежная IT-инфраструктура для проектов любого масштаба"
          description="Сервис, который подстраивается под вас "
          className={styles.header}
        />
      </Container>
      <ProductsList />
    </Section>
  );
};
