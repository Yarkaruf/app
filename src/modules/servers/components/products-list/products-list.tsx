/* eslint-disable prefer-const */
import React from "react";
import styles from "modules/servers/components/products-list/products-list.module.scss";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Paragraph, Title } from "shared/ui/core/components";

interface IServicesList {
  className?: string;
}

export const ProductsList = (props: IServicesList) => {
  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.list, props.className)}>
        <ServicesListItem
          href="/vds"
          title="Виртуальные серверы /с GPU"
          description="Масштабируемое решение за&nbsp;1&nbsp;минуту на&nbsp;NVMe&nbsp;дисках"
          imageSrc="/img/products-list/vds.svg"
        />

        <ServicesListItem
          href="/dedic"
          title="Выделенные серверы /с GPU"
          description="Мощные&nbsp;серверы с&nbsp;1&nbsp;Гбит каналом без&nbsp;учета&nbsp;трафика"
          imageSrc="/img/products-list/dedic.svg"
        />

        <ServicesListItem
          title="Удалённый рабочий стол"
          description="Продукт в&nbsp;разработке. Дата&nbsp;выхода: 2&nbsp;квартал&nbsp;2022"
          imageSrc="/img/products-list/desktop.svg"
        />

        <ServicesListItem
          title="Облачные базы данных"
          description="Продукт в&nbsp;разработке. Дата&nbsp;выхода: 2&nbsp;квартал&nbsp;2022"
          imageSrc="/img/products-list/data-base.svg"
        />

        <ServicesListItem
          title="Облачное хранилище"
          description="Продукт в&nbsp;разработке. Дата&nbsp;выхода: 3&nbsp;квартал&nbsp;2022"
          imageSrc="/img/products-list/cloud-drive.svg"
        />

        <ServicesListItem
          title="Кластеры Kubernetes"
          description="Продукт в&nbsp;разработке. Дата&nbsp;выхода: 4&nbsp;квартал&nbsp;2022"
          imageSrc="/img/products-list/clusters.svg"
        />

        <ServicesListItem
          title="Iaas Cloud&nbsp;Public Cloud&nbsp;Private"
          description="Продукт в&nbsp;разработке. Дата&nbsp;выхода: 4&nbsp;квартал&nbsp;2022"
          imageSrc="/img/products-list/iaas.svg"
        />

        <ServicesListItem
          title="DNS, CDN, Балансировщик нагрузки"
          description="Продукт в&nbsp;разработке. Дата&nbsp;выхода: 1&nbsp;квартал&nbsp;2023"
          imageSrc="/img/products-list/dns.svg"
        />

        <ServicesListItem
          title="Нейронные сети"
          description="Продукт в&nbsp;разработке. Дата&nbsp;выхода: 1&nbsp;квартал&nbsp;2023"
          imageSrc="/img/products-list/neural-networks.svg"
        />
      </div>
    </div>
  );
};

interface IItemTeg {
  children: React.ReactNode;
  href?: string;
}

const Tag = (props: IItemTeg) => {
  if (props.href)
    return (
      <Link href={props.href}>
        <a className={cx(styles.link, styles.item)}>{props.children}</a>
      </Link>
    );

  return <div className={cx(styles.item, styles.not_active)}>{props.children}</div>;
};

interface IServicesListItem {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  size?: string;
}

const ServicesListItem = (props: IServicesListItem) => {
  let name = props.size;
  return (
    <Tag href={props.href}>
      <div className={name}>
        <Image
          src={props.imageSrc}
          alt=""
          className={styles.bg_imagee}
          layout="fill"
          objectFit="contain"
          objectPosition="top left"
          priority
        />
      </div>

      <div className={styles.content}>
        <Title level={4} className={styles.title}>
          {props.title}
        </Title>
        <Paragraph level={2} className={styles.description}>
          {props.description}
        </Paragraph>
      </div>
    </Tag>
  );
};
