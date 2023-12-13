import Section from 'molecules/Section/Section';

import ComponentConversionPanel from 'components/ConversionPanel/ConversionPanel';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof ComponentConversionPanel> = args => (
  <Section id="conversion-section" backgroundColor="Rainbow Gradient">
    <ComponentConversionPanel {...args} hasSocial isContained />
  </Section>
);

export const componentConversionPanel = Template.bind({});
componentConversionPanel.parameters = {
  controls: {
    include: ['heading'],
  },
};
componentConversionPanel.args = {
  heading: 'Try our speech-to-text & understanding API',
  desktopHeadingSize: 'md',
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
