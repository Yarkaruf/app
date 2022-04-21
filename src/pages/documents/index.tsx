import { DocumentsSection } from "modules/company";
import Head from "next/head";

const DocumentsPage = () => {
  return (
    <>
      <Head>
        <title>Юридические документы ООО «Медиа Лэнд»</title>
        <meta
          name="description"
          content="Все необходимые документы для сотрудничества с нами вы можете найти и скачать на этой странице. Если остались вопросы - напишите или позвоните нам."
        />
      </Head>
      <DocumentsSection />
    </>
  );
};

export default DocumentsPage;
