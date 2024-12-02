import React, { useState, useEffect } from "react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { BsChevronUp } from 'react-icons/bs';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <IconButton
        onClick={scrollToTop}
        aria-label="Scroll to top"
        icon={<BsChevronUp fontSize='15px' fontStyle='bold' fontWeight='400'/>}
        position="fixed"
        bottom="10px"
        right="10px"
        bg={useColorModeValue("#428bca")}
        color="white"
        _hover={{ bg: useColorModeValue("teal.600", "teal.400") }}
        size="md"
        zIndex="1000"
      />
    )
  );
};

export default ScrollToTop;
