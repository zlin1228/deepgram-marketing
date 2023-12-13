import Section from 'molecules/Section/Section';

import QuoteWall from 'components/QuoteSlider/QuoteWall';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof QuoteWall> = args => (
  <Section id="quote-section" backgroundColor="Black">
    <QuoteWall {...args} backgroundIsDark />
  </Section>
);

export const QuoteSliderStory = Template.bind({});
QuoteSliderStory.parameters = {
  options: { showPanel: false },
};
QuoteSliderStory.args = {
  optionalHeading: {
    id: '106455861',
    __typename: 'ComponentHeadingRecord',
    internalName: 'Remote-first for a better culture',
    animate: false,
    heading: 'Trusted by startups and enterprises.',
    headingColor: 'White',
    headingType: 'H2',
    desktopHeadingSize: 'lg',
    mobileHeadingSize: 'sm',
    tabletHeadingSize: 'md',
    gradientBackgroundColor: '',
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
                  value: 'Discover the power of our product through real stories.',
                },
              ],
            },
          ],
        },
      },
    },
    bodyColor: 'Gray 100',
    callToActions: [],
  },
  quotes: [
    {
      id: '103130763',
      __typename: 'ComponentQuoteRecord',
      internalName: 'Quote | Josh Schachter',
      person: {
        id: '103130745',
        __typename: 'EntityPersonRecord',
        name: 'Scott Hoch',
        role: 'Head of Data, Revenue.io',
        personCategory: 'deepgram_team',
        headshot: {
          id: '41598946',
          title: null,
          filename: 'd457799017a0e45332b252cd9b3578e0.png',
          size: 76798,
          alt: null,
          url: 'https://www.datocms-assets.com/96965/1685466376-deepgram.svg',
          width: 328,
          height: 328,
        },
        company: {
          id: '103130761',
          __typename: 'EntityCompanyRecord',
          company: 'Deepgram',
          companyLogo: {
            id: '103130760',
            __typename: 'ComponentImageRecord',
            caption: '',
            imageDesktop: {
              id: '41598953',
              title: null,
              filename: 'dark-mode-false.svg',
              size: 5625,
              alt: null,
              url: 'https://www.datocms-assets.com/96965/1681204035-dark-mode-false.svg',
              width: 146,
              height: 32,
            },
            imageMobile: null,
          },
        },
      },
      quote:
        'Your topic modeling, your sentiment analysis, your detection of product features and competitors, and value drivers all come from the transcript. The quality of your transcript therefore has implications all the way down your value chain.',
    },
    {
      id: '103130763',
      __typename: 'ComponentQuoteRecord',
      internalName: 'Quote | Josh Schachter',
      person: {
        id: '103130745',
        __typename: 'EntityPersonRecord',
        name: 'Scott Hoch',
        role: 'Head of Data, Revenue.io',
        personCategory: 'deepgram_team',
        headshot: {
          id: '41598946',
          title: null,
          filename: 'd457799017a0e45332b252cd9b3578e0.png',
          size: 76798,
          alt: null,
          url: 'https://www.datocms-assets.com/96965/1685466376-deepgram.svg',
          width: 328,
          height: 328,
        },
        company: {
          id: '103130761',
          __typename: 'EntityCompanyRecord',
          company: 'Deepgram',
          companyLogo: {
            id: '103130760',
            __typename: 'ComponentImageRecord',
            caption: '',
            imageDesktop: {
              id: '41598953',
              title: null,
              filename: 'dark-mode-false.svg',
              size: 5625,
              alt: null,
              url: 'https://www.datocms-assets.com/96965/1681204035-dark-mode-false.svg',
              width: 146,
              height: 32,
            },
            imageMobile: null,
          },
        },
      },
      quote:
        'Your topic modeling, your sentiment analysis, your detection of product features and competitors, and value drivers all come from the transcript. The quality of your transcript therefore has implications all the way down your value chain.',
    },
    {
      id: '103130763',
      __typename: 'ComponentQuoteRecord',
      internalName: 'Quote | Josh Schachter',
      person: {
        id: '103130745',
        __typename: 'EntityPersonRecord',
        name: 'Scott Hoch',
        role: 'Head of Data, Revenue.io',
        personCategory: 'deepgram_team',
        headshot: {
          id: '41598946',
          title: null,
          filename: 'd457799017a0e45332b252cd9b3578e0.png',
          size: 76798,
          alt: null,
          url: 'https://www.datocms-assets.com/96965/1685466376-deepgram.svg',
          width: 328,
          height: 328,
        },
        company: {
          id: '103130761',
          __typename: 'EntityCompanyRecord',
          company: 'Deepgram',
          companyLogo: {
            id: '103130760',
            __typename: 'ComponentImageRecord',
            caption: '',
            imageDesktop: {
              id: '41598953',
              title: null,
              filename: 'dark-mode-false.svg',
              size: 5625,
              alt: null,
              url: 'https://www.datocms-assets.com/96965/1681204035-dark-mode-false.svg',
              width: 146,
              height: 32,
            },
            imageMobile: null,
          },
        },
      },
      quote:
        'Your topic modeling, your sentiment analysis, your detection of product features and competitors, and value drivers all come from the transcript. The quality of your transcript therefore has implications all the way down your value chain.',
    },
    {
      id: '103130763',
      __typename: 'ComponentQuoteRecord',
      internalName: 'Quote | Josh Schachter',
      person: {
        id: '103130745',
        __typename: 'EntityPersonRecord',
        name: 'Scott Hoch',
        role: 'Head of Data, Revenue.io',
        personCategory: 'deepgram_team',
        headshot: {
          id: '41598946',
          title: null,
          filename: 'd457799017a0e45332b252cd9b3578e0.png',
          size: 76798,
          alt: null,
          url: 'https://www.datocms-assets.com/96965/1685466376-deepgram.svg',
          width: 328,
          height: 328,
        },
        company: {
          id: '103130761',
          __typename: 'EntityCompanyRecord',
          company: 'Deepgram',
          companyLogo: {
            id: '103130760',
            __typename: 'ComponentImageRecord',
            caption: '',
            imageDesktop: {
              id: '41598953',
              title: null,
              filename: 'dark-mode-false.svg',
              size: 5625,
              alt: null,
              url: 'https://www.datocms-assets.com/96965/1681204035-dark-mode-false.svg',
              width: 146,
              height: 32,
            },
            imageMobile: null,
          },
        },
      },
      quote:
        'Your topic modeling, your sentiment analysis, your detection of product features and competitors, and value drivers all come from the transcript. The quality of your transcript therefore has implications all the way down your value chain.',
    },
    {
      id: '103130763',
      __typename: 'ComponentQuoteRecord',
      internalName: 'Quote | Josh Schachter',
      person: {
        id: '103130745',
        __typename: 'EntityPersonRecord',
        name: 'Scott Hoch',
        role: 'Head of Data, Revenue.io',
        personCategory: 'deepgram_team',
        headshot: {
          id: '41598946',
          title: null,
          filename: 'd457799017a0e45332b252cd9b3578e0.png',
          size: 76798,
          alt: null,
          url: 'https://www.datocms-assets.com/96965/1685466376-deepgram.svg',
          width: 328,
          height: 328,
        },
        company: {
          id: '103130761',
          __typename: 'EntityCompanyRecord',
          company: 'Deepgram',
          companyLogo: {
            id: '103130760',
            __typename: 'ComponentImageRecord',
            caption: '',
            imageDesktop: {
              id: '41598953',
              title: null,
              filename: 'dark-mode-false.svg',
              size: 5625,
              alt: null,
              url: 'https://www.datocms-assets.com/96965/1681204035-dark-mode-false.svg',
              width: 146,
              height: 32,
            },
            imageMobile: null,
          },
        },
      },
      quote:
        'Your topic modeling, your sentiment analysis, your detection of product features and competitors, and value drivers all come from the transcript. The quality of your transcript therefore has implications all the way down your value chain.',
    },
    {
      id: '103130763',
      __typename: 'ComponentQuoteRecord',
      internalName: 'Quote | Josh Schachter',
      person: {
        id: '103130745',
        __typename: 'EntityPersonRecord',
        name: 'Scott Hoch',
        role: 'Head of Data, Revenue.io',
        personCategory: 'deepgram_team',
        headshot: {
          id: '41598946',
          title: null,
          filename: 'd457799017a0e45332b252cd9b3578e0.png',
          size: 76798,
          alt: null,
          url: 'https://www.datocms-assets.com/96965/1685466376-deepgram.svg',
          width: 328,
          height: 328,
        },
        company: {
          id: '103130761',
          __typename: 'EntityCompanyRecord',
          company: 'Deepgram',
          companyLogo: {
            id: '103130760',
            __typename: 'ComponentImageRecord',
            caption: '',
            imageDesktop: {
              id: '41598953',
              title: null,
              filename: 'dark-mode-false.svg',
              size: 5625,
              alt: null,
              url: 'https://www.datocms-assets.com/96965/1681204035-dark-mode-false.svg',
              width: 146,
              height: 32,
            },
            imageMobile: null,
          },
        },
      },
      quote:
        'Your topic modeling, your sentiment analysis, your detection of product features and competitors, and value drivers all come from the transcript. The quality of your transcript therefore has implications all the way down your value chain.',
    },
    {
      id: '103130763',
      __typename: 'ComponentQuoteRecord',
      internalName: 'Quote | Josh Schachter',
      person: {
        id: '103130745',
        __typename: 'EntityPersonRecord',
        name: 'Scott Hoch',
        role: 'Head of Data, Revenue.io',
        personCategory: 'deepgram_team',
        headshot: {
          id: '41598946',
          title: null,
          filename: 'd457799017a0e45332b252cd9b3578e0.png',
          size: 76798,
          alt: null,
          url: 'https://www.datocms-assets.com/96965/1685466376-deepgram.svg',
          width: 328,
          height: 328,
        },
        company: {
          id: '103130761',
          __typename: 'EntityCompanyRecord',
          company: 'Deepgram',
          companyLogo: {
            id: '103130760',
            __typename: 'ComponentImageRecord',
            caption: '',
            imageDesktop: {
              id: '41598953',
              title: null,
              filename: 'dark-mode-false.svg',
              size: 5625,
              alt: null,
              url: 'https://www.datocms-assets.com/96965/1681204035-dark-mode-false.svg',
              width: 146,
              height: 32,
            },
            imageMobile: null,
          },
        },
      },
      quote:
        'Your topic modeling, your sentiment analysis, your detection of product features and competitors, and value drivers all come from the transcript. The quality of your transcript therefore has implications all the way down your value chain.',
    },
  ],
} as any;
