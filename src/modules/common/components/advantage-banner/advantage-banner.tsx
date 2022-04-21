import React from "react";
import styles from "modules/common/components/advantage-banner/advantage-banner.module.scss";
import { Container, Icon, Paragraph, TextLink, Title } from "shared/ui/core/components";
import cx from "classnames";

export interface IAdvantageBanner {
  title: React.ReactNode;
  text?: string;
  advantages?: string[];
  infoItems?: { title: string; value: string }[];
  href?: string;

  appearance: "left" | "right";
}

export const AdvantageBanner = (props: IAdvantageBanner) => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.inner}>
          <div className={cx(styles.card, props.appearance === "right" && styles.right)}>
            <Icon name="data-centers" className={styles.icon} />

            <Title level={3} className={cx(styles.title, props.text && styles.with_description)}>
              {props.title}
            </Title>

            {props.text && (
              <Paragraph level={1} className={styles.text}>
                {props.text}
              </Paragraph>
            )}

            {props.advantages && (
              <ul className={styles.list}>
                {props.advantages.map((it, key) => (
                  <li className={styles.li} key={key}>
                    <Paragraph level={2}>{it}</Paragraph>
                  </li>
                ))}
              </ul>
            )}

            {props.infoItems && (
              <div className={styles.info_list}>
                {props.infoItems.map((it, key) => (
                  <div className={styles.info_list__item} key={key}>
                    <Paragraph level={3} className={styles.info_list__title}>
                      {it.title}
                    </Paragraph>
                    <Title customTag level={3} className={styles.info_list__value}>
                      {it.value}
                    </Title>
                  </div>
                ))}
              </div>
            )}

            {props.href && (
              <div className={styles.link_wrap}>
                <TextLink className={styles.link} href={props.href} appearance="primary">
                  <Paragraph level={2} weight={700}>
                    Подробнее
                  </Paragraph>
                </TextLink>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

AdvantageBanner.defaultProps = {
  appearance: "left"
};
