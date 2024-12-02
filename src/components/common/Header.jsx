import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Link,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Collapse,
  Button,
  HStack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  return (
    <Box bg="White.100" boxShadow="sm" px={{ base: 4, lg: 24 }} py={3}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <RouterLink to="/">
            <Image
              src={logo}
              alt="Logo"
              boxSize={{ base: "80px", lg: "100px" }}
              objectFit="contain"
            />
          </RouterLink>

          {/* Desktop Navigation */}
          <Flex
            align="center"
            gap={{ base: 0, lg: 6 }}
            display={{ base: "none", lg: "flex" }}
          >
            <RouterLink to="/">
              <Link
                fontSize="18px"
                fontWeight="400"
                color={"#5c768d"}
                _hover={{ color: "red" }}
              >
                Home
              </Link>
            </RouterLink>
            <RouterLink to="/aboutus">
              <Link
                fontSize="18px"
                fontWeight="400"
                color={"#5c768d"}
                _hover={{ color: "red" }}
              >
                About Us
              </Link>
            </RouterLink>
            <Menu>
              <MenuButton
                as={Button}
                variant="link"
                color={"#5c768d"}
                fontSize="18px"
                fontWeight="400"
                _hover={{ color: "red" }}
                rightIcon={<ChevronDownIcon />}
              >
                Our Products
              </MenuButton>
              <MenuList>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/hv&uhv"
                >
                  HV AND UHV CHAMBERS
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/cfnfittings"
                >
                  CF FLANGES AND FITTINGS
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/klFnFittings"
                >
                  KF FLANGES AND FITTINGS
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/iso"
                >
                  ISO FLANGES AND FITTINGS
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/hybrid-adaptor"
                >
                  HYBRID ADAPTORS
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/feedthrough"
                >
                  FEEDTHROUGHS
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/valves"
                >
                  VALVES
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/motion"
                >
                  MOTION AND MANIPULATION
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/custmize"
                >
                  CUSTOMIZED PROJECTS
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/linearz"
                >
                  Linear Z-SHIFTS
                </MenuItem>
                <MenuItem
                  _hover={{ color: "red" }}
                  color={"#5c768d"}
                  as={RouterLink}
                  to="/products/erava"
                >
                  E-Rava SYSTEMS
                </MenuItem>
              </MenuList>
            </Menu>
            <RouterLink to="/services">
              <Link
                fontSize="18px"
                fontWeight="400"
                color={"#5c768d"}
                _hover={{ color: "red" }}
              >
                Our Services
              </Link>
            </RouterLink>
            <RouterLink to="/agencies">
              <Link
                fontSize="18px"
                fontWeight="400"
                color={"#5c768d"}
                _hover={{ color: "red" }}
              >
                Agencies
              </Link>
            </RouterLink>
            <RouterLink to="/getquotation">
              <Link
                fontSize="18px"
                fontWeight="400"
                color={"#5c768d"}
                _hover={{ color: "red" }}
              >
                Get Quotation
              </Link>
            </RouterLink>
            <RouterLink to="/contactus">
              <Link
                fontSize="18px"
                fontWeight="400"
                color={"#5c768d"}
                _hover={{ color: "red" }}
              >
                Contact Us
              </Link>
            </RouterLink>
          </Flex>

          {/* Mobile Hamburger Menu */}
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "block", lg: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Container>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align="start" spacing={4} mt={10}>
              {/* Main Links */}
              {[
                { label: "HOME", path: "/" },
                { label: "ABOUT US", path: "/about" },
                { label: "SERVICES", path: "/services" },
                { label: "AGENCIES", path: "/agencies" },
                { label: "GET QUOTATIONS", path: "/getquotation" },
                { label: "CONTACT US", path: "/contactus" },
              ].map((item, index) => (
                <RouterLink to={item.path} onClick={onClose} key={index}>
                  <Link fontSize="lg" _hover={{ color: "blue" }}>
                    {item.label}
                  </Link>
                </RouterLink>
              ))}

              {/* Our Products Dropdown */}
              <Box w="full">
                <Button
                  onClick={toggleProducts}
                  variant="link"
                  fontSize="lg"
                  color="white"
                  rightIcon={
                    isProductsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />
                  }
                  _hover={{ color: "blue" }}
                >
                  OUR PRODUCTS
                </Button>
                <Collapse in={isProductsOpen} animateOpacity>
                  <VStack align="start" pl={4} spacing={2} mt={2}>
                    {[
                      {
                        label: "HV AND UHV CHAMBERS",
                        path: "/products/hv&uhv",
                      },
                      {
                        label: "CF FLANGES AND FITTINGS",
                        path: "/products/cfnfittings",
                      },
                      {
                        label: "KF FLANGES AND FITTINGS",
                        path: "/products/klFnFittings",
                      },
                      {
                        label: "ISO FLANGES AND FITTINGS",
                        path: "/products/iso",
                      },
                      {
                        label: "HYBRID ADAPTORS",
                        path: "/products/hybrid-adaptor",
                      },
                      { label: "FEEDTHROUGHS", path: "/products/feedthrough" },
                      { label: "VALVES", path: "/products/valves" },
                      {
                        label: "MOTION AND MANIPULATION",
                        path: "/products/motion",
                      },
                      {
                        label: "CUSTOMIZED PROJECTS",
                        path: "/products/custmize",
                      },
                      { label: "LINEAR Z-SHIFTS", path: "/products/linearz" },
                      { label: "E-RAVA SYSTEMS", path: "/products/erava" },
                    ].map((product, index) => (
                      <RouterLink
                        to={product.path}
                        key={index}
                        onClick={onClose}
                      >
                        <Link fontSize="md" _hover={{ color: "blue" }}>
                          {product.label}
                        </Link>
                      </RouterLink>
                    ))}
                  </VStack>
                </Collapse>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
