import { AskQuestionSection, SupportSection } from "modules/company";
import Head from "next/head";

const SupportPage = () => {
  return (
    <>
      <Head>
        <title>Служба технической поддержки компании Medialand</title>
        <meta
          name="description"
          content="Задайте любой интересующий вас вопрос и получите быстрый и грамотный ответ от наших специалистов. Круглосуточная техподдержка."
        />
      </Head>
      <SupportSection />

      <AskQuestionSection />
    </>
  );
};

export default SupportPage;
