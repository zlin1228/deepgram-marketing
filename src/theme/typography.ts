import { font, fontFamily, fontSize, fontWeight } from 'atoms/typography/typography';

const typography = {
  typography: {
    fontFamily: fontFamily.primaryFont,
    fontSize: Number(fontSize.textLg.replace('rem', '')) * 16, // mui requires that this value is a number
    h1: {
      fontFamily: font.display.xl.fontFamily,
      fontSize: font.display.xl.fontSize,
      lineHeight: font.display.xl.lineHeight,
      letterSpacing: font.display.xl.letterSpacing,
      fontWeight: fontWeight.bold,
    },
    h2: {
      fontFamily: font.display.lg.fontFamily,
      fontSize: font.display.lg.fontSize,
      lineHeight: font.display.lg.lineHeight,
      letterSpacing: font.display.lg.letterSpacing,
      fontWeight: fontWeight.bold,
    },
    h3: {
      fontFamily: font.display.md.fontFamily,
      fontSize: font.display.md.fontSize,
      lineHeight: font.display.md.lineHeight,
      letterSpacing: font.display.md.letterSpacing,
      fontWeight: fontWeight.bold,
    },
    h4: {
      fontFamily: font.display.sm.fontFamily,
      fontSize: font.display.sm.fontSize,
      lineHeight: font.display.sm.lineHeight,
      letterSpacing: font.display.sm.letterSpacing,
      fontWeight: fontWeight.bold,
    },
    h5: {
      fontFamily: font.display.xs.fontFamily,
      fontSize: font.display.xs.fontSize,
      lineHeight: font.display.xs.lineHeight,
      letterSpacing: font.display.xs.letterSpacing,
      fontWeight: fontWeight.bold,
    },
    h6: {
      fontFamily: font.display.xs.fontFamily,
      fontSize: font.display.xs.fontSize,
      lineHeight: font.display.xs.lineHeight,
      letterSpacing: font.display.xs.letterSpacing,
      fontWeight: fontWeight.bold,
    },
    body1: {
      fontFamily: font.text.lg.fontFamily,
      fontSize: font.text.lg.fontSize,
      lineHeight: font.text.lg.lineHeight,
      fontWeight: fontWeight.regular,
    },
    button: {
      fontFamily: font.text.sm.fontFamily,
      fontSize: font.text.sm.fontSize,
      lineHeight: font.text.lg.lineHeight,
      fontWeight: fontWeight.bold,
    },
  },
};

export default typography;
