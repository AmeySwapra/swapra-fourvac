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
import product1 from "../assets/products/motion/1 micron manipulator.jpg";
import product2 from "../assets/products/motion/Digital Linear Motion.jpg";
import product3 from "../assets/products/motion/DPRF Drive.jpg";
import product4 from "../assets/products/motion/Linear Drives.jpg";
import product5 from "../assets/products/motion/Linear Manipulator-1.jpg";
import product6 from "../assets/products/motion/Linear Motion.jpg";
import product7 from "../assets/products/motion/Linerar N Rotary.jpg";
import product8 from "../assets/products/motion/LM Drive.jpg";
import product9 from "../assets/products/motion/LM Drives (2).jpg";
import product10 from "../assets/products/motion/LM Drives.jpg";
import product11 from "../assets/products/motion/Pneumatic Shutter.jpg";
import product12 from "../assets/products/motion/Rotary_Motion_Drive.jpg";
import product13 from "../assets/products/motion/Three Axis Manipulator.jpg";
import product14 from "../assets/products/motion/XYZ MAnipulator (1).jpg";
import product15 from "../assets/products/motion/XYZ MAnipulator.jpg";
import product16 from "../assets/products/motion/XYZ_Manipulator.jpg";
import product17 from "../assets/products/motion/Z-Shift.jpg";
import OurProducts from "../components/common/OurProducts";
function Motion() {
    const products = [
        { title: "Rotary Motion Drive", image: product12 },
        { title: "XYZ Manipulator (Alternate)", image: product16 },
        { title: "Z-Shift", image: product17 },
        { title: "1 Micron Manipulator", image: product1 },
        { title: "Axis Manipulator", image: product14 },
        { title: "Digital Linear Motion", image: product2 },
        { title: "DPRF Drive", image: product3 },
        { title: "Linear Drives", image: product4 },
        { title: "Linear Manipulator-1", image: product5 },
        { title: "LM Drives", image: product10 },
        { title: "Pneumatic Shutter", image: product11 },
        { title: "Three Axis Manipulator", image: product13 },
        { title: "XYZ Manipulator", image: product15 },
        { title: "Linear Motion", image: product6 },
        { title: "Linear and Rotary Motion", image: product7 },
        { title: "LM Drives (2)", image: product9 },
        { title: "LM Drive", image: product8 },
      ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"MOTION AND MANIPULATION"} />
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
        <OurProducts products={products} />
      </Box>
      <Footer />
    </>
  );
}

export default Motion;
