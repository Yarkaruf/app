import React from "react";
import styles from "modules/servers/components/tariffs-dedic/tariffs-list/tariffs-list.module.scss";
import { Sections } from "modules/servers/components/tariffs-dedic/sections";
import { Button, Icon, Paragraph, Title, Container } from "shared/ui/core/components";
import cx from "classnames";
import formatMoney from "@yoldi/utils/format/money";
import Image from "next/image";
import { CustomerTariffDto, NetworkConfigurationDtoSpeedEnum, Processor } from "shared/api/dcim/generated";
import { TariffWithProcessor } from "pages/dedic";
import { DiskConfigurationDto } from "../../../../../shared/api/dcim/generated";
import { formatHertz } from "@yoldi/utils/format/frequency";
import { formatBytesSize } from "@yoldi/utils/format/bytesSize";

interface ITariffsList {
  data?: TariffWithProcessor[];

  href: string;

  usdRubRate: string;
  showUSD?: boolean;

  className?: string;
}

export const TariffsList = (props: ITariffsList) => {
  return (
    <div className={cx(styles.list, props.className)}>
      {props.data
        ?.sort((a, b) => {
          if (a.tariff.name.toLowerCase() < b.tariff.name.toLowerCase()) return -1;
          if (a.tariff.name.toLowerCase() > b.tariff.name.toLowerCase()) return 1;
          return 0;
        })
        .map(it => (
          <TariffItem
            key={it.tariff.id}
            {...it}
            {...it.tariff}
            href={`${props.href}?tariffId=${it.tariff.id}`}
            showUSD={props.showUSD}
            usdRubRate={props.usdRubRate}
          />
        ))}
    </div>
  );
};

interface ITariffItem extends CustomerTariffDto {
  data?: TariffWithProcessor[];
  model?: Processor[];
  href: string;

  usdRubRate: string;
  showUSD?: boolean;
}

/*
function spoilers(id: string | undefined, name: string | undefined) {
  if (id !== undefined && name !== undefined) {
    const spoiler = document.getElementById(id);
    const box = document.getElementById(name);
    if (spoiler !== null && box !== null) {
      spoiler.style.display = "flex";
      box.style.backgroundColor = "#F9FCFF";
      box.style.boxShadow = "inset 4px 4px 10px 2px rgba(65, 106, 143, 0.1)";
    }
  }
}
*/

function close(id: string | undefined, name: string | undefined) {
  if (id !== undefined && name !== undefined) {
    const spoiler = document.getElementById(id);
    const box = document.getElementById(name);
    if (spoiler !== null && box !== null) {
      spoiler.style.display = "none";
      box.style.backgroundColor = "#FFF";
      box.style.boxShadow = "6px 6px 30px rgba(108, 134, 160, 0.15)";
    }
  }
}

function renderNetworkSpeed(speed: NetworkConfigurationDtoSpeedEnum) {
  switch (speed) {
    case NetworkConfigurationDtoSpeedEnum._1GB:
      return "1 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._2GB:
      return "2 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._3GB:
      return "3 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._4GB:
      return "4 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._5GB:
      return "5 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._6GB:
      return "6 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._7GB:
      return "7 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._8GB:
      return "8 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._9GB:
      return "9 Gb/s";
    case NetworkConfigurationDtoSpeedEnum._10GB:
      return "10 Gb/s";
    default:
      return "Быстрая сеть и ";
  }
}

const renderDisks = (disks: DiskConfigurationDto[]): React.ReactNode => {
  const grouped: Record<string, { type: string; volume: number; count: number }> = {};

  disks.forEach(disk => {
    const key = `${disk.type}${disk.volume}`;
    if (!grouped[key]) {
      grouped[key] = {
        type: disk.type,
        volume: disk.volume,
        count: 0
      };
    }
    grouped[key].count++;
  });

  return Object.values(grouped).map(disk => (
    <span key={`${disk.type}${disk.volume}`}>
      <span className={styles.bold}>
        {disk.count}x {formatBytesSize(disk.volume, "gb")}
      </span>
      <span style={{ marginRight: 7.5 }}>{disk.type}</span>
    </span>
  ));
};

const TariffItem = (props: ITariffItem) => {
  return (
    <Container className={styles.dedic_container}>
      <div className={styles.box}>
        <div id={props.name} className={styles.item}>
          <div className={styles.item__block}>
            <div className={styles.title_wrap}>
              <Icon name="check-round" className={styles.title_icon} />
              <Title level={4} className={styles.title}>
                {props.name}
              </Title>
            </div>

            <div className={styles.details}>
              <ul className={styles.details__list}>
                {props.cpuConfigurations && (
                  <li className={styles.details__li}>
                    <Paragraph className={styles.info} level={2}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/cpu.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      {props.model && (
                        <div className={styles.flex_cpu}>
                          <span className={cx(styles.bold, styles.no_wrap)}>
                            {props.cpuConfigurations.length}x&nbsp;{props.model[0].name}&nbsp;
                            {formatHertz(props.model[0].maxFrequency).replace("undefined", "GHz")}
                          </span>
                          {/* TODO добится от коллег как они заводят частоту процессора */}
                          <span className={styles.bold}>
                            {props.model[0].cores * props.model.length}C/{props.model[0].threads * props.model.length}T
                          </span>
                        </div>
                      )}
                    </Paragraph>
                  </li>
                )}

                {props.diskConfigurations && (
                  <li className={styles.details__li}>
                    <Paragraph className={styles.info} level={2}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/ssd.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <div className={styles.disk_info}>{renderDisks(props.diskConfigurations)}</div>
                    </Paragraph>
                  </li>
                )}

                {props.ramConfiguration && (
                  <li className={styles.details__li}>
                    <Paragraph className={styles.info} level={2}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/ram.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <span className={styles.bold}>{props.ramConfiguration.volume} GB</span> RAM
                    </Paragraph>
                  </li>
                )}
              </ul>

              <ul className={styles.details__list}>
                <li className={styles.details__li}>
                  <Paragraph className={styles.info} level={2}>
                    <div className={styles.image_box}>
                      <Image
                        src="/img/icons/internet.svg"
                        alt=""
                        className={styles.details__li__image}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                    <span className={styles.bold}>{renderNetworkSpeed(props.networkConfiguration.speed)}</span>{" "}
                    Безлимитный трафик
                  </Paragraph>
                </li>

                <li className={styles.details__li}>
                  <Paragraph className={styles.info} level={2}>
                    <div className={styles.image_box}>
                      <Image
                        src="/img/icons/geforce.svg"
                        alt=""
                        className={styles.details__li__image}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                    <span className={styles.bold}> Без GPU</span>
                  </Paragraph>
                </li>

                <li className={styles.details__li}>
                  <Paragraph className={styles.info} level={2}>
                    <div className={styles.image_box}>
                      <Image
                        src="/img/icons/ipv.svg"
                        alt=""
                        className={styles.details__li__image}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                    <span className={styles.bold}>
                      IPv4 - {props.networkConfiguration.ipv4Count}шт, IPv6 - {props.networkConfiguration.ipv6Count}шт
                    </span>
                  </Paragraph>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.right_col}>
            <div className={styles.tariffs_prices}>
              {props.instanceMonthPrice && (
                <Paragraph className={styles.info} level={1} weight={700}>
                  {props.showUSD ? (
                    <>{formatMoney(props.instanceMonthPrice / parseFloat(props.usdRubRate), "$/мес")}</>
                  ) : (
                    <>{formatMoney(props.instanceMonthPrice, "")} ₽/мес </>
                  )}
                </Paragraph>
              )}
            </div>
            <a href={props.href}>
              <Button isSpan fullWidth className={styles.item__button}>
                Заказать
              </Button>
            </a>
            {/* <Button onClick={() => spoilers(props.id, props.name)} className={styles.change_button}>
              Изменить
            </Button> // TODO add options */}
          </div>
        </div>
        <div id={props.id} className={styles.spoiler}>
          <div className={styles.spoiler__box}>
            <div className={styles.details}>
              <ul className={styles.details__list}>
                {props.ramConfiguration && (
                  <li className={styles.details__li}>
                    <Paragraph className={styles.info} level={2}>
                      <div className={styles.image_box}>
                        <div className={styles.image_class}>
                          <Image
                            src="/img/icons/ram.svg"
                            alt=""
                            className={styles.details__li__image}
                            layout="fill"
                            objectFit="contain"
                            priority
                          />
                        </div>
                      </div>
                      <span className={styles.bold}>{props.ramConfiguration.volume} GB </span> RAM
                    </Paragraph>
                    <Paragraph className={styles.info}>
                      <div className={styles.select}>
                        <Sections
                          id_container={props.id}
                          id_list="ram"
                          id_box="ram_box"
                          data={[
                            {
                              id: 1,
                              ram: "2 GB RAM",
                              price: "150 ₽",
                              active: true
                            },
                            {
                              id: 2,
                              ram: "2 GB RAM",
                              price: "150 ₽",
                              active: true
                            },
                            {
                              id: 3,
                              ram: "2 GB RAM",
                              price: "150 ₽",
                              active: true
                            }
                          ]}
                        />
                      </div>
                    </Paragraph>
                  </li>
                )}
                <li className={styles.details__li}>
                  <Paragraph className={styles.info} level={2}>
                    <div className={styles.image_box}>
                      <Image
                        src="/img/icons/ssd.svg"
                        alt=""
                        className={styles.details__li__image}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                    <span className={styles.bold}>50 GB </span> SSD NVMe
                  </Paragraph>
                  <Paragraph className={styles.info}>
                    <div className={styles.select}>
                      <Sections
                        id_container={props.id}
                        id_list="ssd"
                        id_box="ssd_box"
                        data={[
                          {
                            id: 1,
                            ram: "50 GB SSD NVMe",
                            price: "150 ₽",
                            active: true
                          },
                          {
                            id: 2,
                            ram: "SSD 256 GB",
                            price: "150 ₽",
                            active: true
                          },
                          {
                            id: 3,
                            ram: "SSD 512 GB",
                            price: "150 ₽",
                            active: true
                          }
                        ]}
                      />
                    </div>
                  </Paragraph>
                </li>
              </ul>
              <ul className={(styles.details__list, styles.details__second)}>
                <li className={styles.details__li}>
                  <Paragraph className={styles.info} level={2}>
                    <div className={styles.image_box}>
                      <Image
                        src="/img/icons/internet.svg"
                        alt=""
                        className={styles.details__li__image}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                    <span className={styles.bold}>100 MB/s </span> Безлимитный трафик
                  </Paragraph>
                  <Paragraph className={styles.info}>
                    <div className={styles.select}>
                      <Sections
                        id_container={props.id}
                        id_list="internet"
                        id_box="internet_box"
                        data={[
                          {
                            id: 1,
                            ram: "100 MB/s безлимитный трафик",
                            price: "150 ₽",
                            active: true
                          },
                          {
                            id: 2,
                            ram: "100 MB/s безлимитный трафик",
                            price: "150 ₽",
                            active: true
                          },
                          {
                            id: 3,
                            ram: "100 MB/s безлимитный трафик",
                            price: "150 ₽",
                            active: true
                          }
                        ]}
                      />
                    </div>
                  </Paragraph>
                </li>
                {props.diskConfigurations && (
                  <li className={styles.details__li}>
                    <Paragraph className={styles.info}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/ssd.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <span className={styles.bold}>50 GB </span> SSD NVMe
                    </Paragraph>
                    <Paragraph className={styles.info}>
                      <div className={styles.select}>
                        <Sections
                          id_container={props.id}
                          id_list="ssdtwo"
                          id_box="ssdtwo_box"
                          data={[
                            {
                              id: 1,
                              ram: "50 GB SSD NVMe",
                              price: "150 ₽",
                              active: true
                            },
                            {
                              id: 2,
                              ram: "SSD 256 GB",
                              price: "150 ₽",
                              active: true
                            },
                            {
                              id: 3,
                              ram: "SSD 512 GB",
                              price: "150 ₽",
                              active: true
                            }
                          ]}
                        />
                      </div>
                    </Paragraph>
                  </li>
                )}
              </ul>
            </div>
            <Button onClick={() => close(props.id, props.name)} className={styles.save_button}>
              Сохранить изменения
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
