export const formatLegalForm = (value?: string) => {
  switch (value) {
    case "PRIVATE_PERSON":
      return "Физлицо";
    case "LEGAL_ENTITY":
      return "Юрлицо";
  }

  return value;
};

export default formatLegalForm;
