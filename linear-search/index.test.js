const { linearSearch, globalLinearSearch } = require("./index.js");

const random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];
describe("Test linearSearch", () => {
  describe("release 0: ", () => {
    test("search 18", () => {
      expect(linearSearch(18, random_numbers)).toBe(2);
    });
    test("search 9", () => {
      expect(linearSearch(9, random_numbers)).toBe(-1);
    });
  });
  describe("release 1: ", () => {
    test("test banana", () => {
      const banana_arr = "banana".split('');
      expect(globalLinearSearch("a", banana_arr)).toEqual([1, 3, 5]);
    });
  });
});
