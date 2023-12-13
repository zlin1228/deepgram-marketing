import React, { useState } from 'react';

import Grid from 'quarks/Grid';

import Dropdown from 'components/PricingTable/components/Dropdown';

import type { FC } from 'react';

interface DropdownRowProps {
  row: any;
  isTablet: boolean;
  activeCol: number;
}

const DropdownRow: FC<DropdownRowProps> = ({ row, isTablet, activeCol }) => {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <>
      {row?.tableRowGroups?.map((group: any, groupId: number) => (
        <>
          {group?.tableCells?.map((cell: any, colIdx: number) => {
            const activeCols = colIdx !== 0 && colIdx !== activeCol;

            return (
              <Grid
                paddingX={16}
                paddingY={12}
                key={row}
                gridRowEnd={cell?.rowSpan ? `span ${cell?.rowSpan}` : null}
                alignItems="center"
                justifyItems={cell.textAlignment === 'left' ? 'start' : 'center'}
                fontSize="textMd"
                lineHeight="textMd"
                textColor="gray-300"
                backgroundShorthand={cell?.backgroundColor === 'gray' ? '#18181d' : '#101014'}
                css={`
                  ${activeGroup !== groupId && 'display: none;'}
                  ${!isTablet && activeCols && 'display: none;'}
                `}
              >
                {colIdx === 0 ? (
                  <Dropdown row={row} activeGroup={activeGroup} setActiveGroup={setActiveGroup}></Dropdown>
                ) : (
                  cell?.text
                )}
              </Grid>
            );
          })}
        </>
      ))}
    </>
  );
};

export default DropdownRow;
