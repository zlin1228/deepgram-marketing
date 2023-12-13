import Section from 'molecules/Section/Section';

import Accordion from 'components/Accordion/Accordion';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof Accordion> = args => (
  <Section id="accordion-section" backgroundColor="Black">
    <Accordion {...args} />
  </Section>
);

export const accordion = Template.bind({});
accordion.parameters = {
  controls: {
    include: ['heading', 'backgroundIsDark'],
  },
};
accordion.args = {
  id: '106410443',
  __typename: 'ComponentAccordionRecord',
  internalName: 'Frequently Asked Questions',
  heading: 'Frequently Asked Questions',
  backgroundIsDark: true,
  accordion: [
    {
      id: '106410419',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'Can I sign up for free?',
      heading: 'Can I sign up for free?',
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
                      'Absolutely. We’ll even give you free credits to try out our transcription as well as our formatting and understanding features. No credit card required.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410422',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'What’s the difference between Base and Enhanced model tiers?',
      heading: 'What’s the difference between Base and Enhanced model tiers?',
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
                      'Our Base models are built on our signature end-to-end deep learning speech model architecture and offer a solid combination of accuracy and cost-effectiveness. Our Enhanced models generally have even higher accuracy and handle uncommon words significantly better.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410423',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'Do you offer volume discounts?',
      heading: 'Do you offer volume discounts?',
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
                      'Our Growth plan offers 20% savings for pre-paying for credits. If you’re looking to transcribe over 10,000 hours of audio per year, you can save even more with a Premium plan. ',
                  },
                  {
                    url: 'https://deepgramstg.wpengine.com/contact-us/',
                    meta: [
                      {
                        id: 'target',
                        value: '_blank',
                      },
                    ],
                    type: 'link',
                    children: [
                      {
                        type: 'span',
                        value: 'Contact us',
                      },
                    ],
                  },
                  {
                    type: 'span',
                    value: ' for more information.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410425',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'Which file types can you transcribe?',
      heading: 'Which file types can you transcribe?',
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
                    value: 'We support over 40 audio and video formats, documented ',
                  },
                  {
                    url: 'https://developers.deepgram.com/documentation/getting-started/audio-formats/',
                    meta: [
                      {
                        id: 'target',
                        value: '_blank',
                      },
                    ],
                    type: 'link',
                    children: [
                      {
                        type: 'span',
                        value: 'here',
                      },
                    ],
                  },
                  {
                    type: 'span',
                    value: '.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410431',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'How does billing work?',
      heading: 'How does billing work?',
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
                      'You can purchase credits upfront with a credit card. Credits will be deducted from your balance as you use our API. Pay As You Go credits never expire. Starter and Growth plan credits expire 1 year from purchase unless you renew or upgrade.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410432',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'Can you transcribe live streaming audio?',
      heading: 'Can you transcribe live streaming audio?',
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
                      'Definitely. In fact, we’ve got the fastest real-time transcription in the biz with latency times of under 300 milliseconds.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410435',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'What happens if I run out of credits before my plan expires?',
      heading: 'What happens if I run out of credits before my plan expires?',
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
                      'If you’re on the Starter or Growth plan and have saved a credit card, you can continue to use our API with a 10% overage fee billed at the start of each month.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410436',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'What languages do you support?',
      heading: 'What languages do you support?',
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
                    value: 'We support over 30 languages and dialects for transcription (see list ',
                  },
                  {
                    url: 'https://developers.deepgram.com/documentation/features/language/#language-options',
                    meta: [
                      {
                        id: 'target',
                        value: '_blank',
                      },
                    ],
                    type: 'link',
                    children: [
                      {
                        type: 'span',
                        value: 'here',
                      },
                    ],
                  },
                  {
                    type: 'span',
                    value: ') with over 100 supported for translation.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410438',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'What happens if I have unused credits when my plan expires?',
      heading: 'What happens if I have unused credits when my plan expires?',
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
                      'Credits purchased on a Starter or Growth plan expire a year from purchase unless you renew or upgrade.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410440',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'Can I get human support?',
      heading: 'Can I get human support?',
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
                    value: 'Sure thing. You can get help from our community over at ',
                  },
                  {
                    url: 'https://github.com/orgs/deepgram/discussions',
                    meta: [
                      {
                        id: 'target',
                        value: '_blank',
                      },
                    ],
                    type: 'link',
                    children: [
                      {
                        type: 'span',
                        value: 'Github Discussions',
                      },
                    ],
                  },
                  {
                    type: 'span',
                    value: ' or email our support team at ',
                  },
                  {
                    url: 'mailto:support@deepgram.com',
                    meta: [
                      {
                        id: 'target',
                        value: '_blank',
                      },
                    ],
                    type: 'link',
                    children: [
                      {
                        type: 'span',
                        value: 'support@deepgram.com',
                      },
                    ],
                  },
                  {
                    type: 'span',
                    value: '.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410441',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'How many seats do I get?',
      heading: 'How many seats do I get?',
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
                    value: 'We bill based on usage not users. Add as many team members and collaborators as you wish!',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '106410442',
      __typename: 'MenuAccordionItemRecord',
      internalName: 'Can I deploy Deepgram on-premises or in a VPC?',
      heading: 'Can I deploy Deepgram on-premises or in a VPC?',
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
                    value: 'You sure can. ',
                  },
                  {
                    url: 'https://deepgramstg.wpengine.com/contact-us/',
                    meta: [
                      {
                        id: 'target',
                        value: '_blank',
                      },
                    ],
                    type: 'link',
                    children: [
                      {
                        type: 'span',
                        value: 'Contact us',
                      },
                    ],
                  },
                  {
                    type: 'span',
                    value: ' about getting on a Premium plan to expand your deployment capabilities.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  ],
} as any;
