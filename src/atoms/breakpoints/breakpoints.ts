export const breakpoints = {
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1440,
} as const;

export const media = {
  /**
   * Styling props for everything above the `xs` breakpoint. Takes an object.
   */
  xs: `@media screen and (min-width: ${breakpoints.xs}px)`,
  /**
   * Styling props for everything above the `sm` breakpoint. Takes an object.
   */
  sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
  /**
   * Styling props for everything above the `md` breakpoint. Takes an object.
   */
  md: `@media screen and (min-width: ${breakpoints.md}px)`,
  /**
   * Styling props for everything above the `lg` breakpoint. Takes an object.
   */
  lg: `@media screen and (min-width: ${breakpoints.lg}px)`,
  /**
   * Styling props for everything above the `xl` breakpoint. Takes an object.
   */
  xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
  /**
   * Styling props for everything above the `xxl` breakpoint. Takes an object.
   */
  xxl: `@media screen and (min-width: ${breakpoints.xxl}px)`,
} as const;
