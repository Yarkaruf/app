import React from "react";
import { Container, Section, Paragraph } from "shared/ui/core/components";
import { SectionHeading } from "shared/ui/components";
import {
  AdministrationTariffsSection,
  PackageSection,
  ProfeshionalSecctions,
  AllPackage
} from "modules/administration/sections";
import { TextSection } from "modules/common/sections";
import { AdministrationApi, AdministrationTariffFromJSON, AdministrationTariffToJSON } from "shared/api";
import { GetStaticProps } from "next";

import styles from "../../modules/administration/sections/administration-tariffs/administration-tariffs.module.scss";
import Head from "next/head";

const AdministrationPage = (props: { initialData: unknown[] }) => {
  const administrationTariffList = props.initialData?.map(AdministrationTariffFromJSON);

  // const api = useApi();
  // const tariffs = api.administration.useTariffs();

  return (
    <>
      <Head>
        <title>Удаленная настройка и администрирование серверов от специалистов компании Medialand</title>
        <meta
          name="description"
          content="Оказываем услуги по установке и настройке серверов, резервного копирования, операционных систем и специализированного ПО."
        />
      </Head>
      <Section className={styles.section_bc}>
        <SectionHeading
          title="Администрирование"
          description="Вместо вас решим задачи по настройке и управлению сервером"
          style={{ marginBottom: 0 }}
          className={styles.administration_heading}
        />
      </Section>

      <ProfeshionalSecctions />

      <AllPackage
        title="В составе каждого пакета"
        data={[
          "Настройка сервера;",
          "Установка и настройка базового программного обеспечения на сервере;",
          "Настройка операционной системы (Linux, FreeBSD, Windows) на максимальную производительность, оптимизацию работы сервисов;",
          "Настройка и оптимизация работы MySQL сервера;",
          "Установка специфического ПО для решения определённых задач, обновление, перенастройка ПО, поддержка установленного ПО и системы портов (репозиториев) в актуальном состоянии;",

          "Настройка безопасности системы;",
          "Мониторинг работы сервера: Zabbix, Cacti, Pandora, Munin, и т.п.;",
          "Настройка резервного копирования;",
          "Написание или правка системных скриптов, автоматизация задач;",
          "Помощь в отражении DDoS-атак;",
          "Помощь в настройке VOIP-телефонии;",
          "Настройка Firewall и безопасности доступа к серверу;",
          "Поднятие VPN;"
        ]}
      />

      <PackageSection
        title="Профессиональное администрирование сервера"
        data={[
          "Своевременная установка критически важных обновлений;",
          "Профилактика инцидентов и оперативное реагирование в случае их возниктовения;",
          "Резервное копирование и контроль бэкапов;",

          "Конфигурирование политики безопасности в соответствии с вашими указаниями;",
          "Профессиональные консультации, касающиеся апгрейда и других вопросов;",
          "По отдельной договорённости — установка и настройка нестандартного ПО;"
        ]}
      />

      <TextSection
        title="Зачем нужна услуга администри&shy;рования?"
        numberOfSection="04"
        text="Сервер — машина сложная, насколько бы оборудование ни было технически совершенно, оно требует регулярного обслуживания. Профессиональное администрирование — услуги по настройке и управлению железом и программным обеспечением (ПО), профессиональная поддержка от технических специалистов компании-провайдера и консультации по интересующим клиента вопросам. Услуга позволяет отказаться от найма штатного профильного специалиста, сэкономить время, деньги и сфокусироваться на развитии проекта. Удаленное администрирование — это целый комплекс: от установки и настройки ПО до решения специфических вопросов и обстоятельного сопровождения проекта."
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tariffs = await new AdministrationApi().tariffs();

  return {
    revalidate: 10,
    props: {
      initialData: tariffs.map(AdministrationTariffToJSON)
    }
  };
};

export default AdministrationPage;
