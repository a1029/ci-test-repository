const { test, expect, describe, it } = require("@jest/globals");
const { add, sub, sayHello } = require("./function");

describe("add test", () => {
  test("2+5=7", () => {
    expect(add(2, 5)).toBe(7);
  });

  test("10+5=15", () => {
    expect(add(10, 5)).toBe(15);
  });
});

describe("sub test", () => {
  it("2-5=-3", () => {
    expect(sub(2, 5)).toBe(-3);
  });

  it("50-30=20", () => {
    expect(sub(50, 30)).toBe(20);
  });
});

test("hello boostcamp", () => {
  expect(sayHello("boostcamp")).toBe("hello boostcampp");
});
