import Section from 'molecules/Section/Section';

import ComponentHero from 'components/Hero/Hero';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof ComponentHero> = args => (
  <Section id="hero-section" backgroundColor="Rainbow Gradient">
    <ComponentHero {...args} />
  </Section>
);

export const componentHero = Template.bind({});
componentHero.parameters = {
  controls: {
    include: ['heading', 'userReview'],
  },
};
componentHero.args = {
  heading: 'Language AI models to power your apps',
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
                  'Power your apps with world-class speech and domain-specific language models (DSLMs). Effortlessly accurate. Blazing fast. Enterprise-ready scale. Unbeatable pricing. Everything developers need to build with confidence and ship faster.',
              },
            ],
          },
        ],
      },
    },
  },
  userReview: 'Based on 154+ reviews.',
  announcementBar: {
    __typename: 'ComponentAnnouncementBarRecord',
    heading: {
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
                  marks: ['strong'],
                  value: 'Introducing Speech Summarization',
                },
                {
                  type: 'span',
                  value: ' Powered by DSLMs',
                },
              ],
            },
          ],
        },
      },
    },
    callToAction: {
      buttonType: 'text',
      color: 'success',
      label: 'Learn more',
      link: 'https://deepgram.com/learn/ai-speech-summarization-api',
      endIcon: 'arrow-right',
    },
  },
  callToActions: [
    {
      buttonType: 'fill',
      color: 'primary',
      label: 'Sign Up Free',
      link: 'https://console.deepgram.com/signup',
    },
    {
      buttonType: 'fill',
      color: 'success',
      label: 'Book a Demo',
      link: 'https://deepgram.com/contact-us',
    },
  ],
} as any;
