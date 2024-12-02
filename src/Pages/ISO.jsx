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
import product1 from "../assets/products/iso/ISO_Centre_Ring.jpg";
import product2 from "../assets/products/iso/ISO_F_Blank_Flange.jpg";
import product3 from "../assets/products/iso/ISO_F_Bored_Flange.jpg";
import product4 from "../assets/products/iso/ISO_Flexible_Hose.jpg";
import product5 from "../assets/products/iso/ISO_Half_Claw_Clamp.jpg";
import product6 from "../assets/products/iso/ISO_K_6_Way_Cross.jpg";
import product7 from "../assets/products/iso/ISO_K_Bored_Flange.jpg";
import product8 from "../assets/products/iso/ISO_K_Cross.jpg";
import product9 from "../assets/products/iso/ISO_K_Elbow.jpg";
import product10 from "../assets/products/iso/ISO_K_Full_Nipple.jpg";
import product11 from "../assets/products/iso/ISO_K_Half_Nipple.jpg";
import product12 from "../assets/products/iso/ISO_K_Reducer.jpg";
import product13 from "../assets/products/iso/ISO_K_Tee.jpg";
import product14 from "../assets/products/iso/ISO_O_Ring.jpg";
import product15 from "../assets/products/iso/ISO-Elbows.jpg";
import product16 from "../assets/products/iso/ISO-K-Blank-Flange.jpg";
import product17 from "../assets/products/iso/SO_Full_Claw_Clamp.jpg";
import OurProducts from "../components/common/OurProducts";
function ISO() {
  const products = [
    { title: "ISO K Blank Flange", image: product16 },
    { title: "ISO K Bored Flange", image: product7 },
    { title: "ISO F Blank Flange", image: product2 },
    { title: "ISO F Bored Flange", image: product3 },
    { title: "ISO Centre Ring", image: product1 },
    { title: "ISO O Ring", image: product14 },
    { title: "ISO Half Claw Clamp", image: product5 },
    { title: "ISO Full Claw Clamp", image: product17 },
    { title: "ISO K Half Nipple", image: product11 },
    { title: "ISO K Full Nipple", image: product10 },
    { title: "ISO K Reducer", image: product12 },
    { title: "ISO K Tee", image: product13 },
    { title: "ISO K 4 Cross", image: product8 },
    { title: "ISO K 6 Way Cross", image: product6 },
    { title: "ISO Flexible Hose", image: product4 },
    { title: "ISO Elbows", image: product15 },
    { title: "ISO K Elbow", image: product9 },
  ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"ISO FLANGES AND FITTINGS"} />
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
                There are two different types of ISO flange. Bolted flanges(
                F-type) have a set of bolt holes to allow flanges to be joined
                together. Fixed and rotatable bolted styles are manufactured.
                Claw clamp flanges (K-type) use demountable claw clamps to hold
                the two mating flanges together. The S.S. Centre ring with Viton
                O-ring is sandwiched between the two mating flanges. Fourvac
                also manufacturer and supplies the accessories like Centre
                rings, Viton O-rings and double and single claw clamps with high
                tensile Bolts and Nuts.
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

export default ISO;
