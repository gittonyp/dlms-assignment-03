import { describe, test, expect } from "vitest";
import { updateBook } from "../../src/bookUpdate.js";

describe("Book Update (DLMS-27)", () => {
  test("updates author and category", () => {
    const book = { title: "Java Programming", author: "James Gosling", category: "Programming" };
    expect(updateBook(book, { author: "J. Gosling", category: "CS" })).toEqual({
      ok: true,
      message: "Book updated",
      book: { title: "Java Programming", author: "J. Gosling", category: "CS" }
    });
  });

  test("rejects an update that clears the title", () => {
    const book = { title: "Java Programming", author: "James Gosling", category: "Programming" };
    expect(updateBook(book, { title: "" })).toEqual({
      ok: false,
      message: "Book title is required"
    });
  });
});
