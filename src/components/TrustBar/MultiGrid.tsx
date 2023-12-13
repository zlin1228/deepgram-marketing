import { useEffect, useState } from 'react';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import GridTrustBar from 'components/TrustBar/GridTrustBar';

import anchorLinks, { anchorLength } from 'utils/anchorLinks';

import type { IComponentTrustBarRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { TextStyles } from 'quarks/styleProps/heading';
import type { FC } from 'react';

interface MultiGridProps extends BasicProps, IComponentTrustBarRecord {
  isDark?: boolean;
}

const MultiGrid: FC<MultiGridProps> = ({
  heading,
  desktopHeadingSize,
  mobileHeadingSize,
  tabletHeadingSize,
  multiTrustbar,
  logoHeight,
  callToAction,
  isDark,
}) => {
  const [active, setActive] = useState(0);
  const length = anchorLength(heading || '') || 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (length > 0) {
        setActive(active < length - 1 ? active + 1 : 0);
      } else {
        setActive(active < multiTrustbar.length - 1 ? active + 1 : 0);
      }
    }, 4950);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <Flex
      width="100%"
      flexDirection="column"
      gap="32px"
      alignItems="center"
      paddingY={44}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="gray-700"
    >
      {heading && (
        <Flex gap="24px" flexDirection="column" alignItems="center" md={{ flexDirection: 'row' }}>
          <Heading
            as="h6"
            textStyle={(mobileHeadingSize as TextStyles) || 'xs'}
            sm={{ textStyle: (tabletHeadingSize as TextStyles) || 'xs' }}
            lg={{ textStyle: (desktopHeadingSize as TextStyles) || 'xs' }}
            textColor="common-white"
          >
            {anchorLinks(heading || '', active, setActive)}
          </Heading>
          {callToAction && <ComponentButton {...callToAction} />}
        </Flex>
      )}
      {multiTrustbar && (
        <Flex width="100%" flexDirection="column" data-active={active}>
          {multiTrustbar.map((multiple, idx) => (
            <Flex
              key={multiple?.id}
              width="100%"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              gap="16px 48px"
              overflowX="hidden"
              overflowY="hidden"
              height={active === idx ? 'fit-content' : '0'}
              opacity={active === idx ? 1 : 0}
              transition="700ms ease-in-out 0s"
              md={{ justifyContent: 'flex-start' }}
            >
              <GridTrustBar company={multiple.company} logoHeight={logoHeight} isDark={isDark} />
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default MultiGrid;
