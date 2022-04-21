import React from "react";
import styles from "./notification-bar.module.scss";
import cx from "classnames";
import { Paragraph } from "shared/ui/core/components";

interface INotificationBar {
  message: React.ReactNode;
  appearance: "primary" | "warning" | "success" | "alert";
  children?: React.ReactNode;

  className?: string;
  containerClassName?: string;
  contentClassName?: string;
  messageClassName?: string;
}

export const NotificationBar = (props: INotificationBar) => {
  return (
    <div className={cx(styles.container, styles[props.appearance], props.className)}>
      <div className={cx("container", props.containerClassName)}>
        <div className={cx(styles.inner, props.contentClassName)}>
          <Paragraph weight={700} level={2} className={cx(styles.message, props.messageClassName)}>
            {props.message}
          </Paragraph>
          {props.children}
        </div>
      </div>
    </div>
  );
};

NotificationBar.defaultProps = {
  appearance: "primary"
};
