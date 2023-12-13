import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Checkbox from 'molecules/Checkbox/Checkbox';
import Slider from 'molecules/Slider/Slider';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import ComponentHeading from 'components/Heading/Heading';
import {
  addOnList,
  additionalFeatures,
  modelList,
  planCTA,
  planTitle,
  thresholds,
} from 'components/SingleInstance/CalculatorConstants';
import ModelItem from 'components/SingleInstance/ModelItem';

import { numberWithCommas } from 'utils/functions';

import type { planTitleType } from 'components/SingleInstance/CalculatorConstants';
import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CalculatorProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}

const Calculator: FC<CalculatorProps> = ({ optionalHeading, layout }) => {
  const [audioType, setAudioType] = useState<'batch' | 'realtime'>('batch');
  const [isModelSelectOpen, setIsModelSelectOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedAudioVolumn, setSelectedAudioVolumn] = useState(0);
  const [isSelectedAddon, setIsSelectedAddon] = useState(false);
  const [isAudioIntel, setIsAudioIntel] = useState(false);
  const [suggestedPlan, setSuggestedPlan] = useState('payg');
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [yourRate, setYourRate] = useState(0);
  const [savePrice, setSavePrice] = useState(0);
  const modelWrapper = useRef<HTMLDivElement>(null);
  const selectedAudioVolumnUnit = 'Minutes';
  const handleAudioType = (string: 'batch' | 'realtime') => {
    setAudioType(string);
  };

  const handleChange = (_: Event, newValue: number | number[]) => {
    setSelectedAudioVolumn(newValue as number);
  };

  const getPlan = (e: number) => {
    if (e < 350) {
      return 'payg';
    } else if (e < 834) {
      return 'growth';
    } else if (e < 9999) {
      return 'premium';
    }

    return 'payg';
  };

  const getPlanPrice = (plan: 'payg' | 'growth' | 'premium') => {
    const modelId = modelList[selectedModel].id;

    return (
      ('deepgram-nova' === modelId ? thresholds['deepgram-nova'][audioType][plan] : thresholds[modelId][plan]) +
      (isAudioIntel ? thresholds['addon'][plan] : 0)
    );
  };
  const getColor = () => {
    switch (suggestedPlan) {
      case 'growth':
        return gradient.primary.red;
      case 'premium':
        return gradient.primary.blueGreen;
      default:
        return color.common.white;
    }
  };

  useClickAway(modelWrapper, () => {
    setIsModelSelectOpen(false);
  });

  useEffect(() => {
    const audioVolumn = selectedAudioVolumn;
    const paygPrice = getPlanPrice('payg');
    const yourPlan = getPlan(paygPrice * audioVolumn);
    const yourPlanPrice = getPlanPrice(yourPlan);

    setMonthlyPrice(Math.round(yourPlanPrice * audioVolumn));
    setSuggestedPlan(yourPlan);
    setYourRate(yourPlanPrice);
    setSavePrice(Math.round((paygPrice - yourPlanPrice) * audioVolumn));
  }, [audioType, selectedModel, selectedAudioVolumnUnit, selectedAudioVolumn, isAudioIntel]);

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
      <Flex flexGrow={1} gap="32px" flexDirection="column" textColor="common-white" lg={{ flexDirection: 'row' }}>
        <Flex
          flexDirection="column"
          borderRadius="8px"
          backgroundColor="gray-900"
          paddingAll={20}
          width="100%"
          flex="1 0 0"
          border="1px solid"
          borderColor="gray-700"
          sm={{
            paddingAll: 40,
          }}
          lg={{
            flex: '0 0 calc(50% - 16px)',
            width: 'calc(50% - 16px)',
          }}
        >
          <Text fontSize="displayXs" fontWeight="semiBold" marginBottom={16}>
            Select Audio Type:
          </Text>
          <Flex
            flexDirection="column"
            gap="12px"
            paddingBottom={8}
            marginBottom={32}
            borderBottom="1px solid rgba(78, 78, 82, 0.5)"
            sm={{
              paddingBottom: 32,
            }}
          >
            <Flex gap="24px" flexDirection="column" sm={{ flexDirection: 'row' }}>
              <ComponentButton
                buttonType="text"
                label="Pre-recorded (Audio Files)"
                color="secondary"
                lineHeight="textSm"
                startIcon="audio-file"
                onClick={() => handleAudioType('batch')}
                textColor={audioType === 'batch' ? 'common-white' : 'gray-400'}
                marginAll={0}
                hover={{
                  textColor: 'common-white',
                }}
                css={`
                  & .MuiButton-startIcon svg path {
                    fill: ${audioType === 'batch' ? 'url(#gradient-green)' : 'currentColor'};
                  }
                `}
              />
              <ComponentButton
                buttonType="text"
                label="Real-Time (Streaming)"
                color="secondary"
                lineHeight="textSm"
                startIcon="wave_form"
                onClick={() => selectedModel === 0 && handleAudioType('realtime')}
                textColor={audioType === 'realtime' ? 'common-white' : 'gray-400'}
                marginAll={0}
                hover={{
                  textColor: selectedModel === 0 ? 'common-white' : undefined,
                }}
                cursor={selectedModel === 0 ? 'pointer' : 'not-allowed'}
                css={`
                  & .MuiButton-startIcon svg path {
                    fill: ${audioType === 'realtime' ? 'url(#gradient-green)' : 'currentColor'};
                  }
                `}
              />
              <Icon iconName="gradient-green" />
            </Flex>
            {audioType === 'realtime' && (
              <Text textColor="gray-200" textStyle="sm">
                Whisper models only support <b>pre-recorded audio files</b>
              </Text>
            )}
          </Flex>
          <Flex flexDirection="column" marginBottom={32}>
            <Text fontSize="displayXs" fontWeight="semiBold" marginBottom={16}>
              Select Model:
            </Text>
            <Flex
              ref={modelWrapper}
              borderRadius="8px"
              backgroundColor="gray-800"
              border="1px solid"
              borderColor="gray-700"
              position="relative"
            >
              <Flex
                width="100%"
                justifyContent="space-between"
                onClick={() => audioType !== 'realtime' && setIsModelSelectOpen(!isModelSelectOpen)}
                cursor="pointer"
              >
                <ModelItem
                  {...modelList[selectedModel]}
                  planPrice={
                    (suggestedPlan === 'premium' && 'Volume Discount') ||
                    (modelList[selectedModel].id === 'deepgram-nova'
                      ? thresholds['deepgram-nova'][audioType][suggestedPlan as planTitleType]
                      : thresholds[
                          modelList[selectedModel].id as
                            | 'whisper-large'
                            | 'whisper-medium'
                            | 'whisper-small'
                            | 'whisper-base'
                            | 'whisper-tiny'
                        ][suggestedPlan as planTitleType])
                  }
                />
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  paddingAll={10}
                  borderLeft="1px solid"
                  borderColor="gray-700"
                >
                  <Icon iconName="chevron-down" size={24} />
                </Flex>
              </Flex>
              <Flex
                flexDirection="column"
                position="absolute"
                backgroundColor="gray-800"
                border="1px solid"
                borderColor="gray-700"
                top="100%"
                width="100%"
                zIndex="100"
                overflowY={isModelSelectOpen ? 'auto' : 'hidden'}
                height={isModelSelectOpen ? '300px' : 0}
                opacity={isModelSelectOpen ? 1 : 0}
                transition="height 300ms ease-in-out, opacity 300ms ease-in-out"
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
                {modelList.map((model, index) => (
                  <ModelItem
                    key={model.heading}
                    {...model}
                    planPrice={
                      (suggestedPlan === 'premium' && 'Volume Discount') ||
                      (model.id === 'deepgram-nova'
                        ? thresholds['deepgram-nova'][audioType][suggestedPlan as planTitleType]
                        : thresholds[model.id][suggestedPlan as planTitleType])
                    }
                    onClick={() => (setSelectedModel(index), setIsModelSelectOpen(false))}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection="column" marginBottom={32}>
            <Text fontSize="displayXs" fontWeight="semiBold" marginBottom={8}>
              Monthly Audio Volume:
            </Text>

            <Flex gap="24px" alignItems="center">
              <Text fontSize="displayMd" lineHeight="displayMd" fontWeight="semiBold" flex="0 0 220px">
                {numberWithCommas(selectedAudioVolumn)}{' '}
                <Text textStyle="sm" fontWeight="bold" verticalAlign="middle">
                  minutes
                </Text>
              </Text>
              <Slider step={1000} max={400000} onChange={handleChange} value={selectedAudioVolumn} />
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="displayXs" fontWeight="semiBold" marginBottom={16}>
              Add on:
            </Text>
            <Flex
              borderRadius="8px"
              backgroundColor="gray-800"
              border="1px solid"
              borderColor="gray-700"
              position="relative"
              flexDirection="column"
            >
              <Flex
                paddingAll={16}
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                cursor="pointer"
                onClick={() => setIsSelectedAddon(!isSelectedAddon)}
              >
                <Flex alignItems="center">
                  <Checkbox checked={isAudioIntel} onChange={() => setIsAudioIntel(!isAudioIntel)} />
                  <Text fontSize="textLg" fontWeight="semiBold" marginTop={8} marginRight={16}>
                    Audio Intelligence
                  </Text>
                  <Text fontSize="textSm" marginTop={8}>
                    <Text textColor="gray-400">Pricing: </Text>
                    <Text>$0.0043 per minute</Text>
                  </Text>
                </Flex>
                <Icon iconName="chevron-down" size={24} />
              </Flex>
              <Container
                paddingX={16}
                paddingBottom={isSelectedAddon ? 16 : 0}
                overflowY="hidden"
                maxHeight={isSelectedAddon ? '500px' : '0'}
                opacity={isSelectedAddon ? '1' : '0'}
                transition="max-height 200ms ease-in-out, opacity 200ms ease-in-out, padding 200ms ease-in-out"
              >
                <Paragraph marginBottom={16}>
                  Access advanced language understanding features for true voice intelligence.
                </Paragraph>
                <Flex as="ul" flexDirection="column" flexWrap="wrap" paddingAll={0} sm={{ flexDirection: 'row' }}>
                  {addOnList.map(addon => (
                    <Flex
                      key={addon}
                      as="li"
                      gap="8px"
                      flexDirection="row"
                      marginBottom={8}
                      alignItems="flex-start"
                      flex="0 0 50%"
                    >
                      <Flex flex="0 0 16px" paddingTop={2}>
                        <Icon iconName="check" size={16} color={color.success[300]} />
                      </Flex>
                      <Text textStyle="md">{addon}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Container>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          borderRadius="8px"
          backgroundColor="gray-900"
          paddingAll={20}
          width="100%"
          flex="1 0 0"
          border="1px solid"
          borderColor="gray-700"
          sm={{
            paddingAll: 40,
          }}
          lg={{
            flex: '0 0 calc(50% - 16px)',
            width: 'calc(50% - 16px)',
          }}
        >
          <Container paddingBottom={32} marginBottom={32} borderBottom="1px solid rgba(78, 78, 82, 0.5)">
            <Text as="div" display="block" fontSize="displayXs" fontWeight="semiBold" marginBottom={16}>
              Your Suggested Plan
            </Text>
            <Flex rowGap="16px" flexWrap="wrap">
              <Flex flexDirection="column" gap="8px" flex="0 0 50%">
                <Text textStyle="lg" fontWeight="semiBold" textColor="gray-400">
                  Best Plan:
                </Text>
                <Text
                  fontSize="displayXs"
                  lineHeight="displayXs"
                  fontWeight="semiBold"
                  backgroundShorthand={getColor()}
                  css={`
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                  `}
                >
                  {planTitle[suggestedPlan as planTitleType]}
                </Text>
              </Flex>
              <Flex flexDirection="column" gap="8px" flex="0 0 50%">
                <Text textStyle="lg" fontWeight="semiBold" textColor="gray-400">
                  Your rate is:
                </Text>
                <Text fontSize="displayXs" lineHeight="displayXs" fontWeight="semiBold">
                  {suggestedPlan === 'premium' ? 'Volume Discount' : `$${yourRate}/min`}
                </Text>
              </Flex>
              {suggestedPlan !== 'premium' && (
                <Flex flexDirection="column" gap="8px" flex="0 0 50%">
                  <Text textStyle="lg" fontWeight="semiBold" textColor="gray-400">
                    Monthly Estimate:
                  </Text>
                  <Text
                    fontSize="displayXs"
                    lineHeight="displayXs"
                    fontWeight="semiBold"
                    backgroundShorthand={getColor()}
                    css={`
                      background-clip: text;
                      -webkit-background-clip: text;
                      color: transparent;
                    `}
                  >
                    ${numberWithCommas(monthlyPrice)}
                  </Text>
                </Flex>
              )}
              {suggestedPlan === 'growth' && (
                <Flex flexDirection="column" gap="8px" flex="0 0 50%">
                  <Text textStyle="lg" fontWeight="semiBold" textColor="gray-400">
                    You’ll save
                  </Text>
                  <Text fontSize="displayXs" lineHeight="displayXs" fontWeight="semiBold">
                    ${savePrice}{' '}
                    <Text textStyle="lg" fontWeight="regular" textColor="gray-400">
                      over pay as you go
                    </Text>
                  </Text>
                </Flex>
              )}
            </Flex>
          </Container>
          <Container flexGrow={1}>
            <Text as="div" display="block" fontSize="textXl" fontWeight="semiBold" marginBottom={16}>
              Additional features you get with the&nbsp;
              <Text
                backgroundShorthand={getColor()}
                css={`
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: transparent;
                `}
              >
                {planTitle[suggestedPlan as planTitleType]}
              </Text>
              &nbsp;plan:
            </Text>
            <Flex flexWrap="wrap" gap="16px">
              {additionalFeatures[suggestedPlan as planTitleType] &&
                additionalFeatures[suggestedPlan as planTitleType].map(item => (
                  <Flex key={item} gap="8px" flexDirection="row" alignItems="flex-start">
                    <Flex flex="0 0 16px" paddingTop={2}>
                      <Icon iconName="check" size={16} color={color.success[300]} />
                    </Flex>
                    <Text textStyle="md">{item}</Text>
                  </Flex>
                ))}
            </Flex>
          </Container>
          <ComponentButton
            label={planCTA[suggestedPlan as planTitleType].label}
            href={planCTA[suggestedPlan as planTitleType].link}
            color={planCTA[suggestedPlan as planTitleType].theme}
            variant="contained"
            width="100%"
            marginTop={24}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Calculator;
