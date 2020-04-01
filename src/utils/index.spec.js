const { sum, subtract, sumAsync, substractAsync } = require("./math");

test("should sum two numbers", () => {
  const result = sum(2, 4);
  const expected = 6;
  expect(result).toBe(expected);
});

test("should sumAsync two numbers", async () => {
  const result = await sumAsync(12, 4);
  const expected = 16;
  expect(result).toBe(expected);
});

test("should substract two numbers", () => {
  const result = subtract(10, 4);
  const expected = 6;
  expect(result).toBe(expected);
});

test("should substractAsync two numbers", async () => {
  const result = await substractAsync(12, 4);
  const expected = 8;
  expect(result).toBe(expected);
});
