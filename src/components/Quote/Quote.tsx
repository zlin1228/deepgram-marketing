import { ReactComponent as QuoteLeftRed } from 'assets/svg/quote-left-red.svg';
import { ReactComponent as QuoteLeft } from 'assets/svg/quote-left.svg';
import { ReactComponent as QuoteRightRed } from 'assets/svg/quote-right-red.svg';
import { ReactComponent as QuoteRight } from 'assets/svg/quote-right.svg';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import Avatar from 'components/Quote/Avatar';

import type { IComponentQuoteRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, ReactNode } from 'react';

interface QuoteProps
  extends BasicProps,
    Omit<
      IComponentQuoteRecord,
      'quote' | '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt' | 'id'
    > {
  backgroundIsDark?: boolean;
  theme?: 'green' | 'red';
  quote?: string | ReactNode;
  isVertical?: boolean;
  quoteText?: IComponentQuoteRecord['quote'];
}

const Quote: FC<QuoteProps> = ({
  quoteText,
  person,
  callToAction,
  backgroundIsDark,
  theme,
  isVertical = true,
  ...props
}) => (
  <Flex flexDirection="column" gap="32px" maxWidth="1008px" marginX="auto" {...props}>
    <Flex
      textAlign="center"
      flexDirection="column"
      sm={{ flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}
    >
      <Flex
        width="100%"
        height="48px"
        justifyContent="flex-start"
        sm={{ flex: '0 0 42px' }}
        css={{ svg: { width: '42px' } }}
      >
        {theme === 'red' ? <QuoteLeftRed /> : <QuoteLeft />}
      </Flex>
      {quoteText && (
        <Heading as="h3" textStyle="xs" fontWeight="bold" textColor="common-white" sm={{ textStyle: 'sm' }}>
          {quoteText}
        </Heading>
      )}
      <Flex
        justifyContent="flex-end"
        width="100%"
        height="48px"
        sm={{ flex: '0 0 42px' }}
        css={{ svg: { width: '42px' } }}
      >
        {theme === 'red' ? <QuoteRightRed /> : <QuoteRight />}
      </Flex>
    </Flex>
    <Flex flexDirection="column" gap="32px" alignItems="center">
      {person && <Avatar {...person} isDark={backgroundIsDark} isVertical={isVertical} theme={theme} />}
      {callToAction && <ComponentButton {...callToAction} />}
    </Flex>
  </Flex>
);

export default Quote;
