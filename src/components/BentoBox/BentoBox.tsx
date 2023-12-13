import Flex from 'quarks/Flex';

import SplitContent from 'components/BentoBox/BentoSplit/BentoSplit';
import StackedImage from 'components/BentoBox/BentoStacked/BentoStacked';
import TrustBar from 'components/BentoBox/BentoTrustBar/BentoTrustBar';

import type { IComponentBentoBoxRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface BentoBoxProps
  extends BasicProps,
    Omit<
      IComponentBentoBoxRecord,
      '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  backgroundIsDark?: boolean;
}

const ComponentBentoBox: FC<BentoBoxProps> = ({ cards, backgroundIsDark }) => (
  <Flex flexDirection="column" gap="32px" flexWrap="wrap" lg={{ flexDirection: 'row' }}>
    {cards?.map(card => {
      if (card?.__typename === 'ComponentBentoStackedImageRecord') {
        return (
          <Flex key={card?.id} width="100%" maxWidth="100%" lg={{ maxWidth: 'calc((100% - 64px) / 3 * 2 + 32px)' }}>
            <StackedImage {...card} backgroundIsDark={backgroundIsDark} />
          </Flex>
        );
      }

      if (card?.__typename === 'ComponentBentoSplitContentRecord') {
        return (
          <Flex key={card?.id} width="100%" maxWidth="100%" lg={{ maxWidth: 'calc((100% - 64px) / 3 * 2 + 32px)' }}>
            <SplitContent {...card} backgroundIsDark={backgroundIsDark} />
          </Flex>
        );
      }

      if (card?.__typename === 'ComponentBentoTrustBarRecord') {
        return (
          <Flex key={card?.id} width="100%" maxWidth="100%" lg={{ maxWidth: 'calc((100% - 64px) / 3)' }}>
            <TrustBar {...card} backgroundIsDark={backgroundIsDark} />
          </Flex>
        );
      }

      return null;
    })}
  </Flex>
);

export default ComponentBentoBox;
