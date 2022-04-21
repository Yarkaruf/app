import React from "react";
import { Button, Container, Icon, Paragraph, Section, Title } from "shared/ui/core/components";
import styles from "./documents-section.module.scss";
import cx from "classnames";
import Link from "next/link";

interface IDocumentsSection {}

export const DocumentsSection = (props: IDocumentsSection) => {
  return (
    <Section className={styles.section_bc}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Title className={styles.title} level={2}>
            Документы
          </Title>

          <div className={cx(styles.row, styles.top)}>
            <Paragraph className={styles.description}>
              В соответствии с ГК РФ (п. 2 ст. 437), ООО «Медиа Лэнд» предоставляет свои услуги на основании публичной
              оферты.
              <br />
              Договор считается заключённым при выполнении клиентом действий, указанных в оферте (акцепте оферты).
            </Paragraph>
          </div>

          <div className={cx(styles.row, styles.top)}>
            <div className={cx(styles.buttons_wrap, styles.btn_offerta)}>
              <Link href="/documents/offerta.pdf">
                <a target="_blank">
                  <Button isSpan outline className={styles.button}>
                    <Icon name="download" strokeIcon className={styles.download_icon} />
                    Оферта
                  </Button>
                </a>
              </Link>
              <Link href="/documents/appendix_1_offerta.pdf">
                <a target="_blank">
                  <Button isSpan outline className={styles.button}>
                    <Icon name="download" strokeIcon className={styles.download_icon} />
                    Соглашение о автоматических платежах
                  </Button>
                </a>
              </Link>
              <Link href="/documents/appendix_2_offerta.pdf">
                <a target="_blank">
                  <Button isSpan outline className={styles.button}>
                    <Icon name="download" strokeIcon className={styles.download_icon} />
                    Правила использования услуг
                  </Button>
                </a>
              </Link>
            </div>

            <div className={cx(styles.buttons_wrap, styles.btn_offerta)}>
              <Link href="/documents/privacy-policy.pdf">
                <a target="_blank">
                  <Button isSpan outline className={styles.button}>
                    <Icon name="download" strokeIcon className={styles.download_icon} />
                    Политика конфиденциальности
                  </Button>
                </a>
              </Link>
              <Link href="/documents/appendix_1_privacy-policy.pdf">
                <a target="_blank">
                  <Button isSpan outline className={styles.button}>
                    <Icon name="download" strokeIcon className={styles.download_icon} />
                    Согласие на обработку персональных данных
                  </Button>
                </a>
              </Link>
              <Link href="/documents/appendix_2_privacy-policy.pdf">
                <a target="_blank">
                  <Button isSpan outline className={styles.button}>
                    <Icon name="download" strokeIcon className={styles.download_icon} />
                    Политика использования cookie-файлов
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.column_left}>
              <Title level={3} className={styles.subtitle}>
                Заключение договора в&nbsp;письменном виде
              </Title>

              <Paragraph className={styles.text}>
                Если вам необходимо заключение договора об оказании услуг в письменном виде, пожалуйста, направьте
                запрос по адресу электронной почты <a href="mailto:info@sshvps.net">info@sshvps.net</a>, в окне
                онлайн-чата на сайте или по другими каналам связи, указанным в разделе "Контакты". В запросе укажите
                ваши контактные данные и перечень услуг.
              </Paragraph>

              <Paragraph className={styles.text}>
                После получения вашего запроса, мы подготовим 2 письменных экземпляра договора и отправим вам на
                подписание по указанному вами почтовому адресу. Вам будет необходимо подписать договор со своей стороны
                и отправить 1 экземпляр договора обратно нам.
              </Paragraph>

              <Paragraph className={styles.text}>
                Если вы находитесь в Санкт-Петербурге, то для заключения договора вы можете приехать к нам в офис. При
                себе необходимо иметь подписанный документ, удостоверяющий личность и полномочия (для представителя
                юридического лица).
              </Paragraph>

              <Paragraph className={styles.text}>
                Мы также используем систему электронного документооборота (ЭДО) - Контур.Диадок и можем подписать
                договор в электронном виде.
              </Paragraph>
            </div>

            <div className={styles.column_right}>
              <Title level={3} className={styles.subtitle}>
                Отчетные финансовые&nbsp;документы
              </Title>
              <Paragraph className={styles.text}>
                Закрывающие документы (счета, счета-фактуры на аванс, акты об оказании услуг и счета-фактуры)
                формируются при оплате услуг через безналичный расчет (только для юридических лиц). Получать их можно
                ежемесячно, бесплатно, через систему электронного документооборота (ЭДО) - Контур.Диадок.
              </Paragraph>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
