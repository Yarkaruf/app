import React from "react";
import { Container, Section } from "shared/ui/core/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import styles from "modules/common/sections/advantages/advantages.module.scss";
import cx from "classnames";
import { AdvantagesList, IAdvantagesList } from "modules/common/components";

export interface IAdvantagesSection extends Omit<ISectionHeading, "className">, Omit<IAdvantagesList, "className"> {
  className?: string;
  headingClassName?: string;
  listClassName?: string;
}

export const AdvantagesSection = (props: IAdvantagesSection) => {
  return (
    <div className={styles.section_advantages}>
      <SectionHeading
        title={props.title}
        numberOfSection={props.numberOfSection}
        description={props.description}
        className={cx(props.headingClassName, styles.title)}
      />
      <Section className={cx(props.className, styles.section_mb)}>
        <Container className={styles.box}>
          <AdvantagesList items={props.items} columns={props.columns} className={props.listClassName} />
        </Container>
      </Section>
    </div>
  );
};

AdvantagesSection.defaultProps = {
  columns: 1
};
