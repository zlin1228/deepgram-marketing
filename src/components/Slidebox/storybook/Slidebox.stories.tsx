import Section from 'molecules/Section/Section';

import ComponentSlidebox from 'components/Slidebox/Slidebox';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof ComponentSlidebox> = args => (
  <Section id="slidebox-section" backgroundColor="Black">
    <ComponentSlidebox {...args} />
  </Section>
);

export const componentSlidebox = Template.bind({});
componentSlidebox.parameters = {
  options: { showPanel: false },
};
componentSlidebox.args = {
  id: '106455907',
  __typename: 'ComponentSlideboxRecord',
  internalName: 'Remote-first for a better culture',
  optionalHeading: {
    id: '106455861',
    __typename: 'ComponentHeadingRecord',
    internalName: 'Try our speech-to-text & understanding API',
    animate: false,
    heading: 'Try our speech-to-text & understanding API',
    headingColor: 'White',
    headingType: 'H2',
    desktopHeadingSize: 'md',
    mobileHeadingSize: 'sm',
    tabletHeadingSize: 'md',
    gradientBackgroundColor: '',
    bodyColor: 'Gray 100',
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
  },
  items: [
    {
      id: '106451781',
      __typename: 'ComponentSlideboxItemRecord',
      internalName: 'Slidebox Item | Pre-recorded Audio',
      heading: 'Audio Files',
      audio: {
        id: '43545030',
        title: 'NASA first all female spacewalk',
        filename: 'nasa-exp61_eva.m4a',
        size: 2041582,
        alt: 'nasa first all female spacewalk',
        url: 'https://www.datocms-assets.com/96965/1682518529-nasa-exp61_eva.m4a',
        width: null,
        height: null,
      },
      audioName: {
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
                    value: 'NASA',
                  },
                  {
                    type: 'span',
                    value: ': First All Female Space Walk',
                  },
                ],
              },
            ],
          },
        },
      },
      liveStreamingUrl: '',
      requestUrl: {
        blocks: [],
        links: [],
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                code: 'POST https://api.deepgram.com/v1/listen',
                type: 'code',
                language: 'sml',
              },
            ],
          },
        },
      },
      payload: {
        blocks: [],
        links: [],
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                code: '{\n  "url":"nasa_demo"\n}',
                type: 'code',
                language: 'json',
              },
            ],
          },
        },
      },
      response: {
        blocks: [],
        links: [],
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                code: '{\n  "metadata": {\n    "transaction_key": "deprecated",\n    "request_id": "8cf63435-5e37-4cf1-99c0-a4179402dcf2",\n    "sha256": "362c1aae4da8c8952bd29fdd5eda25f7c3e92b040b5c31f741a0e0df7c061608",\n    "created": "2022-09-07T16:19:33.171Z",\n    "duration": 169.802,\n    "channels": 1,\n    "models": [\n      "125125fb-e391-458e-a227-a60d6426f5d6"\n    ],\n    "model_info": {\n      "125125fb-e391-458e-a227-a60d6426f5d6": {\n        "name": "general-enhanced",\n        "version": "2022-05-18.0",\n        "tier": "enhanced"\n      }\n    }\n  },\n  "results": {\n    "channels": [\n      {\n        "alternatives": [\n          {\n            "transcript": "And, Jessica, Christina, we are so proud of you. I\'m gonna do great today. We\'ll be waiting for you here in a couple hours when you get home. I\'m gonna hand you over to Stephanie now. Have a great great EVA. Drew, thank you so much. It\'s been our pleasure working with you this morning, and I\'m working on getting my EV hat open. and I can report. It\'s opened and stowed. Thank you, Drew. Thank you so much. Tika. On your GCMs, Take your power switches to bat, stagger switch throws, and expect a warning tone. final steps before they begin the space launch. Copy. Check display switch functional. Tracy, how important is this this regarding it? There is Sounds like seems like a lot to remember on your own. Absolutely. Take power eighty one eighty two, two switches to off, o f f. And Christina and just could have enough work with their hands and feet and their brain outside that it really helps to have someone like Stephanie. New powerboat off. DCMs. This connect your SCUs from your DCMs and stow the SCUs in the pouch. So not only does Stephanie Thirty eight AM central time. A little ahead of schedule about twelve minutes, but That gets us started on today\'s historic spacewalk. Andrew Morgan there. He\'s been wishing the crew luck. He\'s being made in pouch and DCM cover clothes. Copy. You need to.",\n            "confidence": 0.9873047,\n            "words": [\n              {\n                "word": "and",\n                "start": 3.078125,\n                "end": 3.578125,\n                "confidence": 0.89819336,\n                "punctuated_word": "And,"\n              },\n              {\n                "word": "jessica",\n                "start": 4.796875,\n                "end": 5.2773438,\n                "confidence": 0.7298584,\n                "punctuated_word": "Jessica,"\n              },\n              {\n                "word": "christina",\n                "start": 5.2773438,\n                "end": 5.7773438,\n                "confidence": 0.98046875,\n                "punctuated_word": "Christina,"\n              },\n              {\n                "word": "we",\n                "start": 6.1171875,\n                "end": 6.3554688,\n                "confidence": 0.9995117,\n                "punctuated_word": "we"\n              },\n              {\n                "word": "are",\n                "start": 6.3554688,\n                "end": 6.8359375,\n                "confidence": 0.99902344,\n                "punctuated_word": "are"\n              },\n              {\n                "word": "so",\n                "start": 6.8359375,\n                "end": 6.9960938,\n                "confidence": 0.9399414,\n                "punctuated_word": "so"\n              },\n              {\n                "word": "proud",\n                "start": 6.9960938,\n                "end": 7.2773438,\n                "confidence": 0.9970703,\n                "punctuated_word": "proud"\n              },\n              {\n                "word": "of",\n                "start": 7.2773438,\n                "end": 7.3945312,\n                "confidence": 0.9902344,\n                "punctuated_word": "of"\n              },\n              {\n                "word": "you",\n                "start": 7.3945312,\n                "end": 7.585,\n                "confidence": 0.82714844,\n                "punctuated_word": "you."\n              },\n              {\n                "word": "i\'m",\n                "start": 8.546875,\n                "end": 8.7421875,\n                "confidence": 0.5897827,\n                "punctuated_word": "I\'m"\n              },\n              {\n                "word": "gonna",\n                "start": 8.7421875,\n                "end": 9.109375,\n                "confidence": 0.98828125,\n                "punctuated_word": "gonna"\n              },\n              {\n                "word": "do",\n                "start": 9.109375,\n                "end": 9.265625,\n                "confidence": 0.9921875,\n                "punctuated_word": "do"\n              },\n              {\n                "word": "great",\n                "start": 9.265625,\n                "end": 9.46875,\n                "confidence": 0.99560547,\n                "punctuated_word": "great"\n              },\n              {\n                "word": "today",\n                "start": 9.46875,\n                "end": 9.828125,\n                "confidence": 0.9975586,\n                "punctuated_word": "today."\n              },\n              {\n                "word": "we\'ll",\n                "start": 9.828125,\n                "end": 10.0234375,\n                "confidence": 0.99560547,\n                "punctuated_word": "We\'ll"\n              },\n              {\n                "word": "be",\n                "start": 10.0234375,\n                "end": 10.140625,\n                "confidence": 1,\n                "punctuated_word": "be"\n              },\n              {\n                "word": "waiting",\n                "start": 10.140625,\n                "end": 10.421875,\n                "confidence": 0.9995117,\n                "punctuated_word": "waiting"\n              },\n              {\n                "word": "for",\n                "start": 10.421875,\n                "end": 10.625,\n                "confidence": 0.9995117,\n                "punctuated_word": "for"\n              },\n              {\n                "word": "you",\n                "start": 10.625,\n                "end": 10.7421875,\n                "confidence": 0.9995117,\n                "punctuated_word": "you"\n              },\n              {\n                "word": "here",\n                "start": 10.7421875,\n                "end": 10.90625,\n                "confidence": 0.9980469,\n                "punctuated_word": "here"\n              },\n              {\n                "word": "in",\n                "start": 10.90625,\n                "end": 11.0625,\n                "confidence": 0.9873047,\n                "punctuated_word": "in"\n              },\n              {\n                "word": "a",\n                "start": 11.0625,\n                "end": 11.140625,\n                "confidence": 0.99560547,\n                "punctuated_word": "a"\n              },\n              {\n                "word": "couple",\n                "start": 11.140625,\n                "end": 11.4609375,\n                "confidence": 1,\n                "punctuated_word": "couple"\n              },\n              {\n                "word": "hours",\n                "start": 11.4609375,\n                "end": 11.703125,\n                "confidence": 0.7495117,\n                "punctuated_word": "hours"\n              },\n              {\n                "word": "when",\n                "start": 11.703125,\n                "end": 11.859375,\n                "confidence": 0.9946289,\n                "punctuated_word": "when"\n              },\n              {\n                "word": "you",\n                "start": 11.859375,\n                "end": 11.9453125,\n                "confidence": 0.99902344,\n                "punctuated_word": "you"\n              },\n              {\n                "word": "get",\n                "start": 11.9453125,\n                "end": 12.1875,\n                "confidence": 0.99902344,\n                "punctuated_word": "get"\n              },\n              {\n                "word": "home",\n                "start": 12.1875,\n                "end": 12.6640625,\n                "confidence": 0.9995117,\n                "punctuated_word": "home."\n              },\n              {\n                "word": "i\'m",\n                "start": 12.6640625,\n                "end": 12.78125,\n                "confidence": 0.9987793,\n                "punctuated_word": "I\'m"\n              },\n              {\n                "word": "gonna",\n                "start": 12.78125,\n                "end": 13.1015625,\n                "confidence": 0.9980469,\n                "punctuated_word": "gonna"\n              },\n              {\n                "word": "hand",\n                "start": 13.1015625,\n                "end": 13.3046875,\n                "confidence": 1,\n                "punctuated_word": "hand"\n              },\n              {\n                "word": "you",\n                "start": 13.3046875,\n                "end": 13.4609375,\n                "confidence": 0.99902344,\n                "punctuated_word": "you"\n              },\n              {\n                "word": "over",\n                "start": 13.4609375,\n                "end": 13.6640625,\n                "confidence": 1,\n                "punctuated_word": "over"\n              },\n              {\n                "word": "to",\n                "start": 13.6640625,\n                "end": 13.78125,\n                "confidence": 0.9980469,\n                "punctuated_word": "to"\n              },\n              {\n                "word": "stephanie",\n                "start": 13.78125,\n                "end": 14.21875,\n                "confidence": 0.9995117,\n                "punctuated_word": "Stephanie"\n              },\n              {\n                "word": "now",\n                "start": 14.21875,\n                "end": 14.71875,\n                "confidence": 0.9760742,\n                "punctuated_word": "now."\n              },\n              {\n                "word": "have",\n                "start": 15.78125,\n                "end": 16.015625,\n                "confidence": 0.65625,\n                "punctuated_word": "Have"\n              },\n              {\n                "word": "a",\n                "start": 16.015625,\n                "end": 16.140625,\n                "confidence": 0.9975586,\n                "punctuated_word": "a"\n              },\n              {\n                "word": "great",\n                "start": 16.140625,\n                "end": 16.640625,\n                "confidence": 1,\n                "punctuated_word": "great"\n              },\n              {\n                "word": "great",\n                "start": 16.65625,\n                "end": 16.984375,\n                "confidence": 0.953125,\n                "punctuated_word": "great"\n              },\n              {\n                "word": "eva",\n                "start": 16.984375,\n                "end": 17.484375,\n                "confidence": 0.9822591,\n                "punctuated_word": "EVA."\n              },\n              {\n                "word": "drew",\n                "start": 17.65625,\n                "end": 17.9375,\n                "confidence": 0.9667969,\n                "punctuated_word": "Drew,"\n              },\n              {\n                "word": "thank",\n                "start": 17.9375,\n                "end": 18.1875,\n                "confidence": 0.9975586,\n                "punctuated_word": "thank"\n              },\n              {\n                "word": "you",\n                "start": 18.1875,\n                "end": 18.375,\n                "confidence": 1,\n                "punctuated_word": "you"\n              },\n              {\n                "word": "so",\n                "start": 18.375,\n                "end": 18.578125,\n                "confidence": 0.99902344,\n                "punctuated_word": "so"\n              },\n              {\n                "word": "much",\n                "start": 18.578125,\n                "end": 19.015625,\n                "confidence": 0.99609375,\n                "punctuated_word": "much."\n              },\n              {\n                "word": "it\'s",\n                "start": 19.015625,\n                "end": 19.21875,\n                "confidence": 0.8796387,\n                "punctuated_word": "It\'s"\n              },\n              {\n                "word": "been",\n                "start": 19.21875,\n                "end": 19.375,\n                "confidence": 0.99853516,\n                "punctuated_word": "been"\n              },\n              {\n                "word": "our",\n                "start": 19.375,\n                "end": 19.5,\n                "confidence": 0.93652344,\n                "punctuated_word": "our"\n              },\n              {\n                "word": "pleasure",\n                "start": 19.5,\n                "end": 19.90625,\n                "confidence": 1,\n                "punctuated_word": "pleasure"\n              },\n              {\n                "word": "working",\n                "start": 19.90625,\n                "end": 20.1875,\n                "confidence": 0.99902344,\n                "punctuated_word": "working"\n              },\n              {\n                "word": "with",\n                "start": 20.1875,\n                "end": 20.34375,\n                "confidence": 0.9995117,\n                "punctuated_word": "with"\n              },\n              {\n                "word": "you",\n                "start": 20.34375,\n                "end": 20.453125,\n                "confidence": 1,\n                "punctuated_word": "you"\n              },\n              {\n                "word": "this",\n                "start": 20.453125,\n                "end": 20.65625,\n                "confidence": 1,\n                "punctuated_word": "this"\n              },\n              {\n                "word": "morning",\n                "start": 20.65625,\n                "end": 21.09375,\n                "confidence": 0.76000977,\n                "punctuated_word": "morning,"\n              },\n              {\n                "word": "and",\n                "start": 21.09375,\n                "end": 21.25,\n                "confidence": 0.9995117,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "i\'m",\n                "start": 21.25,\n                "end": 21.453125,\n                "confidence": 0.73205566,\n                "punctuated_word": "I\'m"\n              },\n              {\n                "word": "working",\n                "start": 21.453125,\n                "end": 21.78125,\n                "confidence": 0.99560547,\n                "punctuated_word": "working"\n              },\n              {\n                "word": "on",\n                "start": 21.78125,\n                "end": 21.90625,\n                "confidence": 0.99902344,\n                "punctuated_word": "on"\n              },\n              {\n                "word": "getting",\n                "start": 21.90625,\n                "end": 22.171875,\n                "confidence": 0.9980469,\n                "punctuated_word": "getting"\n              },\n              {\n                "word": "my",\n                "start": 22.171875,\n                "end": 22.34375,\n                "confidence": 0.6767578,\n                "punctuated_word": "my"\n              },\n              {\n                "word": "ev",\n                "start": 22.34375,\n                "end": 22.578125,\n                "confidence": 0.94921875,\n                "punctuated_word": "EV"\n              },\n              {\n                "word": "hat",\n                "start": 22.578125,\n                "end": 22.8125,\n                "confidence": 0.6225586,\n                "punctuated_word": "hat"\n              },\n              {\n                "word": "open",\n                "start": 22.8125,\n                "end": 23.3125,\n                "confidence": 0.86987305,\n                "punctuated_word": "open."\n              },\n              {\n                "word": "and",\n                "start": 23.671875,\n                "end": 23.828125,\n                "confidence": 0.91503906,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "i",\n                "start": 23.828125,\n                "end": 23.953125,\n                "confidence": 0.5888672,\n                "punctuated_word": "I"\n              },\n              {\n                "word": "can",\n                "start": 23.953125,\n                "end": 24.15625,\n                "confidence": 0.95166016,\n                "punctuated_word": "can"\n              },\n              {\n                "word": "report",\n                "start": 24.15625,\n                "end": 24.65625,\n                "confidence": 0.7705078,\n                "punctuated_word": "report."\n              },\n              {\n                "word": "it\'s",\n                "start": 25.671875,\n                "end": 25.953125,\n                "confidence": 0.6928711,\n                "punctuated_word": "It\'s"\n              },\n              {\n                "word": "opened",\n                "start": 25.953125,\n                "end": 26.34375,\n                "confidence": 0.9223633,\n                "punctuated_word": "opened"\n              },\n              {\n                "word": "and",\n                "start": 26.34375,\n                "end": 26.546875,\n                "confidence": 0.9838867,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "stowed",\n                "start": 26.546875,\n                "end": 27.046875,\n                "confidence": 0.9860026,\n                "punctuated_word": "stowed."\n              },\n              {\n                "word": "thank",\n                "start": 29,\n                "end": 29.234375,\n                "confidence": 0.97216797,\n                "punctuated_word": "Thank"\n              },\n              {\n                "word": "you",\n                "start": 29.234375,\n                "end": 29.390625,\n                "confidence": 0.9946289,\n                "punctuated_word": "you,"\n              },\n              {\n                "word": "drew",\n                "start": 29.390625,\n                "end": 29.890625,\n                "confidence": 0.99731445,\n                "punctuated_word": "Drew."\n              },\n              {\n                "word": "thank",\n                "start": 30.0625,\n                "end": 30.3125,\n                "confidence": 0.6948242,\n                "punctuated_word": "Thank"\n              },\n              {\n                "word": "you",\n                "start": 30.3125,\n                "end": 30.46875,\n                "confidence": 0.9995117,\n                "punctuated_word": "you"\n              },\n              {\n                "word": "so",\n                "start": 30.46875,\n                "end": 30.671875,\n                "confidence": 0.99853516,\n                "punctuated_word": "so"\n              },\n              {\n                "word": "much",\n                "start": 30.671875,\n                "end": 31.171875,\n                "confidence": 0.9975586,\n                "punctuated_word": "much."\n              },\n              {\n                "word": "tika",\n                "start": 36.8125,\n                "end": 37.3125,\n                "confidence": 0.6920573,\n                "punctuated_word": "Tika."\n              },\n              {\n                "word": "on",\n                "start": 38.15625,\n                "end": 38.34375,\n                "confidence": 0.984375,\n                "punctuated_word": "On"\n              },\n              {\n                "word": "your",\n                "start": 38.34375,\n                "end": 38.5625,\n                "confidence": 0.9995117,\n                "punctuated_word": "your"\n              },\n              {\n                "word": "gcms",\n                "start": 38.5625,\n                "end": 39.0625,\n                "confidence": 0.85058594,\n                "punctuated_word": "GCMs,"\n              },\n              {\n                "word": "take",\n                "start": 39.75,\n                "end": 39.9375,\n                "confidence": 0.69384766,\n                "punctuated_word": "Take"\n              },\n              {\n                "word": "your",\n                "start": 39.9375,\n                "end": 40.15625,\n                "confidence": 1,\n                "punctuated_word": "your"\n              },\n              {\n                "word": "power",\n                "start": 40.15625,\n                "end": 40.46875,\n                "confidence": 0.9980469,\n                "punctuated_word": "power"\n              },\n              {\n                "word": "switches",\n                "start": 40.46875,\n                "end": 40.9375,\n                "confidence": 0.99658203,\n                "punctuated_word": "switches"\n              },\n              {\n                "word": "to",\n                "start": 40.9375,\n                "end": 41.0625,\n                "confidence": 0.9951172,\n                "punctuated_word": "to"\n              },\n              {\n                "word": "bat",\n                "start": 41.0625,\n                "end": 41.5625,\n                "confidence": 0.7492676,\n                "punctuated_word": "bat,"\n              },\n              {\n                "word": "stagger",\n                "start": 41.625,\n                "end": 42.03125,\n                "confidence": 0.93310547,\n                "punctuated_word": "stagger"\n              },\n              {\n                "word": "switch",\n                "start": 42.03125,\n                "end": 42.3125,\n                "confidence": 0.95703125,\n                "punctuated_word": "switch"\n              },\n              {\n                "word": "throws",\n                "start": 42.3125,\n                "end": 42.625,\n                "confidence": 0.7739258,\n                "punctuated_word": "throws,"\n              },\n              {\n                "word": "and",\n                "start": 42.625,\n                "end": 42.78125,\n                "confidence": 0.9995117,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "expect",\n                "start": 42.78125,\n                "end": 43.15625,\n                "confidence": 0.9980469,\n                "punctuated_word": "expect"\n              },\n              {\n                "word": "a",\n                "start": 43.15625,\n                "end": 43.21875,\n                "confidence": 0.91259766,\n                "punctuated_word": "a"\n              },\n              {\n                "word": "warning",\n                "start": 43.21875,\n                "end": 43.53125,\n                "confidence": 1,\n                "punctuated_word": "warning"\n              },\n              {\n                "word": "tone",\n                "start": 43.53125,\n                "end": 44.03125,\n                "confidence": 0.9951172,\n                "punctuated_word": "tone."\n              },\n              {\n                "word": "final",\n                "start": 64.1875,\n                "end": 64.5625,\n                "confidence": 0.32250977,\n                "punctuated_word": "final"\n              },\n              {\n                "word": "steps",\n                "start": 64.5625,\n                "end": 64.875,\n                "confidence": 0.9824219,\n                "punctuated_word": "steps"\n              },\n              {\n                "word": "before",\n                "start": 64.875,\n                "end": 65.125,\n                "confidence": 0.96875,\n                "punctuated_word": "before"\n              },\n              {\n                "word": "they",\n                "start": 65.125,\n                "end": 65.25,\n                "confidence": 0.99121094,\n                "punctuated_word": "they"\n              },\n              {\n                "word": "begin",\n                "start": 65.25,\n                "end": 65.5,\n                "confidence": 0.9995117,\n                "punctuated_word": "begin"\n              },\n              {\n                "word": "the",\n                "start": 65.5,\n                "end": 65.625,\n                "confidence": 0.6542969,\n                "punctuated_word": "the"\n              },\n              {\n                "word": "space",\n                "start": 65.625,\n                "end": 65.875,\n                "confidence": 0.9321289,\n                "punctuated_word": "space"\n              },\n              {\n                "word": "launch",\n                "start": 65.875,\n                "end": 66,\n                "confidence": 0.6043701,\n                "punctuated_word": "launch."\n              },\n              {\n                "word": "copy",\n                "start": 66,\n                "end": 66.5,\n                "confidence": 0.9406738,\n                "punctuated_word": "Copy."\n              },\n              {\n                "word": "check",\n                "start": 66.5625,\n                "end": 66.75,\n                "confidence": 0.9741211,\n                "punctuated_word": "Check"\n              },\n              {\n                "word": "display",\n                "start": 66.75,\n                "end": 67.25,\n                "confidence": 0.99365234,\n                "punctuated_word": "display"\n              },\n              {\n                "word": "switch",\n                "start": 67.25,\n                "end": 67.5625,\n                "confidence": 0.9921875,\n                "punctuated_word": "switch"\n              },\n              {\n                "word": "functional",\n                "start": 67.5625,\n                "end": 68.0625,\n                "confidence": 0.9577637,\n                "punctuated_word": "functional."\n              },\n              {\n                "word": "tracy",\n                "start": 74.125,\n                "end": 74.5,\n                "confidence": 0.8679199,\n                "punctuated_word": "Tracy,"\n              },\n              {\n                "word": "how",\n                "start": 74.5,\n                "end": 74.625,\n                "confidence": 0.9970703,\n                "punctuated_word": "how"\n              },\n              {\n                "word": "important",\n                "start": 74.625,\n                "end": 75.0625,\n                "confidence": 1,\n                "punctuated_word": "important"\n              },\n              {\n                "word": "is",\n                "start": 75.0625,\n                "end": 75.25,\n                "confidence": 0.9946289,\n                "punctuated_word": "is"\n              },\n              {\n                "word": "this",\n                "start": 75.25,\n                "end": 75.5,\n                "confidence": 0.86035156,\n                "punctuated_word": "this"\n              },\n              {\n                "word": "this",\n                "start": 75.5,\n                "end": 75.875,\n                "confidence": 0.49682617,\n                "punctuated_word": "this"\n              },\n              {\n                "word": "regarding",\n                "start": 76.75,\n                "end": 77.1875,\n                "confidence": 0.36572266,\n                "punctuated_word": "regarding"\n              },\n              {\n                "word": "it",\n                "start": 77.1875,\n                "end": 77.3125,\n                "confidence": 0.53967285,\n                "punctuated_word": "it?"\n              },\n              {\n                "word": "there",\n                "start": 77.3125,\n                "end": 77.5,\n                "confidence": 0.9682617,\n                "punctuated_word": "There"\n              },\n              {\n                "word": "is",\n                "start": 77.5,\n                "end": 77.92,\n                "confidence": 0.85546875,\n                "punctuated_word": "is"\n              },\n              {\n                "word": "sounds",\n                "start": 78,\n                "end": 78.1875,\n                "confidence": 0.54541016,\n                "punctuated_word": "Sounds"\n              },\n              {\n                "word": "like",\n                "start": 78.1875,\n                "end": 78.3125,\n                "confidence": 0.83496094,\n                "punctuated_word": "like"\n              },\n              {\n                "word": "seems",\n                "start": 78.3125,\n                "end": 78.5,\n                "confidence": 0.73046875,\n                "punctuated_word": "seems"\n              },\n              {\n                "word": "like",\n                "start": 78.5,\n                "end": 78.6875,\n                "confidence": 0.99902344,\n                "punctuated_word": "like"\n              },\n              {\n                "word": "a",\n                "start": 78.6875,\n                "end": 78.75,\n                "confidence": 0.9975586,\n                "punctuated_word": "a"\n              },\n              {\n                "word": "lot",\n                "start": 78.75,\n                "end": 79,\n                "confidence": 0.9863281,\n                "punctuated_word": "lot"\n              },\n              {\n                "word": "to",\n                "start": 79,\n                "end": 79.125,\n                "confidence": 0.9970703,\n                "punctuated_word": "to"\n              },\n              {\n                "word": "remember",\n                "start": 79.125,\n                "end": 79.5,\n                "confidence": 1,\n                "punctuated_word": "remember"\n              },\n              {\n                "word": "on",\n                "start": 79.5,\n                "end": 79.625,\n                "confidence": 0.99072266,\n                "punctuated_word": "on"\n              },\n              {\n                "word": "your",\n                "start": 79.625,\n                "end": 79.8125,\n                "confidence": 0.9995117,\n                "punctuated_word": "your"\n              },\n              {\n                "word": "own",\n                "start": 79.8125,\n                "end": 80.125,\n                "confidence": 0.9765625,\n                "punctuated_word": "own."\n              },\n              {\n                "word": "absolutely",\n                "start": 80.125,\n                "end": 80.625,\n                "confidence": 0.998291,\n                "punctuated_word": "Absolutely."\n              },\n              {\n                "word": "take",\n                "start": 81.875,\n                "end": 82.125,\n                "confidence": 0.9589844,\n                "punctuated_word": "Take"\n              },\n              {\n                "word": "power",\n                "start": 82.125,\n                "end": 82.5625,\n                "confidence": 0.9663086,\n                "punctuated_word": "power"\n              },\n              {\n                "word": "eighty",\n                "start": 82.5625,\n                "end": 82.8125,\n                "confidence": 0.5957031,\n                "punctuated_word": "eighty"\n              },\n              {\n                "word": "one",\n                "start": 82.8125,\n                "end": 83.125,\n                "confidence": 0.9951172,\n                "punctuated_word": "one"\n              },\n              {\n                "word": "eighty",\n                "start": 83.125,\n                "end": 83.5625,\n                "confidence": 0.7758789,\n                "punctuated_word": "eighty"\n              },\n              {\n                "word": "two",\n                "start": 83.5625,\n                "end": 84.0625,\n                "confidence": 0.78515625,\n                "punctuated_word": "two,"\n              },\n              {\n                "word": "two",\n                "start": 84.1875,\n                "end": 84.375,\n                "confidence": 0.9555664,\n                "punctuated_word": "two"\n              },\n              {\n                "word": "switches",\n                "start": 84.375,\n                "end": 84.75,\n                "confidence": 0.9995117,\n                "punctuated_word": "switches"\n              },\n              {\n                "word": "to",\n                "start": 84.75,\n                "end": 84.9375,\n                "confidence": 0.99316406,\n                "punctuated_word": "to"\n              },\n              {\n                "word": "off",\n                "start": 84.9375,\n                "end": 85.3125,\n                "confidence": 0.75268555,\n                "punctuated_word": "off,"\n              },\n              {\n                "word": "o",\n                "start": 85.3125,\n                "end": 85.4375,\n                "confidence": 0.96533203,\n                "punctuated_word": "o"\n              },\n              {\n                "word": "f",\n                "start": 85.4375,\n                "end": 85.625,\n                "confidence": 0.9379883,\n                "punctuated_word": "f"\n              },\n              {\n                "word": "f",\n                "start": 85.625,\n                "end": 86.125,\n                "confidence": 0.8154297,\n                "punctuated_word": "f."\n              },\n              {\n                "word": "and",\n                "start": 86.375,\n                "end": 86.625,\n                "confidence": 0.83935547,\n                "punctuated_word": "And"\n              },\n              {\n                "word": "christina",\n                "start": 86.625,\n                "end": 87.125,\n                "confidence": 0.74902344,\n                "punctuated_word": "Christina"\n              },\n              {\n                "word": "and",\n                "start": 87.4375,\n                "end": 87.665,\n                "confidence": 0.6147461,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "just",\n                "start": 87.75,\n                "end": 88,\n                "confidence": 0.96240234,\n                "punctuated_word": "just"\n              },\n              {\n                "word": "could",\n                "start": 88,\n                "end": 88.1875,\n                "confidence": 0.4716797,\n                "punctuated_word": "could"\n              },\n              {\n                "word": "have",\n                "start": 88.1875,\n                "end": 88.4375,\n                "confidence": 0.9995117,\n                "punctuated_word": "have"\n              },\n              {\n                "word": "enough",\n                "start": 88.4375,\n                "end": 88.75,\n                "confidence": 1,\n                "punctuated_word": "enough"\n              },\n              {\n                "word": "work",\n                "start": 88.75,\n                "end": 89.25,\n                "confidence": 1,\n                "punctuated_word": "work"\n              },\n              {\n                "word": "with",\n                "start": 89.25,\n                "end": 89.375,\n                "confidence": 0.9916992,\n                "punctuated_word": "with"\n              },\n              {\n                "word": "their",\n                "start": 89.375,\n                "end": 89.625,\n                "confidence": 0.99365234,\n                "punctuated_word": "their"\n              },\n              {\n                "word": "hands",\n                "start": 89.625,\n                "end": 89.9375,\n                "confidence": 0.9970703,\n                "punctuated_word": "hands"\n              },\n              {\n                "word": "and",\n                "start": 89.9375,\n                "end": 90.125,\n                "confidence": 0.95947266,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "feet",\n                "start": 90.125,\n                "end": 90.375,\n                "confidence": 0.9951172,\n                "punctuated_word": "feet"\n              },\n              {\n                "word": "and",\n                "start": 90.375,\n                "end": 90.5625,\n                "confidence": 0.6972656,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "their",\n                "start": 90.5625,\n                "end": 90.75,\n                "confidence": 0.99365234,\n                "punctuated_word": "their"\n              },\n              {\n                "word": "brain",\n                "start": 90.75,\n                "end": 91.0625,\n                "confidence": 0.99902344,\n                "punctuated_word": "brain"\n              },\n              {\n                "word": "outside",\n                "start": 91.0625,\n                "end": 91.5625,\n                "confidence": 0.99902344,\n                "punctuated_word": "outside"\n              },\n              {\n                "word": "that",\n                "start": 91.625,\n                "end": 91.9375,\n                "confidence": 0.80859375,\n                "punctuated_word": "that"\n              },\n              {\n                "word": "it",\n                "start": 91.9375,\n                "end": 92.0625,\n                "confidence": 0.99072266,\n                "punctuated_word": "it"\n              },\n              {\n                "word": "really",\n                "start": 92.0625,\n                "end": 92.3125,\n                "confidence": 0.9995117,\n                "punctuated_word": "really"\n              },\n              {\n                "word": "helps",\n                "start": 92.3125,\n                "end": 92.625,\n                "confidence": 0.9975586,\n                "punctuated_word": "helps"\n              },\n              {\n                "word": "to",\n                "start": 92.625,\n                "end": 92.75,\n                "confidence": 0.99853516,\n                "punctuated_word": "to"\n              },\n              {\n                "word": "have",\n                "start": 92.75,\n                "end": 92.9375,\n                "confidence": 0.9995117,\n                "punctuated_word": "have"\n              },\n              {\n                "word": "someone",\n                "start": 92.9375,\n                "end": 93.375,\n                "confidence": 0.9995117,\n                "punctuated_word": "someone"\n              },\n              {\n                "word": "like",\n                "start": 93.375,\n                "end": 93.625,\n                "confidence": 0.65478516,\n                "punctuated_word": "like"\n              },\n              {\n                "word": "stephanie",\n                "start": 93.625,\n                "end": 94.125,\n                "confidence": 0.89746094,\n                "punctuated_word": "Stephanie."\n              },\n              {\n                "word": "new",\n                "start": 94.3125,\n                "end": 94.5,\n                "confidence": 0.40356445,\n                "punctuated_word": "New"\n              },\n              {\n                "word": "powerboat",\n                "start": 94.5,\n                "end": 95,\n                "confidence": 0.618042,\n                "punctuated_word": "powerboat"\n              },\n              {\n                "word": "off",\n                "start": 95.0625,\n                "end": 95.5625,\n                "confidence": 0.9050293,\n                "punctuated_word": "off."\n              },\n              {\n                "word": "dcms",\n                "start": 110.25,\n                "end": 110.75,\n                "confidence": 0.6906738,\n                "punctuated_word": "DCMs."\n              },\n              {\n                "word": "this",\n                "start": 111,\n                "end": 111.26,\n                "confidence": 0.99072266,\n                "punctuated_word": "This"\n              },\n              {\n                "word": "connect",\n                "start": 111.3125,\n                "end": 111.625,\n                "confidence": 0.9926758,\n                "punctuated_word": "connect"\n              },\n              {\n                "word": "your",\n                "start": 111.625,\n                "end": 111.875,\n                "confidence": 0.98583984,\n                "punctuated_word": "your"\n              },\n              {\n                "word": "scus",\n                "start": 111.875,\n                "end": 112.3125,\n                "confidence": 0.8598633,\n                "punctuated_word": "SCUs"\n              },\n              {\n                "word": "from",\n                "start": 112.3125,\n                "end": 112.5,\n                "confidence": 0.99658203,\n                "punctuated_word": "from"\n              },\n              {\n                "word": "your",\n                "start": 112.5,\n                "end": 112.6875,\n                "confidence": 0.99902344,\n                "punctuated_word": "your"\n              },\n              {\n                "word": "dcms",\n                "start": 112.6875,\n                "end": 113.1875,\n                "confidence": 0.9902344,\n                "punctuated_word": "DCMs"\n              },\n              {\n                "word": "and",\n                "start": 113.375,\n                "end": 113.625,\n                "confidence": 0.90625,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "stow",\n                "start": 113.625,\n                "end": 113.875,\n                "confidence": 0.9626465,\n                "punctuated_word": "stow"\n              },\n              {\n                "word": "the",\n                "start": 113.875,\n                "end": 114.0625,\n                "confidence": 0.99853516,\n                "punctuated_word": "the"\n              },\n              {\n                "word": "scus",\n                "start": 114.0625,\n                "end": 114.5,\n                "confidence": 0.9953613,\n                "punctuated_word": "SCUs"\n              },\n              {\n                "word": "in",\n                "start": 114.5,\n                "end": 114.625,\n                "confidence": 0.9926758,\n                "punctuated_word": "in"\n              },\n              {\n                "word": "the",\n                "start": 114.625,\n                "end": 114.8125,\n                "confidence": 0.9995117,\n                "punctuated_word": "the"\n              },\n              {\n                "word": "pouch",\n                "start": 114.8125,\n                "end": 115.3125,\n                "confidence": 0.9934082,\n                "punctuated_word": "pouch."\n              },\n              {\n                "word": "so",\n                "start": 119.75,\n                "end": 119.9375,\n                "confidence": 0.47851562,\n                "punctuated_word": "So"\n              },\n              {\n                "word": "not",\n                "start": 119.9375,\n                "end": 120.1875,\n                "confidence": 0.96191406,\n                "punctuated_word": "not"\n              },\n              {\n                "word": "only",\n                "start": 120.1875,\n                "end": 120.4375,\n                "confidence": 0.9980469,\n                "punctuated_word": "only"\n              },\n              {\n                "word": "does",\n                "start": 120.4375,\n                "end": 120.625,\n                "confidence": 0.99658203,\n                "punctuated_word": "does"\n              },\n              {\n                "word": "stephanie",\n                "start": 120.625,\n                "end": 121.125,\n                "confidence": 0.9975586,\n                "punctuated_word": "Stephanie"\n              },\n              {\n                "word": "thirty",\n                "start": 142.375,\n                "end": 142.75,\n                "confidence": 0.60253906,\n                "punctuated_word": "Thirty"\n              },\n              {\n                "word": "eight",\n                "start": 142.75,\n                "end": 143,\n                "confidence": 0.99658203,\n                "punctuated_word": "eight"\n              },\n              {\n                "word": "am",\n                "start": 143,\n                "end": 143.25,\n                "confidence": 0.99902344,\n                "punctuated_word": "AM"\n              },\n              {\n                "word": "central",\n                "start": 143.25,\n                "end": 143.5,\n                "confidence": 0.42382812,\n                "punctuated_word": "central"\n              },\n              {\n                "word": "time",\n                "start": 143.5,\n                "end": 143.75,\n                "confidence": 0.8833008,\n                "punctuated_word": "time."\n              },\n              {\n                "word": "a",\n                "start": 143.75,\n                "end": 143.875,\n                "confidence": 0.98779297,\n                "punctuated_word": "A"\n              },\n              {\n                "word": "little",\n                "start": 143.875,\n                "end": 144.125,\n                "confidence": 0.9995117,\n                "punctuated_word": "little"\n              },\n              {\n                "word": "ahead",\n                "start": 144.125,\n                "end": 144.375,\n                "confidence": 0.99853516,\n                "punctuated_word": "ahead"\n              },\n              {\n                "word": "of",\n                "start": 144.375,\n                "end": 144.5,\n                "confidence": 0.9794922,\n                "punctuated_word": "of"\n              },\n              {\n                "word": "schedule",\n                "start": 144.5,\n                "end": 144.875,\n                "confidence": 1,\n                "punctuated_word": "schedule"\n              },\n              {\n                "word": "about",\n                "start": 144.875,\n                "end": 145.125,\n                "confidence": 0.4819336,\n                "punctuated_word": "about"\n              },\n              {\n                "word": "twelve",\n                "start": 145.125,\n                "end": 145.5,\n                "confidence": 0.9995117,\n                "punctuated_word": "twelve"\n              },\n              {\n                "word": "minutes",\n                "start": 145.5,\n                "end": 145.875,\n                "confidence": 0.84594727,\n                "punctuated_word": "minutes,"\n              },\n              {\n                "word": "but",\n                "start": 145.875,\n                "end": 146.375,\n                "confidence": 0.9819336,\n                "punctuated_word": "but"\n              },\n              {\n                "word": "that",\n                "start": 146.625,\n                "end": 146.875,\n                "confidence": 0.6904297,\n                "punctuated_word": "That"\n              },\n              {\n                "word": "gets",\n                "start": 146.875,\n                "end": 147.125,\n                "confidence": 0.99658203,\n                "punctuated_word": "gets"\n              },\n              {\n                "word": "us",\n                "start": 147.125,\n                "end": 147.375,\n                "confidence": 0.99902344,\n                "punctuated_word": "us"\n              },\n              {\n                "word": "started",\n                "start": 147.375,\n                "end": 147.875,\n                "confidence": 0.9975586,\n                "punctuated_word": "started"\n              },\n              {\n                "word": "on",\n                "start": 147.875,\n                "end": 148,\n                "confidence": 1,\n                "punctuated_word": "on"\n              },\n              {\n                "word": "today\'s",\n                "start": 148,\n                "end": 148.375,\n                "confidence": 0.9995117,\n                "punctuated_word": "today\'s"\n              },\n              {\n                "word": "historic",\n                "start": 148.375,\n                "end": 148.875,\n                "confidence": 0.99853516,\n                "punctuated_word": "historic"\n              },\n              {\n                "word": "spacewalk",\n                "start": 148.875,\n                "end": 149.375,\n                "confidence": 0.98706055,\n                "punctuated_word": "spacewalk."\n              },\n              {\n                "word": "andrew",\n                "start": 154.25,\n                "end": 154.5,\n                "confidence": 0.14416504,\n                "punctuated_word": "Andrew"\n              },\n              {\n                "word": "morgan",\n                "start": 154.5,\n                "end": 155,\n                "confidence": 0.9848633,\n                "punctuated_word": "Morgan"\n              },\n              {\n                "word": "there",\n                "start": 155,\n                "end": 155.125,\n                "confidence": 0.81103516,\n                "punctuated_word": "there."\n              },\n              {\n                "word": "he\'s",\n                "start": 155.125,\n                "end": 155.375,\n                "confidence": 0.9453125,\n                "punctuated_word": "He\'s"\n              },\n              {\n                "word": "been",\n                "start": 155.375,\n                "end": 155.5,\n                "confidence": 0.5917969,\n                "punctuated_word": "been"\n              },\n              {\n                "word": "wishing",\n                "start": 155.5,\n                "end": 155.6875,\n                "confidence": 0.5625,\n                "punctuated_word": "wishing"\n              },\n              {\n                "word": "the",\n                "start": 155.6875,\n                "end": 155.875,\n                "confidence": 0.5908203,\n                "punctuated_word": "the"\n              },\n              {\n                "word": "crew",\n                "start": 155.875,\n                "end": 156.125,\n                "confidence": 1,\n                "punctuated_word": "crew"\n              },\n              {\n                "word": "luck",\n                "start": 156.125,\n                "end": 156.375,\n                "confidence": 0.8930664,\n                "punctuated_word": "luck."\n              },\n              {\n                "word": "he\'s",\n                "start": 156.375,\n                "end": 156.5,\n                "confidence": 0.50512695,\n                "punctuated_word": "He\'s"\n              },\n              {\n                "word": "being",\n                "start": 156.5,\n                "end": 156.75,\n                "confidence": 0.3720703,\n                "punctuated_word": "being"\n              },\n              {\n                "word": "made",\n                "start": 156.75,\n                "end": 157,\n                "confidence": 0.7451172,\n                "punctuated_word": "made"\n              },\n              {\n                "word": "in",\n                "start": 157,\n                "end": 157.25,\n                "confidence": 0.81689453,\n                "punctuated_word": "in"\n              },\n              {\n                "word": "pouch",\n                "start": 157.25,\n                "end": 157.5,\n                "confidence": 0.52978516,\n                "punctuated_word": "pouch"\n              },\n              {\n                "word": "and",\n                "start": 157.5,\n                "end": 157.75,\n                "confidence": 0.9091797,\n                "punctuated_word": "and"\n              },\n              {\n                "word": "dcm",\n                "start": 157.75,\n                "end": 158.25,\n                "confidence": 0.7583008,\n                "punctuated_word": "DCM"\n              },\n              {\n                "word": "cover",\n                "start": 158.25,\n                "end": 158.5,\n                "confidence": 0.99072266,\n                "punctuated_word": "cover"\n              },\n              {\n                "word": "clothes",\n                "start": 158.5,\n                "end": 159,\n                "confidence": 0.83032227,\n                "punctuated_word": "clothes."\n              },\n              {\n                "word": "copy",\n                "start": 162.75,\n                "end": 162.875,\n                "confidence": 0.99487305,\n                "punctuated_word": "Copy."\n              },\n              {\n                "word": "you",\n                "start": 162.875,\n                "end": 163.125,\n                "confidence": 0.96972656,\n                "punctuated_word": "You"\n              },\n              {\n                "word": "need",\n                "start": 163.125,\n                "end": 163.5,\n                "confidence": 0.92822266,\n                "punctuated_word": "need"\n              },\n              {\n                "word": "to",\n                "start": 163.5,\n                "end": 164,\n                "confidence": 0.9824219,\n                "punctuated_word": "to."\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}',
                type: 'code',
                language: 'json',
              },
            ],
          },
        },
      },
      transcript: {
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
                      '<Red>[Speaker 0:]</Red> And, Jessica, Christina, we are so proud of you. I’m gonna do great today. We’ll be waiting for you here in a couple hours when you get home. I’m gonna hand you over to Stephanie now.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      '<Blue>[Speaker 1:]</Blue> Have a great great EVA. Drew, thank you so much. It’s been our pleasure working with you this morning, and working on getting my EV hat open. and I can report. It’s opened and stowed. Thank you, Drew. Thank you so much.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      '<Red>[Speaker 2:] </Red>Tika. On your GCMs, Take your power switches to bat, stagger switch throws, and expect a warning tone.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      '<Blue>[Speaker 3:]</Blue> Final steps before they begin the space launch. Copy. Check display switch functional. Tracy, how important is this regarding it? There is Sounds like seems like a lot to remember on your own. Absolutely.',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      '<Red>[Speaker 2:]</Red> Take power eighty one eighty two, two switches to off, o f f. And Christina and just could have enough work with their hands and feet and their brain outside that it really helps to have someone like Stephanie. New powerboat off. DCMs. This connect your SCUs from your DCMs and stow the SCUs in the pouch. So not only does Stephanie',
                  },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'span',
                    value:
                      '<Blue>[Speaker 3:] </Blue>Thirty eight AM central time. A little ahead of schedule about twelve minutes, but That gets us started on today’s historic spacewalk. Andrew Morgan there. He’s been wishing the crew luck. He’s being made in pouch and DCM cover clothes.\n',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    {
      id: '121259484',
      __typename: 'ComponentFeatureListRecord',
      internalName: 'Slidebox Item | Live streaming',
      optionalHeading: {
        id: '121259480',
        __typename: 'ComponentHeadingRecord',
        internalName: 'Slidebox Item | Live streaming | Heading',
        animate: false,
        eyebrow: '',
        heading: 'Live Streaming',
        headingColor: 'White',
        headingType: 'H2',
        desktopHeadingSize: 'lg',
        mobileHeadingSize: 'sm',
        tabletHeadingSize: 'md',
        gradientBackgroundColor: 'none',
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
                      value: '',
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
      audio: null,
      features: [],
      layout: 'live_streaming',
    },
    {
      id: '119297277',
      __typename: 'ComponentFeatureListRecord',
      internalName: 'Audio Intelligence | Slidebox Item',
      optionalHeading: {
        id: '119297278',
        __typename: 'ComponentHeadingRecord',
        internalName: 'Audio Intelligence | Slidebox Item | Heading',
        animate: false,
        eyebrow: '',
        heading: 'Audio Intelligence',
        headingColor: 'White',
        headingType: 'H2',
        desktopHeadingSize: 'lg',
        mobileHeadingSize: 'sm',
        tabletHeadingSize: 'md',
        gradientBackgroundColor: 'none',
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
                      value: '',
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
      audio: {
        id: '48283314',
        title: null,
        filename: 'deepgram-btf-2.mp3',
        size: 1838930,
        alt: null,
        url: 'https://www.datocms-assets.com/96965/1685040357-deepgram-btf-2.mp3',
        width: null,
        height: null,
      },
      features: [
        {
          id: '118568212',
          __typename: 'MenuFeatureItemRecord',
          internalName: 'Summarization',
          heading: 'Summarization',
          subhead:
            'Summarize sections of content in your audio for better readability, ease of use, and analysis with [Summarization](https://developers.deepgram.com/docs/summarization).',
          featureCode: 'summarize=true&punctuate=true',
          content: {
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
                          'Alright. I’m ready. Good evening. I’m Dr. Emmett Brown. I’m standing on the parking lot at Twin Pines Mall. It’s Saturday Morning October twenty sixth nineteen eighty five one eighteen AM. And this is temporal experiment number one. Come on Einey. Hey, boy. Get in there. At a boy. In you go. Sit down. Get your seatbelt on. That’s it. Okay. Please note, that Einstein’s clock is in precise synchronization with my control watch. Got it? Right. Check Doc. Good. Have a good trip Einstein. Watch your head. You got that thing hooked up to the car? Watch this. Yeah Ok. Not me the car, the car. If my calculations are correct. When this baby hits eighty eight miles per hour, you’re gonna see some serious s**t.',
                      },
                    ],
                  },
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“summary”:',
                          },
                          {
                            type: 'span',
                            value:
                              ' “An experiment is being conducted. The speaker is Dr. Emmett Brown and he gives his location and the date and time. Someone is traveling by car and the experiment is about to begin.”',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Watch this watch this. What did I tell you? Eighty eight miles per hour. The thermal displacement occurred exactly what? One O two AM and zero seconds. Jesus Christ. Jesus Christ, doc, you disintegrated Einstein. Calm down Marty. I didn’t disintegrate anything. The molecular structure of both Einstein and the car are completely intact. Then where hell are they? The appropriate question is, when the hell are they? You see, Einstein has just become the world’s first time traveler. I set him into the future. One minute into the future to be exact. Now precisely one twenty one AM and zero seconds we shall catch up with him and the time machine. Wait a minute. Wait a minute. Doc. Are you telling me that you built a time machine out of a Delorean?',
                      },
                    ],
                  },
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“summary”:',
                          },
                          {
                            type: 'span',
                            value:
                              ' “There is concern over the traveler’s safety but everything is intact. The event is the world’s first time travel experiment made out of a Delorean.”',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: ' ',
                      },
                    ],
                  },
                ],
              },
            },
          },
          sideContent: {
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
          isTranslationLayout: null,
        },
        {
          id: '118568223',
          __typename: 'MenuFeatureItemRecord',
          internalName: 'Sentiment analysis',
          heading: 'Sentiment analysis',
          subhead:
            'Determine positive, neutral, or negative opinions in the transcript of your audio for better CX, brand health, and more with sentiment analysis.',
          featureCode: 'sentiment_analysis=true',
          content: {
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
                          'Alright. I’m ready. Good evening. I’m Dr. Emmett Brown. I’m standing on the parking lot at Twin Pines Mall. It’s Saturday Morning October twenty sixth nineteen eighty five one eighteen AM. And this is temporal experiment number one.',
                      },
                    ],
                  },
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“sentiment”:',
                          },
                          {
                            type: 'span',
                            value: ' “neutral” 😐',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Come on Einey. Hey, boy. Get in there. At a boy. In you go. Sit down. Get your seatbelt on. That’s it. Okay. Please note, that Einstein’s clock is in precise synchronization with my control watch. Got it? Right. Check Doc. Good. Have a good trip Einstein. Watch your head.',
                      },
                    ],
                  },
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“sentiment”: ',
                          },
                          {
                            type: 'span',
                            value: '“positive” 😀',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'You got that thing hooked up to the car? Watch this. Yeah Ok. Not me the car, the car. If my calculations are correct. When this baby hits eighty eight miles per hour, you’re gonna see some serious s**t.',
                      },
                    ],
                  },
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“sentiment”: ',
                          },
                          {
                            type: 'span',
                            value: '“positive” 😀',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Watch this watch this. What did I tell you? Eighty eight miles per hour. The thermal displacement occurred exactly what? One O two AM and zero seconds.',
                      },
                    ],
                  },
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“sentiment”: ',
                          },
                          {
                            type: 'span',
                            value: '“positive” 😀',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          },
          sideContent: {
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
          isTranslationLayout: null,
        },
        {
          id: '118568213',
          __typename: 'MenuFeatureItemRecord',
          internalName: 'Topic detection',
          heading: 'Topic detection',
          subhead:
            'Use [topic detection](https://developers.deepgram.com/docs/topic-detection) to identify and label key topics from your audio for ease of search and to discover trends and insights.',
          featureCode: 'detect_topics=true&punctuate=true',
          content: {
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
                          'Alright. I’m ready. Good evening. I’m Dr. Emmett Brown. I’m standing on the parking lot at Twin Pines Mall. It’s Saturday Morning October twenty sixth nineteen eighty five one eighteen AM. And this is temporal experiment number one. Come on Einey. Hey, boy. Get in there. At a boy. In you go. Sit down. Get your seatbelt on. That’s it. Okay. Please note, that Einstein’s clock is in precise synchronization with my control watch. Got it? Right. Check Doc. Good. Have a good trip Einstein. Watch your head. You got that thing hooked up to the car? Watch this. Yeah Ok. Not me the car, the car. If my calculations are correct. When this baby hits eighty eight miles per hour, you’re gonna see some serious s**t.',
                      },
                    ],
                  },
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“topics”:',
                          },
                          {
                            type: 'span',
                            value: ' “introduction, experiment, driving”',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Watch this watch this. What did I tell you? Eighty eight miles per hour. The thermal displacement occurred exactly what? One O two AM and zero seconds. Jesus Christ. Jesus Christ, doc, you disintegrated Einstein. Calm down Marty. I didn’t disintegrate anything. The molecular structure of both Einstein and the car are completely intact. Then where hell are they? The appropriate question is, when the hell are they? You see, Einstein has just become the world’s first time traveler. I set him into the future. One minute into the future to be exact. Now precisely one twenty one AM and zero seconds we shall catch up with him and the time machine. Wait a minute. Wait a minute. Doc. Are you telling me that you built a time machine out of a delorean?',
                      },
                    ],
                  },
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“topics”:',
                          },
                          {
                            type: 'span',
                            value: ' “speed, physics, time travel”',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          },
          sideContent: {
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
          isTranslationLayout: null,
        },
        {
          id: '118568210',
          __typename: 'MenuFeatureItemRecord',
          internalName: 'Entity detection',
          heading: 'Entity detection',
          subhead:
            'Identify a variety of entities spoken in audio such as names, locations, account numbers, and more with [entity detection](https://developers.deepgram.com/docs/detect-entities).',
          featureCode: 'detect_entities=true',
          content: {
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
                          'Alright. I’m ready. Good evening. I’m <Yellow3>Dr. Emmett Brown</Yellow3>. I’m standing on the parking lot at <Yellow2>Twin Pines Mall</Yellow2>. It’s Saturday Morning <Yellow1>October 26th, 1985</Yellow1> <Blue1>1:18 AM</Blue1>. And this is temporal experiment number 1. Come on <Yellow3>Einey</Yellow3>. Hey, boy. Get in there. At a boy. In you go. Sit down. Get your seatbelt on. That’s it. Okay. Please note, that <Yellow3>Einstein’s</Yellow3> clock is in precise synchronization with my control watch. Got it? Right. Check Doc. Good. Have a good trip <Yellow3>Einstein</Yellow3>. Watch your head. You got that thing hooked up to the car? Watch this. Yeah Ok. Not me the car, the car. If my calculations are correct. When this baby hits <Blue2>88 miles per hour</Blue2>, you’re gonna see some serious s**t. Watch this watch this. What did I tell you? <Blue2>88 miles per hour</Blue2>. The thermal displacement occurred exactly what? <Blue1>1:02 AM</Blue1> and zero seconds. Jesus Christ. Jesus Christ, Doc, you disintegrated <Yellow3>Einstein</Yellow3>. Calm down <Yellow3>Marty</Yellow3>. I didn’t disintegrate anything. The molecular structure of both Einstein and the car are completely intact. Then where hell are they? The appropriate question is, when the hell are they? You see, Einstein has just become the world’s first time traveler. I set him into the future. <Blue3>1</Blue3> minute into the future to be exact. Now precisely <Blue1>1:21 AM</Blue1> and <Blue3>0</Blue3> seconds we shall catch up with him and the time machine. Wait a minute. Wait a minute. Doc. Are you telling me that you built a time machine out of a Delorean?',
                      },
                    ],
                  },
                ],
              },
            },
          },
          sideContent: {
            blocks: [],
            links: [],
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
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
                                value: '<Yellow3>| Person</Yellow3>',
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
                                value: '<Yellow2>| Location</Yellow2>',
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
                                value: '<Yellow1>| Date</Yellow1>',
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
                                value: '<Blue1>| Time</Blue1>',
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
                                value: '<Blue3>| Cardinal number</Blue3>',
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
                                value: '<Blue2>| Quantity</Blue2>',
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
                                value: '<Pink>| Organization</Pink>',
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
          isTranslationLayout: null,
        },
        {
          id: '118568217',
          __typename: 'MenuFeatureItemRecord',
          internalName: 'Language translation',
          heading: 'Language translation',
          subhead:
            'Convert your transcript into dozens of available languages such as Spanish, French, Hindi, and many others with language translation.',
          featureCode: 'translate=true',
          content: {
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
                          'Alright. I’m ready. Good evening. I’m Dr. Emmett Brown. I’m standing on the parking lot at Twin Pines Mall. It’s Saturday Morning October twenty sixth nineteen eighty five one eighteen AM. And this is temporal experiment number one. Come on Einey. Hey, boy. Get in there. At a boy. In you go. Sit down. Get your seatbelt on. That’s it. Okay. Please note, that Einstein’s clock is in precise synchronization with my control watch. Got it? Right. Check Doc. Good. Have a good trip Einstein. Watch your head. You got that thing hooked up to the car? Watch this. Yeah Ok. Not me the car, the car. If my calculations are correct. When this baby hits eighty eight miles per hour, you’re gonna see some serious s**t. Watch this watch this. What did I tell you? Eighty eight miles per hour. The thermal displacement occurred exactly what? One O two AM and zero seconds. Jesus Christ. Jesus Christ, doc, you disintegrated Einstein. Calm down Marty. I didn’t disintegrate anything. The molecular structure of both',
                      },
                    ],
                  },
                ],
              },
            },
          },
          sideContent: {
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
                          'Bien. Estoy listo. Buenas noches. Soy el Dr. Emmett Brown. Estoy parado en el estacionamiento del Twin Pines Mall. Es sábado por la mañana, veintiséis de octubre de mil novecientos ochenta y cinco, uno dieciocho de la mañana. Y este es el experimento temporal número uno. Vamos Einey. Oye, chico. Entra allí. a un chico. En ti vas. Siéntate. Ponte el cinturón de seguridad. Eso es todo. Bueno. Tenga en cuenta que el reloj de Einstein está en sincronización precisa con mi reloj de control. ¿Entendido? Correcto. Listo, Doc. Bien. Que tengas buen viaje Einstein. Cuidado con tu cabeza. ¿Tienes esa cosa conectada al coche? Ve esto. Sí, ok. No yo el coche, el coche. Si mis cálculos son correctos. Cuando este bebé llegue a ochenta y ocho millas por hora, vas a ver una m****a seria. Mira esto mira esto. ¿Qué te dije? Ochenta y ocho millas por hora. El desplazamiento térmico ocurrió exactamente a la una y veintidós AM y cero segundos. Jesucristo. Jesucristo, doc, desintegraste a Einstein. Tranquilo Marti. No desintegré nada. La estructura molecular tanto de Einstein como del automóvil están completamente intactas. Entonces, ¿dónde diablos están? La pregunta apropiada es, ¿cuándo diablos están? Verás, Einstein acaba de convertirse en el primer viajero en el tiempo del mundo. Lo puse en el futuro. Un minuto en el futuro para ser exactos. Ahora, exactamente a la una y veintiuna de la mañana y cero segundos, lo alcanzaremos a él y a la máquina del tiempo. Espera un minuto. Espera un minuto. Doc. ¿Me estás diciendo que construiste una máquina del tiempo con un DeLorean?',
                      },
                    ],
                  },
                ],
              },
            },
          },
          isTranslationLayout: true,
        },
        {
          id: '118558200',
          __typename: 'MenuFeatureItemRecord',
          internalName: 'Speaker diarization',
          heading: 'Speaker diarization',
          subhead:
            'Know who’s talking. Detect and label speaker changes throughout a conversation with [speaker diarization](https://developers.deepgram.com/docs/diarization).',
          featureCode: 'diarize=true',
          content: {
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
                        value: '<Blue>Speaker 0</Blue>: Alright. I’m ready.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          '<Green>Speaker 1</Green>: Good evening. I’m Dr. Emmett Brown. I’m standing on the parking lot at Twin Pines Mall. It’s Saturday Morning October twenty sixth nineteen eighty five one eighteen AM. And this is temporal experiment number one. Come on Einey. Hey, boy. Get in there. At a boy. In you go. Sit down. Get your seatbelt on. That’s it.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: '<Blue>Speaker 0</Blue>: Okay.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          '<Green>Speaker 1</Green>: Please note, that Einstein’s clock is in precise synchronization with my control watch. Got it?',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: '<Blue>Speaker 0</Blue>: Right. Check doc.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: '<Green>Speaker 1</Green>: Good. Have a good trip einstein. Watch your head.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: '<Blue>Speaker 0</Blue>: You got that thing hooked up to the car?',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: '<Green>Speaker 1</Green>: Watch this.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: '<Blue>Speaker 0</Blue>: Yeah Ok.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          '<Green>Speaker 1</Green>: Not me the car, the car. If my calculations are correct. When this baby hits eighty eight miles per hour, you’re gonna see some serious s**t. Watch this watch this. What did I tell you? Eighty eight miles per hour. The thermal displacement occurred exactly what? One O two A M and zero seconds.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: '<Blue>Speaker 0</Blue>: Jesus Christ. Jesus Christ, doc, you disintegrated einstein.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          '<Green>Speaker 1</Green>: Calm down Marty. I didn’t disintegrate anything. The molecular structure of both Einstein and the car are completely intact.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: '<Blue>Speaker 0</Blue>: Then where hell are they?',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          '<Green>Speaker 1</Green>: The appropriate question is, when the hell are they? You see, Einstein has just become the world’s first time traveler. I set him into the future. One minute into the future to be exact. Now precisely one twenty one AM and zero seconds we shall catch up with him and the time machine.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          '<Blue>Speaker 0</Blue>: Wait a minute. Wait a minute. Doc. Are you telling me that you built a time machine out of a Delorean?',
                      },
                    ],
                  },
                ],
              },
            },
          },
          sideContent: {
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
          isTranslationLayout: null,
        },
        {
          id: '118568218',
          __typename: 'MenuFeatureItemRecord',
          internalName: 'Language detection',
          heading: 'Language detection',
          subhead:
            'Use [language detection](https://developers.deepgram.com/docs/language-detection) to identify the dominant language in your audio and transcribe in the identified language.',
          featureCode: 'tier=enhanced&detect_language=true',
          content: {
            blocks: [],
            links: [],
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'blockquote',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            marks: ['highlight'],
                            value: '“detected_language”: ',
                          },
                          {
                            type: 'span',
                            value: '“en”',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Alright. I’m ready. Good evening. I’m Dr. Emmett Brown. I’m standing on the parking lot at Twin Pines Mall. It’s Saturday Morning October twenty sixth nineteen eighty five one eighteen AM. And this is temporal experiment number one. Come on Einey. Hey, boy. Get in there. At a boy. In you go. Sit down. Get your seatbelt on. That’s it. Okay. Please note, that Einstein’s clock is in precise synchronization with my control watch. Got it? Right. Check Doc. Good. Have a good trip Einstein. Watch your head. You got that thing hooked up to the car? Watch this. Yeah Ok. Not me the car, the car. If my calculations are correct. When this baby hits eighty eight miles per hour, you’re gonna see some serious s**t. Watch this watch this. What did I tell you? Eighty eight miles per hour. The thermal displacement occurred exactly what? One O two AM and zero seconds. Jesus Christ. Jesus Christ, doc, you disintegrated Einstein. Calm down Marty. I didn’t disintegrate anything. The molecular structure of both Einstein and the car are completely intact. Then where hell are they? The appropriate question is, when the hell are they? You see, Einstein has just become the world’s first time traveler. I set him into the future. One minute into the future to be exact. Now precisely one twenty one AM and zero seconds we shall catch up with him and the time machine. Wait a minute. Wait a minute. Doc. Are you telling me that you built a time machine out of a Delorean?',
                      },
                    ],
                  },
                ],
              },
            },
          },
          sideContent: {
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
          isTranslationLayout: null,
        },
      ],
      layout: 'audio_intelligence',
    },
  ],
} as any;
