// console.table(books)
function booksGenreFilter(books, genre) {
  return books.filter((book) => book.genre === genre);
}
const booksGanre = booksGenreFilter(books, "Пригоди");
// console.table(booksGanre);

function booksPagesFilter(books, num1, num2) {
  return books.filter((book) => book.pages >= num1 && book.pages <= num2);
}
const booksPages = booksPagesFilter(books, 200, 500);
// console.table(booksPages);

function booksSortPages(books) {
  return books.toSorted((book1, book2) => book1.pages - book2.pages);
}
// console.table(booksSortPages(books));

function booksSortYearCreate(books) {
  return books.toSorted((book1, book2) => book2.yearCreate - book1.yearCreate);
}
// console.table(booksSortYearCreate(books));

function getTitleByAutor(books, author) {
  return books
    .filter((book) => book.author === author)
    .map((book) => book.title);
}
const titlesByAuthor = getTitleByAutor(books, "Джордж Орвелл");
// console.table(titlesByAuthor);

function getBooksYearCreateReturnAuthors(books, yearCreate) {
  return books
    .filter((book) => book.yearCreate === yearCreate)
    .map((book) => book.author);
}
const authorBooks = getBooksYearCreateReturnAuthors(books, 1818);
// console.log(authorBooks);

function sortBooksByTitleInGenre(books, genre) {
  return books
    .filter((book) => book.genre === genre)
    .toSorted((book1, book2) => {
      if (book1.title === book2.title) {
        return 0;
      }
      if (book1.title > book2.title) {
        return 1;
      }
      if (book1.title < book2.title) {
        return -1;
      }
    });
}
const sortBooksInGenre = sortBooksByTitleInGenre(books, 'Фікція');
console.table(sortBooksInGenre)