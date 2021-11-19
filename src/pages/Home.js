import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log(products);

  if (!products) return <div>Loading....</div>;

  return (
    <Box>
      {products.map((product) => (
        <Link to={`/products/${product.handle}`} key={product.id}>
          <Image src={product.images[0].src} />
          <Text>{product.title}</Text>
          <Text>${product.variants[0].price}</Text>
        </Link>
      ))}
    </Box>
  );
};

export default Home;
