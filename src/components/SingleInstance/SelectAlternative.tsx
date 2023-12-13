import { useRouter } from 'next/router';

import { audioData } from 'assets/data/audioData';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CompProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}

const SelectAlternative: FC<CompProps> = () => {
  const router = useRouter();
  const audioId = router.query?.audio || 'nasa';
  const currentAudio = audioData.filter(item => item.id === audioId)?.[0] || audioData[0];

  // TODO Breadcrumb Links
  const breadcrumbs = [
    { link: 'https://deepgram.com/asr-comparison', label: 'Intro' },
    { link: 'https://deepgram.com/asr-comparison/compare-accuracy', label: 'Select Audio' },
    {
      link: `https://deepgram.com/asr-comparison/compare-accuracy/select-alternative?audio=${audioId}`,
      label: 'Select an Alternative',
    },
    {
      link: `https://deepgram.com/asr-comparison/compare-accuracy/select-alternative?audio=${audioId}`,
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
        Step 2: Select Alternative
      </Heading>
      <Paragraph fontSize="textXl">
        <b>Select a vendor to compare to Deepgram</b>. Why these two? Because if you’re going to show off your skills,
        you go big or go home.
      </Paragraph>
      <Flex flexDirection="column" gap="8px">
        <Flex backgroundColor="gray-900" paddingAll={24} borderRadius="8px" textColor="common-white" gap="20px">
          <Flex flex="0 0 40px">
            <Icon iconName="audio-file" size={40} />
          </Flex>
          <Flex flexDirection="column" gap="8px">
            <Text fontSize="textXl" fontWeight="bold">
              {currentAudio.title}
            </Text>
            <Text fontSize="textMd">{currentAudio.subhead}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="16px" sm={{ flexDirection: 'row' }}>
        <ComponentButton
          link={`https://deepgram.com/asr-comparison/compare-accuracy/select-alternative/compare-accuracy-step-3?audio=${audioId}&target=google`}
          label="Google Speech-to-Text"
          buttonType="fill"
          color="success"
        />
        <ComponentButton
          link={`https://deepgram.com/asr-comparison/compare-accuracy/select-alternative/compare-accuracy-step-3?audio=${audioId}&target=amazon`}
          label="Amazon Transcribe"
          buttonType="fill"
          color="purple"
        />
      </Flex>
    </Flex>
  );
};

export default SelectAlternative;
