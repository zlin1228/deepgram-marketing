import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Image from 'quarks/Image';
import Link from 'quarks/Link';

import type { IComponentTrustBarRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface GridTrustBarProps extends BasicProps {
  company: IComponentTrustBarRecord['company'];
  isDark?: boolean;
  logoHeight?: number;
}

const GridTrustBar: FC<GridTrustBarProps> = ({ company, logoHeight, ...props }) => (
  <Grid
    columnGap="32px"
    rowGap="16px"
    gridTemplateColumns="repeat(3,minmax(0,1fr))"
    alignItems="center"
    marginX="auto"
    sm={{
      gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
    }}
    md={{
      gridTemplateColumns: `repeat(${company?.length},minmax(0,1fr))`,
    }}
    {...props}
  >
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
  </Grid>
);

export default GridTrustBar;
