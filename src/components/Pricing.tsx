import { Box, Flex, Text, Heading, Button, Stack } from '@chakra-ui/react';
import ListItem from './ListItem';

const Pricing = () => {
  return (
    <Box mx='6'>
      <Box
        maxW='994px'
        margin='auto'
        mt='-40'
        borderRadius='xl'
        overflow='hidden'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
        textAlign='center'
      >
        <Flex direction={['column', 'column', 'row']}>
          <Box
            bg='#F0EAFB'
            p={['28px', '60px', '60px']} /* textAlign='center' */
          >
            <Text fontSize='xl' fontWeight='extrabold'>
              Premium Pro
            </Text>
            <Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt='4'>
              $329
            </Heading>
            <Text color='gray.900' fontSize='lg' fontWeight='medium' mt='2'>
              billed just once
            </Text>
            <Button
              colorScheme='purple'
              size='lg'
              w={['auto', '282px', '282px']}
              mt='6'
            >
              Get Started
            </Button>
          </Box>
          <Box p={['32px', '32px', '60px']} fontSize='lg' bg='white'>
            <Text textAlign='left'>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as='ul' spacing='5' pt='6'>
              <ListItem>International calling and messaging API.</ListItem>
              <ListItem>Additional phone numbers.</ListItem>
              <ListItem>Automated messages via Zapier.</ListItem>
              <ListItem>24/7 support and consulting.</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
