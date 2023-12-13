import { render } from 'datocms-structured-text-to-plain-text';

import gradient from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import LottieImage from 'components/LottieImage/LottieImage';

import richTextParser from 'utils/richTextParser';

import type { IComponentBentoStackedImageRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface BentoStackedImageProps
  extends BasicProps,
    Omit<
      IComponentBentoStackedImageRecord,
      '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  backgroundIsDark?: boolean;
  content?: IComponentBentoStackedImageRecord['content'];
}

const ComponentBentoStackedImage: FC<BentoStackedImageProps> = ({
  eyebrowIcon,
  eyebrow,
  heading,
  content,
  button,
  reference,
  backgroundIsDark,
  topAsset,
}) => (
  <Flex
    gap="32px"
    width="100%"
    flexDirection={topAsset ? 'column-reverse' : 'column'}
    border="1px solid"
    borderColor="gray-700"
    borderRadius="8px"
    boxShadow="xl"
    overflowX="hidden"
    overflowY="hidden"
    paddingX={0}
    paddingTop={topAsset ? 0 : 32}
    paddingBottom={topAsset ? 32 : 0}
    transition="150ms ease-in-out"
    hover={{
      boxShadow: 'purple2xl',
    }}
    md={{ paddingX: 40, paddingTop: topAsset ? 0 : 40, paddingBottom: topAsset ? 40 : 0 }}
    css={`
      background: ${gradient.primary.bentoCard};
      &:hover {
        background: ${gradient.primary.hoverBentoCard};
      }
    `}
  >
    <Flex flexDirection="column" gap="32px" paddingX={32} md={{ paddingX: 0 }}>
      <Flex width="100%" justifyContent="space-between" alignItems="center" gap="24px" flexWrap="wrap">
        {eyebrow && (
          <Flex
            width="fit-content"
            alignItems="center"
            gap="8px"
            borderRadius="30px"
            paddingX={10}
            paddingY={4}
            backgroundColor={backgroundIsDark ? 'gray-800' : 'gray-200'}
          >
            {eyebrowIcon && (
              <Image
                src={eyebrowIcon.url}
                alt=""
                width={eyebrowIcon.width}
                height={eyebrowIcon.height}
                css={{
                  maxHeight: '16px',
                  maxWidth: '16px',
                }}
              />
            )}
            <Text
              textStyle="xs"
              textTransform="uppercase"
              textColor={backgroundIsDark ? 'common-white' : 'primary-400'}
              fontWeight="bold"
            >
              {eyebrow}
            </Text>
          </Flex>
        )}
        {button && <ComponentButton key={button.id} {...button} marginX={0} />}
      </Flex>
      {heading && (
        <Heading as="h2" textStyle="xs" textColor={backgroundIsDark ? 'common-white' : 'gray-900'} fontWeight="bold">
          {heading}
        </Heading>
      )}
      {content && render(content as any) && (
        <Flex
          flexDirection="column"
          gap="12px"
          fontSize="textMd"
          lineHeight="textMd"
          md={{ fontSize: 'textLg', lineHeight: 'textLg' }}
          textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
        >
          {richTextParser(content as any)}
        </Flex>
      )}
    </Flex>
    {reference?.imageDesktop?.url && (
      <Flex width="100%">
        {reference.imageDesktop.url.slice(-4) !== 'json' ? (
          <Image
            src={reference.imageDesktop?.url || ''}
            alt={reference.imageDesktop?.alt || ''}
            title={reference.imageDesktop?.title || ''}
            width={reference.imageDesktop?.width}
            height={reference.imageDesktop?.height}
            isFullWidth
            css={`
              width: 100%;
            `}
          />
        ) : (
          <LottieImage url={reference.imageDesktop.url} />
        )}
      </Flex>
    )}
  </Flex>
);

export default ComponentBentoStackedImage;
