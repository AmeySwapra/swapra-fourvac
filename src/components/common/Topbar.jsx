import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Topbar = () => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      bg="white"
      py={2}
      px={{ base: "4", lg: "24" }}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={2}>
          <Flex align="center" gap={6}>
            <Flex align="center" gap={2}>
              <FaEnvelope size="14px" color="blue" />
              <Link
                href="mailto:admin@fourvac.com"
                fontSize="sm"
                color="black"
                _hover={{ color: "blue" }}
              >
                admin@fourvac.com
              </Link>
            </Flex>
            <Flex align="center" gap={2}>
              <FaPhone size="14px" color="blue" />
              <Text fontSize="sm">+91 (20) 27122660</Text>
            </Flex>
          </Flex>
          <Text fontSize="sm" color="teal.700" textAlign="center">
            Quality Precision Innovation Service The Perfect Four
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Topbar;
