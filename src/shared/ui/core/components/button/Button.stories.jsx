import React from "react";
import { Button } from "./Button";

export default {
  title: "containers/Button",
  component: Button,
  argTypes: {
    children: { control: "text" }
  }
};

export const primary = args => <Button {...args} >Button</Button>;
primary.args = {
  children: "Применить"
};

export const primaryLoading = args => <Button {...args} >Button</Button>;
primaryLoading.args = {
  children: "Применить",
  loading: true
};

export const outline = args => <Button {...args} >Button</Button>;
outline.args = {
  children: "Отменить",
  outline: true
};

export const outlineLoading = args => <Button {...args} >Button</Button>;
outlineLoading.args = {
  children: "Отменить",
  outline: true,
  loading: true
};
