import React from "react";
import styles from "modules/common/sections/advantage-banner/advantage-banner.module.scss";
import { Container, Section } from "shared/ui/core/components";
import { ISectionHeading, SectionHeadingLeft } from "shared/ui/components";
import { AdvantageBanner, IAdvantageBanner } from "modules/common/components";

interface IAdvantageBannerSection extends IAdvantageBanner, ISectionHeading {
  id?: string;
  bannerTitle: string;
  text?: string;
  smallPaddingBottom?: boolean;
}

export const AdvantageBannerSection = (props: IAdvantageBannerSection) => {
  return (
    <Section smallPaddingBottom={props.smallPaddingBottom} id={props.id} className={styles.advantage_banner_section_bc}>
      <Container>
        <div className={styles.box}>
          <SectionHeadingLeft
            title={props.title}
            className={styles.title}
            numberOfSection={props.numberOfSection}
            description={props.description}
            style={props.style}
          />
          <AdvantageBanner {...props} title={props.bannerTitle} />
        </div>
      </Container>
    </Section>
  );
};

AdvantageBannerSection.defaultProps = {
  appearance: "left"
};
