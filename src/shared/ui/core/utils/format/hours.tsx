import { pluralize } from "@yoldi/utils/helpers";

export const formatHours = (value?: number): string => {
  if (typeof value !== "number") return "";

  return pluralize(value, {
    one: it => `${it} час`,
    few: it => `${it} часа`,
    many: it => `${it} часов`
  });
};

export default formatHours;
