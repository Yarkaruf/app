import React from "react";
import { Icon } from "shared/ui/core/components";

interface ISocials {
  className?: string;
  linkClassName?: string;
}

export const Socials = (props: ISocials) => {
  return (
    <div className={props.className}>
      <a href="https://vk.com/sshvps" target="_blank" className={props.linkClassName}>
        <Icon name="vk" />
      </a>

      <a href="https://www.linkedin.com/company/medialandhost" target="_blank" className={props.linkClassName}>
        <Icon name="in" />
      </a>

      <a href="https://t.me/medialand_hosting" target="_blank" className={props.linkClassName}>
        <Icon name="telegram" />
      </a>
    </div>
  );
};
