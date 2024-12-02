import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import Banner from "../components/common/Banner";
import { Box, Container, Flex } from "@chakra-ui/react";
function FeedThrough() {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner text={"FEEDTHROUGHS"} />
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
            ></Box>
          </Flex>
        </Container>
      </Box>
      <Box bg={"gray.100"} py={10} px={{ base: 4, lg: 24 }}></Box>
      <Footer />
    </>
  );
}

export default FeedThrough;
