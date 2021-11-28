import React from "react";
import { Box, Flex, Button, Text, Image, Heading } from "@chakra-ui/react";

const imageWithText = ({ reverse, image, heading }) => {
  const reverseSection = reverse ? "row-reverse" : "row";

  return (
    <Box>
      <Flex flexDir={["column", reverseSection]} w="100%">
        <Image src={image} objectFit="cover" w={["100%", "50%"]} />
        <Flex
          w={["100%", "50%"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Heading>{heading && heading}</Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default imageWithText;
