import { sum, product } from "../src/lib/math-functions";

test("1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2);
});

test("3 * 5 equals 15", () => {
  expect(product(3, 5)).toBe(15);
});
