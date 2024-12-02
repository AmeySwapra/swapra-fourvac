import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; 
import elettrorava from "../../assets/elettrorava_spa.png";
import mecwin from "../../assets/mecwins1.png";
import hires from "../../assets/toho.png";

const AgencyCard = ({ agencyName, website, logoSrc, socialLinks, index }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const cardElement = document.getElementById(agencyName);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [agencyName]);

  return (
    <motion.div
      id={agencyName}
      initial={{ opacity: 0, y: 200 }} 
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} 
      transition={{ duration: 0.7, delay: index * 0.3 }} 
    >
      <Box
        w="370px"
        h="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        position="relative"
        mb="100px"
      >
        <Image
          src={logoSrc}
          alt={agencyName}
          boxSize="100%"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
        />
        <Box
          position="absolute"
          bottom="0"
          left="20px"
          right="20px"
          p="2"
          background="#7998ac"
          borderRadius="md"
          textAlign="center"
          zIndex={100}
        >
          <Heading as="h4" size="md" color="white" mb={2}>
            {agencyName}
          </Heading>
          <Text mb={2} color="white">
            {website}
          </Text>
          <HStack spacing={4} justify="center" position="relative" zIndex={200}>
            <Link href={socialLinks.twitter} isExternal>
              <IconButton
                icon={<FaTwitter color="white" />}
                aria-label="Twitter"
                variant="ghost"
              />
            </Link>
            <Link href={socialLinks.facebook} isExternal>
              <IconButton
                icon={<FaFacebook color="white" />}
                aria-label="Facebook"
                variant="ghost"
              />
            </Link>
            <Link href={socialLinks.instagram} isExternal>
              <IconButton
                icon={<FaInstagram color="white" />}
                aria-label="Instagram"
                variant="ghost"
              />
            </Link>
            <Link href={socialLinks.linkedin} isExternal>
              <IconButton
                icon={<FaLinkedin color="white" />}
                aria-label="LinkedIn"
                variant="ghost"
              />
            </Link>
          </HStack>
        </Box>
      </Box>
    </motion.div>
  );
};

const CommanAgencies = () => {
  return (
    <>
      <Box textAlign="center" mb={8}>
        <Heading as="h2" size="xl" color="#c10000">
          OUR AGENCIES
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Fourvac represents the following principles with their product range with active service support in India.
        </Text>
      </Box>

      <HStack spacing={8} justify="center" wrap="wrap">
        <AgencyCard
          agencyName="Elettrorava SPA Italy"
          website="www.elettrorava.com"
          logoSrc={elettrorava}
          socialLinks={{
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
          }}
          index={0}
        />
        <AgencyCard
          agencyName="Mecwins, Spain"
          website="www.mecwins.com"
          logoSrc={mecwin}
          socialLinks={{
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
          }}
          index={1}
        />
        <AgencyCard
          agencyName="Toho Technology"
          website="www.tohotechnology.com"
          logoSrc={hires}
          socialLinks={{
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
          }}
          index={2}
        />
      </HStack>
    </>
  );
};

export default CommanAgencies;
