import Flex from 'quarks/Flex';

import PricingCard from 'components/Cards/PricingCard/PricingCard';

import type { IComponentPricingCardDeckRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface CardDeckProps extends FlexProps, IComponentPricingCardDeckRecord {
  backgroundIsDark: boolean;
}

const PricingCardDeck: FC<CardDeckProps> = ({ cards, backgroundIsDark }) => (
  <Flex flexDirection="column" gap="40px" sm={{ gap: '56px' }} lg={{ gap: '64px' }}>
    {cards && cards.length > 0 && (
      <Flex
        height="100%"
        width="100%"
        flexDirection="column"
        alignItems="stretch"
        gap="24px"
        sm={{ gap: '40px' }}
        lg={{ flexDirection: 'row', gap: '30px' }}
      >
        {cards.map(item => (
          <PricingCard key={item?.id} {...item} backgroundIsDark={backgroundIsDark} />
        ))}
      </Flex>
    )}
  </Flex>
);

export default PricingCardDeck;
