import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import Banner from "../components/common/Banner";
import { Box, Container, Flex, } from "@chakra-ui/react";
import product1 from "../assets/products/hybrid/1-ISO-CF_Adapter.jpg";
import product2 from "../assets/products/hybrid/2-ISO-KF_Adaptor.jpg";
import product3 from "../assets/products/hybrid/3-CF-KF_Adaptor.jpg";
import OurProducts from "../components/common/OurProducts";
function HybridAdaptor() {
    const products = [
        { title: "ISO-CF Adapter", image: product1 },
        { title: "ISO-KF Adapter", image: product2 },
        { title: "CF-KF Adapter", image: product3 },
      ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"HYBRID ADAPTORS"} />
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

export default HybridAdaptor;
