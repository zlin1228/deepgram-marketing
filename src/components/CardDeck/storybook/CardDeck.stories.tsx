import Section from 'molecules/Section/Section';

import CardDeck from 'components/CardDeck/BlogCardDeck';
import { cardProps } from 'components/Cards/BasicCard/storybook/BasicCard.stories';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof CardDeck> = args => (
  <Section id="blog-card-section" backgroundColor="Rainbow Gradient">
    <CardDeck {...args} />
  </Section>
);

export const cardDeck = Template.bind({});
cardDeck.parameters = {
  options: { showPanel: false },
};

cardDeck.args = {
  id: '101770407',
  __typename: 'ComponentCardDeckRecord',
  internalName: 'Dummy Card Deck',
  optionalHeading: {
    id: '106455861',
    __typename: 'ComponentHeadingRecord',
    internalName: 'Remote-first for a better culture',
    animate: false,
    heading: 'Latest Deepgram Articles',
    headingColor: 'White',
    headingType: 'H2',
    desktopHeadingSize: 'lg',
    mobileHeadingSize: 'sm',
    tabletHeadingSize: 'md',
    gradientBackgroundColor: '',
    bodyColor: 'Gray 100',
  },
  card: [cardProps, cardProps, cardProps],
} as any;
