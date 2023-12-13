import React from 'react';

import { fontSize, lineHeight } from 'atoms/typography/typography';

import Flex from 'quarks/Flex';

import type { FC } from 'react';

interface TableProps {
  table: string;
}

const TableBlock: FC<TableProps> = ({ table }) => (
  <Flex
    className="table-block-wrapper"
    dangerouslySetInnerHTML={{ __html: table }}
    css={`
      overflow-x: auto;
      table {
        border-collapse: collapse;
        min-width: 100%;
      }
      th,
      td {
        padding: 8px 24px;
        border-width: 1px;
        border-color: #4f6278;
        border-style: solid;
      }
      th {
        background-color: #354659;
      }
      td {
        font-size: ${fontSize.textMd};
        line-height: ${lineHeight.textMd};
      }
    `}
  />
);

export default TableBlock;
