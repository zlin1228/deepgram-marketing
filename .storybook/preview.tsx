/* eslint-disable absolute-only/imports */
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

import DocsTabContainer from '../.storybook/DocsTabContainer';
import blackLogo from '../.storybook/public/blackLogo.svg';
import lightLogo from '../.storybook/public/lightLogo.svg';
import { ThemeProvider } from '../src/contexts/ThemeProvider';

import './font-styles.css';

const defaultTheme = {
  brandTitle: 'Deepgram',
  brandUrl: 'https://deepgram.com/',
};

// eslint-disable-next-line import/prefer-default-export
export const parameters = {
  backgrounds: { disable: true },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Get Started', 'Foundations', 'Components', ['Typography', 'Form', 'Actions', '*']],
    },
    showPanel: true,
  },
  darkMode: {
    dark: { ...themes.dark, ...defaultTheme, brandImage: lightLogo },
    light: { ...themes.light, ...defaultTheme, brandImage: blackLogo },
  },
  docs: {
    container: DocsTabContainer,
  },
  actions: {
    argTypesRegex: '^on.*',
  },
  controls: {
    sort: 'requiredFirst',
  },
};

addDecorator(story => {
  const isDarkMode = useDarkMode();

  return <ThemeProvider storybookIsDarkMode={isDarkMode}>{story()}</ThemeProvider>;
});
