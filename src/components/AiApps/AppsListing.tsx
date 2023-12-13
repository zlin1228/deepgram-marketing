import { useState } from 'react';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import AppCard from 'components/AiApps/AppCard';
import FeaturedAppCard from 'components/AiApps/FeaturedAppCard';
import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { FC } from 'react';

interface AppsListingProps {
  apps: {
    name: string;
    tagline: string;
    slug: string;
    category: string;
    accentColor: string;
    darkColor: string;
    logoUrl: string;
  }[][];

  isListing?: boolean;
}

const FEATURED_APP_INDEX = 10;

const AppsListing: FC<AppsListingProps> = ({ apps, isListing = false }) => {
  const [page, setPage] = useState(0);
  const topTen = apps?.flat().slice(0, 10);

  const startIndex = 0;
  const endIndex = (page + 1) * 21;

  const categories = [
    ...new Set(
      apps
        .flat()
        .map(item => item.category)
        .flat(),
    ),
  ].slice(0, 10);

  return (
    <Flex
      flexDirection="column"
      width="100%"
      justifyContent="flex-end"
      marginX="auto"
      gap="48px"
      lg={{ flexDirection: 'row', gap: '56px' }}
    >
      <Flex flexDirection="column" gap="16px" alignItems="center">
        {isListing ? (
          <Text textStyle="lg" textColor="common-white" fontWeight="semiBold" alignSelf="self-start">
            Most Recent
          </Text>
        ) : (
          <Flex gap="12px" marginBottom={16} alignSelf="self-start">
            <ComponentButton
              label="Top Products"
              textColor="common-white"
              paddingX={16}
              paddingY={8}
              border="1px solid #2c2c33"
              borderRadius="30px"
              outline="none"
              css={`
                &:hover {
                  background: #2c2c33;
                }
              `}
            />
            <ComponentButton
              label="Recently Added"
              textColor="common-white"
              paddingX={16}
              paddingY={8}
              border="1px solid #2c2c33"
              borderRadius="30px"
              outline="none"
              css={`
                &:hover {
                  background: #2c2c33;
                }
              `}
            />
          </Flex>
        )}
        <Flex
          flexDirection="column"
          width="100%"
          maxWidth="904px"
          gap="16px"
          md={{ flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {apps
            .flat()
            .slice(startIndex, endIndex)
            .map((app, idx) => {
              if (idx === FEATURED_APP_INDEX) {
                return <FeaturedAppCard key={app?.name} featuredApp={app} />;
              } else {
                return <AppCard key={app?.name} app={app} fullWidth={false} />;
              }
            })}
        </Flex>
        <ComponentButton
          label={apps.length > 21 ? 'Load More' : 'Fetching Apps...'}
          textColor="common-white"
          paddingX={16}
          paddingY={8}
          border="1px solid #2c2c33"
          backgroundColor="gray-800"
          borderRadius="4px"
          outline="none"
          marginX="auto"
          disabled={apps.length > 21 ? false : true}
          css={`
            &:hover {
              opacity: 0.8;
            }
          `}
          onClick={() => setPage(page + 1)}
        />
      </Flex>
      <Flex flexDirection="column" gap="48px" width="100%" lg={{ maxWidth: '210px' }}>
        <Flex flexDirection="column" rowGap="16px">
          <Text fontSize="textLg" lineHeight="textLg" fontWeight="semiBold">
            Featured
          </Text>
          <Flex flexWrap="wrap" lg={{ flexDirection: 'column' }} gap="12px">
            {topTen.map(app => (
              <Flex
                key={app?.name}
                flex="0 0 calc(50% - 12px)"
                md={{ flex: '0 0 calc(33.3% - 12px)' }}
                lg={{ flex: '0 1 auto' }}
              >
                <a
                  href={`/ai-apps/${app?.slug}`}
                  // eslint-disable-next-line no-inline-styles/no-inline-styles
                  style={{ display: 'flex' }}
                >
                  {app?.logoUrl ? (
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      height={32}
                      minWidth={32}
                      maxWidth={32}
                      backgroundColor="gray-100"
                      borderRadius="4px"
                      paddingX={8}
                      marginRight={12}
                      css={`
                        img {
                          max-width: 100%;
                          height: auto;
                        }
                      `}
                    >
                      <img src={app?.logoUrl} alt={app?.name} />
                    </Flex>
                  ) : (
                    <Flex
                      height={32}
                      minWidth={32}
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                      borderRadius="4px"
                      marginRight={16}
                      textColor="common-white"
                      css={`
                        background-color: ${app?.darkColor || '#CECED2'};
                      `}
                    >
                      {app?.name?.charAt(0)}
                    </Flex>
                  )}
                  <Text
                    fontSize="textSm"
                    lineHeight="textSm"
                    fontWeight="bold"
                    alignSelf="center"
                    textColor="common-white"
                  >
                    {app?.name}
                  </Text>
                </a>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex display="none" flexDirection="column" rowGap="12px" md={{ display: 'flex' }}>
          <Text fontSize="textLg" lineHeight="textLg" fontWeight="semiBold">
            Categories
          </Text>
          <Flex flexWrap="wrap" lg={{ flexDirection: 'column' }} gap="12px">
            {categories.map(category => (
              <Flex
                key={category}
                flexShrink={0}
                flexGrow={0}
                width="max-content"
                backgroundColor="gray-800"
                paddingX={10}
                paddingY={4}
                borderRadius="30px"
              >
                <Text
                  fontSize="textXs"
                  lineHeight="textXs"
                  fontWeight="bold"
                  alignSelf="center"
                  textColor="common-white"
                  textTransform="uppercase"
                >
                  {category}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppsListing;
