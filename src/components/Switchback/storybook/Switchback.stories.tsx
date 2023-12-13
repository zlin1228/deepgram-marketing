import Section from 'molecules/Section/Section';

import ComponentSwitchback from 'components/Switchback/Switchback';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof ComponentSwitchback> = args => (
  <Section id="switchback-section" backgroundColor="Rainbow Gradient">
    <ComponentSwitchback {...args} />
  </Section>
);

export const componentSwitchback = Template.bind({});
componentSwitchback.parameters = {
  controls: {
    include: ['reverse'],
  },
};
componentSwitchback.args = {
  id: '106455907',
  __typename: 'ComponentSwitchbackRecord',
  internalName: 'Remote-first for a better culture',
  optionalHeading: {
    id: '106455861',
    __typename: 'ComponentHeadingRecord',
    internalName: 'Remote-first for a better culture',
    animate: false,
    heading: 'Remote-first for a better culture',
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
                  value:
                    'We give Deepgrammers the freedom and flexibility to choose where they work. We hire where great talent is and strive to create a similar employee experience. Remote-first does not mean remote-only. We understand the importance of in-person time – both in collaborating on the next-gen voice model and in building connection and community.',
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
  reference: {
    id: '106455903',
    __typename: 'ComponentImageRecord',
    caption: '',
    imageDesktop: {
      id: '43548399',
      title: null,
      filename: '553f0d57169ada1e616eae671b364915.png',
      size: 224199,
      alt: null,
      url: 'https://www.datocms-assets.com/96965/1688584213-understanding-hero.svg',
      width: 800,
      height: 420,
    },
    imageMobile: null,
  },
} as any;
