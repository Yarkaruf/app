import React from "react";
import { Container, Section } from "shared/ui/core/components";
import { CardsList, ICardsList } from "modules/common/components";
import { ISectionHeading, SectionHeading } from "shared/ui/components";

export interface IAimsSection extends ISectionHeading, ICardsList {

}

export const AimsSection = (props: IAimsSection) => {

  return (
    <Section>
      <Container>
          <SectionHeading
            {...props}
          />

        <CardsList
          data={props.data}
        />
      </Container>
    </Section>
  );
};
