import ActiveCardBg from 'assets/svg/card_bg.svg';

import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';

import type { IComponentQuoteRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface CardProps extends FlexProps, IComponentQuoteRecord {
  backgroundIsDark?: boolean;
  isActive?: boolean;
  hideBorder?: boolean;
  quoteCompany?: IComponentQuoteRecord['company'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TestimonialCard: FC<CardProps> = ({ theme, quote, person, quoteCompany, isActive, ...props }) => {
  const companyLogo = quoteCompany?.companyLogo?.imageDesktop || person?.company?.companyLogo?.imageDesktop;

  return (
    <Flex
      position="relative"
      flexDirection="column"
      gap="20px"
      borderRadius="8px"
      paddingY={32}
      paddingX={24}
      backgroundShorthand={
        isActive
          ? `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.border} border-box`
          : 'gray-900'
      }
      textColor="common-white"
      width="400px"
      md={{ paddingY: 40, paddingX: 32 }}
      css={
        isActive
          ? `
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url(${ActiveCardBg}) no-repeat center top;
      }
    `
          : ''
      }
      {...props}
    >
      {quote && (
        <Paragraph textStyle="lg" textColor="gray-100">
          {quote}
        </Paragraph>
      )}
      {companyLogo?.url && (
        <Container width="100%" height="30px" overflowX="hidden" overflowY="hidden" position="relative">
          <Image
            src={companyLogo.url}
            alt={companyLogo?.alt || ''}
            width={companyLogo.width}
            height={companyLogo.height}
            isFullHeight
            isDark
            css={{
              height: '30px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </Container>
      )}
    </Flex>
  );
};

export default TestimonialCard;
