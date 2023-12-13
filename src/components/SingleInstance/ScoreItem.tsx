import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface ScoreItemProps extends BasicProps {
  label?: string;
  score: number;
  isCost?: boolean;
}

const ScoreItem: FC<ScoreItemProps> = ({ label, score, isCost }) => (
  <Flex gap="5px" textColor="common-white" alignItems="center">
    <Text fontSize="textSm" lineHeight="textSm" fontWeight="semiBold">
      {label}
    </Text>
    <Flex
      gap="8px"
      width="90px"
      height="14px"
      position="relative"
      fontSize="textSm"
      lineHeight="textSm"
      css={`
        clip-path: url(#${isCost ? 'scroeTextClip' : 'scroeClip'});
      `}
    >
      <svg width="0" height="0">
        <defs>
          <clipPath id="scroeClip">
            <circle cx="9" cy="7" r="5" />
            <circle cx="27" cy="7" r="5" />
            <circle cx="45" cy="7" r="5" />
            <circle cx="64" cy="7" r="5" />
            <circle cx="81" cy="7" r="5" />
          </clipPath>
          <clipPath id="scroeTextClip">
            <text x="0" y="10" font-size="14" font-weight="500" font-family="Inter">
              $$$$$
            </text>
          </clipPath>
        </defs>
      </svg>
      <Flex
        width={isCost ? '43px' : '100%'}
        height="100%"
        position="absolute"
        top="0"
        left={isCost ? `${8.5 * score - 43}px` : `${20 * score - 100}%`}
        backgroundShorthand="linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%)"
      />
    </Flex>
  </Flex>
);

export default ScoreItem;
