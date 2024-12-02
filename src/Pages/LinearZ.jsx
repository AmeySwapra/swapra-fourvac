import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import Banner from "../components/common/Banner";
import { Box, Container, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import product1 from "../assets/products/linearz/pp.jpg";
import product2 from "../assets/products/linearz/ppp.jpg";
import OurProducts from "../components/common/OurProducts";
function LinearZ() {
  const products = [
    { title: "New", image: product1 },
    { title: "Z-Shift Controller", image: product2 },
  ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"LINEAR Z-SHIFTS"} />
      <Box py={10}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 4, lg: 0 }}
            marginTop="0"
          >
            {/* Main Content */}
            <Box
              flex={{ base: "1", lg: "3" }}
              mx={{ base: "4", lg: "10" }}
              p={6}
              bg="white"
              boxShadow="md"
              borderRadius="md"
            >
              <Text
                fontSize={useBreakpointValue({ base: "md", lg: "lg" })}
                textAlign="justify"
                color="gray.700"
                lineHeight="1.6"
              >
                Linear Z-Shifts are made manual as well as motorized within
                accuracy of minimum 0.5 micron linear movements.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box bg={"gray.100"} py={10} px={{ base: 4, lg: 24 }}>
        <OurProducts products={products}/>
      </Box>
      <Footer />
    </>
  );
}

export default LinearZ;
