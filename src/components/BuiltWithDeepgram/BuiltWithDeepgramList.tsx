import { useMemo, useState } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';

import { sectionSizing } from 'molecules/Section/Section';

import TagFilter from 'components/BuiltWithDeepgram/TagFilter';
import BuiltWithDeepgramCard from 'components/Cards/BuiltWithDeepgramCard/BuiltWithDeepgramCard';

import type { IEntityTagRecord, ITemplateBuiltWithDeepgramRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type BuiltWithDeepgramListProps = BasicProps & {
  list: ITemplateBuiltWithDeepgramRecord[];
  tags: IEntityTagRecord[];
};

const BuiltWithDeepgramList: FC<BuiltWithDeepgramListProps> = ({ list, tags, ...props }) => {
  const [activeTag, setActiveTag] = useState('');

  const tagCategoryList: string[] = [];
  tags.map(tag => {
    !tagCategoryList.includes(tag.category as string) && tagCategoryList.push(tag.category as string);

    return;
  });

  const filteredList = useMemo(() => {
    if (activeTag && activeTag !== '') {
      return list.filter(item => item.tags.filter(tag => tag.id === activeTag).length > 0);
    }

    return list;
  }, [activeTag]);

  return (
    <Container as="section" backgroundColor="common-black" textColor="common-white" {...props}>
      <Container {...sectionSizing}>
        <Flex
          paddingY={64}
          flexDirection="column"
          gap="48px"
          lg={{ flexDirection: 'row', gap: '126px', paddingY: 72, alignItems: 'flex-start' }}
        >
          <Container flex="0 0 200px">
            <Flex flexDirection="column" gap="48px" position="sticky" top="100px">
              <Flex flexDirection="column" gap="16px">
                {tagCategoryList.map(cat => (
                  <TagFilter
                    key={cat}
                    heading={cat}
                    items={tags.filter(tag => tag.category === cat)}
                    activeItem={activeTag}
                    setActive={setActiveTag}
                  />
                ))}
              </Flex>
            </Flex>
          </Container>
          <Grid
            gap="24px"
            flexGrow={1}
            gridTemplateColumns="1fr"
            sm={{
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            {filteredList.map(item => (
              <BuiltWithDeepgramCard key={item.id} {...item} />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Container>
  );
};

export default BuiltWithDeepgramList;
