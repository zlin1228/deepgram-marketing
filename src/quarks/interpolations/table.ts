import { css } from 'styled-components';

import { GetAllPropTypes, getPropsFromObjectCSS } from 'quarks/quarkUtils/getAllProps';
import basicCSS from 'quarks/styleProps/basic';
import tableCSS from 'quarks/styleProps/table';

const tableStyles = {
  ...tableCSS,
  ...basicCSS,
};

export type TableProps = GetAllPropTypes<typeof tableStyles>;
export const table = css<TableProps>`
  ${props => getPropsFromObjectCSS(props, tableStyles)}
`;
