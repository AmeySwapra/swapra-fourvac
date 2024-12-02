import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import bannerImg from '../../assets/bannerImage.jpg';

const MotionText = motion(Text);

const Banner = ({ text }) => {
  return (
    <Box position="relative" width="100%" height="200px">
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${bannerImg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex="-1"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.4)"
        zIndex="-1"
      />
      <MotionText
        position="absolute"
        left="105px"
        top="25px"
        color="white"
        fontSize="40px"
        fontWeight="bold"
        zIndex="1"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {text}
      </MotionText>
    </Box>
  );
};

export default Banner;
