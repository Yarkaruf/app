import { ContactsSection } from "modules/company";
import Head from "next/head";

const ContactsPage = () => {
  return (
    <>
      <Head>
        <title>Контакты компании Medialand</title>
        <meta
          name="description"
          content="Контактная информация о нашей компании, наше местоположение, схема проезда, все необходимые реквизиты и банковские счета."
        />
      </Head>
      <ContactsSection />
    </>
  );
};

export default ContactsPage;
