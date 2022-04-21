import React from "react";
import { ModalsRoot } from "shared/ui/core/containers/modals/Modals";
import { Footer, Header } from "shared/ui/components";
import { CookiesNotification } from "shared/ui/containers";

export interface ILayout {
  children?: React.ReactNode;
}

export const MainLayout = (props: ILayout) => {

  return (
    <>
      <CookiesNotification/>

      <Header />

      {props.children}

      <Footer />

      <ModalsRoot />
      <div id="bottom-root" />
    </>
  );
};
