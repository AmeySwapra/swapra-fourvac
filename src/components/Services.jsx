import React from "react";
import { Box, Container, Heading, Image, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import serviceProduct1 from '../assets/service/serviceProduct1.jpg';
import serviceProduct1_2 from '../assets/service/serviceProduct1-2.jpg';
import serviceProduct2 from '../assets/service/serviceProduct2.jpg';
import serviceProduct3 from '../assets/service/serviceProduct3.jpg';
import serviceProduct4 from '../assets/service/serviceProduct4.jpg';
import serviceProduct6 from '../assets/service/serviceProduct6.jpg';

const MotionBox = motion(Box);

const animationVariants = {
  hidden: { opacity: 0, y: 100 }, 
  visible: { opacity: 1, y: 0 }, 
};

const Services = () => {
  const cardStyles = {
    boxShadow: "lg",
    borderRadius: "md",
    bg: "white",
    p: 6,
  };

  const headingStyles = {
    fontSize: "40px",
    color: "#c10000",
    textAlign: "center",
    mb: 6,
  };

  const textStyles = {
    fontSize: "18px",
    color: "gray.600",
    fontWeight: "400",
  };

  return (
    <Box as="main" bg="white" px={{ base: 4, lg: 24 }} py={3}>
      {/* Adixen ASM142 Section */}
      <Box py={10}>
        <Container maxW="container.xl">
          <MotionBox
            {...cardStyles}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationVariants}
            transition={{ duration: 0.8 }}
          >
            <Heading {...headingStyles}>Adixen ASM142</Heading>
            <Grid templateColumns={{ base: "1fr", lg: "2fr 3fr" }} gap={6}>
              <GridItem>
                <Image src={serviceProduct1} alt="Adixen ASM142" borderRadius="md" />
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="start">
                  <Text {...textStyles}>
                    Leak detection is used to detect micro-openings, porosities, etc., in test parts. The detection of
                    these cracks involves the use of a light tracer gas, which is capable of infiltrating the smallest
                    leak quickly: Helium. The detector samples and measures the helium flow rate entering the test part
                    via the leak(s). The testing method is selected according to the test part and the measurement
                    accuracy required:
                  </Text>
                  <Image src={serviceProduct1_2} alt="Helium Leak Detection" borderRadius="md" />
                </VStack>
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>
      </Box>

      {/* Spray Method Section */}
      <Box py={10}>
        <Container maxW="container.xl">
          <MotionBox
            {...cardStyles}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationVariants}
            transition={{ duration: 0.8 }}
          >
            <Heading {...headingStyles}>Spray Method</Heading>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
              <GridItem>
                <VStack spacing={4} align="start">
                  <Image src={serviceProduct2} alt="Spray Method" borderRadius="md" />
                  <Text {...textStyles}>
                    <b>
                      This involves removing air from the test part, connecting it to the analyzer, and then spraying
                      helium over the outer surface.
                    </b>
                    <br />
                    The part is placed under a cover, into which helium is injected. The leak cannot be located. The
                    detector measures the flow of helium penetrating the part.
                  </Text>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="start">
                  <Image src={serviceProduct3} alt="Spray Method Analysis" borderRadius="md" />
                  <Text {...textStyles}>
                    <b>Potential leaking areas are sprayed with helium. The leak can be located.</b>
                    <br />
                    When spraying starts, the leak signal is not displayed instantaneously on the analyzer: there is a
                    response time which depends on the volume V being tested and the helium pumping speed S of the system
                    at the opening of the part, according to the following relation: T = V/S (T in seconds, V in litres,
                    S in l/s).
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>
      </Box>

      {/* Sniffer Method Section */}
      <Box py={10}>
        <Container maxW="container.xl">
          <MotionBox
            {...cardStyles}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationVariants}
            transition={{ duration: 0.8 }}
          >
            <Heading {...headingStyles}>Sniffer Method</Heading>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
              <GridItem>
                <VStack spacing={4} align="start">
                  <Image src={serviceProduct4} alt="Sniffer Method" borderRadius="md" />
                  <Text {...textStyles}>
                    <b>
                      The test part is pressurized with helium. The detector, via an LDS (Long Distance Sniffer) probe,
                      samples the helium escaping from the part.
                    </b>
                    <br />
                    The part is placed under a cover containing a sniffer probe. The leak cannot be located. The helium
                    from the leak accumulates over time inside the cover. The detector measures the concentration of
                    helium.
                  </Text>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="start">
                  <Image src={serviceProduct4} alt="Sniffer Analysis" borderRadius="md" />
                  <Text {...textStyles}>
                    The sniffer probe is moved over areas likely to contain leaks. The leak can be located. The signal
                    supplied by the analyzer is not a direct measurement of the leak. The sniffer probe only samples part
                    of the helium escaping from the part. The sample depends on the distance separating the leak from the
                    tip of the probe.
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>
      </Box>

      {/* Bombing Method Section */}
      <Box py={10}>
        <Container maxW="container.xl">
          <MotionBox
            {...cardStyles}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationVariants}
            transition={{ duration: 0.8 }}
          >
            <Heading {...headingStyles}>Bombing Method</Heading>
            <Grid templateColumns="1fr">
              <GridItem>
                <VStack spacing={4} align="start">
                  <Text {...textStyles}>
                    <b>
                      This method is used for sealed objects that cannot be connected directly to the detector
                      (semiconductors, waterproof watches, etc.).
                    </b>
                  </Text>
                  <Image src={serviceProduct6} alt="Bombing Method" borderRadius="md" />
                  <Text {...textStyles}>
                    The part is placed in a chamber containing pressurized helium. The helium penetrates the part if it
                    has a leak. The part is then removed from the chamber and placed in another vacuum chamber which is
                    connected to the detector. The helium escapes from the part through the leak and produces a signal.
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
