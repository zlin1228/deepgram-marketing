import Container from 'quarks/Container';

import AnnouncementBar from 'components/AnnouncementBar/AnnouncementBar';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof AnnouncementBar> = args => (
  <Container>
    <AnnouncementBar {...args} />
  </Container>
);

export const cnnouncementBar = Template.bind({});
cnnouncementBar.parameters = {
  controls: {
    include: ['eyebrow', 'headline', 'variant', 'externalVideo'],
  },
};
cnnouncementBar.args = {
  heading: 'Cras vulputate ligula pharetra dui vehicula, at elementum sapien semper.',
  body: {
    blocks: [],
    links: [],
    value: {
      schema: 'dast',
      document: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'span',
                value:
                  'Real-Time analytics for Your Business and Your Users, delivered by the Original Creators of Apache Pinot',
              },
            ],
          },
        ],
      },
    },
  },
  callToActions: [],
} as any;
