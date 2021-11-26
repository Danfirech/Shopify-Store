import React from "react";
import { Box, Button, Text, Image, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box backgroundColor="#FFA8E2" w="100%" position="realive" h="70vh">
      <Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg"
        h="100%"
        m="auto"
        objectFite="contain"
        objectPosition={["top", "center"]}
      />
    </Box>
  );
};

export default Hero;
