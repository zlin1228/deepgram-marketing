import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import { sectionSizing } from 'molecules/Section/Section';

import richTextParser from 'utils/richTextParser';

import type { ITemplateBuiltWithDeepgramRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type BuiltWithDeepgramProps = BasicProps & ITemplateBuiltWithDeepgramRecord;

const BuiltWithDeepgramDetail: FC<BuiltWithDeepgramProps> = ({ body }) => (
  <Container as="section" id="blog-detail-hero" backgroundColor="common-black" textColor="common-white">
    <Container {...sectionSizing}>
      <Flex
        flexDirection="column"
        gap="24px"
        flexGrow={1}
        maxWidth="800px"
        marginX="auto"
        css={`
          & a {
            color: ${color.primary[400]};
          }
        `}
      >
        {richTextParser(body as any)}
      </Flex>
    </Container>
  </Container>
);

export default BuiltWithDeepgramDetail;
