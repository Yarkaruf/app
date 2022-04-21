import formatNumber from "./number";

export const formatMoney = (amount?: string | number, currency: string = "₽", fixed = 2): string => {
  if (isNaN(Number(amount))) return "";

  const num = formatNumber(amount, fixed, true);

  if (!currency) return num;

  return num + "\u00A0" + currency;
};

export default formatMoney;
