import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import GridTrustBar from 'components/TrustBar/GridTrustBar';
import MultiGrid from 'components/TrustBar/MultiGrid';
import ScrollTrustBar from 'components/TrustBar/ScrollTrustBar';

import type { IComponentTrustBarRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { TextStyles } from 'quarks/styleProps/heading';
import type { FC } from 'react';

interface TrustBarProps extends BasicProps, IComponentTrustBarRecord {
  isDark?: boolean;
}

const TrustBar: FC<TrustBarProps> = props => {
  const {
    company,
    isDark,
    heading,
    desktopHeadingSize,
    mobileHeadingSize,
    tabletHeadingSize,
    multiTrustbar,
    logoHeight,
    callToAction,
    isMarquee,
    ...flexProps
  } = props;

  if (multiTrustbar && multiTrustbar.length > 0) {
    return <MultiGrid {...props} />;
  }

  return (
    <Flex className="trustbar" flexDirection="column" gap={isMarquee ? '24px' : '56px'} width="100%" {...flexProps}>
      {heading && (
        <Flex
          gap="24px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          md={{ flexDirection: 'row' }}
        >
          <Heading
            as="h6"
            textStyle={(mobileHeadingSize as TextStyles) || 'xs'}
            sm={{ textStyle: (tabletHeadingSize as TextStyles) || 'xs' }}
            lg={{ textStyle: (desktopHeadingSize as TextStyles) || 'xs' }}
            textColor="common-white"
          >
            {heading}
          </Heading>
          {callToAction && <ComponentButton {...callToAction} />}
        </Flex>
      )}
      <Flex flexDirection="column" gap="66px" alignItems="center">
        {!isMarquee && <GridTrustBar company={company} logoHeight={logoHeight} isDark={isDark} />}
        {isMarquee && <ScrollTrustBar company={company} logoHeight={logoHeight} isDark={isDark} />}
      </Flex>
    </Flex>
  );
};

export default TrustBar;
