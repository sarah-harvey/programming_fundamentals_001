const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});
describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});
describe("utils.makeHalfPrice", () => {
  test("returns 5 when passed 10", () => {
    expect(utils.makeHalfPrice(10)).toBe(5);
  });
});
describe("utils.countBooks", () => {
  test("returns total number of books in the array", () => {
    const books = [
      {
        title: "The Stone Diaries",
        author: "Carol Shields",
        yearOfPublication: 1993,
        quantity: 9
      },
      {
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
          yearOfPublication: 1970,
            quantity: 2
    }
    ]
    expect(utils.countBooks(books)).toBe(2);
  });
});
describe("utils.isInStock(book)", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };

    expect(utils.isInStock(book)).toBe(true);
  });
})
describe("utils.getTotalOrderPrice", () => {
  test("returns total price for goods incl VAT", () => {
    expect(utils.getTotalOrderPrice(18, 2)).toBe(43.2);
  });
});