import { useState } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';

import NewsCard from 'components/Cards/NewsCard/NewsCard';
import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { IComponentSingleInstanceRecord, ITemplateNewsRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface NewsListingProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
  news?: ITemplateNewsRecord[];
}

const NewsListing: FC<NewsListingProps> = ({ news }) => {
  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  return (
    <Container>
      <Grid
        gridTemplateColumns="1fr"
        gap="32px"
        sm={{
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
        lg={{
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {news && news.slice(0, loadMore ? news.length : 3).map(item => <NewsCard key={item.id} {...item} />)}
      </Grid>
      {!loadMore && (
        <Flex justifyContent="center" marginTop={40}>
          <ComponentButton label="Load More" buttonType="fill" color="magenta" onClick={() => handleLoadMore()} />
        </Flex>
      )}
    </Container>
  );
};

export default NewsListing;
