import { useState } from 'react';

import AssemblyIcon from 'assets/images/assembly-sm.png';
import AWSIcon from 'assets/images/aws-icon-white-color.png';
import DragonIcon from 'assets/images/dragon-sm.png';
import AzuraIcon from 'assets/images/microsoft-azure.png';
import SpeechmaticsLogo from 'assets/images/speechmatics-logo.png';
import { ReactComponent as CheckIcon } from 'assets/svg/circle-check-1.svg';
import { ReactComponent as XmarkIcon } from 'assets/svg/circle-xmark-2.svg';
import DeepgramIcon from 'assets/svg/deepgram-monogram-icon-white.svg';
import GoogleSTTIcon from 'assets/svg/google_sst.svg';
import OpenAIIcon from 'assets/svg/open_ai.svg';

import gradient from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import ComponentHeading from 'components/Heading/Heading';
import CompareTablePlanFilter from 'components/SingleInstance/CompareTablePlanFilter';

import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface ComparisonProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}

const companyIcons = {
  Deepgram: DeepgramIcon,
  'OpenAI Whisper': OpenAIIcon,
  'Google STT': GoogleSTTIcon,
  AWS: AWSIcon,
  'Microsoft STT': AzuraIcon,
  Dragon: DragonIcon,
  Assembly: AssemblyIcon,
  Speechmatics: SpeechmaticsLogo,
} as const;

const companyNames = {
  Deepgram: 'Deepgram',
  'OpenAI Whisper': 'OpenAI Whisper',
  'Google STT': 'Google',
  AWS: 'Amazon',
  'Microsoft STT': 'Microsoft Azure',
  Dragon: 'Nuance Dragon',
  Assembly: 'AssemblyAI',
  Speechmatics: 'Speechmatics',
} as const;

type companyIconsProps = keyof typeof companyIcons;

const ComparisonTable: FC<ComparisonProps> = ({ optionalHeading, json, layout, callToActions }) => {
  const [activeFilter, setActiveFilter] = useState<{ platform: string; value: string }[]>([]);
  const tableJson = json?.[0];
  const isSplitLayout = layout === 'split';
  const getFeatureValue = (value: any, platform?: string) => {
    switch (value) {
      case true:
        return <CheckIcon />;
      case false:
        return <XmarkIcon />;
      default:
        if (typeof value === 'string') {
          return value;
        } else if (value?.link) {
          return <Link href={(value as any).link}>{(value as any).label}</Link>;
        } else {
          const keyArr = Object.keys(value);
          const defaultKey = keyArr.slice(-1)[0];

          return value?.[activeFilter.filter(item => item.platform === platform)?.[0]?.value || defaultKey];
        }
    }
  };

  const handleFilter = (platform: string, value: string) => {
    const otherActiveFilter = activeFilter.filter(item => item.platform !== platform);
    setActiveFilter([...otherActiveFilter, { platform, value }]);
  };

  if (!tableJson) {
    return null;
  }

  return (
    <Flex
      flexDirection="column"
      gap="32px"
      sm={{ gap: '48px' }}
      xl={{ flexDirection: isSplitLayout ? 'row' : 'column', gap: isSplitLayout ? '76px' : '56px' }}
    >
      {optionalHeading && (
        <Container xl={{ maxWidth: isSplitLayout ? '470px' : '800px', marginX: isSplitLayout ? undefined : 'auto' }}>
          <ComponentHeading {...optionalHeading} aligment={isSplitLayout ? 'left' : 'center'} />
        </Container>
      )}
      <Container
        paddingY={24}
        overflowX="auto"
        overflowY="visible"
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
        <Container>
          <Grid
            position="relative"
            gridTemplateColumns={`2fr repeat(${json.length}, minmax(115px, 1fr))`}
            gridAutoRows="auto"
            columnGap="4px"
            alignItems="center"
            minWidth={`calc(${json.length + 2} * 115px)`}
            border="1px solid #28282E"
            borderRadius="12px"
            backgroundShorthand="radial-gradient(38.46% 78.27% at 16.53% 83.37%, #000000 0%, rgba(0, 0, 0, 0) 100%), #101014"
            lg={{
              gridTemplateColumns: `1.5fr repeat(${json.length}, minmax(115px, 1fr))`,
            }}
            before={{
              content: '',
              position: 'absolute',
              top: '-2%',
              left: '-2px',
              bottom: '-2%',
              right: '-2px',
              gridColumn: '2 / 3',
              width: 'calc(100% + 4px)',
              height: '104%',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'common-transparent',
              backgroundShorthand: `linear-gradient(#16161a, #16161a) padding-box, ${gradient.primary.border} border-box`,
              zIndex: 0,
            }}
            after={{
              content: '',
              position: 'absolute',
              gridColumn: '2 / 3',
              gridRow: '1 / 2',
              width: '150%',
              height: '115px',
              top: '30px',
              left: '0px',
              borderRadius: '20px',
              backgroundShorthand: tableJson.showBackgroundDecoration ? '#C929B3' : 'transparent',
              zIndex: 10,
              filter: 'blur(50px)',
              opacity: 0.4,
            }}
          >
            <div>
              {!tableJson.hideTableTitle && (
                <Text
                  fontSize="textSm"
                  lineHeight="textXs"
                  fontWeight="bold"
                  flex="1 0 0"
                  paddingLeft={12}
                  textColor="common-white"
                  sm={{ fontSize: 'textLg', lineHeight: 'textSm', paddingX: 20 }}
                  lg={{ fontSize: 'textSm' }}
                  xl={{ fontSize: 'textLg' }}
                >
                  {tableJson.customTableTitle || 'Features and Capabilities'}
                </Text>
              )}
            </div>
            {json.map((platform: any) => (
              <Flex
                flexDirection="column"
                alignItems="center"
                alignSelf="stretch"
                justifyContent="center"
                key={platform?.platform}
                backgroundShorthand="#28282E40"
                paddingY={24}
                zIndex={100}
              >
                <Flex
                  alignItems="center"
                  marginBottom={8}
                  width="30px"
                  height="100%"
                  maxHeight="30px"
                  md={{ width: '40px', maxHeight: '40px' }}
                >
                  <Image
                    src={companyIcons[platform?.platform as companyIconsProps]}
                    alt={platform?.platform || ''}
                    width={40}
                    height={40}
                  />
                </Flex>
                <Flex gap="4px" textAlign="center">
                  <Text
                    textColor="common-white"
                    fontSize="textMd"
                    textAlign="center"
                    fontWeight="bold"
                    md={{ fontSize: 'textLg' }}
                    lg={{ fontSize: 'textSm', display: 'block', width: 'auto', height: 'fit-content' }}
                    xl={{ fontSize: isSplitLayout ? 'textSm' : 'textLg' }}
                  >
                    {companyNames[platform?.platform as companyIconsProps]}
                  </Text>
                  {platform?.plans && (
                    <CompareTablePlanFilter
                      items={platform?.plans}
                      activeItem={
                        activeFilter.filter(item => item.platform === platform?.platform)?.[0]?.value ||
                        platform?.plans?.slice(-1)
                      }
                      setActive={e => handleFilter(platform?.platform, e)}
                    />
                  )}
                </Flex>
                {platform?.platform === 'OpenAI Whisper' && layout !== 'split' && (
                  <Text
                    textStyle="xs"
                    display="none"
                    lg={{ display: 'flex' }}
                    textAlign="center"
                    textColor="common-white"
                  >
                    Fully managed by Deepgram
                  </Text>
                )}
              </Flex>
            ))}
            {tableJson.features?.map((feature: any, index: number) => (
              <Grid
                key={feature?.name}
                gridTemplateColumns={`2fr repeat(${json.length}, minmax(115px, 1fr))`}
                gridAutoRows="minmax(40px, auto)"
                gridRow={index + 2}
                gridColumn="1 / -1"
                gap="4px"
                sm={{ gridAutoRows: 'minmax(44px, auto)' }}
                lg={{
                  gridAutoRows: 'minmax(48px, auto)',
                  gridTemplateColumns: `1.5fr repeat(${json.length}, minmax(115px, 1fr))`,
                }}
              >
                <Flex
                  alignItems="center"
                  paddingX={12}
                  borderTop={index === 0 ? '1px solid #3C3C43' : undefined}
                  borderBottom={tableJson.features?.length > index + 1 ? '1px solid #3C3C43' : undefined}
                  flex="1 0 0"
                  sm={{ paddingX: 20 }}
                >
                  <Text
                    fontSize="textXs"
                    lineHeight="xs"
                    css={{ color: feature?.rowTitle ? '#ffffff' : '#D7DFEB' }}
                    sm={{ fontSize: 'textSm' }}
                    fontWeight={feature?.rowTitle ? 'bold' : 'regular'}
                    letterSpacing={feature?.rowTitle ? 'pos2' : null}
                  >
                    {feature?.name}
                  </Text>
                </Flex>
                {json.map((platform: any) => (
                  <Flex
                    key={platform?.platform}
                    alignItems="center"
                    justifyContent="center"
                    backgroundShorthand="#28282E40"
                    position={platform?.active ? 'relative' : undefined}
                    zIndex={platform?.active ? 10 : undefined}
                    borderTop={index === 0 ? '1px solid #3C3C43' : undefined}
                    borderBottom={
                      tableJson.features?.length > index + 1 ||
                      (platform?.active && tableJson?.features?.length === index + 1)
                        ? '1px solid #3C3C43'
                        : undefined
                    }
                    paddingX={6}
                    paddingY={6}
                    textAlign="center"
                    sm={{
                      paddingX: 12,
                    }}
                  >
                    <Text
                      textStyle="xs"
                      lineHeight="xs"
                      textColor="common-white"
                      sm={{ textStyle: json.length < 4 ? 'md' : 'sm', lineHeight: 'textSm' }}
                    >
                      {getFeatureValue(platform?.features?.[index]?.value, platform?.platform)}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
      {callToActions && (
        <Flex flexDirection="column" gap="20px" sm={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          {callToActions.map(cta => (
            <ComponentButton key={cta.id} {...cta} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ComparisonTable;
