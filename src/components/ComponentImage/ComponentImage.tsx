import ReactMarkdown from 'react-markdown';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';

import LottieImage from 'components/LottieImage/LottieImage';

import type { IComponentImageRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface ImageProps
  extends BasicProps,
    Omit<
      IComponentImageRecord,
      'id' | 'internalName' | '_createdAt' | '_updatedAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status'
    > {
  isShowCaption?: boolean;
  sizes?: string;
}

const ComponentImage: FC<ImageProps> = ({ imageDesktop, imageMobile, caption, sizes, isShowCaption }) => {
  if (imageDesktop?.url?.slice(-5).toLowerCase() === '.json') {
    return <LottieImage url={imageDesktop?.url} />;
  }

  return (
    <Flex
      flexDirection="column"
      gap="8px"
      width="100%"
      maxWidth="100%"
      justifyContent="center"
      alignItems="center"
      className="component-img-wrapper"
    >
      {imageDesktop?.url && (
        <Image
          src={imageDesktop?.url || ''}
          alt={imageDesktop?.alt || ''}
          title={imageDesktop?.title || ''}
          width={imageDesktop?.width}
          height={imageDesktop?.height}
          display={imageMobile?.url ? 'none' : 'flex'}
          sizes={sizes || '100vw'}
          placeholder="blur"
          blurDataURL="/deepgram.jpg"
          sm={{
            display: 'flex',
          }}
          css={{
            height: 'auto',
            maxWidth: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      {imageMobile?.url && (
        <Image
          src={imageMobile?.url || ''}
          alt={imageMobile?.alt || ''}
          title={imageMobile?.title || ''}
          width={imageMobile?.width}
          height={imageMobile?.height}
          sizes={sizes || '100vw'}
          sm={{ display: 'none' }}
          css={{
            height: 'auto',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      {caption && isShowCaption && (
        <Container fontSize="textSm" fontStyle="italic">
          <ReactMarkdown>{caption}</ReactMarkdown>
        </Container>
      )}
    </Flex>
  );
};

export default ComponentImage;
