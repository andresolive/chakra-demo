import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box pb='28' as='section'>
      <Box
        color='gray.50'
        bg='purple.600'
        pt='50px'
        pb='190px'
        px='8'
        textAlign='center'
      >
        <Heading fontWeight='extrabold' fontSize='5xl'>
          Simple pricing for your business
        </Heading>
        <Text fontWeight='medium' fontSize='2xl' pt='4'>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};
export default Header;
