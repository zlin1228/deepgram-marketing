import { audioData } from 'assets/data/audioData';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';

import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CompareAccuracyProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}

const breadcrumbs = [
  { link: 'https://deepgram.com/asr-comparison', label: 'Intro' },
  { link: 'https://deepgram.com/asr-comparison/compare-accuracy', label: 'Select Audio' },
  { link: 'https://deepgram.com/asr-comparison/compare-accuracy', label: 'Select an Alternative' },
  { link: 'https://deepgram.com/asr-comparison/compare-accuracy', label: 'Review Comparison' },
];

const CompareAccuracy: FC<CompareAccuracyProps> = () => (
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
      Step 1: Select Audio
    </Heading>
    <Paragraph fontSize="textXl">
      We’ve intentionally selected audio files that are typically challenging for many providers.
    </Paragraph>
    <Paragraph fontSize="textXl">
      <b>Select one</b> closest to your needs
    </Paragraph>
    <Flex flexDirection="column" gap="8px">
      {audioData.map(item => (
        <Link
          key={item.id}
          href={`https://deepgram.com/asr-comparison/compare-accuracy/select-alternative/?audio=${item.id}`}
        >
          <Flex
            backgroundColor="gray-900"
            paddingAll={24}
            borderRadius="8px"
            textColor="common-white"
            gap="20px"
            transition="background-color 200ms ease-in-out"
            hover={{
              backgroundColor: 'gray-800',
            }}
          >
            <Flex flex="0 0 40px">
              <Icon iconName="audio-file" size={40} />
            </Flex>
            <Flex flexDirection="column" gap="8px">
              <Text fontSize="textXl" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="textMd">{item.subhead}</Text>
            </Flex>
          </Flex>
        </Link>
      ))}
    </Flex>
  </Flex>
);

export default CompareAccuracy;
