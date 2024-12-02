import { Box, Container, Stack, Text, Link, SimpleGrid, Icon, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';
import { BsChevronRight } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box bg="#5c768d" color="white" px={{ base: 4, lg: 24 }} py={10}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {/* Footer Info */}
          <Box>
            <Text fontSize="24px" lineHeight='25px' fontWeight="bold">FOURVAC TECHNOLOGIES</Text>
            <Text mt={4}>
              Priyadarshni Industrial Premises, <br />
              T - 165/03/08, MIDC Bhosari<br />
              Pune 411 026<br /><br />
              <strong>Phone:</strong> +91 (20) 27122660<br />
              <strong>Email:</strong> admin@fourvac.com
            </Text>
          </Box>

          {/* Useful Links */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">Useful Links</Text>
            <Stack mt={4} spacing={4}>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/">Home</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/about">About us</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/services">Services</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/agencies">Agencies</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4' />
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/getquotation">Get Quotation</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink}  _hover={{color : '#82c5f4'}} to="/contactus" target="_blank">Contact Us</Link>
              </Stack>
            </Stack>
          </Box>

          <Box>
      <Text fontSize="lg" fontWeight="bold">Our Products</Text>
      <Stack mt={4} spacing={4}>
        <Stack direction="row" align="center" fontSize='15px'>
          <BsChevronRight fontSize="12px" color='#82c5f4'/> 
          <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/hv&uhv">Hv And Uhv Chambers</Link>
        </Stack>
        <Stack direction="row" align="center" fontSize='15px'>
          <BsChevronRight fontSize="12px" color='#82c5f4'/> 
          <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/cfnfittings">Cf Flanges And Fittings</Link>
        </Stack>
        <Stack direction="row" align="center" fontSize='15px'>
          <BsChevronRight fontSize="12px" color='#82c5f4'/> 
          <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/klFnFittings">Kf Flanges And Fittings</Link>
        </Stack>
        <Stack direction="row" align="center" fontSize='15px'>
          <BsChevronRight fontSize="12px" color='#82c5f4'/> 
          <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/iso">Iso Flanges And Fittings</Link>
        </Stack>
        <Stack direction="row" align="center" fontSize='15px'>
          <BsChevronRight fontSize="12px" color='#82c5f4'/> 
          <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/hybrid-adaptor">Hybrid Adaptors</Link>
        </Stack>
      </Stack>
    </Box>

         
          <Box>
            <Text fontSize="lg" fontWeight="bold">Our Products</Text>
            <Stack mt={4} spacing={4}>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/feedthrough">FEEDTHROUGHS</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/valves">Valves</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/motion">Motion AND Manipution</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
                <BsChevronRight fontSize="12px" color='#82c5f4'/>
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/custmize">Customized Projects</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px' _hover={{color : '#82c5f4'}}>
                <BsChevronRight fontSize="12px" color='#82c5f4' />
                <Link as={RouterLink} _hover={{color : '#82c5f4'}} to="/products/linearz">Linear Z-Shift</Link>
              </Stack>
              <Stack direction="row" align="center" fontSize='15px'>
               <BsChevronRight fontSize="12px"  color='#82c5f4'/>
                <Link as={RouterLink} to="/products/erava" _hover={{color : '#82c5f4'}}  textDecoration="none">E-Rava Systems</Link>
              </Stack>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Social Links at the bottom */}
        <Box mt={10}>
          <Text fontSize="md" fontWeight="bold">Our Social</Text>
          <Stack direction="row" mt={4} spacing={2} justify="start">
            <Box w={'36px'} h={'36px'} borderRadius='50%' _hover={{backgroundColor :'#007bff', transition: '0.4s'}} backgroundColor='#768fa6' display='flex' justifyContent='center' alignItems='center'>
            <Link href="#" isExternal  ><Icon as={FaTwitter} /></Link>
            </Box>
            <Box w={'36px'} h={'36px'} borderRadius='50%' _hover={{backgroundColor :'#007bff', transition: '0.4s'}} backgroundColor='#768fa6' display='flex' justifyContent='center' alignItems='center'>
            <Link href="#" isExternal  ><Icon as={FaFacebookF} /></Link>
            </Box>
            <Box w={'36px'} h={'36px'} borderRadius='50%' _hover={{backgroundColor :'#007bff', transition: '0.4s'}} backgroundColor='#768fa6' display='flex' justifyContent='center' alignItems='center'>
            <Link href="#" isExternal  ><Icon as={FaInstagram} /></Link>
            </Box>
            <Box w={'36px'} h={'36px'} borderRadius='50%' _hover={{backgroundColor :'#007bff', transition: '0.4s'}} backgroundColor='#768fa6' display='flex' justifyContent='center' alignItems='center'>
            <Link href="#" isExternal  ><Icon as={FaSkype} /></Link>
            </Box>
            <Box w={'36px'} h={'36px'} borderRadius='50%' _hover={{backgroundColor :'#007bff', transition: '0.4s'}} backgroundColor='#768fa6' display='flex' justifyContent='center' alignItems='center'>
            <Link href="#" isExternal  ><Icon as={FaLinkedin} /></Link>
            </Box>
          </Stack>
        </Box>
        <Divider mt={4} color={'#007bff'}/>
        <Box mt={10} textAlign="center" fontSize="sm">
          <Text>© Copyright 2020 <strong>Fourvac Technologies</strong>. All Rights Reserved</Text>
          <Text mt={2}>
            Designed by <Link href="#" color="teal.400">SwaPra Technologies</Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;








