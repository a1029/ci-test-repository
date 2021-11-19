const { add, sub } = require("./function");

describe("add test", () => {
  test("5 + 2 = 7", () => {
    expect(add(5, 2)).toBe(7);
  });
});

describe("sub test", () => {
  it("5 - 2 = 3", () => {
    expect(sub(5, 2)).toBe(3000);
  });
});
