import NextImage from 'next/image';

import { breakpoints } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';
import { pseudos } from 'quarks/quarkUtils/getPseudoClassProps';
import { pseudoElements } from 'quarks/quarkUtils/getPseudoEleProps';
import basicCSS from 'quarks/styleProps/basic';

import { objectEntries } from 'utils/typeUtils';

import type { ImageProps } from 'next/image';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';
import type { valueof } from 'utils/typeUtils';

type ModifiedBasicProps = Omit<BasicProps, 'height' | 'width' | 'objectPosition' | 'objectFit'>;

interface CustomImageProps extends ModifiedBasicProps, ImageProps {
  height?: number;
  width?: number;
  alt: string;
  sizes?: string;
  objectPosition?: string;
  isFullHeight?: boolean;
  isFullWidth?: boolean;
  isDark?: boolean;
  flexCss?: BasicProps;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { height, width, objectPosition, ...remainingProps } = basicCSS;

const customCSS = { ...remainingProps, ...breakpoints, ...pseudos, ...pseudoElements };
const allCSSKeys = Object.keys(customCSS);

const Image: FC<CustomImageProps> = ({ isFullHeight, isFullWidth, isDark, ...props }) => {
  type filteredProp = [keyof CustomImageProps, valueof<CustomImageProps>];

  const { filteredQuarkProps, filteredNextProps } = objectEntries(props).reduce(
    (result, prop) => {
      result[allCSSKeys.includes(prop[0]) ? 'filteredQuarkProps' : 'filteredNextProps'].push(prop);

      return result;
    },
    { filteredQuarkProps: [], filteredNextProps: [] } as {
      filteredQuarkProps: filteredProp[];
      filteredNextProps: filteredProp[];
    },
  );

  const quarkProps = Object.fromEntries(filteredQuarkProps);
  const { src, alt, title, flexCss, ...nextProps } = Object.fromEntries(filteredNextProps);

  return (
    <Flex
      position="relative"
      justifyContent="center"
      width={isFullWidth ? '100%' : 'fit-content'}
      height={isFullHeight ? '100%' : 'fit-content'}
      css={
        !isFullHeight
          ? `
        & img {
          max-width: 100%;
          height: auto;
        }
      `
          : ''
      }
      filter={isDark ? 'brightness(0)invert(1)' : undefined}
      {...quarkProps}
      {...flexCss}
    >
      {src && (
        <NextImage
          data-sb-object-id={props?.id || ''}
          src={src}
          alt={alt}
          title={title}
          loading="eager"
          priority
          {...nextProps}
          style={{ objectFit: isFullWidth ? 'cover' : 'contain' }}
          unoptimized={typeof src === 'string' && src?.slice(-4)?.toLowerCase() === '.gif'}
        />
      )}
    </Flex>
  );
};

export default Image;
