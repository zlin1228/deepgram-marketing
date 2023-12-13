import Flex from 'quarks/Flex';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, MouseEvent } from 'react';

interface ModelItemProps extends BasicProps {
  heading?: string;
  pricing?: string;
  accuracy?: number;
  speed?: number;
  cost?: number;
  planPrice?: number | string;
  onClick?: (e: MouseEvent) => void;
}

const ModelItem: FC<ModelItemProps> = ({ heading, pricing, planPrice, onClick }) => (
  <Flex
    flexDirection="column"
    gap="10px"
    textColor="common-white"
    paddingAll={16}
    cursor="pointer"
    onClick={e => onClick && onClick(e)}
  >
    <Flex gap="14px" alignItems="center">
      <Text fontSize="textLg" lineHeight="textSm" fontWeight="semiBold">
        {heading}
      </Text>
      <Paragraph fontSize="textSm" lineHeight="textSm">
        <Text textColor="gray-400">Pricing: </Text>
        <Text>{planPrice === 'Volume Discount' ? planPrice : `$${planPrice}` || pricing}</Text>
      </Paragraph>
    </Flex>
  </Flex>
);

export default ModelItem;
