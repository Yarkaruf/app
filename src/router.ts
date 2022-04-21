import { page } from "@yoldi/utils/router";

const AppRouter = {
  index: page("/"),

  vds: page("/vds"),

  support: page("/support"),

  administration: page("/administration"),

  dataCenters: page("/data-centers"),

  about: page("/about"),

  roadMap: page("/road-map"),

  documents: page("/documents"),

  vacancies: {
    ...page("/vacancies"),
    vacancyId: (vacancyId: string) => page(`/vacancies/${vacancyId}`)
  },

  contacts: page("/contacts")
};

export default AppRouter;
