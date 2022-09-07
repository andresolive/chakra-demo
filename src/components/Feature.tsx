import { ElementType } from 'react';
import { HStack, Icon, Text, StackProps } from '@chakra-ui/react';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;

  return (
    <HStack {...rest} spacing='6'>
      <Icon as={icon} boxSize='12'></Icon>
      <Text fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
};

export default Feature;
