import { useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import AudioPlayer from 'components/FeatureList/AudioPlayer';

import interactiveRichTextParser from 'utils/interactiveRichTextParser';
import richTextParser from 'utils/richTextParser';

import type { IComponentSlideboxItemRecord } from 'lib/types';
import type { FC } from 'react';

interface TabPanelProps
  extends Omit<
    IComponentSlideboxItemRecord,
    'id' | '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
  > {
  backgroundIsDark: boolean;
  isActive: boolean;
}

const SlideboxItem: FC<TabPanelProps> = ({
  audio,
  audioName,
  requestUrl,
  payload,
  response,
  transcript,
  isActive,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTranscriptLoaded, setIsTranscriptLoaded] = useState(false);
  const [percent, setPercent] = useState(0);

  const loadAnimation = () => {
    let startTimestamp = 0;
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const progress = Math.min((timestamp - startTimestamp) / 1000, 1);
      setPercent(Math.floor(progress * 100));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsTranscriptLoaded(true);
        }, 1000);
      }
    };
    window.requestAnimationFrame(step);
  };

  const handleRunDemo = () => {
    setIsLoaded(true);
    loadAnimation();
  };

  return (
    <Flex
      role="tabpanel"
      hidden={!isActive}
      width="100%"
      flexDirection="column"
      display={isActive ? 'flex' : 'none'}
      gap="16px"
      fontSize="textMd"
      lineHeight="textMd"
      textColor="common-white"
      sm={{ gap: '24px', flexDirection: 'row' }}
      lg={{ gap: '40px' }}
      {...props}
    >
      <Flex
        flexDirection="column"
        gap="20px"
        paddingAll={20}
        borderRadius="16px"
        backgroundColor="gray-900"
        textColor="common-white"
        sm={{ paddingAll: 24, flex: '0 0 calc(50% - 12px)', maxWidth: 'calc(50% - 12px)' }}
        lg={{ flex: '0 0 calc(50% - 20px)', maxWidth: 'calc(50% - 20px)' }}
      >
        <Text fontSize="displayXs" lineHeight="displayXs">
          <b>Step 1</b>: Input Audio
        </Text>
        <Flex flexDirection="column" gap="12px" lg={{ flexDirection: 'row' }}>
          <Flex
            gap="10px"
            paddingY={12}
            paddingX={24}
            borderRadius="4px"
            backgroundColor="gray-700"
            alignItems="center"
            flexGrow={1}
          >
            <Icon iconName="file-audio" size={24} />
            {audioName && richTextParser(audioName)}
          </Flex>
          <ComponentButton label="Run Demo" buttonType="fill" color="magenta" onClick={() => handleRunDemo()} />
        </Flex>
        {audio && (
          <Flex width="100%">
            <AudioPlayer {...audio} noHeading noPadding />
          </Flex>
        )}
        {requestUrl && (
          <Container
            css={`
              & span {
                color: ${color.success[300]};
                &.token {
                  color: ${color.gray[200]};
                }
              }
            `}
          >
            {richTextParser(requestUrl)}
          </Container>
        )}
        {payload && (
          <Container
            overflowY="auto"
            css={`
              & span {
                &.token {
                  color: ${color.gray[200]};
                  &.string {
                    color: ${color.success[300]};
                  }
                }
              }
            `}
          >
            {richTextParser(payload, true)}
          </Container>
        )}
        {isLoaded ? (
          response && richTextParser(response)
        ) : (
          <Container
            borderRadius="4px"
            backgroundColor="common-black"
            textColor="gray-200"
            fontSize="textMd"
            paddingY={20}
            paddingX={24}
            flexGrow={1}
          >
            The response will show here
          </Container>
        )}
      </Flex>
      <Flex
        flexDirection="column"
        position="relative"
        gap="20px"
        flex="1 0 0"
        paddingAll={20}
        borderRadius="16px"
        backgroundColor="gray-900"
        sm={{ paddingAll: 24 }}
      >
        <Text fontSize="displayXs" lineHeight="displayXs">
          <b>Step 2</b>: Transcription Output
        </Text>
        <Flex
          flexDirection="column"
          gap="16px"
          position="relative"
          paddingX={24}
          paddingY={20}
          borderRadius="4px"
          backgroundColor="common-black"
          textColor="gray-200"
          height="100%"
          maxHeight="520px"
          overflowY="auto"
          zIndex={10}
          css={`
            &::-webkit-scrollbar {
              border-radius: 100px;
              height: 6px;
              width: 6px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #2f4053;
              border-radius: 100px;
            }
            &::-webkit-scrollbar-track {
              background-color: #1e2c3c;
              border-radius: 100px;
            }
          `}
        >
          {isLoaded ? (
            <>
              <Flex
                gap="24px"
                opacity={isTranscriptLoaded ? 0 : 1}
                transition="opacity 200ms ease-in-out"
                position="absolute"
                top="20px"
                left="24px"
                width="calc(100% - 30px)"
              >
                <Text>
                  {Array(Math.round(percent / 5))
                    .fill(null)
                    .map(() => '#')}
                </Text>
                <Text>{percent}%</Text>
              </Flex>
              <Flex
                flexDirection="column"
                gap="20px"
                opacity={isTranscriptLoaded ? 1 : 0}
                transition="opacity 300ms ease-in-out"
              >
                {transcript && interactiveRichTextParser(transcript)}
              </Flex>
            </>
          ) : (
            'The response will show here'
          )}
          <Container
            backgroundShorthand="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
            position="sticky"
            bottom="-20px"
            left="0"
            width="100%"
            height="234px"
            opacity="0.8"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SlideboxItem;
