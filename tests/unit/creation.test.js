import { describe, test, expect } from "vitest";
import { createBook } from "../../src/bookCreation.js";

describe("Book Creation (DLMS-26)", () => {
  test("adds a book with valid details", () => {
    expect(createBook("Java Programming", "James Gosling", "Programming")).toEqual({
      ok: true,
      message: "Book added",
      book: { title: "Java Programming", author: "James Gosling", category: "Programming" }
    });
  });

  test("rejects an empty book title", () => {
    expect(createBook("", "James Gosling", "Programming")).toEqual({
      ok: false,
      message: "Book title is required"
    });
  });

  test("rejects an empty author", () => {
    expect(createBook("Java Programming", "", "Programming")).toEqual({
      ok: false,
      message: "Author is required"
    });
  });
});
