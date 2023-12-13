import { DefaultTheme, css } from 'styled-components';

import { GetGradientDefinition, parseBackgroundGradient } from 'atoms/colors/gradients';
import { font } from 'atoms/typography/typography';

type TextStyles = keyof typeof font.text;

const textCSS = {
  /**
   * Element's `font` shorthand property. Only accepts values set in the `text` typography atom.
   * Ex: `xs`, `sm`, etc.
   */
  textStyle: (value: TextStyles) => css`
    font: ${font.text[value].font()};
  `,

  /**
   * Adds a gradient to the text. Uses predefined gradients from the color atom.
   */
  gradient: (value: GetGradientDefinition, palette: DefaultTheme['palette']) => css`
    background: ${parseBackgroundGradient(palette, value)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
};

export default textCSS;
