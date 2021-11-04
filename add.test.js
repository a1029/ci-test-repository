const { test, expect } = require("@jest/globals");
const { add } = require("./add");

test("2+5=7", () => {
  expect(add(2, 5)).toBe(7);
});

test("2+5=7", () => {
  expect(add(2, 5)).toBe(8);
});
