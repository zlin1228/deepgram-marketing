import { useEffect, useRef, useState } from 'react';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import { getColor } from 'utils/functions';
import richTextParser from 'utils/richTextParser';

import type { GetColorDefinition } from 'atoms/colors/colors';
import type { IComponentHeadingRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { HeadingTypes, TextStyles } from 'quarks/styleProps/heading';
import type { FC } from 'react';

interface HeadingProps
  extends BasicProps,
    Omit<
      IComponentHeadingRecord,
      '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  backgroundIsDark?: boolean;
  aligment?: 'left' | 'center';
  isPartner?: boolean;
  headingBody?: IComponentHeadingRecord['body'];
}

const ComponentHeading: FC<HeadingProps> = ({
  eyebrow,
  heading,
  headingColor,
  headingType,
  desktopHeadingSize,
  mobileHeadingSize,
  tabletHeadingSize,
  headingBody,
  gradientBackgroundColor,
  bodyColor,
  callToActions,
  animate,
  aligment,
  isPartner,
}) => {
  const [trigger, setTrigger] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const rect = (scrollRef.current as HTMLDivElement).getBoundingClientRect();
        setTrigger(rect.top < window.innerHeight / 2);
        rect.top < window.innerHeight * 0.7 && setTriggered(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      ref={scrollRef}
      flexDirection="column"
      textAlign={aligment || 'center'}
      alignItems={aligment || 'center'}
      marginX={aligment !== 'left' ? 'auto' : undefined}
      gap="32px"
      width="100%"
      md={{
        gap: '24px',
        maxWidth: '800px',
      }}
      textColor="common-white"
      css={[
        ['green_gradient', 'purple_gradient'].includes(gradientBackgroundColor as string)
          ? `
        &::before {
          content: '';
          width: 100vw;
          height: 300px;
          margin-bottom: -300px;
          will-change: transform, opacity;
          pointer-events: none;
          user-select: none;
          mask-image: radial-gradient(ellipse 40% 50% at center,black,transparent);
          --first: conic-gradient(from 90deg at 80% 50%,#000000,${
            gradientBackgroundColor === 'green_gradient' ? '#0f7466' : '#4d21a5'
          });
          --second: conic-gradient(from 270deg at 20% 50%,${
            gradientBackgroundColor === 'green_gradient' ? '#0f7466' : '#4d21a5'
          },#000000);
          background: var(--first),var(--second);
          background-position-x: 1%,99%;
          background-position-y: 0%,0%;
          background-size: 50% 100%,50% 100%;
          background-repeat: no-repeat;
          transform: translateY(-260px) rotate(180deg) scale(${trigger ? 2 : 1}) translateZ(0);
          transform-origin: center center;
          transition: transform 960ms ease 0s, opacity 960ms ease;
        }`
          : '',
        `
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: none;
          }
        }
      `,
      ]}
    >
      <Flex flexDirection="column" gap="16px" zIndex="10">
        {eyebrow && (
          <Text
            textStyle="sm"
            textTransform="uppercase"
            textColor="primary-400"
            fontWeight="bold"
            opacity={animate ? 0 : 1}
            animation={animate && triggered && '1000ms ease 0s 1 normal forwards running fadeIn'}
          >
            {eyebrow}
          </Text>
        )}
        {heading && (
          <Heading
            as={(headingType?.toLowerCase() as HeadingTypes) || 'h2'}
            textStyle={(mobileHeadingSize as TextStyles) || 'sm'}
            sm={{ textStyle: (tabletHeadingSize as TextStyles) || 'md' }}
            lg={{ textStyle: (desktopHeadingSize as TextStyles) || 'lg' }}
            textColor={(getColor(headingColor as string) as GetColorDefinition) || 'common-white'}
            fontWeight="bold"
            opacity={animate ? 0 : 1}
            animation={animate && triggered && '1000ms ease 0s 1 normal forwards running fadeIn'}
          >
            {heading}
          </Heading>
        )}
        {headingBody && (
          <Flex
            flexDirection="column"
            gap="12px"
            fontFamily="bodyFont"
            fontSize={isPartner ? 'textMd' : 'textLg'}
            md={{ fontSize: isPartner ? 'textLg' : 'textXl' }}
            textColor={(getColor(bodyColor as string) as GetColorDefinition) || 'common-white'}
            opacity={animate ? 0 : 1}
            animation={animate && triggered && '1000ms ease 400ms 1 normal forwards running fadeIn'}
          >
            {richTextParser(headingBody as any)}
          </Flex>
        )}
      </Flex>
      {callToActions && callToActions.length > 0 && (
        <Flex
          flexDirection="column"
          gap="16px"
          width="100%"
          opacity={animate ? 0 : 1}
          sm={{
            flexDirection: 'row',
            justifyContent: aligment || 'center',
          }}
          animation={animate && triggered && '1000ms ease 800ms 1 normal forwards running fadeIn'}
        >
          {callToActions.map(button => (
            <ComponentButton key={button.id} {...button} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ComponentHeading;
