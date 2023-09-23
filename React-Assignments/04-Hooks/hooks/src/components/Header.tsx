import { Box, Flex, Heading, Image, Input, Select } from "@chakra-ui/react";

import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { useTheme } from "../context/ThemeContext";

export const Header = ({
  setSearchTerm,
  searchTerm,
  setSortBy,
}: {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
  setSortBy: (sortBy: string) => void;
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Box
      w={"100%"}
      position={"fixed"}
      top={"0"}
      zIndex={"1"}
      background={"#242424"}
    >
      <Flex w={"90%"} m={"auto"} p={"1em"} justifyContent={"space-between"}>
        <Heading as="h1" color={"#0040ff"}>
          Book List
        </Heading>
        <Flex gap={"2em"}>
          <Input
            type="text"
            background={"#fff"}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search book"
            color={"#000"}
            _placeholder={{ opacity: 0.4, color: "inherit" }}
          />
          <Select
            placeholder="Sort By Votes"
            bg={"inherit"}
            color={"#0040ff"}
            onChange={(e) => setSortBy(e.target.value)}
            cursor={"pointer"}
          >
            <option value="asc" style={{ color: "#0040ff" }}>
              Low to High
            </option>
            <option value="desc" style={{ color: "#0040ff" }}>
              High to Low
            </option>
          </Select>
          {
            <Flex alignItems={"center"} justifyContent={"center"} w={"6em"}>
              <Image
                src={theme === "light" ? MoonIcon : SunIcon}
                cursor={"pointer"}
                onClick={toggleTheme}
              />
            </Flex>
          }
        </Flex>
      </Flex>
    </Box>
  );
};
