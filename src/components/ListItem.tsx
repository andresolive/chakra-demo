import { Box, Flex, HStack, Icon, Text, StackProps } from '@chakra-ui/react';
import { CheckIcon } from '../icons/Icons';

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <HStack as='li' spacing='5' {...rest} align='flex-start'>
      <Flex>
        <Icon as={CheckIcon} w='22px' h='22px' />
      </Flex>
      <Text textAlign='left'>{children}</Text>
    </HStack>
  );
};

export default ListItem;
