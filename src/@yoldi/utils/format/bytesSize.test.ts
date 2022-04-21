import formatBytesSize from "./bytesSize";

describe("[formatBytesSize] @yoldi/utils/format/bytesSize", () => {
  it("one kb", () => {
    expect(formatBytesSize(1024)).toBe("1.0 KB");
  });
});
