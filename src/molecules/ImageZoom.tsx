import { useState } from 'react';

import Flex from 'quarks/Flex';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import ComponentImage from 'components/ComponentImage/ComponentImage';

import type { IComponentImageRecord } from 'lib/types';
import type { FC } from 'react';

interface ImageZoomProps {
  image: IComponentImageRecord;
}

const ImageZoom: FC<ImageZoomProps> = ({ image }) => {
  const [expand, setExpand] = useState(false);

  return (
    <Flex
      onClick={() => setExpand(!expand)}
      position="relative"
      cursor={expand ? 'zoom-out' : 'zoom-in'}
      css={`
        &:hover > button {
          color: #00e062 !important;
        }
      `}
    >
      <ComponentButton
        onClick={() => setExpand(true)}
        startIcon="expand"
        outline="none"
        textColor="common-transparent"
        css={`
          position: absolute !important;
          z-index: 100;
          right: 0;
          top: 5px;
          width: min-content !important;
          svg {
            height: 24px;
            width: 24px;
          }
        `}
      />
      <ComponentImage {...(image as IComponentImageRecord)} isShowCaption sizes="(min-width: 992px) 810px, 100vw" />
      <Flex
        display={expand ? 'flex' : 'none'}
        flexDirection="column"
        justifyContent="center"
        position="fixed"
        zIndex="100000"
        top="0"
        left="0"
        right="0"
        bottom="0"
      >
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backdropFilter="xl"
          backgroundShorthand="rgba(0, 0, 0, 0.5)"
        />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="8px"
          marginX="auto"
          maxWidth="70vw"
        >
          <ComponentButton
            onClick={() => setExpand(false)}
            startIcon="x-close"
            outline="none"
            css={`
              align-self: flex-end;
              svg {
                width: 32px;
                height: 32px;
              }
            `}
          />
          <ComponentImage {...(image as IComponentImageRecord)} isShowCaption alignSelf="flex-end" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageZoom;
