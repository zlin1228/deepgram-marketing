import { render } from 'datocms-structured-text-to-plain-text';
import { useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import color from 'atoms/colors/colors';
import { fontSize } from 'atoms/typography/typography';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import Radio from 'molecules/Radio/Radio';

import AudioPlayer from 'components/FeatureList/AudioPlayer';
import LiveStreaming from 'components/FeatureList/LiveStreaming';
import ComponentHeading from 'components/Heading/Heading';

import interactiveRichTextParser from 'utils/interactiveRichTextParser';

import type { IComponentFeatureListRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface InteractiveProps extends BasicProps, IComponentFeatureListRecord {
  backgroundIsDark?: boolean;
  isActive?: boolean;
  isSubComponent?: boolean;
}

const ComponentFeatureList: FC<InteractiveProps> = props => {
  const { optionalHeading, features, audio, layout, isActive, isSubComponent } = props;
  const [checkedFeature, setCheckedFeature] = useState<string>(features?.[0]?.id);

  const handleChange = (checked: boolean, name: string) => {
    setCheckedFeature(checked ? name : '');
  };

  const selectedTranscript = useMemo(
    () => features.filter(feature => feature.id === checkedFeature)?.[0],
    [checkedFeature],
  );

  if (layout === 'live_streaming') {
    return <LiveStreaming {...props} />;
  }

  return (
    <Flex
      flexDirection="column"
      gap="32px"
      sm={{ gap: '48px' }}
      lg={{ gap: '56px' }}
      display={isActive || !isSubComponent ? 'flex' : 'none'}
    >
      {layout !== 'audio_intelligence' && optionalHeading && <ComponentHeading {...optionalHeading} />}
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
          <Flex flexDirection="column" gap="24px" md={{ flex: '0 0 24%', maxWidth: '24%' }}>
            {audio && <AudioPlayer {...audio} />}
            {features?.map(feature => (
              <Flex
                key={feature.heading}
                paddingX={24}
                paddingY={16}
                borderRadius="8px"
                backgroundColor={feature.id === checkedFeature ? 'gray-800' : 'gray-900'}
                border="1px solid"
                borderColor={feature.id === checkedFeature ? 'gray-700' : 'common-transparent'}
                css={`
                  .radio-label {
                    color: ${color.common.white};
                    font-size: ${fontSize.textMd};
                    font-weight: bold;
                  }
                  .radio-helper {
                    font-size: ${fontSize.textSm};
                    color: #d7dfeb;
                  }
                `}
              >
                <Radio
                  label={feature.heading || ''}
                  helperText={
                    feature.id === checkedFeature ? <ReactMarkdown>{feature.subhead || ''}</ReactMarkdown> : ''
                  }
                  checked={feature.id === checkedFeature}
                  onChange={(_, checked) => handleChange(checked, feature.id)}
                />
              </Flex>
            ))}
          </Flex>
          <Flex flexGrow={1} backdropFilter="lg" flexDirection="column" gap="24px">
            <Flex backgroundShorthand="rgba(79,98,120,.3)" flexDirection="column" paddingAll={32} gap="24px">
              <Container
                paddingX={20}
                paddingY={8}
                backgroundColor="common-black"
                textColor="primary-400"
                fontSize="textMd"
                textTransform="lowercase"
              >
                {selectedTranscript?.featureCode}
              </Container>
              <Flex
                width="100%"
                paddingAll={20}
                backgroundColor="gray-900"
                textColor="gray-100"
                flexDirection="column-reverse"
                gap="40px"
                sm={{ flexDirection: 'row', gap: '20px' }}
              >
                <Flex
                  flexGrow={1}
                  maxHeight="600px"
                  overflowY="auto"
                  flexDirection="column"
                  gap="16px"
                  paddingRight={8}
                  css={`
                    .colorized-text {
                      font-weight: bold;
                    }
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
                  {selectedTranscript?.content && interactiveRichTextParser(selectedTranscript.content)}
                </Flex>
                {selectedTranscript?.sideContent && render(selectedTranscript.sideContent as any) && (
                  <Flex
                    sm={{
                      flex: selectedTranscript?.isTranslationLayout ? '0 0 calc(50% - 10px)' : '0 0 240px',
                      maxWidth: selectedTranscript?.isTranslationLayout ? 'calc(50% - 10px)' : '240px',
                    }}
                    maxHeight="600px"
                    overflowY="auto"
                    flexDirection="column"
                    gap="16px"
                    paddingRight={8}
                    css={`
                      ul {
                        font-weight: bold;
                      }
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
                    {interactiveRichTextParser(selectedTranscript.sideContent)}
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ComponentFeatureList;
