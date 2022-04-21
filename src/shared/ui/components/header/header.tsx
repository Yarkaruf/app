import React, { MutableRefObject, useRef, useState } from "react";
import { Button, Container, Icon, Paragraph, TextLink } from "shared/ui/core/components";
import cx from "classnames";
import { useClickOutside } from "@yoldi/utils/hooks";
import { useRouter } from "next/router";
import { getIsRouterPathInclude } from "shared/hooks/getIsRouterPathInclude";
import { Socials } from "shared/ui/components/sicials";
import styles from "./header.module.scss";
import { AccordionItem } from "shared/ui/components/accordion-item";
import { useWindowSize } from "shared/ui/core/utils/hooks/useWindowSize";
import { isBrowser } from "@yoldi/utils/helpers";
import { getCookie } from "@yoldi/utils/cookies";

interface IHeader {}

const menusStartState = [
  { id: "products", isOpen: false },
  { id: "services", isOpen: false },
  { id: "company", isOpen: false },
  { id: "contacts", isOpen: false }
];

export const Header = (props: IHeader) => {
  const currentPath = useRouter().asPath;

  const [menus, setMenus] = useState<{ id: string; isOpen: boolean }[]>(menusStartState);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOPen, setMobileMenuOpen] = useState(false);

  const onOpen = (id: string) => {
    const newState = menusStartState.map(it => {
      if (it.id === id) {
        return { id: it.id, isOpen: true };
      } else {
        return { id: it.id, isOpen: false };
      }
    });
    setMenus(newState);
  };

  const divRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  const closeAllMenus = () => {
    setMenus(menusStartState);
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  };

  useClickOutside(divRef, () => {
    closeAllMenus();
  });

  const windowWidth = useWindowSize().width;

  const isAuthed = getCookie("medialand:authed");

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Container>
          <div className={styles.row}>
            <div className={cx(styles.side, styles.top__side)}>
              <div className={cx(styles.side, styles.side_desktop)}>
                <TextLink href="/" className={styles.logo}>
                  <Icon name="logo-tablet" className={cx(styles.logo_desktop_icon, styles.pathicon)} />
                  <Icon name="logo-description" className={styles.logo_description} />
                </TextLink>
                <Paragraph className={styles.logotext}>
                  Надежная IT-инфраструктура для проектов любого масштаба
                </Paragraph>
              </div>
              <div className={styles.linkcontact}>
                <a href="tel:88124490065" className={styles.link}>
                  <Paragraph level={3} isSpan weight={"bold"}>
                    8 [812] 449 00 65
                  </Paragraph>
                </a>
                <a href="mailto:info@sshvps.net" className={styles.link}>
                  <Paragraph level={3} isSpan weight={"bold"}>
                    info@sshvps.net
                  </Paragraph>
                </a>
              </div>
              <Socials
                className={cx(styles.side, styles.socials, styles.socials_tablet)}
                linkClassName={styles.socials__link}
              />
            </div>
          </div>
        </Container>
      </div>

      <div className={cx(styles.middle)}>
        <Container>
          <div className={cx(styles.row, styles.logo_tablet)}>
            <TextLink href="/" className={styles.logo}>
              <Icon name="logo-tablet" className={cx(styles.logo_tablet_icon, styles.pathicon)} />
            </TextLink>
            <Paragraph className={styles.logotext}>Надежная IT-инфраструктура для проектов любого масштаба</Paragraph>
            {isBrowser() &&
              (!isAuthed ? (
                <div className={cx(styles.side, styles.buttons, styles.buttons_tablet)}>
                  <a href={process.env.APP_URL + "/auth/login"}>
                    <Button isSpan outline autoWith>
                      Войти
                    </Button>
                  </a>

                  <a href={process.env.APP_URL + "/auth/sign-up"}>
                    <Button isSpan>Зарегистрироваться</Button>
                  </a>
                </div>
              ) : (
                <div className={cx(styles.side, styles.buttons, styles.buttons_tablet)}>
                  <a href={process.env.APP_URL + "/vds"}>
                    <Button isSpan>В кабинет</Button>
                  </a>
                </div>
              ))}
          </div>
        </Container>
      </div>

      <div className={styles.bottom} ref={divRef}>
        <Container>
          <div className={styles.row}>
            <div className={styles.row_mobile}>
              <button
                className={cx(styles.menu_button, mobileMenuOPen && styles.active)}
                onClick={() => {
                  setUserMenuOpen(false);
                  setMobileMenuOpen(!mobileMenuOPen);
                }}
              ></button>
              <TextLink href="/" className={styles.logo}>
                <div className={styles.logo_mobile}> </div>
              </TextLink>
              <button
                className={styles.user_button}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setUserMenuOpen(!userMenuOpen);
                }}
              >
                <Icon name="user-icon" className={styles.user_icon} />
              </button>
            </div>

            <div className={cx(styles.side, styles.list, mobileMenuOPen && styles.mobile_visible)}>
              <AccordionItem
                itemsWrapClassMName={styles.sub_menu__items_col3}
                id={menus[0].id}
                title="Продукты"
                items={[
                  {
                    title: "Виртуальные серверы",
                    description: "Гибкость масштабирования для\u00A0разнообразия решений",
                    imageSrc: "/img/icons/vds.svg",
                    href: "/vds"
                  },
                  {
                    title: "Облачные базы данных",
                    description: "Продукт в разработке",
                    imageSrc: "/img/icons/cloud.svg",
                    href: "/",
                    act: true
                  },

                  {
                    title: "Iaas",
                    description: "Продукт в разработке",
                    imageSrc: "/img/icons/iasspr.svg",
                    href: "/",
                    act: true
                  },
                  {
                    title: "Выделенные серверы",
                    description: "Воплощение проектов большого\u00A0объема и значимости",
                    imageSrc: "/img/icons/dedic.svg",
                    href: "/dedic"
                  },
                  {
                    title: "Облачное хранилище",
                    description: "Продукт в разработке",
                    imageSrc: "/img/icons/cloude-save.svg",
                    href: "/",
                    act: true
                  },
                  {
                    title: "Балансировщик нагрузки",
                    description: "Продукт в разработке",
                    imageSrc: "/img/icons/balance.svg",
                    href: "/",
                    act: true
                  },
                  {
                    title: "Удалённый рабочий стол",
                    description: "Продукт в разработке",
                    imageSrc: "/img/icons/delete.svg",
                    href: "/",
                    act: true
                  },
                  {
                    title: "Кластеры Kubernetes",
                    description: "Продукт в разработке",
                    imageSrc: "/img/icons/kubernets.svg",
                    href: "/",
                    act: true
                  },
                  {
                    title: "Нейронные сети",
                    description: "Продукт в разработке",
                    imageSrc: "/img/icons/neiron.svg",
                    href: "/",
                    act: true
                  }
                ]}
                opened={menus[0].isOpen}
                onOpen={onOpen}
                onClose={closeAllMenus}
                selected={getIsRouterPathInclude(currentPath, ["vds"])}
              />

              <AccordionItem
                itemsWrapClassMName={styles.sub_menu__items_col3}
                id={menus[1].id}
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
                opened={menus[1].isOpen}
                onOpen={onOpen}
                onClose={closeAllMenus}
                selected={getIsRouterPathInclude(currentPath, ["administration", "support"])}
              />
              <AccordionItem
                id={menus[2].id}
                itemsWrapClassMName={styles.sub_menu__items_col3}
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
                opened={menus[2].isOpen}
                onOpen={onOpen}
                onClose={closeAllMenus}
                selected={getIsRouterPathInclude(currentPath, ["about", "road-map", "data-centers", "documents"])}
              />

              <TextLink
                href="/vacancies"
                appearance="dark"
                className={cx(styles.menu_link, getIsRouterPathInclude(currentPath, ["vacancies"]) && styles.selected)}
                onClick={closeAllMenus}
              >
                <Paragraph level={1} isSpan>
                  Вакансии
                </Paragraph>
              </TextLink>

              <TextLink
                href="/contacts"
                appearance="dark"
                className={cx(
                  styles.menu_link,
                  styles.contact_mobile,
                  getIsRouterPathInclude(currentPath, ["contacts"]) && styles.selected
                )}
                onClick={closeAllMenus}
              >
                <Paragraph level={1} isSpan>
                  Контакты
                </Paragraph>
              </TextLink>
            </div>
            <Container>
              <div className={styles.row}>
                {isBrowser() &&
                  (!isAuthed ? (
                    <div className={cx(styles.side, styles.buttons, styles.buttons_desktop)}>
                      <a className={styles.buttons_desktop_signin} href={process.env.APP_URL + "/auth/login"}>
                        <Button isSpan outline autoWith>
                          Войти
                        </Button>
                      </a>

                      <a className={styles.buttons_desktop_signup} href={process.env.APP_URL + "/auth/sign-up"}>
                        <Button isSpan>Зарегистрироваться</Button>
                      </a>
                    </div>
                  ) : (
                    <div className={cx(styles.side, styles.buttons, styles.buttons_desktop_enter_wrapper)}>
                      <a className={styles.button} href={process.env.APP_URL + "/vds"}>
                        <Button isSpan>В кабинет</Button>
                      </a>
                    </div>
                  ))}
              </div>
            </Container>

            <Socials className={cx(styles.side, styles.socials)} linkClassName={styles.socials__link} />

            <div className={cx(styles.user_mobile_menu, userMenuOpen && styles.visible)}>
              <div className={styles.user_mobile_menu__inner}>
                <Container>
                  <div className={cx(styles.side, styles.user_contacts)}>
                    <a href="mailto:info@sshvps.net" className={styles.link}>
                      <Paragraph level={3} isSpan weight={"bold"}>
                        info@sshvps.net
                      </Paragraph>
                    </a>
                    <a href="tel:88006001999" className={styles.link}>
                      <Paragraph level={3} isSpan weight={"bold"}>
                        8 [812] 449 00 65
                      </Paragraph>
                    </a>
                  </div>

                  {isBrowser() &&
                    (!isAuthed ? (
                      <>
                        <a href={process.env.APP_URL + "/auth/login"}>
                          <Button isSpan outline autoWith fullWidth className={styles.user_mobile_menu__button}>
                            Войти
                          </Button>
                        </a>

                        <a href={process.env.APP_URL + "/auth/sign-up"}>
                          <Button isSpan fullWidth>
                            Зарегистрироваться
                          </Button>
                        </a>
                      </>
                    ) : (
                      <a href={process.env.APP_URL + "/vds"}>
                        <Button isSpan fullWidth>
                          В кабинет
                        </Button>
                      </a>
                    ))}
                </Container>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        className={cx(
          styles.overflow,
          (menus.some(it => it.isOpen && windowWidth > 767) || userMenuOpen || mobileMenuOPen) && styles.visible
        )}
      />
    </header>
  );
};
