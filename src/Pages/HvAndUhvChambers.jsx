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
import product1 from '../assets/products/hvuhv/BENDING-MAGNET-CHAMBER.JPG';
import product2 from '../assets/products/hvuhv/D-Shaped-Chamber.JPG';
import product3 from '../assets/products/hvuhv/Dome_Shaped_HV_Chamber.JPG';
import product4 from '../assets/products/hvuhv/HV_Chamber_with_Entry_Door.JPG';
import product5 from '../assets/products/hvuhv/HV_Chamber.JPG';
import product6 from '../assets/products/hvuhv/Rectangular_HV_Chamver.JPG';
import product7 from '../assets/products/hvuhv/Rectangular_Water_Cooled_HV_Chamver.JPG';
import product8 from '../assets/products/hvuhv/Sputtering_System.JPG';
import product9 from '../assets/products/hvuhv/Transfer_Chamber.JPG';
import product10 from '../assets/products/hvuhv/UHV_Chamber.JPG';
import product11 from '../assets/products/hvuhv/UHV_Double_Walled_Water_Cooled_Chamber.JPG';
import product12 from '../assets/products/hvuhv/UHV_Process_Chamber.JPG';
import OurProducts from "../components/common/OurProducts";
function HvandUhvChambers() {
    const products = [
        { title: 'Dome Shaped HV Chamber', image: product3 },
        { title: 'HV Chamber with Entry Door', image: product4 },
        { title: 'HV Chamber', image: product5 },
        { title: 'Rectangular HV Chamber', image: product6 },
        { title: 'Rectangular Water Cooled HV Chamber', image: product7 },
        { title: 'Sputtering System', image: product8 },
        { title: 'Transfer Chamber', image: product9 },
        { title: 'UHV Chamber', image: product10 },
        { title: 'UHV Double Walled Water Cooled Chamber', image: product11 },
        { title: 'UHV Process Chamber', image: product12 },
        { title: 'Bending Magnet Chamber', image: product1 },
        { title: 'D-Shaped Chamber', image: product2 },
      ];
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"HV AND UHV CHAMBERS"} />
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
                Fourvac is equipped to build custom built High and Ultra High
                Vacuum Chambers of any complexity in S.S.304, 304L, 316, 316L &
                aluminium. Vacuum vessels can be built to customers' exact
                specifications from a rough hand sketch, detailed engineering
                drawings, or even from the concept. Fourvac Engineering
                department uses the latest 3D and 2D CAD software and can accept
                drawings in DWG, DXF, IGES, STP file formats. Fourvac can even
                design from concept and prepare a complete set of manufacturing
                drawings for those projects for which the drawings are not
                provided by the customer.
              </Text>
              <Text
                mt="4"
                fontSize={useBreakpointValue({ base: "md", lg: "lg" })}
                textAlign="justify"
                color="gray.700"
                lineHeight="1.6"
              >
                All UHV products are electro-polished and thoroughly cleaned to
                ensure surface cleanliness and minimal outgassing rates. In
                addition, all vacuum chambers are helium mass spectrometer leak
                tested at all critical stages throughout the manufacturing
                process. Chambers and assemblies can be baked in air ovens for
                stress-relieving purposes. Quality control procedures are
                applied at all stages, from raw materials to finished products.
              </Text>
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

export default HvandUhvChambers;
