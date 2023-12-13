import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import { sectionSizing } from 'molecules/Section/Section';
import TextField from 'molecules/TextField/TextField';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import ResourceFilter from 'components/Resource/ResourceFilter';
import TopicFilter from 'components/Resource/TopicFilter';

import type { ITemplateBlogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, KeyboardEvent } from 'react';

type BlogListingProps = BasicProps & {
  list: ITemplateBlogRecord[];
  category: string[];
  noFilter?: boolean;
  layout?: number;
  active?: string;
};

const BlogCard = dynamic(() => import('components/Cards/BlogCard/BlogCard'));

const BlogListing: FC<BlogListingProps> = ({ list, active, category }) => {
  const router = useRouter();
  const page = (router.query?.['page'] as string) || '1';
  const search = router.query?.['search'] || '';
  const [filteredList, setFilteredList] = useState<ITemplateBlogRecord[]>(list);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);
  const handleChangeFilter = (e: KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      const filter = (e.target as HTMLInputElement).value;
      setSearching(true);
      router
        .push(
          filter && filter !== '' ? `/learn/article?page=${1}&search=${filter}` : `/learn/article?page=${1}`,
          undefined,
          { shallow: false },
        )
        .finally(() => {
          setTimeout(() => {
            setSearching(false);
          }, 1000);
        });
    }
  };

  const handlePagination = async () => {
    const res =
      search && search !== ''
        ? await axios.get(`/api/getArticle?page=${parseInt(page) + 1}&search=${search}`)
        : await axios.get(`/api/getArticle?page=${parseInt(page) + 1}`);
    res.data.length === 0 && setShowLoadMore(false);

    setFilteredList([...filteredList, ...res.data]);
    router.push(
      search && search !== ''
        ? `/learn/article?page=${parseInt(page) + 1}&search=${search}`
        : `/learn/article?page=${parseInt(page) + 1}`,
      undefined,
      { shallow: true },
    );
  };

  return (
    <Container as="section" textColor="common-white" backgroundColor="common-black" paddingY={48} md={{ paddingY: 96 }}>
      <Container {...sectionSizing}>
        <Flex flexDirection="column" gap="48px" md={{ flexDirection: 'row' }}>
          <Flex flexDirection="column" gap="16px" width="100%" md={{ flex: '0 0 300px' }}>
            <Container position="relative" width="100%">
              <TextField
                type="text"
                placeholder="Search"
                startIcon={<Icon iconName="search" size={18} color="#fff" />}
                onKeyDown={handleChangeFilter}
                css={`
                  width: 100%;
                  max-width: 100%;
                  animation-fill-mode: forwards;
                  @keyframes loadingIcon {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                `}
              />
              <Icon
                iconName="loader"
                size={16}
                position="absolute"
                right="8px"
                top="14px"
                opacity={searching ? 1 : 0}
                animation="loadingIcon 800ms linear 0s infinite"
              />
            </Container>
            <ResourceFilter items={category} md={{ marginBottom: 20 }} />
            <TopicFilter active={active} />
          </Flex>
          <Container width="100%">
            <Flex width="100%" gap="32px" flexWrap="wrap">
              {filteredList.map(item => (
                <Flex key={item.id} width="100%" maxWidth="100%" lg={{ maxWidth: 'calc(50% - 16px)' }}>
                  <BlogCard {...(item as ITemplateBlogRecord)} isBlogList />
                </Flex>
              ))}
            </Flex>
            {list.length >= 10 && showLoadMore && (
              <Flex justifyContent="center" marginTop={64}>
                <ComponentButton
                  label="Load more"
                  buttonType="fill"
                  color="primary"
                  onClick={() => handlePagination()}
                />
              </Flex>
            )}
          </Container>
        </Flex>
      </Container>
    </Container>
  );
};

export default BlogListing;
