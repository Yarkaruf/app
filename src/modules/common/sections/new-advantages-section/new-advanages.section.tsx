import React from "react";
import { Container, Section } from "shared/ui/core/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import styles from "modules/common/sections/new-advantages-section/new-advantages.module.scss";
import cx from "classnames";
import { IAdvantagesList } from "modules/common/components";
import { NewAdvantagesList } from "modules/common/components/new-advantages-list";

export interface IAdvantagesSection extends Omit<ISectionHeading, "className">, Omit<IAdvantagesList, "className"> {
  className?: string;
  headingClassName?: string;
  listClassName?: string;
}

export const NewAdvantagesSection = (props: IAdvantagesSection) => {
  return (
    <div className={styles.section_advantages}>
      <h2 className={styles.section_advantages_title_vds}>
        {props.title}
        <br />
        {props.title2}
      </h2>
      <Section className={props.className}>
        <Container className={styles.box}>
          <NewAdvantagesList items={props.items} columns={props.columns} className={props.listClassName} />
        </Container>
      </Section>
    </div>
  );
};

NewAdvantagesSection.defaultProps = {
  columns: 1
};
