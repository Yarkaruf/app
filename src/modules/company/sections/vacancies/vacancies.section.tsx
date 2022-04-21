import React from "react";
import { Container, Paragraph, Section, Title } from "shared/ui/core/components";
import styles from "./vacansies-section.module.scss";
import Link from "next/link";
import { IVacancy } from "modules/company/sections/vacancies/vacancy";

interface IVacanciesSection {
  data?: IVacancy[];
}

export const VacanciesSection = (props: IVacanciesSection) => {
  return (
    <Section className={styles.vac_bc}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <Title level={2} className={styles.title}>
              Присоединяйтесь к команде профессионалов Medialand
            </Title>

            <div className={styles.description_wrap}>
              <Paragraph className={styles.description_title}>Что мы предлагаем:</Paragraph>
              <ul className={styles.description_list}>
                <li className={styles.description_li}>
                  {" "}
                  Удобный график. Приходим в офис в интервале с 9.00 до 12.00. По необходимости, есть возможность пару
                  дней в неделю работать из дома.{" "}
                </li>
                <li className={styles.description_li}>
                  {" "}
                  Комфортный офис. Расположен в 10 минутах ходьбы от метро «Московские ворота» / «Электросила»
                </li>
                <li className={styles.description_li}> ДМС 50/50 с компанией</li>
                <li className={styles.description_li}> Оформление по ТК РФ</li>
                <li className={styles.description_li}> Предоставим необходимую технику и ПО, оплатим книги и курсы</li>
                <li className={styles.description_li}>
                  {" "}
                  Готовы индивидуально обсуждать с каждым кандидатом зарплатные ожидания
                </li>
                <li className={styles.description_li}> Минимум бюрократии, работа на результат</li>
                <li className={styles.description_li}>
                  {" "}
                  Открыты для новых идей и предложений, поддерживаем инициативы
                </li>
                <li className={styles.description_li}>
                  {" "}
                  Для комфортной работы команды мы поддерживаем дружескую атмосферу и стремимся уйти от строгой иерархии
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.list}>
            {props.data?.map(it => (
              <a className={styles.link} href={`/vacancies/${it.id}`}>
                <div className={styles.item}>
                  <Title level={3} customTag className={styles.item__title}>
                    {it.title}
                  </Title>
                  <Paragraph className={styles.item__description} isSpan>
                    {it.description}
                  </Paragraph>
                  <Paragraph className={styles.item__experience} isSpan>
                    {it.exp}
                  </Paragraph>
                  <a className={styles.item__detalis}> Подробнее </a>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
