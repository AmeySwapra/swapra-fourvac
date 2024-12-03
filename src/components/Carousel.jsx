import React from 'react';
import { Box, Text, Button, IconButton, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/slides/slide1.jpg';
import slide4 from '../assets/slides/slide4.jpg';
import slide5 from '../assets/slides/slide5.jpg';
import slide6 from '../assets/slides/slide6.jpg';
import slide8 from '../assets/slides/slide-8.jpg';
import slide7 from '../assets/slides/slide7.jpg';
import slide9 from '../assets/slides/slide9.jpg';
import slide10 from '../assets/slides/slide10.jpg';

const Carousel = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const slides = [
      { id: 1, img: slide1, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 2, img: slide4, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 3, img: slide5, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 4, img: slide6, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 5, img: slide6, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 6, img: slide7, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 7, img: slide8, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 8, img: slide9, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 9, img: slide10, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },
    { id: 10, img: slide6, title: 'FOURVAC TECHNOLOGIES!', desc: 'Fourvac caters to the needs of the scientific community and industries, both in India and abroad, by manufacturing custom-built products required for research and development.' },

  ];

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton
      aria-label="Previous Slide"
      icon={<ChevronLeftIcon />}
      position="absolute"
      top="50%"
      left="10px"
      transform="translateY(-50%)"
      zIndex={2}
      onClick={onClick}
      bg="white"
      borderRadius="full"
      _hover={{ bg: 'gray.200' }}
    />
  );

  const CustomNextArrow = ({ onClick }) => (
    <IconButton
      aria-label="Next Slide"
      icon={<ChevronRightIcon />}
      position="absolute"
      top="50%"
      right="10px"
      transform="translateY(-50%)"
      zIndex={2}
      onClick={onClick}
      bg="white"
      borderRadius="full"
      _hover={{ bg: 'gray.200' }}
    />
  );

  const settings = {
    dots: !isMobile,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: !isMobile,
    prevArrow: !isMobile ? <CustomPrevArrow /> : null,
    nextArrow: !isMobile ? <CustomNextArrow /> : null,
  };

  return (
    <Box
  position="relative"
  overflow="hidden" // Ensure no horizontal overflow
  width="100%" // Change from 100vw to 100%
  height={{ base: '400px', md: '700px' }}
>
  <Slider {...settings}>
    {slides.map((slide) => (
      <Box
        key={slide.id}
        bgImage={`url(${slide.img})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        height={{ base: '400px', md: '700px' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          textAlign={{ base: 'center', md: 'start' }}
          color="white"
          py={{ base: '20px', md: '100px' }}
          px={{ base: '20px', md: '150px' }}
          bg="rgba(0, 0, 0, 0.5)"
          borderRadius="md"
          width={{ base: '100%', md: '100%' }}
        >
          <Text fontSize={{ base: '24px', md: '50px' }} fontWeight="bold" mb={5}>
            Welcome to <span style={{ color: 'white' }}>{slide.title}</span>
          </Text>
          <Text mb={10} fontSize={{ base: '16px', md: '20px' }}>
            {slide.desc}
          </Text>
          <Button
            bg="#1ba2fa"
            color="white"
            size={{ base: 'sm', md: 'lg' }}
            _hover={{ bg: '#0075c1' }}
            onClick={() => alert('Read More clicked')}
          >
            Read More
          </Button>
        </Box>
      </Box>
    ))}
  </Slider>
</Box>

  );
};

export default Carousel;
