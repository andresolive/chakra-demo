import { HStack, Icon, Text, StackProps } from '@chakra-ui/react';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;

  return (
    <HStack {...rest} spacing='24px'>
      <Icon as={icon} boxSize='48px'></Icon>
      <Text fontSize='18px' fontWeight='700'>
        {children}
      </Text>
    </HStack>
  );
};

export default Feature;
