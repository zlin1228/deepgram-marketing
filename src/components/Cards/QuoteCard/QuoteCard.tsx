import ActiveCardBg from 'assets/svg/card_bg.svg';

import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';

import Avatar from 'components/Quote/Avatar';

import type { IComponentQuoteRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CardProps extends BasicProps, IComponentQuoteRecord {
  backgroundIsDark?: boolean;
  isActive?: boolean;
  quoteText?: IComponentQuoteRecord['quote'];
}

const QuoteCard: FC<CardProps> = ({ quoteText, person, backgroundIsDark, isActive }) => (
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
    border="1px solid"
    borderColor={isActive ? 'common-transparent' : 'gray-800'}
    boxShadow={isActive ? 'greenButton' : 'xxxl'}
    width="384px"
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
  >
    {person?.company?.companyLogo?.imageDesktop?.url && (
      <Container width="100%" height="30px" overflowX="hidden" overflowY="hidden" position="relative">
        <Image
          src={person.company.companyLogo.imageDesktop.url}
          alt={person.company.company || ''}
          width={person.company.companyLogo.imageDesktop.width}
          height={person.company.companyLogo.imageDesktop.height}
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
    {quoteText && (
      <Paragraph textStyle="lg" textColor="gray-100">
        {quoteText}
      </Paragraph>
    )}
    {person && <Avatar {...person} isDark={backgroundIsDark} isSmall />}
  </Flex>
);

export default QuoteCard;
