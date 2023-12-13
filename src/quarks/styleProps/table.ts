import { css } from 'styled-components';

import type { Properties } from 'csstype';

const tableCSS = {
  /**
   * Element's `border-collapse` value. Accepts 'collapse' or 'separate'
   */
  borderCollapse: (value: Properties['borderCollapse']) => css`
    border-collapse: ${value};
  `,
  /**
   * Element's `border-collapse` value. Accepts 'auto' or 'fixed'
   */
  tableLayout: (value: Properties['tableLayout']) => css`
    table-layout: ${value};
  `,
  /**
   * The border-spacing CSS property sets the distance between the borders of adjacent <table> cells. This property applies only when border-collapse is `separate`.
   */
  borderSpacing: (value: Properties['borderSpacing']) => css`
    border-spacing: ${value};
  `,
  /**
   * The caption-side CSS property puts the content of a table's <caption> on the specified side. The values are relative to the writing-mode of the table.
   */
  captionSide: (value: Properties['captionSide']) => css`
    caption-side: ${value};
  `,
  /**
   * The empty-cells CSS property sets whether borders and backgrounds appear around <table> cells that have no visible content.
   */
  emptyCells: (value: Properties['emptyCells']) => css`
    empty-cells: ${value};
  `,
};

export default tableCSS;
