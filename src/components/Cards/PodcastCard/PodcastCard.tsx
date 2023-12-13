import { FaMicrophone } from 'react-icons/fa';

import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { ITemplatePodcastRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface PodcastCardProps extends BasicProps, ITemplatePodcastRecord {
  backgroundIsDark?: boolean;
}

const PodcastCard: FC<PodcastCardProps> = ({ title, slug }) => (
  <Link href={`https://deepgram.com/podcast/${slug}`} display="flex" width="100%" height="100%">
    <Flex
      flexDirection="column"
      borderRadius="8px"
      backgroundColor="gray-900"
      textColor="common-white"
      border="1px solid"
      borderColor="gray-700"
      overflowX="hidden"
      overflowY="hidden"
      height="100%"
      width="100%"
      hover={{
        borderColor: 'common-transparent',
        backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.red} border-box`,
        boxShadow: 'card',
      }}
    >
      <Flex
        width="100%"
        height="200px"
        borderBottom="1px solid"
        borderColor="gray-700"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width="100px"
          height="100px"
          borderRadius="50%"
          textColor="magenta-500"
          justifyContent="center"
          alignItems="center"
          backgroundShorthand="#890d0d7a"
        >
          <FaMicrophone size={40} color={color.magenta[500]} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" paddingX={24} paddingY={32} gap="16px" lg={{ paddingX: 32 }}>
        <Flex
          paddingY={4}
          paddingX={10}
          borderRadius="30px"
          backgroundColor="gray-800"
          textColor="common-white"
          fontSize="textXs"
          lineHeight="textXs"
          fontWeight="bold"
          width="fit-content"
          textTransform="uppercase"
          gap="8px"
          alignItems="center"
        >
          <FaMicrophone size={14} color={color.magenta[500]} />
          <Text>PODCAST</Text>
        </Flex>
        <Text textStyle="xl" fontWeight="semiBold">
          {title}
        </Text>
      </Flex>
    </Flex>
  </Link>
);

export default PodcastCard;
