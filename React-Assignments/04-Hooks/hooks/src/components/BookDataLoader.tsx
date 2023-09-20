import axios from "axios";
import { useEffect, useState } from "react";

import { BookList } from "./BookList";
const rapidApiKey = import.meta.env.VITE_REACT_APP_X_RAPIDAPI_KEY;
// import booksData from "../../data.json";

export interface IBookDetail {
  author: string;
  book_id: number;
  cover: string;
  name: string;
  url: string;
  votes: number;
}

export const BookDataLoader = () => {
  const [books, setBooks] = useState<IBookDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchBooks(): Promise<void> {
      setIsLoading(true);
      const { data }: { data: IBookDetail[] } = await axios.get(
        `https://hapi-books.p.rapidapi.com/nominees/fantasy/2020`,
        {
          headers: {
            "X-RapidAPI-Key": rapidApiKey,
            "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          },
        }
      );
      setIsLoading(false);
      setBooks([...data]);
    }

    fetchBooks();
  }, []);

  return <BookList books={books} isLoading={isLoading} />;
};
