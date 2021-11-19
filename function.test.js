const { add, sub } = require("./function");

describe("add test", () => {
  test("10 + 15 = 25", () => {
    expect(add(10, 15)).toBe(500000);
  });
});

describe("sub test", () => {
  it("5 - 2 = 3", () => {
    expect(sub(5, 2)).toBe(3);
  });
});
