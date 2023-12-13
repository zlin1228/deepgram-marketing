import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import { sectionSizing } from 'molecules/Section/Section';

import richTextParser from 'utils/richTextParser';

import type { ITemplateChangelogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type ChangelogProps = BasicProps & ITemplateChangelogRecord;

const Changelog: FC<ChangelogProps> = ({ body }) => (
  <Container as="section" backgroundColor="common-black" textColor="common-white">
    <Container {...sectionSizing}>
      <Flex paddingY={32} flexDirection="column" gap="32px">
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

export default Changelog;
