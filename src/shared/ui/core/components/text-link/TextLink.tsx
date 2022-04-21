import Link from "next/link";
import React from "react";
import cx from "classnames";
import styles from "./text-link.module.scss";

interface ITextLink {
  children: React.ReactNode;
  href: string;
  as?: string;
  targetBlank?: boolean;

  onClick?: () => void;

  appearance?: "primary" | "dark" | "light" | "white";
  bordered?: boolean;
  className?: string;
}

export const TextLink = (props: ITextLink) => (
  <Link href={props.href} as={props.as}>
    <a
      target={props.targetBlank ? "_blank" : undefined}
      className={cx(
        styles.link,
        props.bordered && styles.bordered,
        props.appearance && styles[props.appearance],
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  </Link>
);
