import Fuse from 'fuse.js';
import React, { useEffect, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import Modal from 'molecules/Modal/Modal';

import AppCard from 'components/AiApps/AppCard';
import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { FuseResult } from 'fuse.js';
import type { FC, KeyboardEvent } from 'react';

interface HeroData {
  data: any;
}

const SearchHero: FC<HeroData> = ({ data }) => {
  type SearchResultType = any;
  const categories = data.flat().map((app: { category: any[] }) => app?.category[0]);
  const uniqueCategories = [...new Set(categories)];
  const [searchString, setSearchString] = useState('');
  const [searchHits, setSearchHits] = useState<FuseResult<SearchResultType>[] | null>(null);
  const [modalActive, setModalActive] = useState(false);
  const list = data.flat();
  const fuse = new Fuse(list, {
    minMatchCharLength: 2,
    isCaseSensitive: false,
    includeScore: true,
    shouldSort: true,
    threshold: 0.6,
    keys: ['name', 'category[0]', 'tagline'],
  });

  const fuzzySearch = (pattern: string) => fuse.search(pattern, { limit: 20 });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      setModalActive(true);
    }
  };

  useEffect(() => {
    setSearchHits(fuzzySearch(searchString));
  }, [searchString]);

  return (
    <Flex
      flexDirection="column"
      gap="48px"
      marginX="auto"
      marginY="auto"
      maxWidth="343px"
      sm={{ maxWidth: '778px' }}
      xl={{ maxWidth: '894px' }}
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text
          fontSize="displayMd"
          lineHeight="display2xl"
          fontWeight="bold"
          md={{ fontSize: 'displayXl' }}
          xl={{ fontSize: 'display2xl' }}
          css={`
            letter-spacing: -1.44px;
            background-color: ${color.common.white};
            background: linear-gradient(91deg, #ceced2 -8.25%, #fff 45.05%, #a9a9ad 99.43%);
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
          `}
          textAlign="center"
        >
          Browse AI Apps
        </Text>
        <Text
          fontSize="textXl"
          lineHeight="textXl"
          textAlign="center"
          textColor="gray-400"
          css={`
            span {
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
              line-height: 30px;
              color: #fff;
            }
          `}
        >
          {'Browse through '}
          <span>{data.flat().length}</span>
          {' AI apps built for '}
          <span>{uniqueCategories?.length}</span>
          {' tasks.'}
        </Text>
      </Flex>

      <Flex flexDirection="column" position="relative">
        <Icon iconName="search" size={20} position="absolute" top="22px" left="24px" />
        <input
          placeholder="Find AI using AI"
          maxLength={512}
          type="text"
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
          onKeyDown={e => handleKeyDown(e)}
          /* eslint-disable no-inline-styles/no-inline-styles */
          style={{
            border: '1px solid rgba(255, 255, 255, 0.20)',
            color: '#fff',
            fontSize: '18px',
            padding: '10px 64px',
            width: '100%',
            outline: 'none',
            // background: 'rgba(255, 255, 255, 0.10)',
            background: '#1A1A1A',
            borderRadius: '8px',
            height: '64px',
          }}
        />
        <ComponentButton
          label="Search"
          color="primary"
          variant="contained"
          marginTop={12}
          sm={{ position: 'absolute', right: '8px', top: '8px', marginTop: 0, maxWidth: 'max-content' }}
          onClick={() => setModalActive(true)}
        />
      </Flex>
      {/* <Flex flexDirection="column" justifyContent="center" alignItems="center" flexWrap="wrap" gap="20px">
        <Text fontSize="textMd" lineHeight="textMd" fontWeight="regular" textColor="gray-400">
          Browse our popular categories
        </Text>
        <Flex
          marginY="auto"
          maxWidth="343px"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          gap="10px 8px"
          sm={{ maxWidth: '778px' }}
          xl={{ maxWidth: '894px' }}
        >
          {uniqueCategories.slice(0, 20).map(cat => (
            <Flex
              key={cat as string}
              backgroundColor="gray-800"
              textColor="common-white"
              borderRadius="30px"
              paddingX={10}
              paddingY={4}
              fontSize="textXs"
              lineHeight="textXs"
              textTransform="uppercase"
            >
              {cat as string}
            </Flex>
          ))}
        </Flex>
      </Flex> */}
      <Modal open={modalActive} isFullScreen onClose={() => setModalActive(false)} hasCloseButton={false}>
        <Flex minHeight="622px">
          <Flex
            flexDirection="column"
            gap="24px"
            position="relative"
            paddingAll={16}
            width="100%"
            marginLeft="auto"
            marginBottom="auto"
            backgroundColor="common-black"
            border="1px solid rgba(255, 255, 255, 0.20)"
            borderRadius="8px"
            maxWidth="344px"
            md={{ width: '768px', maxWidth: '768px' }}
            lg={{ width: '926px', maxWidth: '926px' }}
          >
            <Icon
              iconName="search"
              size={20}
              position="absolute"
              top="38px"
              left="44px"
              color="common-white"
              css={`
                color: #fff;
              `}
            />
            <input
              placeholder="Find AI using AI"
              maxLength={512}
              type="text"
              value={searchString}
              onChange={e => setSearchString(e.target.value)}
              /* eslint-disable no-inline-styles/no-inline-styles */
              style={{
                border: '1px solid rgba(255, 255, 255, 0.20)',
                color: '#fff',
                fontSize: '18px',
                padding: '10px 64px',
                width: '100%',
                outline: 'none',
                background: 'rgba(255, 255, 255, 0.10)',
                borderRadius: '8px',
                height: '64px',
              }}
            />

            {searchHits && (
              <ComponentButton
                label={searchHits ? 'Cancel' : 'Search'}
                color="primary"
                variant="contained"
                marginTop={12}
                sm={{ position: 'absolute', right: '24px', top: '24px', marginTop: 0, maxWidth: 'max-content' }}
                onClick={() => {
                  setModalActive(!modalActive);
                  setSearchString('');
                }}
              />
            )}
            <Flex
              flexDirection="column"
              gap="14px"
              overflowY="scroll"
              maxHeight="500px"
              css={`
                &::-webkit-scrollbar {
                  display: none;
                }
                -ms-overflow-style: none;
                scrollbar-width: none;
              `}
            >
              {searchHits?.map((hit: { item: { id: string | number | null | undefined } }) => (
                <AppCard key={hit?.item?.id} app={hit?.item} fullWidth />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Modal>
    </Flex>
  );
};

export default SearchHero;
