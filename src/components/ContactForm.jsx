import { Box, Heading, Text, Input, Textarea, Button, Stack, Grid, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Motion components
const MotionBox = motion(Box);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Box px={{ base: 4, lg: 24 }} py={3}>
     
      <Box bg="white" py={8} boxShadow="lg" borderRadius="md">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8} px={4}>
         
          <MotionBox
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Heading fontWeight="400" fontSize="25px" mb={4} color="#82c5f4">
              Our Contact Details
            </Heading>
            <Text mt={6} fontSize="18px" color="#636363">
              <b>Address:</b>
              <br />
              Priyadarshni Industrial Premises,
              <br />
              T - 165/03/08, M.I.D.C., Bhosari, Pune - 411026, India.
            </Text>
            <Text mt={6} fontSize="18px" color="#636363">
              <b>Write to Us:</b>
              <br />
              sales@fourvac.com
              <br />
              admin@fourvac.com
            </Text>
            <Text mt={6} fontSize="18px" color="#636363">
              <b>Call Us On:</b>
              <br />
              +91 20 27122660
            </Text>
          </MotionBox>

         
          <MotionBox
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <Heading fontWeight="400" fontSize="25px" mb={4} color="#82c5f4">
              Feedback Form
            </Heading>
            <form action="" method="post">
              <Stack spacing={4}>
                <Flex direction={{ base: 'column', lg: 'row' }} gap={4}>
                  <Box flex="1">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                    />
                  </Box>
                  <Box flex="1">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                    />
                  </Box>
                </Flex>
                <Box>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                  />
                </Box>
                <Box>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                  />
                </Box>
                <Button type="submit" colorScheme="blue" width="full">
                  Send Message
                </Button>
              </Stack>
            </form>
          </MotionBox>
        </Grid>
      </Box>

     
      <Box mt={8}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15123.752447415605!2d73.8299189!3d18.6218532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62d20ea1b3838c7a!2sFourvac+Technologies!5e0!3m2!1sen!2sin!4v1457810608071"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          title="Google Map"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactUs;
