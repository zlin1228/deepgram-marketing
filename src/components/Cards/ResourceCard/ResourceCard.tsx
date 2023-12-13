import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';

import type { ITemplateResourcesExternalRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CardProps extends BasicProps, ITemplateResourcesExternalRecord {
  backgroundIsDark?: boolean;
}

const ResourceCard: FC<CardProps> = ({ title, link, resourceType, thumbnail, ...props }) => (
  <Link key={title} href={link || ''} display="flex" height="100%" width="100%">
    <Flex
      key={resourceType}
      width="100%"
      flexDirection="column"
      borderRadius="8px"
      textColor="common-white"
      border="1px solid"
      borderColor="gray-700"
      overflowX="hidden"
      overflowY="hidden"
      position="relative"
      paddingAll={24}
      before={{
        content: '',
        width: '100%',
        display: 'flex',
      }}
      hover={{
        borderColor: 'common-transparent',
        backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.red} border-box`,
        filter: 'drop-shadow(10px 0px 10px rgba(178, 39, 248, 0.2)) drop-shadow(-10px 0px 10px rgba(236, 4, 143, 0.2))',
      }}
      css={`
        &::before {
          padding-top: 128.85%;
        }
      `}
      {...props}
    >
      <Image
        src={thumbnail?.url || ''}
        alt={thumbnail?.alt ?? title ?? 'Featured Image'}
        width={thumbnail?.width}
        height={thumbnail?.height}
        position="absolute"
        top="0"
        left="0"
        css={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Flex>
  </Link>
);

export default ResourceCard;
