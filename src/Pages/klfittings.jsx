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
import product1 from "../assets/products/klflange/KF_6_Way_Cross.jpg";
import product2 from "../assets/products/klflange/KF_Adaptive_Centre_Ring.jpg";
import product3 from "../assets/products/klflange/KF_Blank_Flange.jpg";
import product4 from "../assets/products/klflange/KF_C_Clamp.jpg"
import product5 from "../assets/products/klflange/KF_Centre_Ring.jpg";
import product6 from "../assets/products/klflange/KF_Cross.jpg";
import product7 from "../assets/products/klflange/KF_Elbow.jpg";
import product8 from "../assets/products/klflange/KF_Hose_Nozzle.jpg";
import product9 from "../assets/products/klflange/KF_Flexible_Hose.jpg";
import product10 from "../assets/products/klflange/KF_Long_Tubulation.jpg";
import product11 from "../assets/products/klflange/KF_O_Ring.jpg";
import product12 from "../assets/products/klflange/KF_Nipple.jpg";
import product13 from "../assets/products/klflange/KF_Reducer.jpg";
import product14 from "../assets/products/klflange/KF_Short_Tubulation.jpg";
import product15 from "../assets/products/klflange/KF_Tee.jpg";
import product16 from "../assets/products/klflange/KF_Bored_Flange.jpg";
import OurProducts from "../components/common/OurProducts";
function Klfittings() {
    const products = [
        { title: "KF Blank Flange", image: product3 },
        { title: "KF Bored Flange", image: product16 },
        { title: "KF Centre Ring", image: product5 },
        { title: "KF Adaptive Centre Ring", image: product2 },
        { title: "KF O Ring", image: product11 },
        { title: "KF C Clamp", image: product4 },
        { title: "KF Short Tubulation", image: product14 },
        { title: "KF Long Tubulation", image: product10 },
        { title: "KF Hose Nozzle", image: product8 },
        { title: "KF Nipple", image: product12 },
        { title: "KF Reducer", image: product13 },
        { title: "KF Elbow", image: product7 },
        { title: "KF Tee", image: product15 },
        { title: "KF Cross", image: product6 },
        { title: "KF 6 Way Cross", image: product1 },
        { title: "KF Flexible Hose", image: product9 },
      ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"KF FLANGES AND FITTINGS"} />
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
                Fourvac manufacture the complete range of KF flanges and
                fittings with highest quality standard in S.S.304 and Quick
                Coupling Clamps in Aluminum Alloy. With this easy assemblies of
                High Vacuum fore lines and backing lines can be done. All the
                fittings are 100% helium leak tested and ensures the repeatable
                leak free assemblies.
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

export default Klfittings;
