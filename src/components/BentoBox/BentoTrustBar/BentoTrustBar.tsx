import gradient from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import ScrollTrustBar from 'components/TrustBar/ScrollTrustBar';

import type { IComponentBentoTrustBarRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface BentoTrustBarProps
  extends BasicProps,
    Omit<
      IComponentBentoTrustBarRecord,
      '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  backgroundIsDark?: boolean;
}

const ComponentBentoTrustBar: FC<BentoTrustBarProps> = ({
  heading,
  topLogos,
  bottomLogos,
  button,
  backgroundIsDark,
}) => (
  <Flex
    width="100%"
    flexDirection="column"
    gap="32px"
    border="1px solid"
    borderColor="gray-700"
    borderRadius="8px"
    justifyContent="space-between"
    paddingAll={32}
    lg={{ paddingAll: 40 }}
    css={`
      background: ${gradient.primary.bentoCard};
    `}
  >
    {heading && (
      <Heading as="h2" textStyle="xs" textColor={backgroundIsDark ? 'common-white' : 'gray-900'} fontWeight="bold">
        {heading}
      </Heading>
    )}
    <Flex width="100%" flexDirection="column">
      {topLogos && (
        <ScrollTrustBar company={topLogos} logoHeight={70} isDark={backgroundIsDark} gradientColor={[16, 16, 20]} />
      )}
      {bottomLogos && (
        <ScrollTrustBar
          company={bottomLogos}
          logoHeight={70}
          isDark={backgroundIsDark}
          gradientColor={[16, 16, 20]}
          speed={30}
        />
      )}
    </Flex>
    {button && (
      <Flex flexDirection="column" width="100%">
        <ComponentButton key={button.id} {...button} marginLeft={0} />
      </Flex>
    )}
  </Flex>
);

export default ComponentBentoTrustBar;
