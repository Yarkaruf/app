import React, { MutableRefObject, useRef, useState } from "react";
import styles from "./map_page.module.scss";
import cx from "classnames";
import { Paragraph, Popup, TextLink, Title } from "shared/ui/core/components";
import { useClickOutside } from "@yoldi/utils/hooks";
import Image from "next/image";
import { useWindowSize } from "shared/ui/core/utils/hooks/useWindowSize";

const mapImage = require("/public/img/map.svg");
const mapImageMobile = require("/public/img/map-mobile.svg");

interface IMapPage {
  pageName?: boolean;
}

export const MapPage = (props: IMapPage) => {
  const windowWidth = useWindowSize().width;

  return (
    <div className={styles.container}>
      <div className={styles.desktop_img}>
        {<Image src={mapImage} layout="fill" quality={40} className={styles.desktop} priority />}
      </div>
      <div className={styles.mobile_img}>
        {<Image src={mapImageMobile} layout="fill" quality={40} className={styles.desktop} priority />}
      </div>
      <Item className={styles.item_1} />

      <Item className={styles.item_2} />

      <Item
        className={styles.item_3}
        data={{
          city: "Санкт-Петербург",
          datacenter: "XELENT",
          address: "Россия, г. Санкт-Петербург, Выборгское ш., д. 503, корп. 12",
          info: "ЦОД введен в эксплуатацию\n" + "в 2014 году\n" + "Площадь ЦОД 3,2 Га\n" + "Серверных стоек: 1476 шт.",
          href: "/data-centers#spb"
        }}
      />

      <Item
        className={styles.item_4}
        data={{
          city: "Москва",
          datacenter: "VOLUME SOLUTIONS",
          address: "Россия, г. Москва, \n" + "ул. Угрешская, д. 2б стр. 37",
          info:
            "ЦОД введен в эксплуатацию" + "в 2010 году\n" + "Площадь ЦОД  923,3 кв.м\n" + "Серверных стоек : 120 шт.",
          href: "/data-centers#moscow"
        }}
      />

      <Item className={styles.item_5} />
    </div>
  );
};

interface IItem {
  data?: {
    city: string;
    datacenter?: string;
    address: string;
    info: string;
    href: string;
  };
  className?: string;
}

const Item = (props: IItem) => {
  const [popupActive, setPopupActive] = useState(false);

  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  useClickOutside(ref, () => setPopupActive(false));

  return (
    <div className={cx(styles.item, props.className)} onClick={() => setPopupActive(!popupActive)} ref={ref}>
      <div className={cx(styles.marker, props.data && styles.active)} />

      {props.data && (
        <Popup active={popupActive} className={styles.popup}>
          <Title level={4} className={styles.city}>
            {props.data?.city}
          </Title>
          <Paragraph level={3} className={styles.datacenter} weight={700}>
            {props.data?.datacenter}
          </Paragraph>
          <Paragraph level={3} className={styles.address} weight={700}>
            {props.data?.address}
          </Paragraph>
          <Paragraph level={3} className={styles.info}>
            {props.data?.info}
          </Paragraph>

          <TextLink href={props.data?.href}>
            <Paragraph level={3} className={styles.link} weight={700}>
              Подробнее
            </Paragraph>
          </TextLink>
        </Popup>
      )}
    </div>
  );
};
