import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';

import AnimationMouseOver from 'molecules/AnimationMouseOver/AnimationMouseOver';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import richTextParser from 'utils/richTextParser';

import type { IComponentCardRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, MouseEvent } from 'react';

interface BasicCardProps extends BasicProps, IComponentCardRecord {
  backgroundIsDark?: boolean;
  variant?: string;
  cardbody?: IComponentCardRecord['body'];
  isSmall?: boolean;
  isFullImage?: boolean;
}

const BasicCard: FC<BasicCardProps> = ({
  heading,
  cardbody,
  callToAction,
  image,
  variant,
  cardIcon,
  sm,
  isSmall,
  isFullImage,
  noHoverEffect,
  ...props
}) => {
  const router = useRouter();
  const handleClick = () => {
    callToAction?.link && router.push(callToAction.link);
  };

  const cardImgMobile = isSmall ? '100px' : '160px';
  const cardImgDesktop = isSmall ? '120px' : '240px';

  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const wrapper = useRef(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (wrapper.current && variant === 'grid') {
      const wrapperPos = (wrapper.current as HTMLDivElement).getBoundingClientRect();
      if (isMouseIn) {
        const deltaX = e.clientX - wrapperPos.left - wrapperPos.width / 2;
        const deltaY = e.clientY - wrapperPos.top - wrapperPos.height / 2;
        (wrapper.current as HTMLDivElement).style.setProperty(
          '--xpos',
          `${Math.round((deltaY / wrapperPos.height) * 200) / 100}deg`,
        );
        (wrapper.current as HTMLDivElement).style.setProperty(
          '--ypos',
          `${Math.round((-deltaX / wrapperPos.width) * 200) / 100}deg`,
        );
      } else {
        (wrapper.current as HTMLDivElement).style.setProperty('--xpos', '0deg');
        (wrapper.current as HTMLDivElement).style.setProperty('--ypos', '0deg');
      }
    }
  };

  return (
    <Flex
      ref={wrapper}
      position="relative"
      flexDirection="column"
      borderRadius={variant === 'default' ? '16px' : '8px'}
      paddingY={32}
      paddingX={24}
      backgroundColor="gray-900"
      textColor="common-white"
      border="1px solid"
      borderColor={variant === 'default' ? 'common-transparent' : 'gray-700'}
      boxShadow="xl"
      cursor={callToAction?.link ? 'pointer' : undefined}
      onClick={() => handleClick()}
      onMouseEnter={() => !noHoverEffect && setIsMouseIn(true)}
      onMouseLeave={() => !noHoverEffect && setIsMouseIn(false)}
      onMouseMove={handleMouseMove}
      transform="perspective(700px) rotateX(var(--xpos)) rotateY(var(--ypos))"
      justifyContent="space-between"
      sm={{ paddingAll: isSmall ? 20 : 40, ...sm }}
      hover={
        variant === 'default'
          ? {
              backgroundShorthand: noHoverEffect
                ? undefined
                : `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.border} border-box`,
              boxShadow: noHoverEffect ? undefined : 'greenButton',
            }
          : {
              borderColor: noHoverEffect ? undefined : 'common-transparent',
              backgroundShorthand: noHoverEffect
                ? undefined
                : `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.purple} border-box`,
              boxShadow: noHoverEffect ? undefined : 'purple3xl',
            }
      }
      {...props}
    >
      <Container>
        <Container overflowX="hidden" overflowY="hidden" width="0" height="0" opacity="0">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="gradient-red-1"
                x1="8.14286"
                y1="52.8289"
                x2="50.5711"
                y2="49.6203"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.149178" stop-color="#EE028B" />
                <stop offset="1" stop-color="#AE29FF" />
              </linearGradient>
              <linearGradient
                id="gradient-red-2"
                x1="-6.42857"
                y1="32.3445"
                x2="62.7859"
                y2="20.8659"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.149178" stop-color="#EE028B" />
                <stop offset="1" stop-color="#AE29FF" />
              </linearGradient>
            </defs>
          </svg>
        </Container>
        {image?.imageDesktop?.url && (
          <Container
            height={isFullImage ? 'fit-content' : cardImgMobile}
            lg={{
              height: isFullImage ? 'fit-content' : cardImgDesktop,
            }}
            marginBottom={16}
          >
            <Image
              src={image?.imageDesktop?.url}
              alt=""
              width={image.imageDesktop.width}
              height={image.imageDesktop.height}
              marginBottom={16}
              marginX="auto"
              isFullHeight
              css={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </Container>
        )}
        {cardIcon && <Icon iconName={cardIcon} size={48} marginBottom={24} />}
        <Heading
          as="h3"
          fontSize={isSmall ? 'textLg' : 'displayXs'}
          lineHeight={isSmall ? 'textLg' : 'displayXs'}
          fontWeight="bold"
          marginBottom={6}
          sm={{
            fontSize: isSmall ? 'textXl' : 'displaySm',
            lineHeight: isSmall ? 'textXl' : 'displaySm',
          }}
        >
          {heading}
        </Heading>
        {cardbody && (
          <Flex
            flexDirection="column"
            fontFamily="bodyFont"
            fontSize="textMd"
            lineHeight="textMd"
            gap="24px"
            marginBottom={callToAction ? 40 : 0}
            sm={{ marginBottom: callToAction ? 56 : 0 }}
          >
            {richTextParser(cardbody as any)}
          </Flex>
        )}
      </Container>
      {callToAction && <ComponentButton {...callToAction} marginLeft={0} />}
      {variant === 'grid' && <AnimationMouseOver isDark />}
    </Flex>
  );
};

export default BasicCard;

BasicCard.defaultProps = {};
