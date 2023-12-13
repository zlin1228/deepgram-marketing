import Section from 'molecules/Section/Section';

import TrustBar from 'components/TrustBar/TrustBar';

import type { ComponentStory } from '@storybook/react';

const company = {
  id: '101300634',
  __typename: 'EntityCompanyRecord',
  company: 'Revenue',
  companyLogo: {
    id: '101300633',
    __typename: 'ComponentImageRecord',
    caption: '',
    imageDesktop: {
      id: '41070531',
      title: null,
      filename: 'revenue.svg',
      size: 5859,
      alt: null,
      url: 'https://www.datocms-assets.com/96965/1687293412-tethr-logo-storm.svg',
      width: 161,
      height: 25,
    },
    imageMobile: null,
  },
};

const Template: ComponentStory<typeof TrustBar> = args => (
  <Section id="trustbar-section" backgroundColor="Rainbow Gradient Animation">
    <TrustBar {...args} />
  </Section>
);

export const trustBar = Template.bind({});
trustBar.parameters = {
  options: { showPanel: false },
};
trustBar.args = {
  heading: 'Trusted by the world’s top Enterprises',
  company: Array(10).fill(company),
};
