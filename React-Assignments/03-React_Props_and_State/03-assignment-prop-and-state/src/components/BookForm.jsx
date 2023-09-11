import React, { useState } from "react";
import { v4 } from "uuid";

import { books } from "./BookList";
import "./BookForm.css";

const BookForm = ({ setBookList }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = () => {
    const newBook = { id: v4(), title, author, year };
    books.push(newBook);
    setBookList([...books]);
    setTitle("");
    setAuthor("");
    setYear("");
  };
  return (
    <div>
      <div className="form">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>;
    </div>
  );
};

export default BookForm;
