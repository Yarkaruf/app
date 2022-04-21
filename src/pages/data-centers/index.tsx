import React from "react";
import { MapSection } from "modules/data-centers/sections";
import { AdvantageBannerSection, InfoItemsSection } from "modules/common/sections";
import { NewAdvantagesSection } from "modules/common/sections/new-advantages-section";
import styles from "modules/common/components/info-list/info-list.module.scss";
import Head from "next/head";

const DataCentersPage = () => (
  <>
    <Head>
      <title>Дата-центры компании ООО «МедиаЛэнд»</title>
      <meta
        name="description"
        content="Где территориально располагаются наши дата-центры, оснащенные современным оборудованием, обеспечивающим безопасную и надежную работу."
      />
    </Head>
    <MapSection
      text="Дата-центры компании ООО &laquo;МедиаЛэнд&raquo; расположены в&nbsp;двух крупных городах России&nbsp;&mdash; Москве и&nbsp;Санкт-Петербурге. В&nbsp;первом полугодии 2022 года мы&nbsp;введем в&nbsp;эксплуатацию собственный и&nbsp;первый в&nbsp;России ЦОД на&nbsp;иммерсионном охлаждении.
            А&nbsp;до&nbsp;конца 2022 года будем постепенно увеличивать число локаций и&nbsp;расширим географию до&nbsp;Нидерландов, Германии, Швейцарии, США, стран Азии."
    />

    <NewAdvantagesSection
      title="Качество и надежность —"
      title2="критерии правильного выбора"
      numberOfSection="02"
      items={[
        {
          title: "Проверенные технологии",
          text:
            'Надежным решениям — надежное железо. Дата центры ООО "МедиаЛэнд" оснащены современными комплектующими и оборудованием от поставщиков, которым мы доверяем.'
        },
        {
          title: "Надежность уровня TIER III",
          text:
            "Дата центры с сертификацией третьего уровня гарантируют безотказную работу серверов на уровне 99.982% и высокие показатели надежности оборудования и сетевой инфраструктуры."
        },
        {
          title: "Global VLAN",
          text:
            "Все наши дата-центры объединены технологией VLAN на скорости до 40 гбит/с. Стройте собственную частную инфраструктуру независимо от количества и физического расположения серверов."
        }
      ]}
    />

    <AdvantageBannerSection
      id="moscow"
      title="Дата центр Москва"
      numberOfSection="03"
      bannerTitle="VOLUME SOLUTIONS"
      text="Россия, г.&nbsp;Москва, ул.&nbsp;Угрешская,&nbsp;д.&nbsp;2&nbsp;стр.&nbsp;37 ЦОД&nbsp;введен&nbsp;в&nbsp;эксплуатацию&nbsp;в&nbsp;2010&nbsp;году"
      appearance="right"
      infoItems={[
        { title: "площадь ЦОД, кв.м", value: "923,3" },
        { title: "количество стоек", value: "120" },
        { title: "уровень дата центра", value: "Tier III" },
        { title: "уровень безопасности", value: "N+2" }
      ]}
      smallPaddingBottom
    />

    <InfoItemsSection
      data={[
        {
          title: "Оборудование",
          data: [
            { title: "Опорная сеть", value: "100G коммутаторы Cisco" },
            { title: "Основной маршрутизатор", value: "Juniper MX-960, рассчитан на передачу трафика до 10 Тбит/с" },
            { title: "Агрегирующие коммутаторы", value: "Huawei, позволяют организовать подключения до 40G на стойку" }
          ]
        },
        {
          title: "Система электроснабжения",
          data: [
            { title: "Подведенная мощность", value: "2 МВт" },
            { title: "Независимых линий городского электроснабжения", value: "2 шт" },
            { title: "Источников бесперебойного питания", value: "6 шт" },
            { title: "Схема подключения ИБП", value: "N+2 Запас" },
            { title: "Запас аккумуляторов", value: "15 минут при полной загрузке дата-центра" }
          ]
        },
        {
          title: "Резервное питание",
          data: [
            { title: "Дизельно-генераторные установки", value: "2 шт." },
            { title: "Производитель ДГУ", value: "F.G. Wilson" },
            { title: "Производитель двигателя", value: "Perkins" },
            { title: "Суммарная мощность", value: "2.4 МВт" },
            { title: "Емкость баков", value: "6 тонн (18 часов работы)" }
          ]
        },
        {
          title: "Система кондиционирования",
          data: [
            { title: "Прецизионные кондиционеры", value: "20 шт." },
            { title: "Производитель", value: "Eistorm, HiRef" },
            { title: " Схема подключения", value: "N+2" }
          ]
        },
        {
          title: "Безопасность",
          data: [
            { value: "Автоматизированная система газового пожаротушения" },
            { value: "Система видеонаблюдения внутри и снаружи здания" },
            { value: "ЦОД находится на закрытой охраняемой территории московского бизнес-центра IQ-Park" }
          ],
          className: styles.full_width
        }
      ]}
    />

    <AdvantageBannerSection
      id="spb"
      title="Дата центр Санкт-Петербург"
      numberOfSection="04"
      bannerTitle="XELENT"
      text="Россия, г. Санкт-Петербург, Выборгское ш., д. 503, корп. 12 ЦОД введен в эксплуатацию в 2014 году"
      appearance="right"
      infoItems={[
        { title: "площадь ЦОД, га", value: " 3,2" },
        { title: "количество стоек", value: "1476" },
        { title: "уровень дата центра", value: "Tier III" },
        { title: "уровень безопасности", value: "N+1" }
      ]}
      smallPaddingBottom
    />

    <InfoItemsSection
      data={[
        {
          title: "Система электроснабжения",
          data: [
            { value: "Максимум 5% колебания напряжения при изменении нагрузки" },
            { value: "96,4% КПД системы при полной нагрузке" },
            { value: "Автоматическое устранение микро-обрывов во время работы" },
            { title: "Динамические источники бесперебойного питания", value: "3+1" },
            { title: "Схема резервирования", value: "N+1" }
          ]
        },
        {
          title: "Система охлаждения",
          data: [
            { title: "Технология", value: "Free Cooling" },
            { title: "Температура в залах", value: "25°C" },
            { title: "Энергоэффективность", value: "PUE=1,2" }
          ]
        },
        {
          title: "Безопасность",
          data: [
            { value: "Более 200 камер постоянного наблюдения" },
            { value: "250 контролируемых точек доступа" },
            { value: "Отдельные зоны доступа с индивидуальным режимом безопасности для каждого клиента" },
            { value: "Охрана центра 24/7" }
          ],
          className: styles.ml_auto
        }
      ]}
    />
  </>
);

export default DataCentersPage;
