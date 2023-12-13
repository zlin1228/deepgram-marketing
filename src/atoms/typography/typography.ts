const primaryFont = '"ABCFavorit", "Arial Nova", sans-serif';
const secondaryFont = '"Fira Code", monospace;';
const bodyFont = '"Inter", sans-serif';

export const fontFamily = {
  primaryFont,
  secondaryFont,
  bodyFont,
} as const;

export const fontSize = {
  text2Xs: '0.5rem',
  textXs: '0.75rem',
  textSm: '0.875rem',
  textMd: '1rem',
  textLg: '1.125rem',
  textXl: '1.25rem',
  displayXs: '1.5rem',
  displaySm: '1.875rem',
  displayMd: '2.25rem',
  displayLg: '3rem',
  displayXl: '3.75rem',
  display2xl: '4.5rem',
} as const;

export const lineHeight = {
  zero: 0,
  one: 1,
  xs: 1.1,
  sm: 1.25,
  md: 1.4,
  lg: 1.5,
  xl: 1.8,
  textXs: '1.125rem',
  textSm: '1.25rem',
  textMd: '1.5rem',
  textLg: '1.75rem',
  textXl: '1.875rem',
  displayXs: '2rem',
  displaySm: '2.375rem',
  displayMd: '2.75rem',
  displayLg: '3.75rem',
  displayXl: '4.625rem',
  display2xl: '5.625rem',
} as const;

export const letterSpacing = {
  neg2: '-0.02em',
  0: '0em',
  pos2: '0.02em',
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

export const font = {
  text: {
    xs: {
      fontFamily: primaryFont,
      fontSize: fontSize.textXs,
      lineHeight: lineHeight.textXs,
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    sm: {
      fontFamily: primaryFont,
      fontSize: fontSize.textSm,
      lineHeight: lineHeight.textSm,
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    md: {
      fontFamily: primaryFont,
      fontSize: fontSize.textMd,
      lineHeight: lineHeight.textMd,
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    lg: {
      fontFamily: primaryFont,
      fontSize: fontSize.textLg,
      lineHeight: lineHeight.textLg,
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    xl: {
      fontFamily: primaryFont,
      fontSize: fontSize.textXl,
      lineHeight: lineHeight.textXl,
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
  },
  display: {
    xs: {
      fontFamily: primaryFont,
      fontSize: fontSize.displayXs,
      lineHeight: lineHeight.displayXs,
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing[0],
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    sm: {
      fontFamily: primaryFont,
      fontSize: fontSize.displaySm,
      lineHeight: lineHeight.displaySm,
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing[0],
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    md: {
      fontFamily: primaryFont,
      fontSize: fontSize.displayMd,
      lineHeight: lineHeight.displayMd,
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing.neg2,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    lg: {
      fontFamily: primaryFont,
      fontSize: fontSize.displayLg,
      lineHeight: lineHeight.displayLg,
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing.neg2,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    xl: {
      fontFamily: primaryFont,
      fontSize: fontSize.displayXl,
      lineHeight: lineHeight.displayXl,
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing.neg2,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    xxl: {
      fontFamily: primaryFont,
      fontSize: fontSize.display2xl,
      lineHeight: lineHeight.display2xl,
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing.neg2,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
  },
} as const;

export type FontWeightDefinition = keyof typeof fontWeight;
export type FontSizeDefinition = keyof typeof fontSize;
export type FontFamilyDefinition = keyof typeof fontFamily;
export type LineHeightDefinition = keyof typeof lineHeight;
export type LetterSpacingDefinition = keyof typeof letterSpacing;
