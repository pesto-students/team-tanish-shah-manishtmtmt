import { useMemo } from "react";
import { IBookDetail } from "../components/BookDataLoader";

export const useBookSorter = (books: IBookDetail[], sortBy: string) => {
  const sortedBooks = useMemo(() => {
    if (!sortBy) return books;

    if (sortBy === "asc") {
      books.sort((a, b) => +a.votes - +b.votes);
    } else {
      books.sort((a, b) => +b.votes - +a.votes);
    }

    return books;
  }, [books, sortBy]);

  return sortedBooks;
};
