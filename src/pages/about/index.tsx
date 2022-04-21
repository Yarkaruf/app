import React from "react";
import styles from "modules/company/about-page.module.scss";
import AppRouter from "router";
import Image from "next/image";
import cx from "classnames";
import { VacancyAbout } from "modules/company/sections/";
import { useWindowSize } from "shared/ui/core/utils/hooks/useWindowSize";
import { TextSection } from "modules/common/sections";
import { Icon } from "shared/ui/core/components";
import { Button } from "shared/ui/core/components";
import { IAimsSection, IPrinciplesSection } from "modules/company";
import dynamic from "next/dynamic";
import Head from "next/head";

const AimsSection = dynamic<IAimsSection>(() => import("modules/company").then(mod => mod.AimsSection));
const PrinciplesSection = dynamic<IPrinciplesSection>(() =>
  import("modules/company").then(mod => mod.PrinciplesSection)
);

const AboutPage = () => {
  const windowWidth = useWindowSize().width;

  return (
    <>
      <Head>
        <title>Информация о компании Medialand, наши цели и принципы</title>
        <meta
          name="description"
          content="Молодая IT компания, специализирующаяся на предоставлении хостинга, аренды серверов и облачных вычислений."
        />
      </Head>
      <TextSection
        headingClassName={styles.padding_left}
        title="О компании"
        text="Компания “Медиа Лэнд” основана энтузиастом для того, чтобы создать российский хостинг-продукт, которым будут пользоваться во всем мире. Мы молодая команда увлеченных своим делом исследователей и практиков. Разрабатываем собственные решения и отдаем приоритет потребностям пользователя, а не бизнеса.
              Мы уверены — формула создания идеального продукта существует, и она проста. Запрос клиента + удобное решение по оптимальной для него цене. Мы следуем этому принципу и намерены регулярно расширять спектр своих услуг до тех пор, пока в этом нуждается пользователь.
              Мы хотим создать компанию, которой будем гордиться. Стать флагманом, на который равняются."
      >
        <div className={styles.about__button_wrap}>
          <Button onClick={AppRouter.roadMap.open}>Road Map</Button>
        </div>
      </TextSection>
      <div className={styles.boxing}>
        <div className={styles.box_advantage}>
          <Icon name="long-check" className={styles.icon} />
          <h3 className={styles.box_advantage_title}>Миссия компании</h3>
          <p className={styles.box_advantage_text}> Создавать продукт признанного качества экологичным путем</p>
        </div>
      </div>
      <div className={styles.about_textsection_bc}>
        <h2 className={styles.about_textsection_title}>
          Каким <br />
          мы видим
          <br /> будущее
        </h2>
        <p className={styles.about_textsection_text}>
          Сейчас мир столкнулся с негативными последствиями промышленных революций прошлого. Мы верим, что технический
          прогресс возможен без негативных экологических последствий и хотим сделать вклад в создание технологического и
          одновременно “зеленого” мира. Наша компания намерена создавать экологически безвредные центры обработки данных
          и подтолкнуть мировых производителей оборудования к переориентации на экологичные решения. Мы стремимся к
          открытости российского бизнеса для мира и хотим повысить привлекательность российских компаний как поставщиков
          услуг высокого качества, как перспективных работодателей для лучших специалистов со всего мира.
        </p>
      </div>
      <div className={styles.aims_bc}>
        <h2 className={styles.aims_title}>Наши цели</h2>
        <div className={styles.aims_box}>
          <div className={styles.aims_text_block}>
            <Icon name="advantage-icon" className={styles.icon_aims} />
            <p className={styles.aims_text}>Создать первую в России сеть ЦОД на жидкостном охлаждении</p>
          </div>
          <div className={styles.aims_text_block}>
            <Icon name="advantage-icon" className={styles.icon_aims} />
            <p className={styles.aims_text}>
              Войти в топ-3 <br />
              хостинг-провайдеров РФ
            </p>
          </div>
          <div className={styles.aims_text_block}>
            <Icon name="advantage-icon" className={styles.icon_aims} />
            <p className={styles.aims_text}>
              Создавать российские продукты мирового уровня качества, доступные для всех
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom_bc}>
        <PrinciplesSection
          title="Наши принципы"
          data={[
            { title: "Активность и смелость:", text: "мы делаем, а не ждем" },
            {
              title: "Творчество и инновационность:",
              text:
                "мы поощряем создание и внедрение новейших разработок, не экономим, а используем только передовые решения и лучшие практики"
            },
            {
              title: "Непрерывное развитие:",
              text:
                "каждый в компании сфокусирован на личном росте на благо общей цели — развития компании в целом и постоянного совершенствования наших продуктов"
            },
            {
              title: "Независимость:",
              text:
                "мы предлагаем клиентам программное обеспечение собственной разработки и внедряем в работу только проверенные мировые технические решения"
            },
            {
              title: "Открытость и доступность:",
              text:
                "в нашей компании нет строгой иерархии — каждый сотрудник доступен для решения задач и обсуждения новых идей; мы управляем всей цепочкой формирования стоимости, делая наш продукт доступным любому человеку во всем мире; мы с энтузиазмом делимся с миром нашими достижениями"
            },
            {
              title: "Профессионализм:",
              text:
                "мы понимаем что и почему мы делаем и стремимся быть лучшими в своем деле. Клиент выбрал нас, значит мы ответственны за то, какой продукт он получит"
            },
            {
              title: "Энергоэффективность и оптимальность:",
              text:
                "мы бережем энергию во всех смыслах, строим эффективные и оптимальные системы, работаем с рисками для принятия наиболее благоприятных решений"
            }
          ]}
        />

        <div className={styles.vac_box}>
          <h2 className={styles.vac_title}>
            Присоединяйтесь <br /> к команде профессионалов!
          </h2>
        </div>

        <VacancyAbout />
      </div>
    </>
  );
};

export default AboutPage;
