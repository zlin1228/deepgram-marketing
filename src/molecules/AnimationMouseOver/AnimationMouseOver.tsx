import { useRef, useState } from 'react';

import Container from 'quarks/Container';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, MouseEvent } from 'react';

type AnimationImageProps = BasicProps & {
  isDark?: boolean;
  size?: number;
};
const AnimationMouseOver: FC<AnimationImageProps> = ({ isDark, size, ...props }) => {
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const wrapper = useRef(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (wrapper.current) {
      const wrapperPos = (wrapper.current as HTMLDivElement).getBoundingClientRect();
      (wrapper.current as HTMLDivElement).style.setProperty('--xpos', `${e.clientX - wrapperPos.left}px`);
      (wrapper.current as HTMLDivElement).style.setProperty('--ypos', `${e.clientY - wrapperPos.top}px`);
    }
  };

  return (
    <Container
      width="100%"
      height="100%"
      ref={wrapper}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
      onMouseMove={handleMouseMove}
      position="absolute"
      overflowX="hidden"
      overflowY="hidden"
      backgroundColor="primary-400"
      opacity={isMouseIn ? 1 : 0}
      transition="all 300ms"
      left="0"
      top="0"
      mixBlendMode="soft-light"
      zIndex={100}
      css={`
          user-select: none;
          will-change: opacity, background;
          background: radial-gradient(
            ${isDark ? size || 900 : (size || 900) * 0.6}px circle at var(--xpos) var(--ypos),
            ${isDark ? 'rgba(255, 46, 234, 0.5)' : 'rgba(255, 46, 234, 0.08)'},
            transparent 40%
          );
        }
      `}
      {...props}
    />
  );
};
export default AnimationMouseOver;
