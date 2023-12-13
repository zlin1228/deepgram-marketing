import { type FC } from 'react';

import { useAllSimpleBlogListingQuery } from 'lib/sdk';

import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Text from 'quarks/Text';

import AuthorCard from 'components/SingleInstance/AuthorCard';

import type { IComponentSingleInstanceRecord, IEntityPersonRecord, ITemplateBlogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';

interface JobListingProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
  authors?: IEntityPersonRecord[];
  blogs?: ITemplateBlogRecord[];
}

type AuthorRecord = IEntityPersonRecord[] | undefined;

const AuthorListing: FC<JobListingProps> = ({ authors }) => {
  const { data, loading } = useAllSimpleBlogListingQuery();

  let deepgramUsers: AuthorRecord = [];
  let guestUsers: AuthorRecord = [];
  let alumniUsers: AuthorRecord = [];

  if (!loading && data) {
    const { blogList1, blogList2, blogList3, blogList4, blogList5 } = data;
    const blogs = [...blogList1, ...blogList2, ...blogList3, ...blogList4, ...blogList5] as ITemplateBlogRecord[];

    const filteredAuthors = authors?.filter(
      (author: IEntityPersonRecord) => blogs && blogs.filter(blog => blog?.author?.id === author.id).length > 0,
    );

    deepgramUsers = filteredAuthors?.filter(author => author.personCategory === 'deepgram_team');
    guestUsers = filteredAuthors?.filter(author => author.personCategory === 'guest_authors');
    alumniUsers = filteredAuthors?.filter(author => author.personCategory === 'deepgram_alumni');
  }

  const categoryList = [
    {
      category: 'Deepgram Team',
      users: deepgramUsers,
    },
    {
      category: 'Guest Authors',
      users: guestUsers,
    },
    {
      category: 'Deepgram Alumni',
      users: alumniUsers,
    },
  ];

  return (
    <Flex flexDirection="column" gap="40px" sm={{ gap: '72px' }} lg={{ gap: '96px' }}>
      {categoryList.map(category => (
        <Flex key={category.category} flexDirection="column" gap="32px">
          <Text
            display="block"
            fontSize="displayXs"
            fontWeight="bold"
            lineHeight="displayXs"
            paddingBottom={16}
            borderBottom="2px solid"
            borderColor="gray-700"
            sm={{
              fontSize: 'displayMd',
              lineHeight: 'displayMd',
            }}
          >
            {category.category}
          </Text>
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
            {category.users && category.users.map(author => <AuthorCard key={author.id} {...author} />)}
          </Grid>
        </Flex>
      ))}
    </Flex>
  );
};

export default AuthorListing;
