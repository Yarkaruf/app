import React from "react";
import { ISectionHeading, SectionHeading } from "shared/ui/components";
import { INumberedCardList, NumberedCardList } from "modules/common/components/numbered-card-list";
import { Container, Section } from "shared/ui/core/components";

export interface IPrinciplesSection extends ISectionHeading, INumberedCardList{

}

export const PrinciplesSection = (props: IPrinciplesSection) => {

  return (
    <Section>
      <Container>
        <SectionHeading {...props}/>

        <NumberedCardList data={props.data}/>
      </Container>
    </Section>
  );
};
