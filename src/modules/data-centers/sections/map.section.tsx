import React from "react";
import { Container, Paragraph, Section } from "shared/ui/core/components";
import { Map, MapPage } from "modules/data-centers/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import styles from "./map.module.scss";
import cx from "classnames";

export interface IMapSection extends Omit<ISectionHeading, "title"> {
  text?: string;
  page?: boolean;
}

export const MapSection = (props: IMapSection) => {
  if (props.page == true) {
    return (
      <Section className={styles.data_centers}>
        <Container>
          <SectionHeading
            numberOfSection={props.numberOfSection}
            title="Дата центры"
            description={props.description}
            className={cx(styles.header, props.text, styles.data && styles.have_text)}
          />

          {props.text && (
            <div className={styles.text_block}>
              <Paragraph className={styles.text}>{props.text}</Paragraph>
            </div>
          )}

          <Map />
        </Container>
      </Section>
    );
  } else {
    return (
      <Section className={styles.data_centers}>
        <Container>
          <SectionHeading
            numberOfSection={props.numberOfSection}
            title="Дата центры"
            description={props.description}
            className={cx(styles.header, props.text, styles.data && styles.have_text)}
          />

          {props.text && (
            <div className={styles.text_block}>
              <Paragraph className={styles.text}>{props.text}</Paragraph>
            </div>
          )}

          <MapPage />
        </Container>
      </Section>
    );
  }
};
