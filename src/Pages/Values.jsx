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
import product1 from "../assets/products/values/1-KF_Manual_Right_Angle_Valve.jpg";
import product2 from "../assets/products/values/2-KF_Manual_Inline_Valve.jpg";
import product3 from "../assets/products/values/3-KF_Manual_Right_Angle_Valve.jpg";
import product4 from "../assets/products/values/5-KF_Manual_Gate_Valve.jpg";
import product5 from "../assets/products/values/6-Large_Sized_Right_Angle_Valve.jpg";
import product6 from "../assets/products/values/Aluminium-RAV.jpg";
import product7 from "../assets/products/values/Butterfly_Valve.jpg";
import product8 from "../assets/products/values/Gate-valve.jpg";
import product9 from "../assets/products/values/Inline-Valve.jpg";
import product10 from "../assets/products/values/ISO-RAV.jpg";
import product11 from "../assets/products/values/Large-ISO-Valve.jpg";
import product12 from "../assets/products/values/Pneumatic-Gate-Valves.jpg";
import product13 from "../assets/products/values/Pneumatic-Right-Angle-Valve.jpg";
import product14 from "../assets/products/values/Right-angles-valves.jpg";
import product15 from "../assets/products/values/Valve1.jpg";
import product16 from "../assets/products/values/Valves.jpg";
import OurProducts from "../components/common/OurProducts";
function Values() {
  const products = [
      { title: "KF Manual Right Angle Valve", image: product1 },
      { title: "KF Manual Inline Valve", image: product2 },
      { title: "KF Manual Right Angle Valve", image: product3 },
      { title: "Pneumatic Right Angle Valve", image: product13 },
    { title: "KF Manual Gate Valve", image: product4 },
    { title: "Large Sized Right Angle Valve", image: product5 },
    { title: "Butterfly Valve", image: product7 },
    { title: "Gate Valve", image: product8 },
    { title: "ISO Right Angle Valve", image: product10 },
    { title: "Large ISO Valve", image: product11 },
    { title: "Pneumatic Gate Valve", image: product12 },
    { title: "Right Angle Valves", image: product14 },
    { title: "Valves", image: product16 },
    { title: "Inline Valve", image: product9 },
    { title: "Valve Type 1", image: product15 },
    { title: "Aluminium Right Angle Valve", image: product6 },
  ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"VALVES"} />
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
                Fourvac vacuum angle and inline valves have been designed for
                maximum conductance and minimum size for easy installation.
                These valves are ideally suited for High Vacuum Application.
                Stainless steel hydro formed bellows as well as Viton elastomer
                O-rings are used for achieving vacuum sealing. Fourvac valves
                are available in S.S.304 or Aluminium. Fourvac angle and inline
                valves are offered in various sizes ranging from KF10 to KF50
                and ISO63 to ISO 100 Port Flanges.
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

export default Values;
