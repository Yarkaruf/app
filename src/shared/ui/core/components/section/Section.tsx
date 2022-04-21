import React, { forwardRef } from "react";
import styles from "./section.module.scss";
import cx from "classnames";

interface ISection {
  id?: string;
  children: React.ReactNode;
  className?: string;
  appearance?: "light" | "medium" | "dark" | "white";
  smallPaddingBottom?: boolean;
}

export const Section = forwardRef<HTMLElement, ISection>((props: ISection, ref) => {
  let className;

  switch (props.appearance) {
    case "dark":
      className = styles.dark_bg;
      break;
    case "medium":
      className = styles.medium_bg;
      break;
    case "light":
      className = styles.light_bg;
      break;
    case "white":
      className = styles.white_bg;
      break;
    default:
      className = styles.white_bg;
  }
  return (
    <section
      ref={ref}
      id={props.id}
      className={cx(styles.section, className, props.className, props.smallPaddingBottom && styles.small_pb)}
    >
      {props.children}
    </section>
  );
});
