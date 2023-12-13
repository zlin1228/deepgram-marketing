import { Portal } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';

import Button from 'molecules/Button/Button';

import type { FC } from 'react';

interface DropdownProps {
  row: {
    tableRowGroups: {
      tableCells: {
        text: string;
      }[];
    }[];
  };
  activeGroup: number;
  setActiveGroup: (id: number) => void;
}

const Dropdown: FC<DropdownProps> = ({ row, activeGroup, setActiveGroup }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownItems = row?.tableRowGroups?.map((group: any) => group?.tableCells[0]?.text);

  useEffect(() => {
    const calculatePosition = () => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    };

    calculatePosition();
    window.addEventListener('scroll', calculatePosition);

    return () => {
      window.removeEventListener('scroll', calculatePosition);
    };
  }, [activeGroup]);

  return (
    <Flex flexDirection="column" position="relative" ref={containerRef}>
      <Button
        onClick={() => setActive(!active)}
        outline="none"
        textColor="gray-300"
        fontWeight="regular"
        endIcon={active ? <Icon iconName="chevron-right" size={16} /> : <Icon iconName="chevron-down" size={16} />}
      >
        {dropdownItems[activeGroup]}
      </Button>
      {active && (
        <Portal container={document && document.querySelector('#portal-root')}>
          <Flex
            flexDirection="column"
            position="absolute"
            top={`${position.top + 30}px`}
            left={`${position.left}px`}
            width="max-content"
            backgroundColor="gray-900"
            borderRadius="8px"
            zIndex="100"
            boxShadow="-4px 4px 15px 0px rgba(0, 0, 0, 0.55)"
          >
            {dropdownItems.map((item: string, itemId: number) => (
              <Button
                key={item}
                onClick={() => {
                  setActiveGroup(itemId);
                  setActive(false);
                }}
                textColor="common-white"
                paddingX={8}
                width="100%"
                outline="none"
                fontSize="textXs"
                fontWeight="regular"
                css={`
                  &:hover {
                    background-color: #2c2c33 !important;
                  }
                `}
              >
                {item}
              </Button>
            ))}
          </Flex>
        </Portal>
      )}
    </Flex>
  );
};

export default Dropdown;
