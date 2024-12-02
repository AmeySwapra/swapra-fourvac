import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'
import Carousel from '../components/Carousel'
import Welcome from '../components/common/Welcome'
import Founder from '../components/common/Founder'
import CommanAgencies from '../components/common/CommanAgencies'
import OurProducts from "../components/common/OurProducts";
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import product1 from "../assets/products/portfolio-1.jpg";
import product2 from "../assets/products/portfolio-2.jpg";
import product3 from "../assets/products/portfolio-3.jpg";
import product4 from "../assets/products/portfolio-4.jpg";
import product5 from "../assets/products/portfolio-5.jpg";
import product6 from "../assets/products/portfolio-7.jpg";
import product7 from "../assets/products/portfolio-8.jpg";
import product8 from "../assets/products/portfolio-9.jpg";
import product10 from "../assets/products/PneumaticGateValves.jpg";
import product11 from "../assets/products/DigitalLinearMotion.jpg";
import product12 from "../assets/products/Specialmanifold.jpg";



function Home() {

  const products = [
    { title: "Customized Projects", image: product1 },
    { title: "Three Axis Manipulator", image: product2 },
    { title: "Manipulator", image: product3 },
    { title: "ISO RAV", image: product4 },
    { title: "Flex Adapter", image: product5 },
    { title: "Pneumapic PUSH-PULL", image: product6 },
    { title: "Special Manifold", image: product7 },
    { title: "UHV Manifold", image: product8 },
    { title: "Pneumatic Gate Valves", image: product10 },
    { title: "Digital Linear Motion", image: product11 },
    { title: "Special Manifold", image: product12 },
  ];
  
  return (
    <>
     <ScrollToTop/>
     <Topbar/>
     <Header/>
     <Carousel/>
     <Welcome/>
     <Founder/>
     <Box bg="gray.50" py={10}>
     <Container maxW="container.xl">
     <VStack spacing={6} align="center" mb={8}>
          <Heading as="h2" fontSize="40px" color="#c10000">
            Our Products
          </Heading>
          <Text textAlign="center" color="gray.600" fontSize={'lg'} maxW="container.md">
            Fourvac has introduced Leak Testing Service using state of art
            Helium Leak Detector
          </Text>
        </VStack>
        <OurProducts products={products}/>
     </Container>
     </Box>
     <CommanAgencies/>
     <Footer/>
    </>
  )
}

export default Home