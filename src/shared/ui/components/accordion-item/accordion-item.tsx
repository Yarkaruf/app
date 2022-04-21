import React from "react";
import { LinkButton } from "shared/ui/core/components/link-button/LinkButton";
import cx from "classnames";
import styles from "shared/ui/components/header/header.module.scss";
import { Container, Icon, Paragraph } from "shared/ui/core/components";
import Link from "next/link";
import Image from "next/image";

interface IAccordionItem {
  id: string;
  title: string;
  items: {
    title: string;
    description: string;
    imageSrc: string;
    href: string;
    act?: boolean;
  }[];

  opened?: boolean;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;

  selected?: boolean;

  className?: string;
  buttonClassName?: string;
  buttonActiveClassName?: string;
  menuClassName?: string;
  itemsWrapClassMName?: string;
  itemTitleClassName?: string;
  itemTextClassName?: string;
}

interface IItemAct {
  children: React.ReactNode;
  items: {
    title: string;
    description: string;
    imageSrc: string;
    href: string;
    act?: boolean;
  }[];
}

export const AccordionItem = (props: IAccordionItem) => {
  // const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  // useClickOutside(ref, () => props.onClose(props.id));

  return (
    <div className={styles.className}>
      <LinkButton
        className={cx(
          styles.link_button,
          props.opened && styles.active,
          props.selected && styles.selected,
          props.buttonClassName,
          props.opened && props.buttonActiveClassName
        )}
        appearance="dark"
        onClick={() => {
          if (props.opened) {
            props.onClose(props.id);
          } else {
            props.onOpen(props.id);
          }
        }}
      >
        <Paragraph level={1} isSpan>
          {props.title}
        </Paragraph>
        <Icon name="drop-down" strokeIcon className={styles.link_button__icon} />
      </LinkButton>

      <div className={cx(styles.sub_menu, props.opened && styles.opened, props.menuClassName)}>
        <Container>
          <div className={cx(styles.sub_menu__items, props.itemsWrapClassMName)}>
            {props.items.map((it, key) => (
              <Link href={it.href} key={key}>
                <a
                  className={it.act ? (styles.sub_menu__item, styles.sub_menu__wait) : styles.sub_menu__item}
                  onClick={() => props.onClose(props.id)}
                >
                  <div className={styles.sub_menu__image_wrap}>
                    <Image
                      src={it.imageSrc}
                      alt=""
                      className={styles.sub_menu__image}
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                  <div className={styles.sub_menu__content}>
                    <Paragraph
                      level={1}
                      isSpan
                      weight={"bold"}
                      className={cx(styles.sub_menu__title, props.itemTitleClassName)}
                    >
                      {it.title}
                    </Paragraph>
                    <Paragraph level={2} isSpan className={cx(styles.sub_menu__description, props.itemTextClassName)}>
                      {it.description}
                    </Paragraph>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
