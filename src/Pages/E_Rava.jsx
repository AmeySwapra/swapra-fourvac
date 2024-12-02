import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import Banner from "../components/common/Banner";
import {
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import product1 from '../assets/products/erava/DIBS-System.jpg';
import product2 from '../assets/products/erava/electron-Beam-System.jpg';
import product3 from '../assets/products/erava/PECVD-System.jpg';
import product4 from '../assets/products/erava/Sputtering-Syetem.jpg';
import product5 from '../assets/products/erava/Sputtering-System-2.jpg';
import product6 from '../assets/products/erava/Sputtering-System1.jpg';
import OurProducts from "../components/common/OurProducts";
function E_Rava() {
    const products = [
        { title: 'Electron Beam System', image: product2 },
        { title: 'PECVD System', image: product3 },
        { title: 'Sputtering System 1', image: product6 },
        { title: 'Sputtering System 2', image: product5 },
        { title: 'DIBS System', image: product1 },
        { title: 'Sputtering System', image: product4 },
      ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"E-RAVA SYSTEMS"} />
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
      <Box bg={'gray.100'} py={10} px={{base: 4, lg: 24}}>
            <OurProducts products={products}/>
          </Box>
      <Footer />
    </>
  );
}

export default E_Rava;
