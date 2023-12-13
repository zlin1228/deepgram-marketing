import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';

import type { FC } from 'react';

interface SliderButtonsProps {
  tables: any;
  activeTable: number;
  setActiveTable: (value: number) => void;
}

const SliderButtons: FC<SliderButtonsProps> = ({ tables, activeTable, setActiveTable }) => (
  <Flex gap="8px" marginX="auto" backgroundShorthand="#18181D" borderRadius="100px" overflowX="hidden">
    {tables?.map((table: any, idx: number) => (
      <Flex
        alignItems="center"
        gap="4px"
        role="button"
        tabIndex={0}
        onClick={() => setActiveTable(idx)}
        key={table?.id}
        textColor={activeTable === idx ? 'common-white' : 'gray-500'}
        paddingY={8}
        paddingX={16}
        backgroundShorthand={activeTable === idx ? '#2C2C33' : 'transparent'}
        borderRadius="100px"
        transition="background 150ms ease-in-out, color 150ms ease-in-out"
        cursor="pointer"
        fontSize="textMd"
        lineHeight="textMd"
        outline="none"
        css={`
          svg {
            transition: fill 150ms ease-in-out;
            color: ${activeTable === idx ? '#13EF93' : '#fff'};
          }
        `}
      >
        <Icon iconName={table?.labelIcon} size={18} />
        {table?.tabLabel}
      </Flex>
    ))}
  </Flex>
);

export default SliderButtons;
