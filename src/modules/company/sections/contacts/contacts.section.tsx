import React from "react";
import { Container, Paragraph, Section, Title } from "shared/ui/core/components";
import styles from "./contacts.module.scss";
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";

interface IContactsSection {}

export const ContactsSection = (props: IContactsSection) => {
  return (
    <>
      <Section className={styles.section_contacts_bc}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <Title level={3} customTag className={styles.title}>
                Контакты
              </Title>

              <Paragraph className={styles.text}>
                196084 Россия, г. Санкт-Петербург, ул.&nbsp;Цветочная, д. 16 П, оф. 27
              </Paragraph>

              <a href="mailto:info@sshvps.net" className={styles.text}>
                <Paragraph>info@sshvps.net</Paragraph>
              </a>

              <a href="tel:88006001988" className={styles.text}>
                <Paragraph>8 (800) 600-19-88</Paragraph>
              </a>

              <a href="tel:88124490065" className={styles.text}>
                <Paragraph>8 (812) 449-00-65</Paragraph>
              </a>
            </div>

            <div className={styles.right}>
              <Title level={3} customTag className={styles.title}>
                Реквизиты
              </Title>

              <Paragraph className={styles.text}>
                ОГРН: 1152536009900 <br />
                ИНН/КПП: 2536288610 <br />
                БИК: 044525092 <br />
                КПП: 781001001 <br />
                Банк: Московский филиал АО КБ “Модульбанк” <br />
                к/с №: 301018106452500 <br />
                Счёт №: 40702810670010076389 <br />
                Юридический адрес: 111024, <br />
                город Москва, шоссе Энтузиастов, дом 7, офис 13, этаж 2
              </Paragraph>
            </div>
          </div>
        </Container>
      </Section>

      <div className={styles.map_wrap}>
        <YMaps>
          <Map
            className={styles.map}
            defaultState={{
              center: [59.886316, 30.331211],
              zoom: 18,
              behaviors: ["disable('scrollZoom')", "drag", "dblClickZoom", "multiTouch"]
            }}
          >
            <Placemark geometry={[59.886316, 30.331211]} />
            <ZoomControl options={{ float: "right" }} />
          </Map>
        </YMaps>
      </div>
    </>
  );
};
