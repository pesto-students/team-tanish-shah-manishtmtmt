import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { IBookDetail } from "./BookDataLoader";

export const Book = ({ book }: { book: IBookDetail }) => {
  return (
    <Card
      maxW="sm"
      maxH={"base"}
      margin={"auto"}
      m={"10px"}
      boxShadow="dark-lg"
    >
      <CardBody>
        <Image w={"sm"} h={"md"} src={book.cover} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{book.name}</Heading>
          <Text>Author: {book.author}</Text>
          <Text>
            Votes: <span style={{ color: "blue" }}>{book.votes}</span>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
