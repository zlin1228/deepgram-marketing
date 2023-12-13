import dynamic from 'next/dynamic';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import type { IComponentCardDeckRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CardDeckProps extends BasicProps, IComponentCardDeckRecord {
  backgroundIsDark?: boolean;
}

const IconCard = dynamic(() => import('components/Cards/IconCard/IconCard'));

const IconCardDeck: FC<CardDeckProps> = ({ optionalHeading, card }) => (
  <Container>
    {optionalHeading && (
      <Heading
        as="h3"
        textStyle="xs"
        textColor="common-white"
        paddingBottom={16}
        borderBottom="2px solid"
        borderColor="gray-700"
        marginBottom={32}
        sm={{ textStyle: 'sm' }}
      >
        {optionalHeading.heading}
      </Heading>
    )}
    <Flex flexDirection="column" gap="16px">
      {card?.map(item => item.__typename === 'ComponentCardRecord' && <IconCard key={item?.id} {...item} />)}
    </Flex>
  </Container>
);

export default IconCardDeck;
