import React from "react";

export interface IForm {
  onSubmit: (value?: any) => any;

  children: React.ReactNode;
  className?: string;
}

export const Form = (props: IForm) => (
  <form onSubmit={props.onSubmit} className={props.className}>
    {props.children}
  </form>
);
