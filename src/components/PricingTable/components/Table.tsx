import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Text from 'quarks/Text';

import Tooltip from 'molecules/Tooltip/Tooltip';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import Controls from 'components/PricingTable/components/Controls';
import DropdownRow from 'components/PricingTable/components/DropdownRow';

import type { FC } from 'react';

interface TableProps {
  component: any;
  activeTable: number;
  id: number;
}

const Table: FC<TableProps> = ({ component, id, activeTable }) => {
  const maxLength = Math.max(
    ...component.tableRows.map(
      (row: { tableRowGroups: { tableCells: string | any[] }[] }) => row.tableRowGroups[0].tableCells.length,
    ),
  );
  const [activeCol, setActiveCol] = useState(1);
  const isTablet = useMediaQuery(media.md);
  const highlightMap = [
    `
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    background: linear-gradient(266deg, #18181d 0.63%, #18181d 53.27%, #18181d 97.82%) padding-box, linear-gradient(90deg, #1C61DD 0%, #198EC6 99.4%) border-box;
  `,
    `
    border-top 1px solid transparent;
    border-bottom: 1px solid transparent;
    background: linear-gradient(266deg, #18181d 0.63%, #18181d 53.27%, #18181d 97.82%) padding-box, linear-gradient(90deg, #198DC7 0.33%, #14F096 100%) border-box;
  `,
    `
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    background: linear-gradient(266deg, #18181d 0.63%, #18181d 53.27%, #18181d 97.82%) padding-box, linear-gradient(266deg, #14F096 0%, #14F096 93.68%) border-box;
    
  `,
  ];

  return (
    <Flex flexDirection="column" gap="32px" display={activeTable === id ? 'flex' : 'none'} className="pricing-table">
      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        width="100%"
        maxWidth="1212px"
        marginX="auto"
        textColor="common-white"
        border="1px solid #2C2C33"
        borderRadius="8px"
        overflowX="hidden"
        overflowY="hidden"
        gap="1px"
        backgroundShorthand="#2C2C33"
        position="relative"
        md={{
          gridTemplateColumns: `repeat(${maxLength}, 1fr)`,
        }}
      >
        {component?.tableRows?.map((row: any) => {
          const highlighted = row?.highlightedRow;

          return (
            <>
              {row?.tableRowGroups?.length < 2 ? (
                row?.tableRowGroups?.map((group: any) => (
                  <>
                    {group?.tableCells?.map((cell: any, colIdx: number) => {
                      const activeCols = colIdx !== 0 && colIdx !== activeCol;
                      const iconCta = cell?.callToAction?.endIcon;

                      return (
                        <Grid
                          position="relative"
                          paddingX={16}
                          paddingY={12}
                          key={row}
                          gridRowEnd={cell?.rowSpan ? `span ${cell?.rowSpan}` : null}
                          alignItems="center"
                          justifyItems={cell.textAlignment === 'left' ? 'start' : 'center'}
                          backgroundShorthand={cell?.backgroundColor === 'gray' ? '#18181d' : '#101014'}
                          fontSize="textMd"
                          lineHeight="textMd"
                          css={`
                            ${!isTablet && activeCols && 'display: none;'}
                            ${highlighted && highlightMap[colIdx]}
                          `}
                        >
                          {cell?.text && !cell?.textBadge && (
                            <Flex
                              gap="10px"
                              textColor={row?.headerRow ? 'common-white' : 'gray-300'}
                              fontWeight={row?.headerRow ? 'bold' : 'regular'}
                            >
                              {cell?.text}
                              {cell?.showTooltip && (
                                <Tooltip
                                  placement="right"
                                  arrow={false}
                                  title=""
                                  description={
                                    <Text fontSize="textXs" lineHeight="textXs" textColor="gray-900">
                                      {cell?.tooltipText}
                                    </Text>
                                  }
                                >
                                  <div>
                                    <Icon iconName="info-circle" size={12} textColor="gray-500" />
                                  </div>
                                </Tooltip>
                              )}
                            </Flex>
                          )}
                          {cell?.icon && <Icon iconName="x-circle" size={16} />}
                          {cell?.callToAction && (
                            <ComponentButton
                              label={cell?.callToAction?.label}
                              link={cell?.callToAction?.link}
                              endIcon={iconCta && cell?.callToAction?.endIcon}
                              textColor={iconCta ? 'primary-500' : 'gray-300'}
                              fontWeight={iconCta ? 'bold' : 'regular'}
                              css={`
                                ${!iconCta && 'text-decoration: underline !important;'}
                              `}
                            />
                          )}
                          {cell?.textBadge && (
                            <Flex
                              backgroundShorthand="linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%)"
                              paddingY={2}
                              paddingX={8}
                              borderRadius="100px"
                              fontSize="textXs"
                              textColor="gray-900"
                              fontWeight="bold"
                              flexShrink={0}
                            >
                              {cell?.text}
                            </Flex>
                          )}
                        </Grid>
                      );
                    })}
                  </>
                ))
              ) : (
                <DropdownRow row={row} isTablet={isTablet} activeCol={activeCol} />
              )}
            </>
          );
        })}
      </Grid>
      {!isTablet && <Controls maxLength={maxLength} activeCol={activeCol} setActiveCol={setActiveCol} />}
    </Flex>
  );
};

export default Table;
