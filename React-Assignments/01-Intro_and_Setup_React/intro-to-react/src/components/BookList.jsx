import React from "react";
import Book from "./Book";

const books = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
  { title: "Book 4", author: "Author 4", year: 2023 },
  // Add more books if you'd like
];

const BookList = () => {
  return (
    <div className="container">
      <h1>BookList</h1>
      <div className="book-container">
        {books.length > 0 &&
          books.map((book, index) => <Book key={index} book={book} />)}
      </div>
    </div>
  );
};

export default BookList;
