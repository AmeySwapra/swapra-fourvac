import React from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  Heading,
  Flex,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FaFingerprint, FaGift } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../../assets/aboutImg.jpg";

const MotionBox = motion(Box);

const Welcome = () => {
  const [refMission, inViewMission] = useInView({ triggerOnce: true });
  const [refProduct, inViewProduct] = useInView({ triggerOnce: true });

  const animationProps = {
    initial: { opacity: 0, y: 50 },
    animate: inViewMission || inViewProduct ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8 },
  };

  return (
    <Box as="section" id="about" py={10} bg="white">
      <Box
        maxW="1200px"
        mx="auto"
        px={6}
        shadow="lg"
        rounded="lg"
        p={8}
        bg="white"
      >
        <Box textAlign="center" mb={8}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="300"
            fontSize="48px"
            fontFamily="Raleway"
          >
            WELCOME TO FOURVAC TECHNOLOGIES
          </Heading>
        </Box>
        <Grid templateColumns={["1fr", "1fr 1fr"]} gap={6}>
          <Box>
            <Image src={aboutImg} alt="About Us" borderRadius="md" />
          </Box>

          <Flex flexDirection="column" justifyContent="center">
            <Text
              mb={6}
              color="gray.600"
              fontStyle="italic"
              fontWeight="400"
              fontSize="lg"
            >
              Fourvac Technologies established by four technocrats in the field
              of High and Ultrahigh Vacuum Technology based in Pune is a leading
              manufacturer of High and Ultra High vacuum components, Custom
              built vacuum chambers, motion drives and valves. Fourvac
              Technologies also provides design support, consultancy, automation
              and Helium Leak Detection services to the customers.
            </Text>
            <Stack spacing={6}>
              <MotionBox ref={refMission} {...animationProps}>
                <Flex align="start">
                  <Box
                    bg="#f1f7fb"
                    color="#438bca"
                    _hover={{ bg: "#438bca", color: "#f1f7fb" }}
                    p={4}
                    borderRadius="8px"
                    mr={4}
                  >
                    <Icon as={FaFingerprint} w={6} h={6} />
                  </Box>
                  <Box>
                    <Heading as="h4" size="md" mb={2}>
                      OUR MISSION
                    </Heading>
                    <Text>
                      Fourvac commits to provide products and services that set
                      the vacuum industry standard for customer satisfaction in
                      quality, delivery and cost performance. Our goal is
                      achieved through teamwork involving customers, suppliers,
                      and employees in continuous design and process
                      improvement.
                    </Text>
                  </Box>
                </Flex>
              </MotionBox>

              <MotionBox ref={refProduct} {...animationProps}>
                <Flex align="start">
                  <Box
                    bg="#f1f7fb"
                    color="#438bca"
                    _hover={{ bg: "#438bca", color: "#f1f7fb" }}
                    p={4}
                    borderRadius="8px"
                    mr={4}
                  >
                    <Icon as={FaGift} w={6} h={6} />
                  </Box>
                  <Box>
                    <Heading as="h4" size="md" mb={2}>
                      OUR PRODUCT LINE
                    </Heading>
                    <Text>
                      Custom Built High and Ultra High vacuum Chambers: Fourvac
                      is equipped to build custom vacuum chambers of any
                      complexity. Vacuum vessels can be built for customers'
                      exact specifications from a rough hand sketch, detailed
                      engineering drawing or anything in-between.
                    </Text>
                  </Box>
                </Flex>
              </MotionBox>
            </Stack>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
};

export default Welcome;
