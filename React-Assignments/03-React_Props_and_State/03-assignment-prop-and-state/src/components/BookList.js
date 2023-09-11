import React, { useState } from "react";

import "./BookList.css";
import Book from "./Book";
import WithLogging from "./WithLogging";
import BookForm from "./BookForm";

export const books = [
  { id: 1, title: "Book 1", author: "Author 1", year: 2020 },
  { id: 2, title: "Book 2", author: "Author 2", year: 2018 },
  { id: 3, title: "Book 3", author: "Author 3", year: 2022 },
  { id: 4, title: "Book 4", author: "Author 4", year: 2023 },
  // Add more books if you'd like
];

const BookList = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookList, setBookList] = useState([...books]);

  const handleDelete = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>BookList</h1>
      <div className="book-container">
        {bookList.length > 0 ? (
          bookList.map((book, index) => (
            <Book key={index} book={book} handleDelete={handleDelete} />
          ))
        ) : (
          <p>Book list is currently empty.</p>
        )}
      </div>
      <button
        className="add-button"
        onClick={() => setShowForm((prev) => !prev)}
      >
        Add Book
      </button>
      {showForm && <BookForm setBookList={setBookList} />}
    </div>
  );
};

export default WithLogging(BookList);
