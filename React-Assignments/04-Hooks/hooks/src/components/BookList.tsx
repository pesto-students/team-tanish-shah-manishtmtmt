import { Box, Grid } from "@chakra-ui/react";
import { Header } from "./Header";
import { Book } from "./Book";
import { IBookDetail } from "./BookDataLoader";
import { useState } from "react";
import useBookFilter from "../customHooks/useBookFilter";
import { useTheme } from "../context/ThemeContext";
import { useBookSorter } from "../customHooks/useBookSorter";
import { NoBooks } from "./NoBooks";
import { LoadingPage } from "./LoadingPage";

export const BookList = ({
  books,
  isLoading,
}: {
  books: IBookDetail[];
  isLoading: boolean;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("asc");

  const { theme } = useTheme();

  books = useBookFilter(books, searchTerm);

  books = useBookSorter(books, sortBy);

  return (
    <Box background={theme === "light" ? "#fff" : "#242424"}>
      <Header
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setSortBy={setSortBy}
      />
      {isLoading ? <LoadingPage /> : null}
      {books.length > 0 ? (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={"2em"}
          w={"90%"}
          m={"auto"}
          pt={"5em"}
          zIndex={"0"}
        >
          {books.map((book: IBookDetail) => (
            <Book key={book.book_id} book={book} />
          ))}
        </Grid>
      ) : (
        <NoBooks />
      )}
    </Box>
  );
};
