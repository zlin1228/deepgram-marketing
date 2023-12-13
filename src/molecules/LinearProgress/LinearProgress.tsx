import MUILinearProgress from '@mui/material/LinearProgress';
import styled, { css } from 'styled-components';

import shadow from 'atoms/shadows/shadows';
import { padding } from 'atoms/spacing/spacing';
import { font, fontWeight } from 'atoms/typography/typography';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import type { FC } from 'react';
import type { CSSProps } from 'theme/getAppTheme';

const StyledLinearProgress = styled(MUILinearProgress).withConfig({
  shouldForwardProp: prop => ![...Object.keys(allCSSWithPseudos), 'labelPosition'].includes(prop),
})`
  && {
    ${basic}
  }
`;

interface LinearProgressProps extends BasicProps {
  /**
   * The value of the progress indicator. Value between 0 and 100.
   */
  value: number;
  /**
   * The value for the buffer bar. Value between 0 and 100. Default 100.
   */
  valueBuffer?: number;
  /**
   * If `true` displays label with percentage of progress.
   */
  label?: boolean;
  /**
   * Determines where and how the label will be shown
   */
  labelPosition?: 'end' | 'bottom' | 'track-top' | 'track-bottom';
  /**
   * The variant to use. Use indeterminate or query when there is no progress value.
   */
  variant?: 'buffer' | 'indeterminate' | 'query';
}

const LinearProgress: FC<LinearProgressProps> = ({ value, label, variant, labelPosition, valueBuffer, ...props }) => {
  const isTrack = variant === 'buffer' && (labelPosition === 'track-top' || labelPosition === 'track-bottom');

  const progressProps = {
    value,
    label,
    labelPosition,
    variant,
    valueBuffer,
  };

  const floatingLabelStyles = css`
    ${isTrack && '& > .MuiLinearProgress-bar1Buffer'} {
      width: ${value}%;
      transform: none !important;
      transition: width 0.4s linear 0s;
      &::after {
        content: '${Math.round(value)}%';
        position: absolute;
        right: -28px;
        font: ${font.text.xs.font()};
        font-weight: ${fontWeight.semiBold};
        top: ${labelPosition === 'track-top' ? '-45px' : '18px'};
        box-shadow: ${shadow.xl};
        background-color: ${(cssProps: CSSProps) =>
          cssProps.theme.palette.mode === 'light'
            ? cssProps.theme.palette.common.white
            : cssProps.theme.palette.gray[700]};
        padding-top: ${padding[8]};
        padding-bottom: ${padding[8]};
        padding-left: ${padding[16]};
        padding-right: ${padding[16]};
        border-radius: 8px;
      }
    }
    ${isTrack && '&'} {
      overflow: visible !important;
    }
  `;

  return (
    <Flex
      alignItems="center"
      flexDirection={labelPosition === 'bottom' ? 'column' : undefined}
      position="relative"
      {...props}
    >
      <StyledLinearProgress width="100%" css={floatingLabelStyles} {...progressProps} />
      {label && labelPosition === 'end' && (
        <Text textStyle="sm" fontWeight="semiBold" marginLeft={12}>
          {`${Math.round(value)}%`}
        </Text>
      )}
      {label && labelPosition === 'bottom' && (
        <Text textStyle="sm" fontWeight="semiBold" marginTop={8} display="block" width="100%" textAlign="right">
          {`${Math.round(value)}%`}
        </Text>
      )}
    </Flex>
  );
};

export default LinearProgress;

LinearProgress.defaultProps = {
  variant: 'buffer',
  label: false,
  labelPosition: 'track-top',
  valueBuffer: 100,
  value: 0,
};
