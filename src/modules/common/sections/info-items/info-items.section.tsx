import React from "react";
import { Container, Section } from "shared/ui/core/components";
import { IInfoList, InfoList } from "modules/common/components";

import styles from "../../components/info-list/info-list.module.scss";

interface IInfoItemsSection extends IInfoList {}

export const InfoItemsSection = (props: IInfoItemsSection) => {
  return (
    <Section className={styles.section_info_bc}>
      <Container>
        <InfoList data={props.data} />
      </Container>
    </Section>
  );
};
