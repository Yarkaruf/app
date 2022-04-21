import { VacanciesSection } from "modules/company/sections";
import Head from "next/head";

const VacanciesPage = () => {
  return (
    <>
      <Head>
        <title>Вакансии компании Medialand</title>
        <meta
          name="description"
          content="Желающие устроиться к нам на работу могут ознакомиться на данной странице с актуальными вакансиями, которые мы предлагаем, а также к требованиям, предъявляемым к соискателям."
        />
      </Head>
      <VacanciesSection
        data={[
          {
            id: "111",
            title: "Системный\n администратор\n Linux",
            description:
              "Мы ищем системного администратора, который будет помогать ведущему специалисту в решении задач, связанных с разработкой и поддержкой инфраструктуры хостинга ",
            exp: "Требуемый опыт работы: от 3 лет",
            city: "spb",
            text: ""
          }
        ]}
      />
    </>
  );
};

export default VacanciesPage;
