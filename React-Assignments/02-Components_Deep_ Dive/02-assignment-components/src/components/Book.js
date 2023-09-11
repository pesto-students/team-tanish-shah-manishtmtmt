import React, { PureComponent } from "react";

import "./Book.css";

class Book extends PureComponent {
  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
      </div>
    );
  }
}

// const Book = ({ book }) => {
//   return (
//     <div className="book">
//       <h3>{book.title}</h3>
//       <p>Author: {book.author}</p>
//       <p>Year: {book.year}</p>
//     </div>
//   );
// };

export default Book;
