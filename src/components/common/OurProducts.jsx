import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";


const OurProducts = ({products}) => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
      {products.map((product, index) => (
        <GridItem key={index}>
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="md"
            boxShadow="lg"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image
              src={product.image}
              alt={product.title}
              transition="0.3s"
              _hover={{ opacity: 0.7, transform: "scale(1.1)" }}
            />

            <Box
              position="absolute"
              bottom="0"
              left="0"
              width="100%"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
              p={2}
              textAlign="center"
            >
              {product.title}
            </Box>

            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              opacity="0"
              transition="0.3s"
              bg="rgba(0, 0, 0, 0.4)"
              _hover={{ opacity: 1 }}
            >
              <Link href={product.image} target="_blank" color="white">
                <FaEye size={36} />
              </Link>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default OurProducts;
