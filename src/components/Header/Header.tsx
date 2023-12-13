import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useClickAway, useWindowSize } from 'react-use';

import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import Hamburger from 'components/Header/Hamburger';
import MenuItem from 'components/Header/MenuItem';
import Search from 'components/Search/Search';

import type { IComponentHeaderRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface HeaderProps extends BasicProps, IComponentHeaderRecord {
  lang?: string;
  location?: string;
}

const Header: FC<HeaderProps> = ({ menu, callToActions, logo, showGlobalSearch, ...props }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(-1);
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState<string>('76px');
  const { height, width } = useWindowSize();
  const headerContainerRef = useRef(null);
  const headerRef = useRef(null);
  const router = useRouter();
  const isChangelog = router.asPath.includes('changelog');

  const handleMenuClick = (menuIndex: number) => {
    if (openMenu === menuIndex) {
      return setOpenMenu(-1);
    }
    setOpenMenu(menuIndex);
  };

  useClickAway(headerContainerRef, () => {
    setOpenMenu(-1);
  });

  const handleResize = () => {
    setIsMobileNavOpen(false);
    if (headerContainerRef.current) {
      const headerPos = (headerContainerRef.current as HTMLDivElement).getBoundingClientRect();
      setMobileHeaderHeight(headerPos.height + 'px');
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (headerContainerRef.current) {
        const headerPos = (headerContainerRef.current as HTMLDivElement).getBoundingClientRect();
        setMobileHeaderHeight(headerPos.height + 'px');
      }
    }, 200);
  }, [isScrolled]);

  useEffect(() => {
    handleResize();
    handleScroll();
    addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [router]);

  return (
    <Container backgroundColor="common-transparent">
      <Container
        backgroundColor={isMobileNavOpen || isScrolled ? 'common-black' : 'common-transparent'}
        ref={headerContainerRef}
        position="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex={1000}
        {...props}
      >
        <Flex
          as="nav"
          ref={headerRef}
          position="relative"
          className="header-wrapper"
          marginX="auto"
          boxShadow={isScrolled ? 'sm' : 'unset'}
          width="100%"
          overflowX="inherit"
          {...props}
        >
          <Container width="100%" marginX="auto">
            <Flex
              flexDirection="row"
              alignItems="center"
              textAlign="center"
              paddingX={24}
              maxWidth="1264px"
              marginX="auto"
              height="72px"
              justifyContent="space-between"
              md={{ paddingX: 32, alignItems: 'center', gap: '56px' }}
              lg={{ height: '96px' }}
            >
              <Flex paddingY={8} backgroundColor="common-transparent" position="relative" zIndex={200}>
                {logo && (
                  <Link href="https://deepgram.com" width="100%" display="flex">
                    <Image
                      src={logo.url}
                      alt=""
                      width={logo.width}
                      height={logo.height}
                      css={{
                        objectFit: 'contain',
                      }}
                    />
                  </Link>
                )}
              </Flex>

              <Flex
                as="ul"
                gap="16px"
                paddingAll={0}
                flexGrow={1}
                flexDirection="column"
                position="absolute"
                top="100%"
                left="0"
                width="100%"
                marginAll={0}
                zIndex={100}
                backgroundColor="common-black"
                transition="height 0.2s ease-in-out"
                height={isMobileNavOpen ? `calc(${height}px - ${mobileHeaderHeight})` : '0px'}
                css={{ listStyle: 'none' }}
                overflowX="hidden"
                overflowY="auto"
                paddingTop={isMobileNavOpen ? 32 : 0}
                paddingBottom={isMobileNavOpen ? 32 : 0}
                lg={{
                  paddingTop: 0,
                  flexDirection: 'row',
                  position: 'unset',
                  width: 'auto',
                  alignItems: 'center',
                  minHeight: '76px',
                  gap: '20px',
                  backgroundColor: 'common-transparent',
                  overflowX: 'visible',
                  overflowY: 'visible',
                }}
              >
                {menu?.map((parent, index) => {
                  if (!parent) {
                    return;
                  }

                  return (
                    <MenuItem
                      key={`menu item ${parent?.heading}`}
                      menu={parent}
                      isOpen={index === openMenu}
                      onClick={() => width < 992 && handleMenuClick(index)}
                      onMouseEnter={() => width > 991 && handleMenuClick(index)}
                      onMouseLeave={() => width > 991 && handleMenuClick(-1)}
                      isDark={true}
                      isLast={index > menu.length - 3}
                    />
                  );
                })}
                <Flex
                  flexDirection="column-reverse"
                  gap="16px"
                  alignItems="center"
                  paddingX={24}
                  flexGrow={1}
                  justifyContent="flex-end"
                  lg={{
                    flexDirection: 'row',
                    paddingX: 0,
                  }}
                >
                  {isChangelog && (
                    <a href="https://deepgram.com/changelog.xml">
                      <Container display="flex" textColor="common-white">
                        <Icon iconName="rss" size={20} />
                      </Container>
                    </a>
                  )}
                  {showGlobalSearch && (
                    <Text
                      textColor="common-white"
                      display="flex"
                      cursor="pointer"
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                      <Icon iconName="search" size={20} />
                    </Text>
                  )}
                  {callToActions &&
                    callToActions.map(cta => (
                      <ComponentButton
                        key={cta?.id || ''}
                        {...cta}
                        width="100%"
                        lg={{
                          width: 'auto',
                        }}
                      />
                    ))}
                </Flex>
                {showGlobalSearch && <Search open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
              </Flex>

              {menu?.length > 0 && (
                <Flex lg={{ display: 'none' }}>
                  <Hamburger isOpen={isMobileNavOpen} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
                </Flex>
              )}
            </Flex>
          </Container>
        </Flex>
      </Container>
    </Container>
  );
};

export default Header;
