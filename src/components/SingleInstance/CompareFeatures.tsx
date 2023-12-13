import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CompareFeaturesProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}

const CompareFeatures: FC<CompareFeaturesProps> = () => (
  <Flex flexDirection="column" gap="24px" paddingTop={64}>
    <Heading
      as="h2"
      textStyle="sm"
      sm={{ textStyle: 'md' }}
      lg={{ textStyle: 'lg' }}
      textColor="common-white"
      fontWeight="bold"
    >
      Step 1: Select Alternative
    </Heading>
    <Paragraph fontSize="textXl">
      <b>Select a vendor to compare to Deepgram</b>. Why these two? Because if you’re going to show off your skills, you
      go big or go home.
    </Paragraph>
    <Flex flexDirection="column" gap="16px" sm={{ flexDirection: 'row' }}>
      <ComponentButton
        link="https://deepgram.com/asr-comparison/compare-features/review-comparison-google/"
        label="Google Speech-to-Text"
        buttonType="fill"
        color="success"
      />
      <ComponentButton
        link="https://deepgram.com/asr-comparison/compare-features/review-comparison-amazon/"
        label="Amazon Transcribe"
        buttonType="fill"
        color="purple"
      />
    </Flex>
  </Flex>
);

export default CompareFeatures;
