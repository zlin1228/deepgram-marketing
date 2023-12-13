import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';

import Button from 'molecules/Button/Button';

import type { FC } from 'react';

interface ControlProps {
  maxLength: number;
  activeCol: number;
  setActiveCol: (value: number) => void;
}

const Controls: FC<ControlProps> = ({ maxLength, activeCol, setActiveCol }) => {
  const controlsLength = maxLength - 1;

  const handlePrevClick = (value: number) => {
    if (value > 1) {
      setActiveCol(value - 1);
    } else {
      return;
    }
  };

  const handleNextClick = (value: number) => {
    if (value === maxLength) {
      return;
    } else {
      setActiveCol(value);
    }
  };

  return (
    <Flex alignItems="center" gap="8px" textColor="common-white" marginX="auto">
      <Button
        onClick={() => handlePrevClick(activeCol)}
        textColor="common-white"
        outline="none"
        css={`
          .button-label {
            display: flex;
            align-items: center;
          }
        `}
      >
        <Icon iconName="chevron-left" size={32} color="common-white" />
      </Button>
      {[...Array(controlsLength)].map((x, i) => {
        const id = Math.random().toString(36).substring(7);

        return (
          <Flex
            role="button"
            key={id}
            onClick={() => setActiveCol(i + 1)}
            height={16}
            width={16}
            borderRadius="50%"
            border="1px solid #fff"
            backgroundColor={activeCol === i + 1 ? 'common-white' : 'common-transparent'}
            outline="none"
          />
        );
      })}
      <Button
        onClick={() => handleNextClick(activeCol + 1)}
        textColor="common-white"
        outline="none"
        css={`
          .button-label {
            display: flex;
            align-items: center;
          }
        `}
      >
        <Icon iconName="chevron-right" size={32} color="common-white" />
      </Button>
    </Flex>
  );
};

export default Controls;
