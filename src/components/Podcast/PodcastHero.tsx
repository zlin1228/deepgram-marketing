import { FaMicrophone } from 'react-icons/fa';

import AudioLogo from 'assets/images/audio.jpg';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import PodcastAudioPlayer from 'components/Podcast/PodcastAudioPlayer';
import Avatar from 'components/Quote/Avatar';

import { FormatDate } from 'utils/functions';

import type { ITemplatePodcastRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type PodcastHeroProps = BasicProps & ITemplatePodcastRecord;

const PodcastHero: FC<PodcastHeroProps> = ({
  title,
  slug,
  hostedBy,
  publishDate,
  podcastAudioTitle,
  podcastAudioUrl,
}) => {
  const breadcrumbs = [
    { link: 'https://deepgram.com/podcast', label: 'Podcast' },
    { link: `https://deepgram.com/podcast/${slug}`, label: title },
  ];

  return (
    <Container as="section" id="blog-detail-hero" backgroundColor="common-black" textColor="common-white">
      <Container {...sectionSizing}>
        <Flex paddingY={96} flexDirection="column" gap="16px">
          <Breadcrumb breadcrumbs={breadcrumbs} marginTop={64} marginBottom={16} />
          <Flex
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap="16px"
            maxWidth="1008px"
            marginX="auto"
            marginBottom={8}
          >
            <Flex
              paddingY={4}
              paddingX={10}
              gap="8px"
              fontWeight="bold"
              borderRadius="30px"
              backgroundColor="gray-800"
              alignItems="center"
              fontSize="textXs"
              lineHeight="textXs"
            >
              <FaMicrophone size={16} color={color.magenta[400]} />
              <Text textTransform="uppercase">PODCAST</Text>
            </Flex>
            {title && (
              <Heading
                as="h1"
                textStyle="sm"
                sm={{ textStyle: 'md' }}
                lg={{ textStyle: 'lg' }}
                textColor="common-white"
                fontWeight="semiBold"
              >
                {title}
              </Heading>
            )}
            {(hostedBy || publishDate) && (
              <Flex gap="12px">
                {hostedBy && <Avatar {...hostedBy} isDark isSmall />}
                {publishDate && (
                  <Flex gap="8px" alignItems="center">
                    <Icon iconName="lightning-01" size={18} />
                    <Text>Published on {FormatDate(publishDate, true)}</Text>
                  </Flex>
                )}
              </Flex>
            )}
          </Flex>
          <Flex
            backgroundColor="gray-900"
            border="1px solid"
            borderRadius="5px"
            borderColor="gray-600"
            paddingAll={16}
            width="100%"
            marginTop={40}
            textColor="common-white"
            gap="16px"
            lg={{ maxWidth: '1008px', marginX: 'auto' }}
          >
            <Flex
              width="90px"
              height="90px"
              borderRadius="5px"
              overflowX="hidden"
              overflowY="hidden"
              flex="0 0 90px"
              sm={{ width: '120px', height: '120px', flex: '0 0 120px' }}
              lg={{ width: '175px', height: '175px', flex: '0 0 175px' }}
            >
              <Image
                borderRadius="8px"
                src={AudioLogo.src}
                alt=""
                width={AudioLogo.width}
                height={AudioLogo.height}
                isFullWidth
                isFullHeight
              />
            </Flex>
            <PodcastAudioPlayer
              url={podcastAudioUrl || ''}
              title={podcastAudioTitle || ''}
              podcastTitle={title || ''}
              flexGrow={1}
              maxWidth="calc(100% - 106px)"
              sm={{ maxWidth: 'calc(100% - 136px)' }}
              lg={{ maxWidth: 'calc(100% - 191px)' }}
            />
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default PodcastHero;
