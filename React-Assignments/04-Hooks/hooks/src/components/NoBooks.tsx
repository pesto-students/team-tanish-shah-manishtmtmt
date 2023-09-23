import { Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "../context/ThemeContext";

export const NoBooks = () => {
  const { theme } = useTheme();
  return (
    <Flex
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading
        as={"h2"}
        color={theme === "light" ? "#000" : "#fff"}
      >
        No books available...
      </Heading>
    </Flex>
  );
};
