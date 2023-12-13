const spacing = {
  0: '0',
  2: '0.125rem',
  4: '0.25rem',
  6: '0.375rem',
  8: '0.5rem',
  10: '0.625rem',
  12: '0.75rem',
  16: '1rem',
  20: '1.25rem',
  24: '1.5rem',
  32: '2rem',
  40: '2.5rem',
  44: '2.75rem',
  48: '3rem',
  56: '3.5rem',
  64: '4rem',
  72: '4.5rem',
  80: '5rem',
  96: '6rem',
  128: '8rem',
  160: '10rem',
  192: '12rem',
  224: '14rem',
  256: '16rem',
} as const;

export const margin = {
  ...spacing,
  auto: 'auto',
} as const;

export const padding = {
  ...spacing,
} as const;

export type MarginDefinition = keyof typeof margin;
export type PaddingDefinition = keyof typeof padding;
