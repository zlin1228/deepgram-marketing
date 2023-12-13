import Section from 'molecules/Section/Section';

import ComponentHeading from 'components/Heading/Heading';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof ComponentHeading> = args => (
  <Section id="heading-section" backgroundColor="Black">
    <ComponentHeading {...args} />
  </Section>
);

export const componentHeading = Template.bind({});
componentHeading.parameters = {
  controls: {
    include: ['eyebrow', 'heading'],
  },
};
componentHeading.args = {
  eyebrow: 'eyebrow',
  heading: 'Try our speech-to-text & understanding API',
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
                  'Play around with transcribing sample audio files or our live streaming transcription demo. Explore how our audio understanding models work.',
              },
            ],
          },
        ],
      },
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
