import { Box, Heading, Text, Image, Flex, Grid, UnorderedList, ListItem } from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import elettrorava from '../assets/elettrorava.png';
import mecwin from '../assets/mecwin.jpg';
import hires from '../assets/hires.png';


const MotionFlex = motion(Flex);

const Agencies = () => {
  const companies = [
    {
      name: "Elettrorava SPA Italy",
      logo: elettrorava,
      description: "Company manufactures Thin film deposition systems",
      details: [
        "PECVD Deposition systems",
        "Electron Beam Deposition systems",
        "Ion Beam Deposition Systems",
        "HWCVD and Thermal Evaporation Systems",
        "Multichamber Systems",
        "Thin Film Deposition Applications",
        "Automatic Vacuum and Deposition Control",
      ],
    },
    {
      name: "Mecwins, Spain",
      logo: mecwin,
      description:
        "Mecwins has developed a technology to inspect surfaces. The instrument is based on the combination of automated two-dimensional scanning of a laser beam and the acquisition of the reflected laser beam on a photodetector. The association of both allows the reconstruction of the analyzed surface topography. Mecwin products are designed to aid researchers in many diverse fields.",
      details: [
        "Materials science",
        "Biochemistry",
        "Medical diagnosis",
        "MEMS developers",
        "Food science",
      ],
    },
    {
      name: "Toho Technology",
      logo: hires,
      description:
        "Toho Technology provides world-class metrology instruments for Thin Film analysis of Stress, Profile, and Thickness.",
      details: [],
    },
  ];

  return (
    <Box as="section" py={10}>
      <Box maxW="1200px" mx="auto">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }}
          gap={6}
        >
          {companies.map((company, index) => (
            <MotionFlex
              key={index}
              direction="column"
              align="center"
              bg="white"
              boxShadow="md"
              borderRadius="lg"
              p={5}
              initial={{ opacity: 0, translateY: 100 }} 
              animate={{ opacity: 1, translateY: 0 }} 
              transition={{
                duration: 0.8, 
                delay: index * 0.3,
              }}
            >
              <Heading as="h4" size="md" textAlign="center" mb={4} color="teal.500">
                {company.name}
              </Heading>
              <Image src={company.logo} alt={company.name} width="200px" height="100px" mb={4} />
              <Text fontSize="sm" color="gray.700" textAlign="center" mb={4}>
                {company.description}
              </Text>
              {company.details.length > 0 && (
                <UnorderedList spacing={2}>
                  {company.details.map((detail, idx) => (
                    <ListItem key={idx} fontSize="sm" color="gray.600">
                      {detail}
                    </ListItem>
                  ))}
                </UnorderedList>
              )}
            </MotionFlex>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Agencies;
