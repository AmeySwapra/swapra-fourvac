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
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import product1 from "../assets/products/cfnflanges/CF_4_Way_Cross.jpg";
import product2 from "../assets/products/cfnflanges/CF_6_Way_Cross.jpg";
import product3 from "../assets/products/cfnflanges/CF_Blank_Flange.jpg";
import product4 from "../assets/products/cfnflanges/CF_Blank_Rotatable_Flange.jpg";
import product5 from "../assets/products/cfnflanges/CF_Bored_Flange.jpg";
import product6 from "../assets/products/cfnflanges/CF_Bored_Rotatable_Flange.jpg";
import product7 from "../assets/products/cfnflanges/CF_Copper_Gasket.jpg";
import product8 from "../assets/products/cfnflanges/CF_Elbow.jpg";
import product9 from "../assets/products/cfnflanges/CF_Cube.jpg";
import product10 from "../assets/products/cfnflanges/CF_Flexible_Hose.jpg";
import product11 from "../assets/products/cfnflanges/CF_Non-rotatable_Half_Nipple.jpg";
import product12 from "../assets/products/cfnflanges/CF_Reducer.jpg";
import product13 from "../assets/products/cfnflanges/CF_Zero_Length_Reducer.jpg";
import product14 from "../assets/products/cfnflanges/CF_Rotatable_Half_Nipple.jpg";
import product15 from "../assets/products/cfnflanges/CF_Tee.jpg";
import OurProducts from "../components/common/OurProducts";
function CFnFittings() {
  const products = [
    { title: "CF Blank Flange", image: product3 },
    { title: "CF Bored Flange", image: product5 },
    { title: "CF Blank Rotatable Flange", image: product4 },
    { title: "CF Bored Rotatable Flange", image: product6 },
    { title: "CF Zero-Length Reducer", image: product13 },
    { title: "CF Copper Gasket", image: product7 },
    { title: "CF Cube", image: product9 },
    { title: "CF Non-Rotatable Half Nipple", image: product11 },
    { title: "CF Rotatable Half Nipple", image: product14 },
    { title: "CF Reducer", image: product12 },
    { title: "CF Elbow", image: product8 },
    { title: "CF Tee", image: product15 },
    { title: "CF 4-Way Cross", image: product1 },
    { title: "CF 6-Way Cross", image: product2 },
    { title: "CF Flexible Hose", image: product10 },
  ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"CF FLANGES AND FITTINGS"} />
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
                The reliable sealing performance of Fourvac Knife Edge Flanges
                and Fittings is a result of accurate manufacturing of Knife Edge
                and the high quality TIG welding. The ultimate UHV is guaranteed
                with these flanges and fittings. Fourvac also supply OFHC
                gaskets in all sizes for proper sealing. The Teflon gaskets can
                also be supplied on request.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box bg={"gray.100"} py={10} px={{ base: 4, lg: 24 }}>
        <OurProducts products={products} />
      </Box>
      <Footer />
    </>
  );
}

export default CFnFittings;
