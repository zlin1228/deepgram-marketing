import gradient from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import type { IEntityPersonRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type AvatarProps = BasicProps &
  IEntityPersonRecord & {
    isDark?: boolean;
    isSmall?: boolean;
    publishDate?: string;
    isVertical?: boolean;
    theme?: 'green' | 'red';
    coAuthors?: IEntityPersonRecord[];
    isBlogList?: boolean;
  };

const Avatar: FC<AvatarProps> = ({
  id,
  headshot,
  name,
  role,
  publishDate,
  isDark,
  isSmall,
  isVertical,
  theme,
  slug,
  externalLink,
  coAuthors,
  isBlogList,
}) => (
  <Link
    data-sb-object-id={id}
    href={
      externalLink ? externalLink : `https://deepgram.com/authors/${slug || name?.toLowerCase()?.replace(/\s/g, '-')}`
    }
    css={{ height: 'unset !important' }}
    target={externalLink ? '_blank' : '_self'}
  >
    <Flex
      alignItems="center"
      gap={(isSmall && '12px') || (isVertical ? '32px' : '24px')}
      flexDirection={isVertical ? 'column' : 'row'}
    >
      <Flex alignItems="center">
        {headshot?.url && (
          <Container
            width={isSmall ? '48px' : '84px'}
            height={isSmall ? '48px' : '84px'}
            borderRadius="50%"
            backgroundColor="gray-700"
            position="relative"
            before={{
              content: isVertical ? '' : undefined,
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              borderRadius: '50%',
              backgroundShorthand: theme === 'red' ? gradient.primary.red : gradient.primary.green,
              transform: 'translateX(-20px)',
              zIndex: 0,
            }}
          >
            <Image
              position="relative"
              zIndex={1}
              backgroundColor="gray-700"
              borderRadius="50%"
              overflowX="hidden"
              overflowY="hidden"
              id={headshot.id || ''}
              src={headshot?.url || ''}
              alt={name || ''}
              title={name || ''}
              width={isSmall ? 48 : 84}
              height={isSmall ? 48 : 84}
              isFullWidth
              isFullHeight
              css={`
                max-width: 100%;
                max-height: 100%;
              `}
            />
          </Container>
        )}
        {coAuthors?.map(item => (
          <Container
            key={item?.name}
            width={isSmall ? '48px' : '84px'}
            height={isSmall ? '48px' : '84px'}
            borderRadius="50%"
            backgroundColor="gray-700"
            position="relative"
            before={{
              content: isVertical ? '' : undefined,
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              borderRadius: '50%',
              backgroundShorthand: theme === 'red' ? gradient.primary.red : gradient.primary.green,
              transform: 'translateX(-20px)',
              zIndex: 0,
            }}
            css={`
              margin-left: -18px;
            `}
          >
            <Image
              position="relative"
              zIndex={1}
              backgroundColor="gray-700"
              borderRadius="50%"
              overflowX="hidden"
              overflowY="hidden"
              id={item.id || ''}
              src={item?.headshot?.url || ''}
              alt={name || ''}
              title={name || ''}
              width={isSmall ? 48 : 84}
              height={isSmall ? 48 : 84}
              isFullWidth
              isFullHeight
              css={`
                max-width: 100%;
                max-height: 100%;
              `}
            />
          </Container>
        ))}
      </Flex>
      <Flex flexDirection={isVertical ? 'row' : 'column'} gap="4px" alignItems={isVertical ? 'center' : undefined}>
        <Flex alignItems="center" flexWrap="wrap">
          {name && (
            <Paragraph
              textColor={isDark ? 'common-white' : 'common-black'}
              textStyle={isSmall ? 'md' : 'lg'}
              fontWeight={isSmall ? 'semiBold' : 'bold'}
              data-sb-field-path="name"
            >
              {name}
            </Paragraph>
          )}
          {isBlogList ? (
            <>
              {coAuthors && coAuthors?.length > 0 && (
                <Text textColor={isDark ? 'common-white' : 'common-black'} paddingLeft={4}>
                  and others
                </Text>
              )}
            </>
          ) : (
            <>
              {coAuthors?.map(item => (
                <Paragraph
                  key={item?.name}
                  textColor={isDark ? 'common-white' : 'common-black'}
                  textStyle={isSmall ? 'md' : 'lg'}
                  fontWeight={isSmall ? 'semiBold' : 'bold'}
                  data-sb-field-path="name"
                >
                  , {item?.name}
                </Paragraph>
              ))}
            </>
          )}
        </Flex>
        {role && !isSmall && (
          <Paragraph
            textStyle="md"
            fontWeight="regular"
            textColor={isDark ? 'gray-200' : 'gray-500'}
            data-sb-field-path="role"
          >
            {role}
          </Paragraph>
        )}
        {publishDate && (
          <Paragraph textStyle="sm" fontWeight="regular" textColor={isDark ? 'gray-200' : 'gray-500'}>
            {publishDate}
          </Paragraph>
        )}
      </Flex>
    </Flex>
  </Link>
);

export default Avatar;
