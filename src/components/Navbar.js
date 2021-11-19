import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Flex, Text, Icon, Image } from "@chakra-ui/react";

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex flexDirection="row" justifyContent="space-between" padding="2rem">
      <Text>Menu</Text>
      <Text>Logo</Text>
      <Text>Cart</Text>
    </Flex>
  );
};

export default Navbar;
