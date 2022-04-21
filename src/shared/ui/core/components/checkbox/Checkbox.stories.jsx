import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: { action: "onChange" }
  }
};

export const basic = args => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      value={checked}
      label="Checkbox"
      onChange={() => {
        args.onChange(!checked);
        setChecked(!checked);
      }}
    />
  );
};
