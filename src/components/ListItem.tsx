import { HStack, Icon, Text, StackProps } from '@chakra-ui/react';
import { CheckIcon } from '../icons/Icons';

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <HStack as='li' spacing='20px' {...rest}>
      <Icon as={CheckIcon} w='22px' h='22px' />
      <Text>{children}</Text>
    </HStack>
  );
};

export default ListItem;
