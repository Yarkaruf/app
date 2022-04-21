import { NextPageContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { VacancySection } from "modules/company";

const VacancyPage = (props: { query: ParsedUrlQuery }) => {
  const vacancyId = props.query.vacancyId as string;

  return (
    <>
      <VacancySection
        data={{
          id: vacancyId,
          title: "Системный администратор Linux",
          text:
            "Мы ищем системного администратора, который будет помогать ведущему специалисту в решении задач, связанных с разработкой и поддержкой инфраструктуры хостинга Требуемый опыт работы: от 3 лет ",
          exp: "Требуемый опыт работы: от 3 лет",
          city: "Санкт-Петербург",
          description: ""
        }}
      />
    </>
  );
};

VacancyPage.getInitialProps = (ctx: NextPageContext) => ({ query: ctx.query });

export default VacancyPage;
