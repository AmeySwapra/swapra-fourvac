import { Box, Grid, Heading, Input, Textarea, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import getImg from '../assets/getQuotation.jpg';

const MotionBox = motion(Box);

const GetQuotationForm = () => {
  return (
    <Box px={{ base: 4, lg: 24 }} py={8}>
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={8}
        boxShadow="lg"
        borderRadius="lg"
        p={{ base: 4, lg: 8 }}
        bg="white"
      >
        
        <MotionBox
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Box
            as="img"
            src={getImg}
            alt="About Us"
            width="90%"
            height="400px"
            mx="auto"
            my="20px"
            display="block"
            borderRadius="md"
            boxShadow="md"
          />
        </MotionBox>

        
        <MotionBox
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <Heading fontSize={{ base: '2xl', lg: '3xl' }} mb={4} color="#82c5f4">
            Feedback Form
          </Heading>
          <Box p={6} borderWidth={1} borderRadius="md" boxShadow="lg" bg="white">
            <form method="post" action="">
              <Flex direction="column" gap={3}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  variant="outline"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  required
                  variant="outline"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  variant="outline"
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  variant="outline"
                />
                <Textarea
                  name="Requirement"
                  placeholder="Requirement"
                  rows={4}
                  required
                  variant="outline"
                />
                <Button type="submit" colorScheme="blue" width="full" mt={4}>
                  Submit
                </Button>
              </Flex>
            </form>
          </Box>
        </MotionBox>
      </Grid>
    </Box>
  );
};

export default GetQuotationForm;
