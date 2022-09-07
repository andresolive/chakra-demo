import { Box, HStack, Icon, Text, StackProps } from '@chakra-ui/react';
import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from '../icons/Icons';
import Feature from './Feature';

export const Features = () => {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='8'>
      <HStack px='12' spacing='5'>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription. Pay once and for all.
        </Feature>
      </HStack>
    </Box>
  );
};
