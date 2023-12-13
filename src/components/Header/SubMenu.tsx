import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { IMenuItemRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

export interface SubMenuProps extends BasicProps {
  menu?: IMenuItemRecord;
  column?: number;
}

const SubMenu: FC<SubMenuProps> = ({ menu, column, lg, md, ...props }) => (
  <Flex
    flexDirection="column"
    gap="20px"
    paddingY={column === 0 ? 0 : 32}
    paddingX={24}
    backgroundColor={column === 1 ? 'gray-900' : 'common-black'}
    textColor="common-white"
    textAlign="left"
    md={{ ...md, paddingX: column === 0 ? 16 : 24 }}
    lg={{
      paddingY: 32,
      paddingX: 24,
      gap: '24px',
      ...lg,
    }}
    {...props}
  >
    {menu?.heading && (
      <Text textStyle="lg" fontWeight="semiBold" display="none" height="28px" lg={{ display: 'block' }}>
        {menu?.heading || ' '}
      </Text>
    )}
    <Flex
      flexDirection="column"
      sm={{ flexDirection: 'row' }}
      flexWrap="wrap"
      rowGap={column === 0 ? '16px' : '24px'}
      columnGap="32px"
      maxWidth="832px"
    >
      {menu?.menuItem &&
        menu?.menuItem.map(menuItem => (
          <Flex
            key={menuItem?.id || ''}
            width="100%"
            gap="16px"
            position="relative"
            flexGrow={1}
            flexBasis={0}
            textColor="common-white"
            hover={{
              textColor: 'primary-300',
            }}
            sm={{
              flex: '0 0 calc(50% - 16px)',
            }}
            lg={{
              flex: menu?.menuItem.length > 4 && column === 0 ? '0 0 calc(50% - 16px)' : '0 0 100%',
              width: 'fit-content',
            }}
            css={`
              & a {
                color: ${color.common.white};
              }
              &:hover {
                a {
                  color: ${color.primary[300]};
                }
                img {
                  filter: invert(16%) sepia(32%) saturate(1290%) hue-rotate(86deg) brightness(100%) contrast(88%);
                }
              }
            `}
          >
            {menuItem?.iconFile?.url ? (
              <Image src={menuItem.iconFile.url} alt="" width={24} height={24} />
            ) : (
              menuItem?.icon && <Icon iconName={menuItem.icon} size={24} />
            )}
            <Link href={menuItem?.url || ''} textDecoration="none">
              <Flex flexDirection="column" gap="4px" position="relative" zIndex={1} maxWidth="432px">
                <Text fontSize="textMd" fontWeight="semiBold" textAlign="left">
                  {menuItem?.heading}
                </Text>
                {menuItem?.subhead && (
                  <Text fontSize="textSm" textColor="gray-200" textAlign="left">
                    {menuItem.subhead}
                  </Text>
                )}
              </Flex>
            </Link>
          </Flex>
        ))}
    </Flex>
  </Flex>
);

export default SubMenu;
