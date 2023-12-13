import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useWindowSize } from 'react-use';

import { media } from 'atoms/breakpoints/breakpoints';
import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import SubMenu from 'components/Header/SubMenu';

import type { IMenuItemRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface MenuItemProps extends BasicProps {
  menu?: IMenuItemRecord;
  isOpen?: boolean;
  isDark?: boolean;
  isLast?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ menu, isOpen, isDark, isLast, ...props }) => {
  const subMenuRef = useRef<HTMLDivElement>(null);
  const [subMenuHeight, setSubmenuHeight] = useState<number>(0);
  const { width } = useWindowSize();

  useEffect(() => {
    if (subMenuRef.current) {
      const rect = (subMenuRef.current as HTMLDivElement).getBoundingClientRect();
      setSubmenuHeight(rect.height);
    }
  }, [width]);

  return (
    <Container
      as="li"
      height="fit-content"
      lineHeight="textMd"
      width="100%"
      {...props}
      md={{ paddingLeft: 8 }}
      lg={{
        height: '100%',
        borderBottom: 'none',
        width: 'auto',
        backgroundColor: 'common-transparent',
        paddingLeft: 0,
      }}
    >
      <Flex
        alignItems="center"
        width="100%"
        backgroundColor="common-black"
        textColor="common-white"
        lg={{
          height: '100%',
          paddingY: 0,
          width: 'auto',
          backgroundColor: 'common-transparent',
          textColor: isOpen ? 'primary-500' : 'common-black',
        }}
        xl={{ paddingY: 4 }}
      >
        <Flex
          position="relative"
          justifyContent="space-between"
          gap="12px"
          height="fit-content"
          alignItems="center"
          width="100%"
          borderRadius="5px"
          lg={{
            paddingY: 12,
            width: 'auto',
          }}
        >
          {menu?.url && menu.url !== '' ? (
            <Link
              href={menu?.url || ''}
              fontSize="textXl"
              fontWeight="bold"
              display="block"
              cursor="pointer"
              width="100%"
              paddingX={24}
              paddingTop={16}
              paddingBottom={20}
              textTransform="none"
              textAlign="left"
              transition="color 200ms ease-in-out"
              textDecoration="none"
              textColor="common-white"
              md={{ width: 'fit-content' }}
              lg={{ paddingAll: 0, fontSize: 'textMd' }}
            >
              {menu?.heading}
            </Link>
          ) : (
            <Text
              fontSize="textXl"
              fontWeight="bold"
              display="block"
              cursor="pointer"
              width="100%"
              paddingX={24}
              paddingTop={16}
              paddingBottom={20}
              textTransform="none"
              textAlign="left"
              transition="color 200ms ease-in-out"
              textColor="common-white"
              md={{ width: 'fit-content' }}
              lg={{ paddingAll: 0, fontSize: 'textMd' }}
            >
              {menu?.heading}
            </Text>
          )}
          {!!menu?.menuItem?.length && (
            <Flex
              transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
              marginRight={24}
              md={{
                marginRight: 32,
              }}
              lg={{
                marginRight: 0,
              }}
            >
              <FaChevronDown color={color.gray[isDark ? 25 : 400]} size={12} />
            </Flex>
          )}
        </Flex>
      </Flex>
      {menu?.menuItem && menu.menuItem.length > 0 && (
        <Container
          position="relative"
          zIndex="100"
          top="0"
          transition="max-height .2s ease-in-out"
          overflowX="hidden"
          overflowY="hidden"
          backgroundColor="common-black"
          maxHeight={isOpen ? `${subMenuHeight}px` : 0}
          sm={{ paddingX: 24 }}
          lg={{
            position: 'absolute',
            top: '85%',
            transform: `translateY( ${isOpen ? 0 : 10}px)`,
            paddingX: 0,
            borderRadius: '8px',
            boxShadow: 'lg',
            border: '1px solid',
            borderColor: 'common-transparent',
            opacity: isOpen ? 1 : 0,
            backgroundShorthand: `linear-gradient(#000, #000) padding-box, ${gradient.primary.blueGreen} border-box`,
            transition: `max-height .1s ease-in-out ${
              !isOpen ? 0.2 : 0
            }s, opacity .2s ease-in-out, transform .2s ease-in-out`,
          }}
          css={{
            [media.lg]: {
              marginLeft: isLast ? '0' : '-200px',
              transform: `translateX(${isLast ? '-50%' : '0'})`,
            },
          }}
        >
          <Flex ref={subMenuRef} flexDirection="column" rowGap="24px" lg={{ flexDirection: 'row' }}>
            {menu?.menuItem &&
              menu?.menuItem.map((menuItem, index) => (
                <SubMenu
                  key={`submenu item ${menuItem?.heading}`}
                  menu={menuItem}
                  column={index}
                  lg={{
                    maxWidth:
                      (index === 0 &&
                        (menuItem.menuItem.length > 4 || menu?.menuItem.length === 1 ? '600px' : '275px')) ||
                      (index === 1 && '380px') ||
                      (menu?.menuItem.length > 1 && (menuItem.menuItem.length > 4 ? '600px' : '530px')) ||
                      '832px',
                  }}
                />
              ))}
          </Flex>
        </Container>
      )}
    </Container>
  );
};

export default MenuItem;
