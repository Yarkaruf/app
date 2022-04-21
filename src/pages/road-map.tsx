import React from "react";
import { RoadMapSection } from "modules/company/sections/road-map";
import Head from "next/head";

const RoadMapPage = () => {
  return (
    <>
      <Head>
        <title>Roadmap компании Medialand с информацией о целях и стратегиях</title>
        <meta
          name="description"
          content="Планы компании на ближайшие кварталы, по организации и внедрение новых услуг, а также усовершенствовании имеющихся продукта."
        />
      </Head>
      <RoadMapSection />
    </>
  );
};

export default RoadMapPage;
