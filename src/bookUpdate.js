// DLMS-27: Book Update (feature/book-update)
export function updateBook(book, updates) {
  const next = { ...book, ...updates };
  if (!next.title) {
    return { ok: false, message: "Book title is required" };
  }
  if (!next.author) {
    return { ok: false, message: "Author is required" };
  }
  return { ok: true, message: "Book updated", book: next };
}
