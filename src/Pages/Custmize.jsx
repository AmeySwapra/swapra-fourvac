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
import product1 from "../assets/products/custmize/20141221_124621 (3).jpg";
import product2 from "../assets/products/custmize/Acceleration-Chamber.jpg";
import product3 from "../assets/products/custmize/Beamling_Chambers.jpg";
import product4 from "../assets/products/custmize/CF-Hoses.jpg";
import product5 from "../assets/products/custmize/Cluster-Chamber.jpg";
import product6 from "../assets/products/custmize/Cubical-Chamber.jpg";
import product7 from "../assets/products/custmize/DigitalLinearMotion.jpg";
import product8 from "../assets/products/custmize/DSC00744.jpg";
import product9 from "../assets/products/custmize/Magnet-Chamber.jpg";
import product10 from "../assets/products/custmize/Flex-Adapter.jpg";
import product11 from "../assets/products/custmize/Octagonal-Chamber.jpg";
import product12 from "../assets/products/custmize/Plasma_Cleaning_System.jpg";
import product13 from "../assets/products/custmize/Special-Manifold.jpg";
import product14 from "../assets/products/custmize/Special-manifold2.jpg";
import product15 from "../assets/products/custmize/Special-UHV-Cube.jpg";
import product16 from "../assets/products/custmize/UHV_Adaptors.jpg";
import product17 from "../assets/products/custmize/UHV-Shutter2.jpg";
import product18 from "../assets/products/custmize/UHV-Chamber.jpg";
import product19 from "../assets/products/custmize/UHV-Manifold.jpg";
import product20 from "../assets/products/custmize/UHV-Shutter.jpg";
import product21 from "../assets/products/custmize/Vacuum_Pulling_Tool.jpg";
import product22 from "../assets/products/custmize/Vacuum-Chamber2.jpg";
import product23 from "../assets/products/custmize/Vacuum-Chamber3.jpg";
import product24 from "../assets/products/custmize/Vacuum-Chamber4.jpg";
import product25 from "../assets/products/custmize/Vacuum-Chamber5.jpg";
import product26 from "../assets/products/custmize/Vacuum-Chamber6.jpg";
import product27 from "../assets/products/custmize/Vacuum-Manifold.jpg";
import product28 from "../assets/products/custmize/View-port-with-door.jpg";
import product29 from "../assets/products/custmize/View-Port.jpg";
import product30 from "../assets/products/custmize/Water_Cooled_Baffle.jpg";
import OurProducts from "../components/common/OurProducts";
function Custmize() {
    const products = [
        { title: "Cryoprober_System", image: product7 },
        { title: "Plasma Cleaning System", image: product12 },
        { title: "Beamling Chambers", image: product3 },
        { title: "UHV Adaptors", image: product16 },
        { title: "Vacuum Pulling Tool", image: product21 },
        { title: "Water Cooled Baffle", image: product30 },
        { title: "Pumping Port Baffles", image: product8 },
        { title: "Z-Shift", image: product1 },
        { title: "Acceleration Chamber", image: product2 },
        { title: "Flex Adapter", image: product10 },
        { title: "Octagonal Chamber", image: product11 },
        { title: "Special Manifold 2", image: product14 },
        { title: "Special Manifold", image: product13 },
        { title: "Special UHV Cube", image: product15 },
        { title: "UHV Chamber", image: product18 },
        { title: "UHV Manifold", image: product19 },
        { title: "UHV Shutter 2", image: product17 },
        { title: "UHV Shutter", image: product20 },
        { title: "Vacuum Chamber 2", image: product22 },
        { title: "Vacuum Chamber 4", image: product24 },
        { title: "Vacuum Chamber 5", image: product25 },
        { title: "Vacuum Chamber 6", image: product26 },
        { title: "Vacuum Manifold", image: product27 },
        { title: "View Port with Door", image: product28 },
        { title: "View Port", image: product29 },
        { title: "CF Hoses", image: product4 },
        { title: "Cluster Chamber", image: product5 },
        { title: "Cubical Chamber", image: product6 },
        { title: "Vacuum Chamber 3", image: product23 },
        { title: "Magnet Chamber", image: product9 },
      ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"CUSTOMIZED PROJECTS"} />
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

export default Custmize;
