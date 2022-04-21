import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./icon.module.scss";

export type IconName =
  | "heart"
  | "logo"
  | "logo_mobile"
  | "drop-down"
  | "telegram"
  | "facebook"
  | "vk"
  | "in"
  | "instagram"
  | "twitter"
  | "check"
  | "check-round"
  | "cpu"
  | "ipv"
  | "select-check"
  | "down"
  | "geforce"
  | "internet"
  | "ram"
  | "ssd"
  | "advantage"
  | "advantage-icon"
  | "plus"
  | "tick"
  | "question"
  | "download"
  | "file"
  | "user"
  | "user-icon"
  | "logo-tablet"
  | "logo-description"
  | "medialand-footer"
  | "footer-description"
  | "mobile-logo-footer"
  | "cookies-icon"
  | "data-centers"
  | "long-check"
  | "product/vds"
  | "product/dedic"
  | "product/workers"
  | "product/db"
  | "product/repository"
  | "product/iaas"
  | "product/kubernetes"
  | "product/load-balancer"
  | "product/dns"
  | "product/sdn"
  | "product/neural-networks"
  | "services/administration"
  | "services/support"
  | "medialand/about"
  | "medialand/vacansies"
  | "medialand/documents"
  | "medialand/road-map"
  | "medialand/data-centers"
  | "medialand/contacts";

interface IIcon {
  name: IconName;
  onClick?: () => void;

  strokeIcon?: boolean;

  className?: string;
  style?: CSSProperties;
}

const loadIcon = (name: IconName, color: string = "black"): string => {
  return require(`!raw-loader!./svg/${name}.svg`).default.replace(/fill="none"/g, `fill="${color}"`);
};

export const Icon = (props: IIcon) => (
  <span
    className={cx(styles.icon_wrap, props.className, props.strokeIcon && styles.stroke)}
    style={props.style}
    dangerouslySetInnerHTML={{ __html: loadIcon(props.name) }}
    onClick={props.onClick}
  />
);
