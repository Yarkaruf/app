import React, { MutableRefObject, useRef } from "react";
import { Button, Container, Paragraph, Section, Title } from "shared/ui/core/components";
import styles from "./vacancy.module.scss";
import AppRouter from "router";
import { ScrollTo } from "react-scroll-to";
import { VacancyRequestForm } from "modules/company/containers";
import { PackageSection } from "modules/administration/sections";
import { Icon } from "shared/ui/core/components";
import Head from "next/head";

export interface IVacancy {
  id: string;
  title: string;
  description: string;
  exp: string;
  city: string;
  text: string;
}

interface IVacancySection {
  data?: IVacancy;
}

export const VacancySection = ({ data }: IVacancySection) => {
  const formRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  return (
    <>
      <Head>
        <title>Вакансия системный администратор Linux</title>
        <meta
          name="description"
          content="Требуется системный администратор Linux с опытом работы от 3-х лет. С более подробным описанием вакансии вы можете ознакомиться на этой странице."
        />
      </Head>
      <Section className={styles.vac_bc}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.heading_content}>
                <Title level={2} className={styles.title}>
                  {data?.title}
                </Title>

                <Paragraph className={styles.inf}>Требуемый опыт работы: от 3 лет</Paragraph>
              </div>

              <div className={styles.imp}>
                <div className={styles.buttons}>
                  <ScrollTo>
                    {({ scroll }) => (
                      <Button
                        className={styles.button}
                        onClick={() => scroll({ y: formRef.current?.offsetTop || 0, smooth: true })}
                      >
                        Откликнуться
                      </Button>
                    )}
                  </ScrollTo>
                  <Button outline onClick={AppRouter.vacancies.open} className={styles.button}>
                    Смотреть вакансии
                  </Button>
                </div>
                <div className={styles.day}>
                  <Paragraph className={styles.inf}>Полный день в офисе</Paragraph>
                </div>
              </div>
            </div>

            <div className={styles.text_wrap}>
              <div className={styles.info}>
                <div className={styles.info_top}>
                  <Icon name="tick" className={styles.icon} />
                  <Title level={2} className={styles.info_title}>
                    Кого мы ищем
                  </Title>
                </div>
                <Paragraph className={(styles.info_text, styles.long)}>
                  Системного администратора, который будет помогать ведущему специалисту в решении задач, связанных с
                  разработкой и поддержкой инфраструктуры хостинга
                </Paragraph>
              </div>
              <div className={styles.info}>
                <div className={styles.info_top}>
                  <Icon name="tick" className={styles.icon} />
                  <Title level={2} className={styles.info_title}>
                    Какие задачи предстоит решать
                  </Title>
                </div>
                <ul className={styles.info_list}>
                  <li className={styles.item}>Поддерживать и обновлять внутренние сервисы</li>
                  <li className={styles.item}>
                    Участвовать в разработке автоматизации управления клиентскими ресурсами
                  </li>
                  <li className={styles.item}>Участвовать в разработке систем мониторинга, алертинга</li>
                </ul>
              </div>
              <div className={styles.info}>
                <div className={styles.info_top}>
                  <Icon name="tick" className={styles.icon} />
                  <Title level={2} className={styles.info_title}>
                    Мы используем
                  </Title>
                </div>
                <ul className={styles.info_list}>
                  <li className={styles.item}>Docker + docker-compose</li>
                  <li className={styles.item}>Gitlab (issues, CI, CD, Container Registry)</li>
                  <li className={styles.item}>Netbox </li>
                  <li className={styles.item}>Python, ansible </li>
                  <li className={styles.item}>MariaDB, RabbitMQ, Nginx, supervisord </li>
                  <li className={styles.item}>Slack для общения </li>
                  <li className={styles.item}>Linux как рабочее и продуктивное окружение </li>
                </ul>
              </div>
              <div className={styles.info}>
                <div className={styles.info_top}>
                  <Icon name="tick" className={styles.icon} />
                  <Title level={2} className={styles.info_title}>
                    Что мы ждем от тебя
                  </Title>
                </div>
                <ul className={styles.info_list}>
                  <li className={styles.item}>
                    Желательный опыт работы с системами оркестрации Ansible, Puppet, Chief роли, galaxy,
                    groupvars/hostvars;{" "}
                  </li>
                  <li className={styles.item}>
                    Обязательный опыт работы в продуктивной среде с docker/docker-compose;{" "}
                  </li>
                  <li className={styles.item}>Отличное знание linux coreutils, применять придется много и часто; </li>
                  <li className={styles.item}>
                    Опыт администрирования систем на базе ОС Linux (мы используем deb-based);{" "}
                  </li>
                  <li className={styles.item}>Опыт работы с системами виртуализации KVM/Xen; </li>
                  <li className={styles.item}>Понимание работы TCP/IP стека, что и на каком уровне OSI работает; </li>
                  <li className={styles.item}>Опыт работы с openvpn, wireguard, пр.; </li>
                  <li className={styles.item}>Опыт работы с БД Pgsql, MariaDB, пр.; </li>
                  <li className={styles.item}>Опыт работы с NoSQL БД redis, memcache, пр. </li>
                </ul>
              </div>
            </div>

            {/* <div ref={formRef} className={styles.form_block}>
            <div className={styles.form__column}>
              <Title level={3} customTag className={styles.form__title}>
                Откликнуться
              </Title>
              <Paragraph className={styles.form__description}>Присоединяйтесь к команде профессионалов</Paragraph>
            </div>

            <VacancyRequestForm className={styles.form} />
            <Paragraph level={3}>
              Резюме просим прислывать на почтовый адресс:
                            <a href="mailto:info@sshvps.net" className={styles.text}>
                <Paragraph>info@sshvps.net</Paragraph>
              </a>
            </Paragraph>
          </div> TODO подцепить после доработки API бэка */}
            <div className={styles.text_wrap}>
              <div className={styles.info}>
                <div className={styles.form__column}>
                  <Title level={3} customTag className={styles.form__title}>
                    Откликнуться
                  </Title>
                  <Paragraph className={styles.form__description}>Присоединяйтесь к команде профессионалов</Paragraph>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.email_link}>
                  <Paragraph level={1} className={styles.info_text}>
                    Ждем ваши резюме на
                    <a href="mailto:job@sshvps.net" className={styles.item}>
                      &nbsp;jobs@sshvps.net
                    </a>
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
