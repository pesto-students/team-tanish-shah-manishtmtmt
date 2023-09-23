import React, { Component } from "react";

import "./BookList.css";
import Book from "./Book";
import WithLogging from "./WithLogging";

const books = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
  { title: "Book 4", author: "Author 4", year: 2023 },
  // Add more books if you'd like
];

class BookList extends Component {
  render() {
    return (
      <div>
        <h1>BookList</h1>
        <div className="book-container">
          {books.length > 0 &&
            books.map((book, index) => <Book key={index} book={book} />)}
        </div>
      </div>
    );
  }
}

// const BookList = () => {
//   return (
//     <div>
//       <h1>BookList</h1>
//       <div className="book-container">
//         {books.length > 0 &&
//           books.map((book, index) => <Book key={index} book={book} />)}
//       </div>
//     </div>
//   );
// };

export default WithLogging(BookList);
