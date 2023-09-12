import React from "react";

import "./Book.css";

const BookDetail = ({ book }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
    </div>
  );
};

export default BookDetail;
