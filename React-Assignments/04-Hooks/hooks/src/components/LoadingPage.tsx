import { Flex, Heading } from "@chakra-ui/react";
import { useTheme } from "../context/ThemeContext";

export const LoadingPage = () => {
  const { theme } = useTheme();
  return (
    <Flex h={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Heading as={"h2"} color={theme === "light" ? "#000" : "#fff"}>
        Fetching books details...
      </Heading>
    </Flex>
  );
};
