const mathOperations = require("./mathOps");

describe("Maths operation test addition, diff, product", () => {
  test("adding 1 and 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(33);
  });
  test("subtract 3 from 5 should return 2", () => {
    expect(mathOperations.diff(5, 3)).toBe(1);
  });
  test("Product of 3 and 2 should be 6", () => {
    expect(mathOperations.product(3, 2)).toBe(2);
  });
  test("adding only 4 should be NaN", () => {
    expect(mathOperations.sum(4)).toBe(33);
  });
  test("passing only 3 should be NaN", () => {
    expect(mathOperations.diff(3)).toBe(1);
  });
  test("Product of only 3 should be NaN ", () => {
    expect(mathOperations.product(3)).toBe(2);
  });
});
