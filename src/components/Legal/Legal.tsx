import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import { sectionSizing } from 'molecules/Section/Section';

import TableOfContents from 'components/Legal/TableOfContents';

import { getToC } from 'utils/functions';
import richTextParser from 'utils/richTextParser';

import type { ITemplateLegalRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type LegalProps = BasicProps & ITemplateLegalRecord;

const Legal: FC<LegalProps> = ({ body, slug }) => {
  const toC = getToC(body?.value);

  return (
    <Container as="section" backgroundColor="common-black" textColor="common-white">
      <Container {...sectionSizing}>
        <Flex paddingY={64} flexDirection="column" gap="48px" lg={{ flexDirection: 'row', gap: '126px', paddingY: 72 }}>
          <Container lg={{ flex: '0 0 280px' }}>
            <Flex flexDirection="column" gap="48px" position="sticky" top="100px">
              <TableOfContents tableOfContents={toC} slug={slug || ''} />
            </Flex>
          </Container>
          <Flex
            flexDirection="column"
            gap="24px"
            flexGrow={1}
            css={`
              & a {
                color: ${color.primary[400]};
              }
            `}
          >
            {richTextParser(body as any)}
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default Legal;
