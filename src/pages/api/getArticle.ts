import { initializeApollo } from 'lib/client';
import { AllBlogListingPerPageQuery, AllBlogListingPerPageWithSearchFilterQuery } from 'lib/sdk';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apolloClient = initializeApollo();

  const page = parseInt(req?.query?.page as string) || 1;
  const search = req?.query?.search as string;
  let allBlogs = [];

  if (search && search !== '') {
    const {
      data: { allTemplateBlogs },
    } = await apolloClient.query({
      query: AllBlogListingPerPageWithSearchFilterQuery,
      variables: { skip: (page - 1) * 10, search },
    });
    allBlogs = allTemplateBlogs;
  } else {
    const {
      data: { allTemplateBlogs },
    } = await apolloClient.query({ query: AllBlogListingPerPageQuery, variables: { skip: (page - 1) * 10 } });
    allBlogs = allTemplateBlogs;
  }

  res.status(200).json(allBlogs);
}
