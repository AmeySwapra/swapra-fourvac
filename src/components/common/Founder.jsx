import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const MotionVStack = motion(VStack);

const Founder = () => {
  const founders = [
    {
      id: 1,
      name: "DR. ANAND DIXIT",
      description:
        "Dr. Dixit is a Ph.D in physics from the University of Pune (1986) and has 28 years of experience in marketing capital equipments like vacuum systems.",
    },
    {
      id: 2,
      name: "DR. SANJAY PATIL",
      description:
        "Dr. Patil has over 18 years of experience in the installation, maintenance and servicing of vacuum-based systems and is a Ph.D.",
    },
    {
      id: 3,
      name: "MR. SACHIN PATIL",
      description:
        "Mr. Patil is a mechanical engineer with a post-graduate diploma in business management as well as a Masters in management science.",
    },
    {
      id: 4,
      name: "MR. SANJAY DAROTE",
      description:
        "Mr. Darote is a mechanical engineer with a diploma in quality control. He has wide experience in manufacturing of complex UHV and HV chambers and systems, and vacuum assemblies.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Box py={10} bg="white" ref={ref}>
      <Box textAlign="center" mb={8}>
        <Heading as="h2" size="xl" color="#c10000">
          OUR FOUNDERS
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        px={4}
        maxW="6xl"
        mx="auto"
      >
        {founders.map((founder, index) => (
          <MotionVStack
            key={founder.id}
            align="flex-start"
            spacing={6}
            px={4}
            borderTop={index === 2 || index === 3 ? "1px solid #9eccf4" : "none"}
            borderRight={index === 0 || index === 2 ? "1px solid #9eccf4" : "none"}
            borderLeft={index === 1 || index === 3 ? "1px solid #9eccf4" : "none"}
            borderBottom={index === 0 || index === 1 ? "1px solid #9eccf4" : "none"}
            pb={4}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <Text fontSize="2xl" fontWeight="bold" color="#9eccf4">
              {founder.id.toString().padStart(2, "0")}
            </Text>
            <Heading as="h4" size="md" color="gray.700">
              {founder.name}
            </Heading>
            <Text fontSize="lg" color="gray" fontWeight={300}>
              {founder.description}
            </Text>
          </MotionVStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Founder;
