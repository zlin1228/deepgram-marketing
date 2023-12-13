import Container from 'quarks/Container';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface HamburgerProps extends BasicProps {
  isOpen: boolean;
  isDark?: boolean;
  onClick: () => void;
}

const line = {
  display: 'block',
  position: 'absolute',
  height: '2px',
  width: '100%',
  opacity: '1',
  left: '0',
  transition: '.25s ease-in-out',
} as const;

const Hamburger: FC<HamburgerProps> = ({ isOpen, ...props }) => (
  <Container width="16.5px" height="13px" position="relative" {...props}>
    <Text
      {...line}
      backgroundColor="common-white"
      top={isOpen ? '6px' : '0'}
      transform={isOpen ? 'rotate(135deg)' : 'rotate(0)'}
    />
    <Text
      {...line}
      backgroundColor="common-white"
      top="6px"
      left={isOpen ? '-20px' : '0'}
      opacity={isOpen ? '0' : '1'}
    />
    <Text
      {...line}
      backgroundColor="common-white"
      top={isOpen ? '6px' : '12px'}
      transform={isOpen ? 'rotate(-135deg)' : 'rotate(0)'}
    />
  </Container>
);

export default Hamburger;
