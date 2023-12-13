import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Iframe from 'quarks/Iframe';

import Modal from 'molecules/Modal/Modal';

import { getYoutubeId } from 'utils/functions';

import type { IComponentVideoRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface VideoPopupProps
  extends BasicProps,
    Omit<
      IComponentVideoRecord,
      '_createdAt' | 'id' | 'internal' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  open: boolean;
  onClose: () => void;
}

const VideoPopup: FC<VideoPopupProps> = ({ open, videoUrl, title, onClose, __typename, ...props }) => {
  const youtubeID = getYoutubeId(videoUrl || '');
  const url = `https://www.youtube.com/embed/${youtubeID}`;

  return (
    <Modal open={open} onClose={onClose} width="90%" maxWidth="800px" marginX="auto" isVideo>
      <Container position="relative" {...props}>
        <Container position="relative" width="100%" height="250px" marginBottom={24} md={{ height: '450px' }}>
          <Iframe
            id="video-iframe"
            src={url + `${videoUrl ? '?autoplay=1' : ''}` || ''}
            title=""
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; accelerometer; clipboard-write;encrypted-media; gyroscope; picture-in-picture;"
            scrolling="no"
            loading="lazy"
            position="absolute"
            left={0}
            top={0}
          />
        </Container>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          textColor="common-white"
          gap="16px"
          opacity={0}
          lg={{ flexDirection: 'row' }}
          css={`
            animation: fadeIn 1s ease 0.2s forwards;
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}
        >
          <Container maxWidth="570px">
            {title && (
              <Heading as="h4" textStyle="sm">
                {title}
              </Heading>
            )}
          </Container>
        </Flex>
      </Container>
    </Modal>
  );
};

export default VideoPopup;
