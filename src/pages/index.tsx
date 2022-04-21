import React from "react";
import { ProductsSection } from "modules/servers";
import { NewAdvantagesSection } from "modules/common/sections/new-advantages-section";
import { MapSection } from "modules/data-centers/sections";
import { ProjectAdministrationSection } from "modules/administration/sections";
import styles from "modules/common/sections/new-advantages-section/new-advantages.module.scss";

const IndexPage = () => {
  return (
    <>
      <ProductsSection />

      <MapSection numberOfSection="02" page={true} />

      <ProjectAdministrationSection />
      <div className={styles.advantage_service}>
        <NewAdvantagesSection
          columns={1}
          items={[
            {
              title: "Хостинг без оверселлинга",
              text:
                "Мы не перепродаем вычислительные ресурсы. \n" +
                "Распоряжайтесь в полном объеме тем, за что заплатили. \n" +
                "Все серверы соответствуют заявленным характеристикам.\n"
            },
            {
              title: "Безлимитный трафик",
              text: "Мы не ставим ограничений на исходящие/входящие объемы. Развивайте свой проект, не думая о лимитах"
            },
            {
              title: (
                <>
                  Помесячная или <br /> почасовая оплата — <br /> выбор за вами
                </>
              ),
              text:
                "Вы сами выбираете условия и сроки обслуживания — меняйте их в зависимости от ситуации и платите за сервис только тогда, когда пользуетесь им."
            }
          ]}
          title={
            <>
              Честный сервис — <br /> правила хорошего тона
            </>
          }
          numberOfSection="04"
        />
      </div>
    </>
  );
};

export default IndexPage;
