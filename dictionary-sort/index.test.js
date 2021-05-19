const main = require("./index.js");

const test_word_1 = ["makan", "duduk", "tidur", "terbang"];
const test_word_2 = ["anggi", "angga", "ani", "adi"];

test("Should return `duduk, makan, terbang, tidur`", () => {
  expect(main(test_word_1)).toBe("duduk, makan, terbang, tidur");
});

test("Should return `adi, angga, anggi, ani`", () => {
  expect(main(test_word_2)).toBe("adi, angga, anggi, ani");
});
