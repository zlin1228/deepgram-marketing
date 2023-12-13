import Marquee from 'react-fast-marquee';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';

import type { IComponentTrustBarRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface ScrollTrustBarProps extends BasicProps {
  company: IComponentTrustBarRecord['company'];
  isDark?: boolean;
  gradientColor?: [number, number, number];
  speed?: number;
  delay?: number;
  logoHeight?: number;
}

const ScrollTrustBar: FC<ScrollTrustBarProps> = ({ company, gradientColor, speed, delay, logoHeight, ...props }) => (
  <Marquee
    gradient
    gradientColor={gradientColor || [0, 0, 0]}
    gradientWidth="100px"
    speed={speed || 20}
    play={true}
    delay={delay || 0}
  >
    <Flex justifyContent="space-around" alignItems="center" gap="48px" width="100%" marginX={24} {...props}>
      {company &&
        company
          .filter(com => com?.companyLogo)
          .map(com => (
            <Link href={com.siteUrl || ''} key={com.company}>
              <Flex
                justifyContent="center"
                marginX="auto"
                alignItems="center"
                width="fit-content"
                height={`${logoHeight || 90}px`}
                css={`
                  & > div {
                    height: ${logoHeight ? `${logoHeight}px` : 'fit-content'};
                  }
                `}
              >
                {com?.companyDarkLogo ? (
                  <Image
                    src={com?.companyDarkLogo?.imageDesktop?.url || ''}
                    alt={com?.companyDarkLogo?.caption || ''}
                    width={com?.companyDarkLogo?.imageDesktop?.width || 0}
                    height={com?.companyDarkLogo?.imageDesktop?.height || 0}
                    css={{
                      height: '100%',
                      maxHeight: `${logoHeight || 90}px`,
                      width: '100%',
                    }}
                  />
                ) : (
                  com?.companyLogo && (
                    <Image
                      src={com?.companyLogo?.imageDesktop?.url || ''}
                      alt={com?.companyLogo?.caption || ''}
                      width={com?.companyLogo?.imageDesktop?.width || 0}
                      height={com?.companyLogo?.imageDesktop?.height || 0}
                      isDark
                      css={{
                        height: '100%',
                        maxHeight: `${logoHeight || 90}px`,
                        width: '100%',
                      }}
                    />
                  )
                )}
              </Flex>
            </Link>
          ))}
    </Flex>
  </Marquee>
);

export default ScrollTrustBar;
