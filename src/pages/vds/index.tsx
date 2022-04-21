import React from "react";
import { TariffsSection } from "modules/servers/sections/tariffs";
import { TextSection } from "modules/common/sections/text-section";
import { AdvantagesSection } from "modules/common/sections";
import { VdsBannerSection } from "modules/common/sections/vds-banner";
import { NewAdvantagesSection } from "modules/common/sections/new-advantages-section";
import { BillingApi, VdsApi, VdsTariffFromJSON, VdsTariffToJSON } from "shared/api";
import { GetStaticProps } from "next";
import styles from "modules/common/sections/advantages/advantages.module.scss";
import Head from "next/head";

const VdsPage = (props: { initialData: unknown[]; usdRubRate: string }) => {
  const vdsTariffList = props.initialData?.map(VdsTariffFromJSON).sort((a, b) => a.cores - b.cores);

  // const api = useApi();
  // const tariffs = api.vds.useVdsTariffs({ initialData });

  return (
    <>
      <Head>
        <title>Аренда виртуального VPS сервера от Medialand, хостинг на виртуальном сервере</title>
        <meta
          name="description"
          content="Услуга аренды виртуального сервера на NVMe дисках и бесплатными бэкапами. Высокая стабильность и развертывание vps за 1 минуту."
        />
      </Head>
      <TariffsSection
        title="Виртуальные серверы"
        description="Гибкость масштабирования для разнообразия решений"
        data={vdsTariffList}
        usdRubRate={props.usdRubRate}
        href={process.env.APP_URL + "/vds/new"}
      />

      <NewAdvantagesSection
        title="Экономьте время, управляя вычислительной средой"
        items={[
          {
            title: "Бэкапы 2 раза в месяц",
            text:
              "Обеспечим восстановление информации в случае сбоя. \n" +
              "Регулярное полное резервное копирование уже входит \n" +
              "в стоимость тарифа."
          },
          {
            title: "Развертывание за 1 минуту",
            text: "Начните использовать продукт сразу после оплаты, \n" + "не разбираясь в тонкостях настройки. \n"
          },
          {
            title: "Быстрые NVMe диски",
            text:
              "Мы не делим услуги на «Стандарт» и «Премиум». \n" +
              "Любой виртуальный сервер оснащен SSD-накопителями \n" +
              "последнего протокола для работы на высокой скорости."
          }
        ]}
      />

      <VdsBannerSection
        title="Добавим  мощности"
        bannerTitle="Выделенные серверы"
        advantages={[
          "Оборудование брэндов HP, Cisco, Dell",
          "Безлимитный трафик",
          "1gbps канал с возможностью расширения"
        ]}
        href="/dedic"
        // textAfter="Скоро в продаже!"
      />
      <div className={styles.vds_server}>
        <AdvantagesSection
          items={[
            {
              title: "Гибкость масштабирования\n",
              text:
                "Ресурсы растут вместе с вашим проектом. Самостоятельно увеличивайте тариф в один клик, когда это вам необходимо и удобно. "
            },
            {
              title: "Тарифы без переплат",
              text:
                "Вы платите только за то, чем пользуетесь и когда пользуетесь. Абонентская плата списывается раз в час или за месяц.\n"
            },
            {
              title: "Резервное копирование +",
              text: "Подключите услугу “Backup Pro” и задавайте свое гибкое расписание копирования.\n"
            },
            {
              title: "Global VLAN",
              text:
                "Все наши дата-центры объединены технологией VLAN на скорости до 40 гбит/с. Стройте собственную частную инфраструктуру независимо от количества и физического расположения серверов. "
            }
          ]}
          title="Виртуальный сервер — вам&nbsp;понравится"
          numberOfSection="04"
          columns={2}
        />
      </div>

      <TextSection
        title="Что такое виртуальный сервер?"
        numberOfSection="05"
        text="Virtual Dedicated или Virtual Private Server (VDS/VPS)&nbsp;&mdash; виртуальный выделенный или приватный сервер. Золотая середина между независимостью и&nbsp;ценой. Сочетание двух факторов делает аренду VPS одной из&nbsp;самых востребованных услуг на&nbsp;рынке.
              Функционально виртуальный сервер ничем от&nbsp;физического не&nbsp;отличается. При настройке параметров можно выбрать мощность процессора, объем оперативной памяти, и&nbsp;пространства на&nbsp;диске, на&nbsp;него можно установить свою операционную систему и&nbsp;программное обеспечение. Развертывание происходит в&nbsp;несколько минут, и&nbsp;вот новый владелец получает права администратора и&nbsp;может работать с&nbsp;виртуальной машиной как с&nbsp;обычным ПК. Сервер располагается на&nbsp;удаленной платформе хостинг-провайдера, защищенной от&nbsp;сбоев, и&nbsp;заточен на&nbsp;работу 24\7&nbsp;круглогодично.
              VPS&nbsp;&mdash; универсальное решение для проектов средней и&nbsp;высокой нагрузки. На&nbsp;такой платформе можно разместить как один большой интернет-магазин, так и&nbsp;несколько небольших сайтов или корпоративных ресурсов."
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const vdsTariffs = await new VdsApi().vdsTariffs();
  const usdRubRate = await new BillingApi().currencyRate();

  return {
    revalidate: 10,
    props: {
      initialData: vdsTariffs.map(VdsTariffToJSON),
      usdRubRate: usdRubRate.value
    }
  };
};

export default VdsPage;
