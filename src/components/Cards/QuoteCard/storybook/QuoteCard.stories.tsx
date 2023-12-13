import QuoteCard from 'components/Cards/QuoteCard/QuoteCard';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof QuoteCard> = args => <QuoteCard {...args} />;

export const cardProps = {
  id: '113706744',
  __typename: 'ComponentQuoteRecord',
  internalName: 'Tethr',
  person: {
    id: '113706720',
    __typename: 'EntityPersonRecord',
    name: 'Adam Larsen',
    slug: 'adam-larsen',
    headshot: {
      id: '46933166',
      title: null,
      filename: 'adam-larsen-2x-1.png',
      size: 173016,
      alt: null,
      url: 'https://www.datocms-assets.com/96965/1685466376-deepgram.svg',
      width: 780,
      height: 780,
    },
    role: 'CHIEF TECHNICAL OFFICER ',
    personCategory: 'other',
    twitch: '',
    twitter: '',
    linkedin: '',
    github: '',
    bio: {
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
                  value: '',
                },
              ],
            },
          ],
        },
      },
    },
    company: {
      id: '101300636',
      __typename: 'EntityCompanyRecord',
      company: 'Tethr',
      companyLogo: {
        id: '101300635',
        __typename: 'ComponentImageRecord',
        caption: '',
        imageDesktop: {
          id: '41070532',
          title: null,
          filename: 'tethr.svg',
          size: 3683,
          alt: null,
          url: 'https://www.datocms-assets.com/96965/1680897087-tethr.svg',
          width: 68,
          height: 25,
        },
        imageMobile: null,
      },
      companyDarkLogo: null,
      siteUrl: '',
      twitch: '',
      twitter: '',
      github: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      dribbble: '',
      benefits: [],
      bio: '',
      businessNeeds: '',
      solution: [],
      industry: [],
    },
  },
  quote:
    'As we’ve begun to roll out Deepgram to our customers, we’ve noticed the platform’s distinct ability to quickly and accurately transcribe product and company names.',
  callToAction: {
    id: '113706743',
    __typename: 'ComponentCallToActionRecord',
    internalName: 'View Case Study | Tethr Quote CTA',
    buttonType: 'text',
    color: 'secondary',
    label: 'View Case Study',
    link: 'https://offers.deepgram.com/tethr-joint-solution-brief',
    openInNewWindow: false,
    startIcon: '',
    endIcon: 'arrow-right',
    popup: null,
  },
  theme: 'green',
} as const;

export const quoteCard = Template.bind({});
quoteCard.parameters = {
  controls: {
    include: ['heading'],
  },
};
quoteCard.args = cardProps as any;
