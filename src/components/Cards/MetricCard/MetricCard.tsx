import { FiArrowRight } from 'react-icons/fi';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, ReactNode } from 'react';

interface VariantOptions {
  fontSize: BasicProps['fontSize'];
  lineHeight: BasicProps['lineHeight'];
  fontWeight: BasicProps['fontWeight'];
  marginBottom: BasicProps['marginBottom'];
  justifyContent: 'center' | 'normal';
}

interface MetricCardProps extends BasicProps {
  variant: string;
  heading: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  icon?: ReactNode;
  metric: string;
  accentLineColor?: BasicProps['borderColor'];
  metricTextColor?: BasicProps['textColor'];
  headingTextColor?: BasicProps['textColor'];
  descriptionTextColor?: BasicProps['textColor'];
  ctaTextColor?: BasicProps['textColor'];
}

const MetricCard: FC<MetricCardProps> = ({
  variant,
  heading,
  description,
  cta,
  icon,
  metric,
  metricTextColor,
  headingTextColor,
  descriptionTextColor,
  ctaTextColor,
  ...props
}) => {
  const isCentered = variant === 'centered';
  const isAccentLine = variant === 'accent-line';
  const isAction1 = variant === 'action-1';
  const isAction2 = variant === 'action-2';

  let descriptionWrapper, ctaWrapper;

  const metricProps: VariantOptions = {
    fontSize: 'displayXl',
    lineHeight: 'xs',
    fontWeight: 'bold',
    marginBottom: 4,
    justifyContent: 'normal',
  };

  const headingProps: VariantOptions = {
    fontSize: 'displayXs',
    lineHeight: 'xs',
    fontWeight: 'semiBold',
    marginBottom: 4,
    justifyContent: 'center',
  };

  if (variant === 'action-1') {
    metricProps.marginBottom = 12;
    metricProps.justifyContent = 'normal';
    headingProps.marginBottom = 8;
    headingProps.justifyContent = 'normal';
    descriptionWrapper = description && (
      <Flex
        sm={{
          display: 'flex',
        }}
        fontSize="textMd"
        lineHeight="md"
        display="none"
        textColor={descriptionTextColor ? descriptionTextColor : 'gray-500'}
      >
        {description}
      </Flex>
    );
  }

  if (variant === 'action-2' || variant === 'accent-line') {
    if (variant === 'accent-line') {
      ctaWrapper = cta && (
        <Link
          fontSize="textMd"
          lineHeight="md"
          fontWeight="bold"
          textDecoration="none"
          href={cta.href}
          textColor={ctaTextColor ? ctaTextColor : 'initial'}
        >
          {cta.label} <FiArrowRight />
        </Link>
      );
    }
    metricProps.fontSize = 'displayLg';
    metricProps.lineHeight = 'lg';
    metricProps.justifyContent = 'normal';
    headingProps.justifyContent = 'normal';
  }

  return (
    <Flex
      sm={{
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      width="fit-content"
      flexDirection="row"
      justifyContent={isAccentLine ? 'space-between' : 'center'}
      {...props}
    >
      <Flex
        sm={{ flexDirection: 'row' }}
        justifyContent="center"
        alignSelf={isAction1 ? 'start' : 'center'}
        flexDirection="column"
      >
        {isAction2 && icon && (
          <Flex
            alignItems="center"
            width="48px"
            height="48px"
            marginX={20}
            marginBottom={16}
            justifyContent="center"
            borderRadius="50%"
          >
            {icon}
          </Flex>
        )}
        <Flex flexDirection="column" paddingX={isCentered ? 32 : undefined}>
          <Flex textColor={metricTextColor ? metricTextColor : 'primary-600'} {...metricProps}>
            {metric}
          </Flex>
          <Flex
            sm={{
              marginBottom: 8,
              textAlign: 'start',
            }}
            textAlign="center"
            textColor={headingTextColor ? headingTextColor : 'common-black'}
            {...headingProps}
            marginBottom={32}
          >
            {heading}
          </Flex>
        </Flex>
      </Flex>
      {descriptionWrapper && descriptionWrapper}
      {ctaWrapper && ctaWrapper}
    </Flex>
  );
};

export default MetricCard;
