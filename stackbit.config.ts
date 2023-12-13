import { DatoCMSContentSource } from '@stackbit/cms-datocms';
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18.12.1',
  contentSources: [
    new DatoCMSContentSource({
      apiToken: process.env.NEXT_DATOCMS_FULL_ACCESS_TOKEN!,
      projectId: process.env.NEXT_DATOCMS_PROJECT_ID!,
    }),
  ],
  modelExtensions: [
    {
      name: 'template_page',
      type: 'page',
      urlPath: '/{slug}',
      fields: [
        {
          type: 'object',
          name: 'seo',
          fields: [
            { name: 'title', type: 'text' },
            { name: 'description', type: 'text' },
          ],
        },
        {
          type: 'reference',
          name: 'sections',
          models: ['layout_section'],
        },
      ],
    },
    {
      name: 'template_blog',
      type: 'page',
      urlPath: '/learn/{slug}',
    },
  ],
});
