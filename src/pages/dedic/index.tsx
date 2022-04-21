import React from "react";
import { TariffsSection } from "modules/servers/sections/tariffs-dedic";
import { TextSection } from "modules/common/sections/text-section";
import { AdvantagesSection } from "modules/common/sections";
import { AdvantageBoxSection } from "modules/common/sections/advantage-box";
import { GetStaticProps } from "next";
import { CustomerTariffDto, Processor, ProcessorToJSON } from "shared/api/dcim/generated/index";
import { BillingApi } from "shared/api";
import { DedicApi } from "shared/api/dcim/apis/dedic";
import { DCIMApi } from "shared/api/dcim/apis/dcim";
import Head from "next/head";

interface DedicPageProps {
  tariffWithProcessor: TariffWithProcessor[];
}

export interface TariffWithProcessor {
  tariff: CustomerTariffDto;
  processor: Processor[];
}

const DedicPage = (props: { initialData: DedicPageProps; usdRubRate: string; tariffWithProc: unknown[] }) => {
  const dedicTariffList = props.initialData.tariffWithProcessor.sort(
    (a, b) => a.tariff.instanceMonthPrice - b.tariff.instanceMonthPrice
  );
  return (
    <>
      <Head>
        <title>Аренда выделенного сервера Dedicated без учета трафика</title>
        <meta
          name="description"
          content="Предоставляем в аренду выделенные сервера по всему миру. Покупайте у нас выделенный сервер с безлимитным трафиком и интернет-каналом 1 Гбит/с."
        />
      </Head>
      <TariffsSection
        title="Выделенные серверы"
        description="Воплощение проектов большого объема и значимости"
        data={dedicTariffList}
        usdRubRate={props.usdRubRate}
        href={process.env.APP_URL + "/dedic/new"}
      />
      <AdvantagesSection
        title="Бесплатно с каждым выделенным сервером"
        numberOfSection="02"
        items={[
          {
            title: "Гигабитный канал +",
            text:
              "В вашем распоряжении высокоскоростной интернет-канал с пропускной способностью 1 Гбит/с и возможностью увеличения. Не имеет значения масштаб вашего проекта, моментальный отклик при обращении к ресурсу гарантирован.\n"
          },
          {
            title: "Безлимит",
            text: "Входящий / исходящий трафик без скрытых \n" + "условий и ограничений."
          },
          {
            title: "Конфигурация под ваши нужды",
            text:
              "Вы можете выбрать либо типовую конфигурацию сервера, либо разработать свою — соберем так, как нужно вам."
          },
          {
            title: "Global VLAN",
            text:
              "Все наши дата-центры объединены технологией VLAN на скорости до 40 гбит/с. Стройте собственную частную инфраструктуру независимо от количества и физического расположения серверов."
          }
        ]}
        columns={2}
      />

      <AdvantageBoxSection
        title="Профессиональная поддержка"
        numberOfSection="03"
        bannerTitle="От инсталляции программного обеспечения до решения нестандартных задач"
        href="/support"
      />
      <TextSection
        title="Что такое выделенный сервер?"
        numberOfSection="04"
        text="Когда ваш проект набирает обороты, имеющихся мощностей может не&nbsp;хватать. Первый признак&nbsp;&mdash; ресурс начинает часто и&nbsp;подолгу &laquo;виснуть&raquo;. Или проект изначально высоконагруженный, например, стримерский портал или файловое хранилище. Обе ситуации&nbsp;&mdash; повод задуматься над арендой выделенного сервера, он&nbsp;же Dedicated server
Выделенный сервер (Dedicated server)&nbsp;&mdash; это целая физическая машина только в&nbsp;вашем распоряжении вместе со&nbsp;всеми её&nbsp;ресурсами, возможностью установки любого&nbsp;ПО, гибкой настройки под специфические нужды.
Считается, что Dedicated самый защищенный вид хостинга: рядом с&nbsp;вашим проектом нет соседей, с&nbsp;которыми нужно делить ресурсы, меньше подозрительной активности и&nbsp;вероятности хакерских атак. Выделенный сервер способен переносить более высокие нагрузки и&nbsp;может похвастаться более высоким временем непрерывной работы."
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tariffs = await new DedicApi().tariffs();

  const processors = tariffs.map(async tariff => {
    const models = await tariff.cpuConfigurations.map(async id => {
      return await new DCIMApi().getOneBaseUserProcessorControllerProcessor(id.modelId);
    });
    const processorsOfTariff = await Promise.all(models);
    return {
      tariff: tariff,
      processor: processorsOfTariff
    };
  });
  const processorsPromises = await Promise.all(processors);
  const usdRubRate = await new BillingApi().currencyRate();
  return {
    revalidate: 10,
    props: {
      initialData: {
        tariffWithProcessor: processorsPromises.map(tariff => {
          return {
            tariff: tariff.tariff,
            model: tariff.processor.map(ProcessorToJSON)
          };
        })
      },
      usdRubRate: usdRubRate.value
    }
  };
};

export default DedicPage;
