import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

import Check from 'assets/svg/green-check.svg';
import WhiteCheck from 'assets/svg/white-check.svg';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';
import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { IComponentPricingCardRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface CardProps extends FlexProps, IComponentPricingCardRecord {
  backgroundIsDark: boolean;
}

const PricingCard: FC<CardProps> = ({
  icon,
  headingKicker,
  heading,
  headingBadge,
  subhead,
  callToAction,
  body,
  isActive,
  ...props
}) => {
  const isDesktop = useMediaQuery(media.md);
  const [expanded, setExpanded] = useState(false);

  return (
    <Flex
      width="100%"
      flexDirection="column"
      borderRadius="12px"
      textColor="common-white"
      border="1px solid"
      borderColor="gray-800"
      backgroundShorthand={
        isActive
          ? `linear-gradient(${color.common.black}, ${color.common.black}) padding-box, ${gradient.primary.blueGreen} border-box`
          : color.common.black
      }
      {...props}
    >
      <Flex
        flexDirection="column"
        gap="17px"
        width="100%"
        paddingAll={40}
        md={{
          paddingX: 20,
          paddingY: 32,
        }}
      >
        {headingKicker && (
          <Flex alignItems="center" gap="10px">
            <Icon iconName={icon as string} size={32} marginBottom={6} />
            <Text fontSize="displayXs" lineHeight="displayXs">
              {headingKicker}
            </Text>
          </Flex>
        )}
        {heading && (
          <Flex
            flexDirection="column"
            gap="14px"
            alignItems="flex-start"
            md={{ flexDirection: 'row', alignItems: 'center' }}
            css={`
              @media screen and (min-width: 993px) and (max-width: 1230px) {
                flex-direction: column;
                align-items: flex-start;
              }
            `}
          >
            <Text
              fontSize="displaySm"
              lineHeight="displaySm"
              fontWeight="bold"
              textColor="common-white"
              width="max-content"
            >
              <div dangerouslySetInnerHTML={{ __html: heading }} />
            </Text>
            {headingBadge && (
              <Flex
                backgroundShorthand="linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%)"
                fontSize="textXs"
                textColor="common-black"
                fontWeight="bold"
                height="24px"
                paddingX={8}
                alignItems="center"
                justifyContent="center"
                borderRadius="100px"
                marginTop={8}
              >
                {headingBadge}
              </Flex>
            )}
          </Flex>
        )}
        {subhead && (
          <Text textStyle="sm">
            <div dangerouslySetInnerHTML={{ __html: subhead }} />
          </Text>
        )}
        {callToAction && <ComponentButton {...callToAction} width="100%" marginTop={16} />}
      </Flex>
      <Flex
        flexDirection="column"
        paddingAll={40}
        width="100%"
        md={{
          paddingX: 20,
          paddingY: 24,
        }}
      >
        {!isDesktop && (
          <Flex justifyContent="center" marginBottom={12}>
            <ComponentButton
              buttonType="text"
              color="secondary"
              label="View all features"
              endIcon={expanded ? 'chevron-up' : 'chevron-down'}
              onClick={() => setExpanded(!expanded)}
            />
          </Flex>
        )}
        <Flex
          flexDirection="column"
          flexGrow="1"
          width="100%"
          maxHeight={expanded ? '1200px' : '0'}
          transition="max-height 300ms ease-in-out"
          overflowX="hidden"
          overflowY="hidden"
          fontSize="textSm"
          lineHeight="textSm"
          css={`
            & ul {
              list-style: none;
              padding-inline-start: 0px;
              li {
                padding-left: 24px;
                margin-bottom: 14px;
                position: relative;
                &::before {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 0;
                  float: left;
                  width: 14px;
                  height: 20px;
                  background-image: url(${Check});
                  background-repeat: no-repeat;
                  margin-right: 8px;
                }
                &.white-check {
                  &::before {
                    background-image: url(${WhiteCheck});
                  }
                }
                &:last-child {
                  margin-bottom: 0px;
                }
              }
            }
          `}
          md={{
            maxHeight: 'unset',
          }}
        >
          {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PricingCard;
