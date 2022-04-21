import React from "react";
import styles from "modules/common/sections/advantage-box/advantage-box.module.scss";
import { Container, Section } from "shared/ui/core/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import { IAdvantageBanner } from "modules/common/components";
import { AdvantageBox } from "modules/common/components/advantage-box";

interface IAdvantageBannerSection extends IAdvantageBanner, ISectionHeading {
  id?: string;
  bannerTitle: string;
  text?: string;
  smallPaddingBottom?: boolean;
}

export const AdvantageBoxSection = (props: IAdvantageBannerSection) => {
  return (
    <>
      <Container>
        <SectionHeading
          title={props.title}
          className={styles.title}
          numberOfSection={props.numberOfSection}
          description={props.description}
          style={props.style}
        />
      </Container>
      <Section
        smallPaddingBottom={props.smallPaddingBottom}
        id={props.id}
        className={styles.advantage_banner_section_bc}
      >
        <AdvantageBox {...props} title={props.bannerTitle} />
      </Section>
    </>
  );
};

AdvantageBoxSection.defaultProps = {
  appearance: "left"
};
