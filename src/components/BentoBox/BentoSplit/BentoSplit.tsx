import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import LottieImage from 'components/LottieImage/LottieImage';

import richTextParser from 'utils/richTextParser';

import type { IComponentBentoSplitContentRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface BentoSplitContentProps
  extends BasicProps,
    Omit<
      IComponentBentoSplitContentRecord,
      '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  backgroundIsDark?: boolean;
  content?: IComponentBentoSplitContentRecord['content'];
}

const ComponentBentoSplitContent: FC<BentoSplitContentProps> = ({
  eyebrowIcon,
  eyebrow,
  heading,
  content,
  button,
  reference,
  backgroundIsDark,
}) => (
  <Grid
    gap="32px"
    width="100%"
    gridTemplateColumns="1fr"
    md={{
      gridTemplateColumns: 'repeat(2, 1fr)',
      alignItems: 'center',
    }}
  >
    <Flex flexDirection="column" gap="32px">
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
      {heading && (
        <Heading
          as="h2"
          textStyle="xs"
          textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
          fontWeight="bold"
          lg={{ textStyle: 'sm', fontWeight: 'bold' }}
        >
          {heading}
        </Heading>
      )}
      {content && (
        <Flex
          flexDirection="column"
          gap="12px"
          fontFamily="bodyFont"
          fontSize="textMd"
          lineHeight="textMd"
          md={{ fontSize: 'textLg', lineHeight: 'textLg' }}
          textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
        >
          {richTextParser(content as any)}
        </Flex>
      )}
      {button && (
        <Flex flexDirection="column" width="100%">
          <ComponentButton key={button.id} {...button} marginLeft={0} />
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
          />
        ) : (
          <LottieImage url={reference.imageDesktop.url} />
        )}
      </Flex>
    )}
  </Grid>
);

export default ComponentBentoSplitContent;
