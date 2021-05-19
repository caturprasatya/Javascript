const main = require('./index')

test(
  "number 543 should return `[ 500, 20, 20, 1, 1, 1 ]`",
  () => {
    expect(main(543)).toEqual([500, 20, 20, 1, 1, 1]);
  }
);

test("number 7752 should return `[ 5000, 2000, 500, 200, 50, 1, 1 ]`", () => {
  expect(main(7752)).toEqual([5000, 2000, 500, 200, 50, 1, 1]);
});

test("number 37454 should return `[ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]`", () => {
  expect(main(37454)).toEqual([
    10000,
    10000,
    10000,
    5000,
    2000,
    200,
    200,
    50,
    1,
    1,
    1,
    1
  ]);
});

test("number 5 should return `[ 1, 1, 1, 1, 1 ]`", () => {
  expect(main(5)).toEqual([1, 1, 1, 1, 1]);
});

test("number 3056 should return `[2000, 1000, 50, 1, 1, 1, 1, 1, 1]`", () => {
  expect(main(3056)).toEqual([2000, 1000, 50, 1, 1, 1, 1, 1, 1]);
});

test("number 121 should return `[ 100, 20, 1 ]`", () => {
  expect(main(121)).toEqual([100, 20, 1]);
});
