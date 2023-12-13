import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import { media } from 'atoms/breakpoints/breakpoints';
import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';

import ComponentFeatureList from 'components/FeatureList/FeatureList';
import ComponentHeading from 'components/Heading/Heading';
import SlideboxItem from 'components/Slidebox/SlideboxItem';

import type { IComponentFeatureListRecord, IComponentSlideboxRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface SlideboxProps
  extends FlexProps,
    Omit<
      IComponentSlideboxRecord,
      'id' | '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  backgroundIsDark: boolean;
}

const Slidebox: FC<SlideboxProps> = ({ optionalHeading, items, backgroundIsDark, ...props }) => {
  const [active, setActive] = useState(0);

  const borderColor = [gradient.primary.red, gradient.primary.blueGreen, gradient.primary.purple];

  const sx = {
    fontSize: '18px',
    '&&.Mui-selected': {
      color: color.common.white,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '112px',
        height: '28px',
        left: '20px',
        bottom: '-38px',
        filter: 'blur(20px)',
        background: borderColor[active],
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '112px',
        height: '28px',
        right: '20px',
        bottom: '-38px',
        filter: 'blur(20px)',
        background: borderColor[active],
      },
    },
  };

  const tabSx = {
    minHeight: 'auto',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '1px',
      backgroundColor: color.gray[800],
    },
    '&& .MuiButtonBase-root': {
      color: color.common.white,
      minHeight: 'auto',
      padding: '16px 24px',
      textTransform: 'inherit',
    },
    '&& .MuiTabs-scroller': {
      width: '100%',
    },
    '&& .MuiTabs-flexContainer': {
      height: '100%',
      [media.sm]: {
        justifyContent: 'center',
      },
    },
    '&& .MuiTabs-indicator': {
      background: borderColor[active],
      height: '1px',
      transition: 'unset',
    },
  };

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setActive(newValue);
  };

  return (
    <Flex flexDirection="column" gap="32px" sm={{ gap: '40px' }} {...props}>
      {optionalHeading && (
        <Flex width="100%" maxWidth="100%">
          <ComponentHeading backgroundIsDark={backgroundIsDark} {...optionalHeading} />
        </Flex>
      )}
      {items && (
        <Flex flexDirection="column" width="100%" gap="40px">
          <Tabs
            value={active}
            onChange={handleChange}
            centered
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={tabSx}
          >
            {items.map(tabItem => {
              const label =
                (tabItem.__typename === 'ComponentSlideboxItemRecord' && tabItem?.heading) ||
                (tabItem.__typename === 'ComponentFeatureListRecord' && tabItem?.optionalHeading?.heading);

              return <Tab key={`${tabItem?.id} - tab`} disableRipple label={label} tabIndex={0} sx={sx} />;
            })}
          </Tabs>
          <Flex flexDirection="column" paddingTop={32} gap="32px">
            {items &&
              items.map((tabItem, idx) =>
                tabItem.__typename === 'ComponentSlideboxItemRecord' ? (
                  <SlideboxItem
                    key={tabItem.id}
                    isActive={idx === active}
                    backgroundIsDark={backgroundIsDark}
                    {...tabItem}
                  />
                ) : (
                  <ComponentFeatureList
                    key={tabItem.id}
                    isActive={idx === active}
                    isSubComponent
                    {...(tabItem as IComponentFeatureListRecord)}
                  />
                ),
              )}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Slidebox;
