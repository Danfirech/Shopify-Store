import React from "react";
import { Box, Flex, Button, Text, Image, Heading } from "@chakra-ui/react";

const imageWithText = ({ reverse }) => {
  const reverseSection = reverse ? "row-reverse" : "row";

  return (
    <Box>
      <Flex flexDir={["column", reverse]} w="100%">
        <Image src={image} objectFit="cover" w={["100%", "50%"]} />
        <Flex
          w={["100%", "50%"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        ></Flex>
      </Flex>
    </Box>
  );
};

export default imageWithText;
