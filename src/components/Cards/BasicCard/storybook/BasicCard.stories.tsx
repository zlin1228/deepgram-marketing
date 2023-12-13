import BasicCard from 'components/Cards/BasicCard/BasicCard';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof BasicCard> = args => <BasicCard {...args} />;

export const cardProps = {
  id: '101770405',
  __typename: 'ComponentCardRecord',
  internalName: 'Dummy Card 1',
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
                value: 'Create accurate, usable transcripts. It’s speech-to-text for developers, by developers.',
              },
            ],
          },
          {
            type: 'list',
            style: 'bulleted',
            children: [
              {
                type: 'listItem',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: 'Punctuation, Numerals, Redaction, Profanity Filtering',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'listItem',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: 'Utterances, Deep Search, Find & Replace, VAD, Keywords',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'listItem',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: 'Paragraphs, Interim Results Understanding Features',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
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
  heading: 'Transcription',
} as const;

export const basicCard = Template.bind({});
basicCard.parameters = {
  controls: {
    include: ['heading'],
  },
};
basicCard.args = cardProps as any;
