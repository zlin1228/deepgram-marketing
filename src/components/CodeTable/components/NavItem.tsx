import React from 'react';

import Icon from 'atoms/Icons/Icon';

import Button from 'molecules/Button/Button';

import languageMap from 'components/CodeTable/utils/languageMap';

import type { FC } from 'react';

interface NavItemProps {
  item: any;
  idx: number;
  active: number;
  setActive: (idx: number) => void;
}

const NavItem: FC<NavItemProps> = ({ item, active, setActive, idx }) => (
  <Button
    onClick={() => setActive(idx)}
    display="flex"
    textColor="common-white"
    fontSize="textSm"
    lineHeight="textSm"
    backgroundColor={active === idx ? 'gray-900' : 'gray-800'}
    paddingY={12}
    paddingX={10}
    borderRadius="0px"
    width="100%"
    minWidth="max-content"
    lg={{
      width: 'unset',
    }}
    startIcon={<Icon iconName={languageMap[item] ? languageMap[item]?.icon : languageMap['curl']?.icon} size={16} />}
    css={`
      &:focus {
        outline: none;
        svg {
          filter: unset;
        }
      }
      &::before {
        padding: 0px;
      }
      svg {
        filter: ${active === idx ? 'unset' : 'grayscale(100%)'};
      }
      .MuiButton-startIcon {
        margin-left: 0px;
      }
    `}
  >
    {languageMap[item]?.name || 'curl'}
  </Button>
);

export default NavItem;
