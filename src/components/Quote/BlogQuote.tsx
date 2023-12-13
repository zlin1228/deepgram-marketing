import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Paragraph from 'quarks/Paragraph';

import type { IComponentQuoteRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, ReactNode } from 'react';

interface QuoteProps
  extends BasicProps,
    Omit<
      IComponentQuoteRecord,
      'quote' | '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt' | 'id'
    > {
  quote?: string | ReactNode;
}

const BlogQuote: FC<QuoteProps> = ({ quote, person }) => (
  <Container paddingLeft={20}>
    <Flex
      flexDirection="column"
      gap="16px"
      width="100%"
      borderLeft="2px solid"
      borderColor="primary-400"
      paddingLeft={12}
    >
      {quote && (
        <Container fontSize="textLg" lineHeight="textLg" textColor="common-white">
          {quote}
        </Container>
      )}
      {person && (
        <Flex gap="4px" alignItems="center">
          {person?.name && (
            <Paragraph textColor="common-white" textStyle="lg" fontWeight="bold">
              {person?.name}
            </Paragraph>
          )}
          {person?.role && (
            <Paragraph textStyle="md" fontWeight="regular" textColor="gray-200">
              {person?.role}
            </Paragraph>
          )}
        </Flex>
      )}
    </Flex>
  </Container>
);

export default BlogQuote;
