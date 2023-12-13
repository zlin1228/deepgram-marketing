import BlogCard from 'components/Cards/BlogCard/BlogCard';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof BlogCard> = args => <BlogCard {...args} />;

export const cardProps = {
  id: '101770405',
  __typename: 'ComponentBlogCardRecord',
  internalName: 'Dummy Card 1',
  title: "Deepgrams Tailored Speech Model's Drastically Improve Sales Analysis",
  featuredImage: {
    url: 'https://www.datocms-assets.com/96965/1688584213-understanding-hero.svg',
    width: 380,
    height: 200,
  },
  slug: '',
  callToAction: {
    id: '101770404',
    __typename: 'ComponentCallToActionRecord',
    internalName: 'Explore More',
    buttonType: 'text',
    color: 'secondary',
    label: 'Explore More',
    link: 'https://deepgram.com',
    openInNewWindow: false,
    startIcon: '',
    endIcon: 'arrow-right',
  },
} as const;

export const blogCard = Template.bind({});
blogCard.parameters = {
  controls: {
    include: ['heading'],
  },
};
blogCard.args = cardProps as any;
