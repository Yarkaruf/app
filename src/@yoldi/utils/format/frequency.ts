const sizes = ["MHz", "GHz"];

export const formatHertz = (megaHertz: number) => {
  const i = parseInt("" + Math.floor(Math.log(megaHertz) / Math.log(1000)));
  if (i === 0) return megaHertz + " " + sizes[i];
  return (megaHertz / Math.pow(1000, i)).toFixed(1).replace(".", ",") + " " + sizes[i];
};

export default formatHertz;
