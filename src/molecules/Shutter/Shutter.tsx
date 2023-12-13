import { Children, FC, ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import { css } from 'styled-components';

import Flex from 'quarks/Flex';

import type { BasicProps } from 'quarks/interpolations/basic';

interface ShutterProps extends BasicProps {
  /**
   * The amount of time to wait before starting the animation. Use `index` when mapping over multiple groups of images
   */
  delay: number;
  /**
   * The amount of children within the given array to be rendered
   */
  count: number;
  /**
   * The total amount of Shutter molecules you'll have in your render (to properly offset and prevent multiple effects from happening at the same time.)
   */
  parentCount: number;
  /**
   * Any ReactNode that parses `BasicProps`. Most commonly an image.
   */
  children: ReactNode;
}

const Shutter: FC<ShutterProps> = ({ delay, count, parentCount, children, ...props }) => {
  const animationCSS = css`
    > * {   
        animation: bottomToTop${count} ${count * 8}s ease-in infinite 0s;
            ${Array(count)
              .fill(null)
              .map(
                (_, index) =>
                  `&:nth-child(${index + 1}){ 
                  animation-delay: ${
                    index * 8 -
                    8 +
                    ((delay % 2 === 0 ? delay / 2 : Math.ceil((parentCount || 5) / 2 - 1) + Math.ceil(delay / 2)) * 8) /
                      (parentCount || 5)
                  }s;}`,
              )}
        }
        @keyframes bottomToTop${count} {
        0% { opacity: 0; };
        ${0.5 / 8 / count * 100}% { opacity: 0; transform: translateY(25px); animation-timing-function: ease-out };
        ${2 * 0.8 / 8 / count * 100}% { opacity: 1; transform: translateY(0px); animation-timing-function: ease-out};
        ${Math.round(100 / (count || 2))}% { opacity: 1; transform: translateY(0px); animation-timing-function: ease-in};
        ${Math.round(100 / (count || 2)) + 0.8 / 8 / count * 100}% { opacity: 0; transform: translateY(-20px); animation-timing-function: ease-in};
        100% { opacity: 0; };
    }
    `;

  const childrenWithProps = Children.map<ReactNode, ReactNode>(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<BasicProps>, {
        opacity: 0,
        position: 'absolute',
      });
    }
  });

  return (
    <Flex position="relative" css={animationCSS} {...props}>
      {childrenWithProps}
    </Flex>
  );
};

Shutter.defaultProps = {
  count: 2,
  parentCount: 1,
  delay: 0,
};

export default Shutter;
