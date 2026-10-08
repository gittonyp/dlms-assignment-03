// DLMS-26: Book Creation (feature/book-creation)
export function createBook(title, author, category) {
  if (!title) {
    return { ok: false, message: "Book title is required" };
  }
  if (!author) {
    return { ok: false, message: "Author is required" };
  }
  if (!category) {
    return { ok: false, message: "Category is required" };
  }
  return { ok: true, message: "Book added", book: { title, author, category } };
}
