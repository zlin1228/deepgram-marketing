import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import type { ITemplateLegalRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type LegalProps = BasicProps & ITemplateLegalRecord;

const LegalHero: FC<LegalProps> = ({ title }) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    maxWidth="870px"
    marginX="auto"
    paddingTop={96}
    paddingBottom={48}
  >
    {title && (
      <Heading
        as="h1"
        textStyle="sm"
        sm={{ textStyle: 'md' }}
        lg={{ textStyle: 'lg' }}
        textColor="common-white"
        fontWeight="semiBold"
      >
        {title}
      </Heading>
    )}
  </Flex>
);

export default LegalHero;
