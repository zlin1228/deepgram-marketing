import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import _ReactPlayer from 'react-player/lazy';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';

import type { IComponentVideoRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';
import type { ReactPlayerProps } from 'react-player/types/lib';

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

type VideoProps = BasicProps &
  Omit<
    IComponentVideoRecord,
    '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt' | 'id'
  >;

const ComponentVideo: FC<VideoProps> = ({ title, videoUrl, videoFile, thumbnail, autoPlay, ...props }) => {
  const [isPlay, setIsPlay] = useState(autoPlay);
  const [isPlayed, setIsPlayed] = useState(autoPlay);

  const handleReady = () => {
    setIsPlay(autoPlay);
  };

  return (
    <Flex
      marginX="auto"
      {...props}
      position="relative"
      maxWidth="970px"
      width="100%"
      css={`
        box-shadow: 0px 3.65911px 14.6364px rgba(0, 0, 0, 0.1);
        padding-top: 50%;
      `}
    >
      <Flex
        position="absolute"
        display="flex"
        width="96px"
        height="96px"
        borderRadius="50%"
        backgroundColor="gray-900"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        zIndex={10}
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={() => (setIsPlay(!isPlay), setIsPlayed(true))}
        transition="all .3s"
        opacity={isPlay ? 0 : 1}
        md={{
          width: '90px',
          height: '90px',
        }}
      >
        <FaPlay color="#fff" size="32" />
      </Flex>
      {thumbnail && (
        <Container
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          transition="all .3s"
          opacity={isPlayed ? 0 : 1}
          zIndex={isPlayed ? 0 : 5}
        >
          <Image
            borderRadius="8px"
            src={thumbnail.url}
            alt={thumbnail?.title || title || ''}
            width={thumbnail?.width}
            height={thumbnail?.height}
            isFullWidth
            isFullHeight
            css={`
              max-width: 100%;
              max-height: 100%;
            `}
          />
        </Container>
      )}
      <Container position="absolute" top="0" left="0" width="100%" height="100%">
        <ReactPlayer
          url={videoUrl || videoFile?.url || ''}
          playing={isPlay}
          playsinline={true}
          controls={!autoPlay}
          width="100%"
          height="100%"
          onPause={() => setIsPlay(false)}
          onPlay={() => setIsPlay(true)}
          loop={autoPlay}
          muted={autoPlay}
          onReady={() => handleReady()}
        />
      </Container>
    </Flex>
  );
};

export default ComponentVideo;
