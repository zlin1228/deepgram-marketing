import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

const ScheduleDemoForm: FC<FlexProps> = props => (
  <Flex
    width="100%"
    flexDirection="column"
    gap="24px"
    paddingY={32}
    paddingX={24}
    borderRadius="12px"
    border="3px solid"
    borderColor="common-transparent"
    backgroundShorthand={`linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box,
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 150%) border-box,
        ${gradient.primary.conversion} border-box
      `}
    {...props}
  >
    <Text fontSize="displayXs" lineHeight="displayXs" fontWeight="bold">
      Get Started with Deepgram AI Today
    </Text>
    <ComponentButton label="Schedule a demo" link="/contact-us" buttonType="fill" color="success" />
  </Flex>
);

export default ScheduleDemoForm;
