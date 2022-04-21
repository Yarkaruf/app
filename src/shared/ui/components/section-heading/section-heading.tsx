import React, { CSSProperties } from "react";
import styles from "./section-heading.module.scss";
import { Paragraph, Title } from "shared/ui/core/components";
import cx from "classnames";

export interface ISectionHeading {
  title: React.ReactNode;
  title2?: string;
  description?: React.ReactNode;
  numberOfSection?: string;

  style?: CSSProperties;
  className?: string;
  descriptionClassName?: string;
}

export const SectionHeading = (props: ISectionHeading) => {
  return (
    <div
      className={cx(styles.container, props.className, props.numberOfSection && styles.no_padding)}
      style={props.style}
    >
      <div className={styles.row}>
        <Title level={2} customTag className={styles.title}>
          {props.title}
        </Title>
      </div>

      {props.description && (
        <Paragraph level={1} className={cx(styles.description, props.descriptionClassName)}>
          {props.description}
        </Paragraph>
      )}
    </div>
  );
};
