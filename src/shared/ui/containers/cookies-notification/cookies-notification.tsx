import React, { useState } from "react";
import { NotificationBar } from "shared/ui/components/notification-bar/NotificationBar";
import styles from "./cookies-notification.module.scss";
import LocalStorage from "@yoldi/utils/LocalStorage";
import { useDidMount } from "@yoldi/utils/hooks";
import { LinkButton } from "shared/ui/core/components/link-button/LinkButton";
import { Paragraph, TextLink, Icon } from "shared/ui/core/components";
import Image from "next/image";
import cx from "classnames";

const cookies = require("/public/img/cookies.png");

interface ICookiesNotification {}

export const CookiesNotification = (props: ICookiesNotification) => {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState<"true" | "false" | undefined | null>("false");

  useDidMount(() => {
    setAreCookiesAccepted(LocalStorage.getItem("cookies_accepted"));
  });

  if (areCookiesAccepted === "true" || areCookiesAccepted === "false") return null;

  const acceptCookies = () => {
    LocalStorage.setItem("cookies_accepted", "true");
    setAreCookiesAccepted(LocalStorage.getItem("cookies_accepted"));
  };

  const declineCookies = () => {
    LocalStorage.setItem("cookies_accepted", "false");
    setAreCookiesAccepted(LocalStorage.getItem("cookies_accepted"));
  };

  return (
    <NotificationBar
      className={styles.notification}
      containerClassName={styles.container}
      contentClassName={styles.inner}
      messageClassName={styles.text}
      message={
        <>
          <div className={styles.cookie_img}>
            <Image src={cookies} className={styles.image} />
          </div>
          <Paragraph level={4}>
            В работе этого сайта мы применяем файлы cookie. Это необходимо, чтобы ресурс был безопасным и удобным для
            вас.{" "}
            <TextLink appearance="primary" href={"/documents/appendix_2_privacy-policy.pdf"} targetBlank>
              Подробнее
            </TextLink>{" "}
            о том, что такое cookie и как мы их используем.
          </Paragraph>
        </>
      }
    >
      <>
        <div className={styles.buttons_wrap}>
          <LinkButton appearance="light" className={cx(styles.button, styles.accept)} onClick={acceptCookies}>
            <Paragraph level={4} className={styles.button_text}>
              Принять cookie
            </Paragraph>
          </LinkButton>

          <LinkButton appearance="light" className={styles.button} onClick={declineCookies}>
            <Paragraph level={4} className={styles.button_text}>
              Не принимать
            </Paragraph>
          </LinkButton>
        </div>

        <div className={styles.close} onClick={declineCookies}>
          <span />
          <span />
        </div>
      </>
    </NotificationBar>
  );
};
