import React from "react";
import { Container, Paragraph, Section } from "shared/ui/core/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import styles from "modules/common/sections/text-section/text-section.module.scss";
import cx from "classnames";

export interface ITextSection extends ISectionHeading {
  text?: string | string[];
  children?: React.ReactNode;

  headingClassName?: string;
}

export const TextSection = (props: ITextSection) => {
  return (
    <Section className={cx(styles.textsection, styles.textsection_bc)}>
      <Container>
        <SectionHeading {...props} className={cx(styles.title, props.headingClassName)} />

        {props.text && (
          <div className={styles.text_block}>
            {typeof props.text === "string" ? (
              <Paragraph className={styles.text}>{props.text}</Paragraph>
            ) : (
              <>
                {props.text.map((it, key) => (
                  <Paragraph className={styles.text} key={key}>
                    {it}
                  </Paragraph>
                ))}
              </>
            )}
          </div>
        )}

        {props.children}
      </Container>
    </Section>
  );
};
