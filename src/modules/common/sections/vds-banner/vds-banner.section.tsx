import React from "react";
import styles from "modules/common/sections/vds-banner/vds-banner.module.scss";
import { Container, Section, Icon, Title } from "shared/ui/core/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import { IAdvantageBanner } from "modules/common/components";
import { VdsBanner } from "modules/common/components/vds-banner";

interface IAdvantageBannerSection extends IAdvantageBanner, ISectionHeading {
  id?: string;
  bannerTitle: string;
  text?: string;
  smallPaddingBottom?: boolean;
  textAfter?: string;
}

export const VdsBannerSection = (props: IAdvantageBannerSection) => {
  return (
    <Section smallPaddingBottom={props.smallPaddingBottom} id={props.id} className={styles.advantage_banner_section_bc}>
      <Container>
        <div className={styles.container}>
          <Icon name="advantage" className={styles.icon} />
          <Title level={3} className={styles.title_vds}>
            {props.title}
          </Title>
          <VdsBanner {...props} title={props.bannerTitle} />
        </div>
      </Container>
    </Section>
  );
};

VdsBannerSection.defaultProps = {
  appearance: "left"
};
