import { useMemo } from "react";
import { IBookDetail } from "../components/BookDataLoader";

export default function useBookFilter(
  books: IBookDetail[],
  searchTerm: string
) {
  const filteredBook = useMemo(() => {
    if (!searchTerm) {
      return books;
    }

    const searchTermLowerCase = searchTerm.toLocaleLowerCase();

    return books.filter((book) =>
      book.name.toLocaleLowerCase().includes(searchTermLowerCase)
    );
  }, [books, searchTerm]);

  return filteredBook;
}
