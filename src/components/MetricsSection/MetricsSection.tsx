import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, ReactNode } from 'react';

interface MetricsSectionProps extends BasicProps {
  variant: string;
  heading: string;
  description: string;
  metrics: ReactNode[];
  buttons?: ReactNode[];
  icon?: ReactNode;
  cardBackgroundColor?: BasicProps['backgroundColor'];
  accentLineColor?: BasicProps['borderColor'];
  headingTextColor?: BasicProps['textColor'];
  descriptionTextColor?: BasicProps['textColor'];
}

const justifyContent = (variant: string) => {
  if (variant === 'centered') {
    return 'center';
  }
  if (variant === 'action-2') {
    return 'start';
  }

  return 'space-between';
};

const mapButtons = (buttons: ReactNode[]) =>
  buttons.map((button, i, { length }) => {
    const isLast = i === length - 1;
    const uniqueKey = i;

    return (
      <Flex key={`button-${uniqueKey}`} sm={{ marginBottom: 0, marginRight: isLast ? 0 : 12 }} marginBottom={12}>
        {button}
      </Flex>
    );
  });

const MetricsSection: FC<MetricsSectionProps> = ({
  variant,
  heading,
  description,
  metrics,
  buttons,
  icon,
  cardBackgroundColor,
  accentLineColor,
  headingTextColor,
  descriptionTextColor,
  ...props
}) => {
  const isCard = variant === 'card';
  const isCentered = variant === 'centered';
  const isAccentLine = variant === 'accent-line';
  const isAction1 = variant === 'action-1';
  const isAction2 = variant === 'action-2';
  const isMinimal = variant === 'minimal';

  const buttonWrapper = buttons && mapButtons(buttons);

  const metricItems = metrics.map((metric, i, { length }) => {
    const isLast = i === length - 1;

    const uniqueKey = i;

    return (
      <Flex
        key={`metric-${uniqueKey}`}
        sm={{
          paddingLeft: isAction2 || isAction1 ? 0 : 16,
          paddingRight: isAction2 || isAction1 ? 0 : 16,
          marginRight: isAction2 ? 32 : 0,
          borderRight: isCentered ? '2px solid' : 'none',
          borderLeft: isAccentLine ? '2px solid' : 'none',
          borderTop: 'none',
          borderColor:
            (isAccentLine || (isCentered && !isLast)) && accentLineColor ? accentLineColor : 'common-transparent',
          paddingTop: 0,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        flexDirection="row"
        justifyContent={isAccentLine ? 'space-between' : 'center'}
        borderTop={isAccentLine ? '2px solid' : 'none'}
        borderColor={accentLineColor ? accentLineColor : 'common-transparent'}
        paddingTop={16}
      >
        {metric}
      </Flex>
    );
  });

  return (
    <Container paddingY={96} {...props}>
      <Flex
        sm={{
          backgroundColor: 'inherit',
          flexDirection: isAction2 ? 'row' : 'column',
          width: '80%',
          borderRadius: 0,
        }}
        flexDirection="column"
        backgroundColor={isCard && cardBackgroundColor ? cardBackgroundColor : 'inherit'}
        borderRadius={isCard ? '16px' : undefined}
        marginX="auto"
        paddingAll={isCard ? 24 : 0}
      >
        {!isMinimal && (
          <Flex
            sm={{
              width: isAction2 ? '50%' : undefined,
              alignItems: isAction2 ? 'flex-start' : 'center',
            }}
            flexDirection="column"
            alignItems="center"
          >
            {icon && (
              <Flex
                width="56px"
                height="56px"
                marginX={16}
                borderRadius="50%"
                marginBottom={24}
                alignItems="center"
                justifyContent="center"
              >
                {icon}
              </Flex>
            )}
            <Flex
              sm={{
                paddingAll: 0,
                marginBottom: 0,
              }}
              width="100%"
              paddingTop={24}
              marginBottom={48}
              alignItems={isAction1 || isAction2 ? 'stretch' : 'center'}
              flexDirection="column"
            >
              <Flex flexDirection="row" justifyContent="space-between">
                <Flex
                  sm={{ textAlign: 'start' }}
                  textAlign={isAction1 || isAction2 ? 'start' : 'center'}
                  fontSize="displayMd"
                  lineHeight="md"
                  fontWeight="bold"
                  marginBottom={20}
                  textColor={headingTextColor ? headingTextColor : 'initial'}
                >
                  {heading}
                </Flex>
                {isAction1 && (
                  <Flex sm={{ display: 'flex' }} display="none" marginBottom={20}>
                    {buttonWrapper && buttonWrapper}
                  </Flex>
                )}
              </Flex>
              <Flex
                sm={{ textAlign: 'start', marginBottom: isAction2 ? 40 : 64 }}
                textAlign={isAction1 || isAction2 ? 'start' : 'center'}
                fontSize="displaySm"
                lineHeight="sm"
                textColor={descriptionTextColor ? descriptionTextColor : 'inherit'}
              >
                {description}
              </Flex>
              {isAction2 && (
                <Flex sm={{ display: 'flex' }} display="none">
                  {buttonWrapper && buttonWrapper}
                </Flex>
              )}
            </Flex>
          </Flex>
        )}
        <Flex sm={{ width: isAction2 ? '50%' : undefined }} justifyContent="center">
          <Flex
            sm={{
              justifyContent: justifyContent(variant),
              borderRadius: isCard ? '16px' : undefined,
              flexDirection: 'row',
              backgroundColor: isCard ? cardBackgroundColor : undefined,
              paddingAll: isCard ? 64 : 0,
            }}
            width="100%"
            paddingBottom={isCard ? 40 : 0}
            flexDirection="column"
            justifyContent="center"
            flexWrap="wrap"
          >
            {metricItems}
          </Flex>
        </Flex>
        {(isAction1 || isAction2) && (
          <Flex sm={{ display: 'none' }} display="flex" flexDirection="column">
            {buttonWrapper && buttonWrapper.slice().reverse()}
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default MetricsSection;
