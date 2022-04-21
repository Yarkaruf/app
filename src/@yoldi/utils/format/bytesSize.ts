const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

export const formatBytesSize = (data?: number, inSize?: "byte" | "mb" | "kb" | "gb") => {
  if (!data) return "";
  let bytes: number;
  if (!inSize) {
    bytes = data * 1_000_000;
  } else {
    switch (inSize) {
      case "gb":
        bytes = data * 1_000_000_000;
        break;
      case "byte":
        bytes = data;
        break;
      case "mb":
        bytes = data * 1_000_000;
        break;
      case "kb":
        bytes = data * 1_000;
        break;
    }
  }

  const i = parseInt("" + Math.floor(Math.log(bytes) / Math.log(1000)));
  if (i === 0) return bytes + " " + sizes[i];
  return (bytes / Math.pow(1000, i)).toFixed(0) + " " + sizes[i];
};

export default formatBytesSize;
