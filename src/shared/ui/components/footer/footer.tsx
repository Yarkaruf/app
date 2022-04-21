import React, { useState } from "react";
import styles from "./footer.module.scss";
import { Container, Icon, Paragraph, TextLink } from "shared/ui/core/components";
import cx from "classnames";
import { Socials } from "shared/ui/components/sicials";
import { AccordionItem } from "shared/ui/components/accordion-item";
import { getIsRouterPathInclude } from "shared/hooks/getIsRouterPathInclude";
import { useRouter } from "next/router";
import Image from "next/image";

interface IFooter {}

export const Footer = (props: IFooter) => {
  const currentPath = useRouter().asPath;

  const [menus, setMenus] = useState<{ id: string; isOpen: boolean }[]>([
    { id: "products", isOpen: false },
    { id: "services", isOpen: false },
    { id: "company", isOpen: false }
  ]);

  const onToggle = (id: string) => {
    const newState = menus.map(it => {
      if (it.id === id) {
        return { id: it.id, isOpen: !it.isOpen };
      } else {
        return it;
      }
    });
    setMenus(newState);
  };

  return (
    <footer className={styles.footer}>
      <div className={cx(styles.mobile, styles.mobile_menu)}>
        <AccordionItem
          id={menus[0].id}
          opened={menus[0].isOpen}
          onOpen={onToggle}
          onClose={onToggle}
          buttonClassName={cx(styles.sub_menu_button)}
          buttonActiveClassName={styles.sub_menu_button_active}
          menuClassName={styles.sub_menu_footer}
          itemTitleClassName={styles.menu_item_title}
          itemTextClassName={styles.menu_item_text}
          title="Продукты"
          items={[
            {
              title: "Виртуальные серверы",
              description: "Гибкость масштабирования для\u00A0разнообразия решений",
              imageSrc: "/img/icons/vds.svg",
              href: "/vds"
            },
            {
              title: "Выделенные серверы",
              description: "Гибкость масштабирования для\u00A0разнообразия решений",
              imageSrc: "/img/icons/dedic.svg",
              href: "/dedic"
            }
          ]}
          selected={getIsRouterPathInclude(currentPath, ["vds"])}
        />

        <AccordionItem
          id={menus[1].id}
          opened={menus[1].isOpen}
          onOpen={onToggle}
          onClose={onToggle}
          buttonClassName={cx(styles.sub_menu_button)}
          buttonActiveClassName={styles.sub_menu_button_active}
          menuClassName={styles.sub_menu}
          itemTitleClassName={styles.menu_item_title}
          itemTextClassName={styles.menu_item_text}
          title="Услуги"
          items={[
            {
              title: "Администрирование",
              description: "Вместо вас решим задачи по\u00A0настройке и управлению сервером\n",
              imageSrc: "/img/icons/administration.svg",
              href: "/administration"
            },
            {
              title: "Техническая поддержка",
              description: "Быстрое решение вашего вопроса",
              imageSrc: "/img/icons/support.svg",
              href: "/support"
            }
          ]}
          selected={getIsRouterPathInclude(currentPath, ["administration", "support"])}
        />

        <AccordionItem
          id={menus[2].id}
          opened={menus[2].isOpen}
          onOpen={onToggle}
          onClose={onToggle}
          buttonClassName={cx(styles.sub_menu_button)}
          buttonActiveClassName={styles.sub_menu_button_active}
          menuClassName={styles.sub_menu}
          itemTitleClassName={styles.menu_item_title}
          itemTextClassName={styles.menu_item_text}
          title="Medialand"
          items={[
            {
              title: "О компании",
              description: "Создаём простой и\u00A0удобный сервис",
              imageSrc: "/img/icons/about.svg",
              href: "/about"
            },
            {
              title: "Road Map",
              description: "Наши планы",
              imageSrc: "/img/icons/road-map.svg",
              href: "/road-map"
            },
            {
              title: "Контакты",
              description:
                "196084 Россия, г. Санкт-Петербург, \n" +
                "ул. Цветочная, д. 16 П, оф. 27\n" +
                "\n" +
                "info@sshvps.net \n" +
                "8 (800) 600-19-88    8 (812) 449-00-65",
              imageSrc: "/img/icons/contacts.svg",
              href: "/contacts"
            },
            {
              title: "Дата-центры",
              description: "Локации под ваши задачи",
              imageSrc: "/img/icons/data-centers.svg",
              href: "/data-centers"
            },
            {
              title: "Документы",
              description: "Документация сотрудничества",
              imageSrc: "/img/icons/documents.svg",
              href: "/documents"
            }
          ]}
          selected={getIsRouterPathInclude(currentPath, ["about", "road-map", "data-centers", "documents"])}
        />

        <TextLink
          href="/vacancies"
          appearance="light"
          className={cx(styles.menu_link, getIsRouterPathInclude(currentPath, ["vacancies"]) && styles.selected)}
        >
          <Paragraph level={1} isSpan>
            Вакансии
          </Paragraph>
        </TextLink>

        <TextLink
          href="/contacts"
          appearance="light"
          className={cx(styles.menu_link, getIsRouterPathInclude(currentPath, ["contacts"]) && styles.selected)}
        >
          <Paragraph level={1} isSpan>
            Контакты
          </Paragraph>
        </TextLink>
      </div>

      <Container>
        <div className={cx(styles.row, styles.top)}>
          <div className={styles.side}>
            <TextLink href="/" appearance="white" className={styles.logo}>
              <Icon name="medialand-footer" className={cx(styles.logo_desktop_icon)} />
              <Icon name="footer-description" className={cx(styles.logo_description)} />
            </TextLink>

            <Paragraph level={2} className={cx(styles.about_text, styles.mobile, styles.logo_header)}>
              Надежная IT-инфраструктура для проектов любого масштаба
            </Paragraph>

            <div className={cx(styles.contacts_wrap, styles.desktop)}>
              <div className={styles.contacts_block}>
                <Paragraph level={3} className={styles.contact}>
                  196084 Россия, г. Санкт-Петербург, ул. Цветочная, д. 16 П, оф. 27
                </Paragraph>
              </div>

              <div className={styles.contacts_block}>
                <a href="mailto:info@sshvps.net" className={styles.contact_link}>
                  info@sshvps.net
                </a>
              </div>

              <div className={styles.contacts_block}>
                <a href="tel:88006001988" className={styles.contact_link}>
                  8 (800) 600-19-88
                </a>
                <a href="tel:88124490065" className={styles.contact_link}>
                  8 (812) 449-00-65
                </a>
              </div>
            </div>
          </div>

          <div className={cx(styles.side, styles.nav)}>
            <div className={styles.lists_block}>
              <div className={styles.list_wrap}>
                <Paragraph level={2} uppercase className={styles.list__title}>
                  ПРОДУКТЫ
                </Paragraph>
                <ul className={styles.list}>
                  <li className={styles.li}>
                    <TextLink href="/vds" appearance="white" className={styles.li_item}>
                      <Icon name="product/vds" className={styles.li_icon} />
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Виртуальные серверы
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/dedic" appearance="white" className={styles.li_item}>
                      <Icon name="product/dedic" className={styles.li_icon} />
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Выделенные серверы
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/vds" appearance="white" className={styles.li_item__disabled}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/workers.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        Удалённый рабочий стол
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/vds" appearance="white" className={styles.li_item__disabled}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/db.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        Облачные базы данных
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/vds" appearance="white" className={styles.li_item__disabled}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/repository.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        Облачное хранилище
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/vds" appearance="white" className={styles.li_item__disabled}>
                      <Icon name="product/kubernetes" className={styles.li_icon} />
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        Кластеры Kubernetes
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/vds" appearance="white" className={styles.li_item__disabled}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/iaas_footer.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        Iaas
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <Paragraph className={cx(styles.li_text, styles.li_not_icon)} level={2} isSpan>
                      Cloud Private
                    </Paragraph>
                  </li>
                  <li className={styles.li}>
                    <Paragraph className={cx(styles.li_text, styles.li_not_icon)} level={2} isSpan>
                      Cloud Public
                    </Paragraph>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/vds" appearance="white" className={styles.li_item__disabled}>
                      <Icon name="product/load-balancer" className={styles.li_icon} />
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        Балансировщик нагрузки
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/dns" appearance="white" className={styles.li_item__disabled}>
                      <Icon name="product/dns" className={styles.li_icon} />
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        DNS
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/sdn" appearance="white" className={styles.li_item__disabled}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/sdn.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        CDN
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/vds" appearance="white" className={styles.li_item__disabled}>
                      <Icon name="product/neural-networks" className={styles.li_icon} />
                      <Paragraph className={styles.li_text} level={2} isSpan>
                        Нейронные сети
                      </Paragraph>
                    </TextLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.lists_blocks}>
              <div className={styles.list_wrap}>
                <Paragraph level={2} uppercase className={styles.list__title}>
                  УСЛУГИ
                </Paragraph>
                <ul className={styles.list}>
                  <li className={styles.li}>
                    <TextLink href="/administration" appearance="white" className={styles.li_item}>
                      <Icon name="services/administration" className={styles.li_icon} />
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Администрирование
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/support" appearance="white" className={styles.li_item}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/support_footer.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Техническая поддержка
                      </Paragraph>
                    </TextLink>
                  </li>
                </ul>
              </div>

              <div className={styles.list_wrap}>
                <Paragraph level={2} uppercase className={styles.list__title}>
                  MEDIALAND
                </Paragraph>
                <ul className={styles.list}>
                  <li className={styles.li}>
                    <TextLink href="/about" appearance="white" className={styles.li_item}>
                      <Icon name="medialand/about" className={styles.li_icon} />
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        О компании
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/road-map" appearance="white" className={styles.li_item}>
                      <Icon name="medialand/road-map" className={styles.li_icon} />
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Road Map
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/data-centers" appearance="white" className={styles.li_item}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/data-centers_footer.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Дата-центры
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/documents" appearance="white" className={styles.li_item}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/ur.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Документы
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/contacts" appearance="white" className={styles.li_item}>
                      <div className={styles.image_box}>
                        <Image
                          src="/img/icons/phone.svg"
                          alt=""
                          className={styles.details__li__image}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Контакты
                      </Paragraph>
                    </TextLink>
                  </li>
                  <li className={styles.li}>
                    <TextLink href="/vacancies" appearance="white" className={styles.li_item}>
                      <Icon name="medialand/vacansies" className={styles.li_icon} />
                      <Paragraph className={cx(styles.li_text, styles.li_text_white)} level={2} isSpan>
                        Вакансии
                      </Paragraph>
                    </TextLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={cx(styles.row, styles.socials_row)}>
          <div className={cx(styles.side, styles.socials_side)}>
            <div className={styles.mobile_contacts_wrap}>
              <div className={styles.resident}>
                <Image
                  src="/img/resident.svg"
                  alt="resident"
                  layout="fill"
                  objectPosition="bottom left"
                  objectFit="contain"
                  priority
                />
              </div>

              <div className={cx(styles.contacts_wrap, styles.mobile)}>
                <div className={styles.contacts_block}>
                  <Paragraph level={4} className={styles.contact}>
                    196084 Россия, г. Санкт-Петербург, ул. Цветочная, д. 16 П, оф. 27
                  </Paragraph>
                </div>

                <div className={styles.contacts_block}>
                  <a href="mailto:info@sshvps.net" className={styles.contact_link}>
                    <Paragraph level={4}>info@sshvps.net</Paragraph>
                  </a>
                </div>

                <div className={cx(styles.contacts_block, styles.flex)}>
                  <a href="tel:88006001988" className={styles.contact_link}>
                    <Paragraph level={4}>8 (800) 600-19-88;</Paragraph>
                  </a>
                  <a href="tel:88124490065" className={styles.contact_link}>
                    <Paragraph level={4}>8 (812) 449-00-65</Paragraph>
                  </a>
                </div>
              </div>
            </div>

            <Socials className={cx(styles.side, styles.socials)} linkClassName={styles.socials__link} />
          </div>
        </div>

        <div className={cx(styles.row, styles.align_baseline, styles.bottom)}>
          <div className={cx(styles.side, styles.align_baseline, styles.bottom_side)}>
            <Paragraph level={4} className={styles.rights}>
              © ООО «Медиа Лэнд», 2022
            </Paragraph>

            <TextLink href="/documents/privacy-policy.pdf" appearance="light" className={styles.rules_link}>
              <Paragraph level={4} className={styles.rules_link__text}>
                Политика конфиденциальности
              </Paragraph>
            </TextLink>
          </div>
        </div>

        <Paragraph level={2} className={cx(styles.footer_title_text, styles.desktop, styles.desktop_text)}>
          Надежная IT-инфраструктура для проектов любого масштаба
        </Paragraph>
      </Container>
    </footer>
  );
};
