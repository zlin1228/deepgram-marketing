import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';

import type { ChangeEvent, ComponentProps, KeyboardEvent, RefObject } from 'react';

export type ControlledSearchBoxProps = ComponentProps<'div'> & {
  inputRef: RefObject<HTMLInputElement>;
  onChange(event: ChangeEvent): void;
  placeholder?: string;
  value?: string;
  onClose(): void;
};

const ControlledSearchBox = ({ inputRef, onChange, placeholder, value, onClose }: ControlledSearchBoxProps) => {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'ArrowUp') {
      e.preventDefault();
      e.stopPropagation();
      const maxLength = document.getElementById('result-container')?.childElementCount || 1;
      setActive(active - 1 < 0 ? maxLength - 1 : active - 1);
    }
    if (e.code === 'ArrowDown') {
      e.preventDefault();
      e.stopPropagation();
      const maxLength = document.getElementById('result-container')?.childElementCount || 1;
      setActive(active + 1 >= maxLength ? active + 1 - maxLength : active + 1);
    }
    if (e.code === 'Escape') {
      onClose();
    }
    if (e.code === 'Enter') {
      const wrapper = document.getElementById('result-container');
      const activeItem = wrapper?.querySelector('.active');
      if (activeItem) {
        const link = activeItem.getAttribute('href');
        link && router.push(link);
      }
    }
  };

  useEffect(() => {
    const wrapper = document.getElementById('result-container');
    if (wrapper) {
      wrapper.querySelector('.active')?.classList.remove('active');
      wrapper.children[active].children[0].classList.add('active');
    }
  }, [active]);

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" width="100%">
        <Flex
          marginRight={16}
          alignItems="center"
          justifyContent="center"
          flex="0 0 44px"
          width="44px"
          height="44px"
          borderRadius="4px"
          boxShadow="xs"
          textColor="common-white"
          backgroundShorthand="linear-gradient(82.38deg, #201CFF -97.96%, #13EFA0 71.09%);"
        >
          <Icon iconName="search" size={20} />
        </Flex>

        <input
          ref={inputRef}
          placeholder={placeholder}
          maxLength={512}
          type="search"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          /* eslint-disable no-inline-styles/no-inline-styles */
          style={{
            border: '1px solid',
            borderColor: color.gray[500],
            color: '#fff',
            fontSize: '18px',
            padding: '10px 14px',
            minWidth: '500px',
            width: '100%',
            outline: 'none',
            background: color.gray[900],
            borderRadius: '4px',
            boxShadow: '0px 1px 2px rgba(38, 44, 52, 0.05)',
            height: '44px',
          }}
        />
      </Flex>
    </Flex>
  );
};

export default ControlledSearchBox;
