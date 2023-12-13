import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import JavascriptIcon from 'assets/svg/javascript-casper.svg';
import DotnetIcon from 'assets/svg/net-casper.svg';
import PythonIcon from 'assets/svg/python-casper.svg';

import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';

import richTextParser from 'utils/richTextParser';

import type { IComponentSlideboxRecord } from 'lib/types';
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

const SwitchbackSlidebox: FC<SlideboxProps> = ({ items, ...props }) => {
  const [active, setActive] = useState(0);

  const sx = {
    fontSize: '18px',
    '&&.Mui-selected': {
      color: color.primary[600],
      filter: 'brightness(0)invert(1)',
    },
  };

  const tabSx = {
    minHeight: 'auto',
    overflow: 'visible',
    position: 'relative',
    '&& .MuiButtonBase-root': {
      color: color.common.white,
      minHeight: 'auto',
      padding: '16px 24px',
      textTransform: 'inherit',
    },
  };

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setActive(newValue);
  };

  return (
    <Flex flexDirection="column" width="100%" {...props}>
      {items && (
        <Flex flexDirection="column" width="100%" gap="10px">
          <Tabs value={active} onChange={handleChange} sx={tabSx} TabIndicatorProps={{ style: { display: 'none' } }}>
            {items.map(tabItem => {
              const label = (tabItem.__typename === 'ComponentSlideboxItemRecord' && tabItem?.heading) || 'Python';
              const tabIcon =
                (label === 'Python' && <Image src={PythonIcon} width={36} height={36} alt="Python" />) ||
                (label === 'Javascript' && <Image src={JavascriptIcon} width={36} height={36} alt="Javascript" />) ||
                (label === 'DotNet' && <Image src={DotnetIcon} width={36} height={36} alt=".Net" />);

              return <Tab key={`${tabItem?.id} - tab`} disableRipple label={tabIcon} tabIndex={0} sx={sx} />;
            })}
          </Tabs>
          <Flex flexDirection="column">
            {items &&
              items.map(
                (tabItem, idx) =>
                  tabItem.__typename === 'ComponentSlideboxItemRecord' && (
                    <Flex key={tabItem.id} display={idx === active ? 'flex' : 'none'} flexDirection="column" gap="16px">
                      {tabItem?.payload && richTextParser(tabItem.payload)}
                      {tabItem.response && richTextParser(tabItem.response)}
                    </Flex>
                  ),
              )}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default SwitchbackSlidebox;
