import { useMemo, useState } from 'react';

import { fontSize } from 'atoms/typography/typography';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import Switch from 'molecules/Switch/Switch';

import ComponentHeading from 'components/Heading/Heading';

import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface InteractiveProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}
type featureProps = {
  heading: string;
  subhead: string;
};

const InteractiveComponent: FC<InteractiveProps> = ({ optionalHeading, json, layout }) => {
  const [checkedFeatures, setCheckedFeatures] = useState<string[]>([json?.[0]?.features?.[0]?.heading]);

  const selectedTranscript = useMemo(
    () =>
      json?.[0]?.transcript?.filter(
        (item: any) =>
          (checkedFeatures.length === 0 && item?.feature?.length === 0) ||
          (checkedFeatures.length === item?.feature?.length &&
            item?.feature.every((value: string) => checkedFeatures.includes(value))),
      ),
    [checkedFeatures],
  );

  const handleChange = (checked: boolean, name: string) => {
    if (checked) {
      setCheckedFeatures([...checkedFeatures, name]);
    } else {
      setCheckedFeatures(checkedFeatures.filter(ft => ft !== name));
    }
  };

  return (
    <Flex
      flexDirection="column"
      gap="32px"
      sm={{ gap: '48px' }}
      lg={{ flexDirection: layout === 'split' ? 'row' : 'column', gap: layout === 'split' ? '76px' : '56px' }}
    >
      {optionalHeading && (
        <Container
          lg={{ maxWidth: layout === 'split' ? '470px' : '800px', marginX: layout === 'split' ? undefined : 'auto' }}
        >
          <ComponentHeading {...optionalHeading} aligment={layout === 'split' ? 'left' : 'center'} />
        </Container>
      )}
      <Container flexGrow={1}>
        <Flex
          flexDirection="column"
          textColor="common-white"
          gap="40px"
          md={{
            flexDirection: 'row',
            gap: '48px',
          }}
        >
          <Flex flexDirection="column" gap="24px" md={{ flex: '0 0 30%', maxWidth: '30%' }}>
            <Heading as="h4" textStyle="sm">
              Sample features
            </Heading>
            {json?.[0]?.features?.map((feature: featureProps) => (
              <Flex
                key={feature.heading}
                css={`
                  .switch-label {
                    font-size: ${fontSize.textXl};
                    font-weight: bold;
                  }
                  .switch-helper {
                    font-size: ${fontSize.textMd};
                  }
                `}
              >
                <Switch
                  label={feature.heading}
                  helperText={feature.subhead}
                  checked={checkedFeatures.includes(feature.heading)}
                  onChange={(_, checked) => handleChange(checked, feature.heading)}
                />
              </Flex>
            ))}
          </Flex>
          <Flex flexGrow={1} backdropFilter="lg" flexDirection="column" gap="24px">
            <Heading as="h4" textStyle="sm">
              Example transcript
            </Heading>
            <Flex backgroundShorthand="rgba(79,98,120,.3)" flexDirection="column" paddingAll={32} gap="24px">
              <Container
                paddingX={20}
                paddingY={8}
                backgroundColor="common-black"
                textColor="primary-400"
                fontSize="textMd"
                textTransform="lowercase"
              >
                {'{ '}
                {selectedTranscript?.[0]?.feature?.map((item: string) => `${item}=true`)?.join('&')}
                {' }'}
              </Container>
              <Container paddingAll={20} backgroundColor="gray-900" textColor="gray-100">
                {selectedTranscript?.[0]?.content}
              </Container>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default InteractiveComponent;
