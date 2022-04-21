import React from "react";
import { MainLayout } from "shared/ui/layout/MainLayout";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = (props: ILayout) => {
  return <MainLayout>{props.children}</MainLayout>;
};
