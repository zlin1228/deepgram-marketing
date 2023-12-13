import { useRouter } from 'next/router';

import { audioData } from 'assets/data/audioData';

import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import ComponentButton from 'components/ComponentButton/ComponentButton';
import AudioPlayer from 'components/FeatureList/AudioPlayer';

import type { IComponentSingleInstanceRecord, IFileField } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CompareAccuracyProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}

const cardProps = {
  height: '600px',
  overflowY: 'auto',
} as const;

const cardCSS = `
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
  & .text-insertion {
    color: ${color.error[500]};
  }
  & .text-deletion {
    color: ${color.error[500]};
    background: ${color.error[500]};
  }
  `;

const CompareAccuracyStep: FC<CompareAccuracyProps> = () => {
  const router = useRouter();
  const audioId = router.query?.audio || 'nasa';
  const target = router.query?.target || 'google';
  const currentAudio = audioData.filter(item => item.id === audioId)?.[0] || audioData[0];
  const audioFile = { url: currentAudio.url };
  const breadcrumbs = [
    { link: 'https://deepgram.com/asr-comparison', label: 'Intro' },
    { link: 'https://deepgram.com/asr-comparison/compare-accuracy', label: 'Select Audio' },
    {
      link: `https://deepgram.com/asr-comparison/compare-accuracy/select-alternative?audio=${audioId}`,
      label: 'Select an Alternative',
    },
    {
      link: `https://deepgram.com/asr-comparison/compare-accuracy/select-alternative/compare-accuracy-step-3?audio=${audioId}&target=${target}`,
      label: 'Review Comparison',
    },
  ];

  return (
    <Flex flexDirection="column" gap="24px" paddingTop={64}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Heading
        as="h2"
        textStyle="sm"
        sm={{ textStyle: 'md' }}
        lg={{ textStyle: 'lg' }}
        textColor="common-white"
        fontWeight="bold"
      >
        Step 3: Review Comparison
      </Heading>
      <Paragraph>
        <AudioPlayer {...(audioFile as IFileField)} noHeading />
      </Paragraph>
      <Flex gap="30px" flexDirection="column" md={{ flexDirection: 'row' }}>
        <Flex
          width="100"
          md={{ flex: '0 0 calc(33.3% - 20px)' }}
          backgroundColor="gray-900"
          textColor="gray-100"
          paddingAll={24}
          flexDirection="column"
          gap="24px"
        >
          <Text fontSize="textXl" fontWeight="bold" textColor="common-white" textTransform="capitalize">
            {target} Speech-to-Text
          </Text>
          <Container {...cardProps} css={[cardCSS]}>
            {currentAudio?.[target as 'google' | 'amazon']?.transcript}
          </Container>
        </Flex>
        <Flex
          width="100"
          md={{ flex: '0 0 calc(33.3% - 20px)' }}
          backgroundColor="gray-900"
          textColor="gray-100"
          paddingAll={24}
          flexDirection="column"
          gap="24px"
        >
          <Text fontSize="textXl" fontWeight="bold" textColor="common-white" textTransform="capitalize">
            Deepgram Speech-to-Text
          </Text>
          <Container {...cardProps} css={[cardCSS]}>
            {currentAudio.deepgram?.transcript}
          </Container>
        </Flex>
        <Flex
          width="100"
          md={{ flex: '0 0 calc(33.3% - 20px)' }}
          backgroundColor="gray-900"
          textColor="gray-100"
          paddingAll={24}
          flexDirection="column"
          gap="24px"
        >
          <Text fontSize="textXl" fontWeight="bold" textColor="common-white" textTransform="capitalize">
            Analysis
          </Text>
          <Container {...cardProps} css={[cardCSS]} fontSize="textMd" lineHeight="textMd">
            <Paragraph>AUDIO LENGTH — {currentAudio.audioLength}</Paragraph>
            <Paragraph marginTop={16} fontWeight="bold">
              SPEED TO PROCESS
            </Paragraph>
            <Paragraph>
              <Text textTransform="capitalize">{target}</Text>: {currentAudio?.[target as 'google' | 'amazon']?.speed}{' '}
            </Paragraph>
            <Paragraph>Deepgram: {currentAudio.deepgram.speed} </Paragraph>
            <Paragraph marginTop={16} fontWeight="bold">
              WER (WORD ERROR RATE)
            </Paragraph>
            <Paragraph>
              <Text textTransform="capitalize">{target}</Text>: {currentAudio?.[target as 'google' | 'amazon']?.wer}{' '}
            </Paragraph>
            <Paragraph>Deepgram: {currentAudio.deepgram.wer} </Paragraph>

            <Paragraph marginTop={16} fontWeight="bold">
              ACCURACY
            </Paragraph>
            <Paragraph>
              <Text textTransform="capitalize">{target}</Text>:{' '}
              {currentAudio?.[target as 'google' | 'amazon']?.accuracy}{' '}
            </Paragraph>
            <Paragraph>Deepgram: {currentAudio.deepgram.accuracy} </Paragraph>

            <Paragraph marginTop={16} fontWeight="bold">
              DIFFICULTY - {currentAudio?.difficulty}
            </Paragraph>
            <Paragraph>{currentAudio.description} </Paragraph>
            <Paragraph marginTop={8}>Note: {currentAudio.note} </Paragraph>
            <Flex marginTop={24} width="100%">
              <ComponentButton
                link="https://deepgram.com/contact-us/"
                label="This is cool. Let’s talk."
                buttonType="fill"
                color="success"
                width="100%"
              />
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompareAccuracyStep;
