import React from "react";

import "./Book.css";

const Book = ({ book, handleDelete }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <button onClick={() => handleDelete(book.id)}>Delete</button>
    </div>
  );
};

export default Book;
