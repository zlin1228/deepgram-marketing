import { useEffect, useRef } from 'react';

import BgRedBlueStar from 'assets/svg/conversion.svg';

import container from 'atoms/spacing/containers';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';

import { getBackgroundColor, stringToKebabCase } from 'utils/functions';

import type { PaddingDefinition } from 'atoms/spacing/spacing';
import type { ILayoutSectionRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC, ReactNode } from 'react';

type LayoutSectionExtension = Omit<
  ILayoutSectionRecord,
  'id' | '_createdAt' | '_updatedAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_seoMetaTags' | '_status'
> &
  Omit<FlexProps, 'backgroundColor' | 'backgroundImage'> & {
    id?: string;
    layoutId?: string;
    children?: ReactNode;
    as?: React.ElementType;
    isFullWidth?: boolean;
    componentName?: string;
  };

export const sectionSizing = {
  maxWidth: container.sm,
  paddingX: 16,
  marginX: 'auto',
  sm: {
    maxWidth: container.md,
    paddingX: 32,
  },
  md: {
    maxWidth: container.lg,
  },
  lg: {
    maxWidth: container.xl,
  },
} as const;

const Section: FC<LayoutSectionExtension> = ({
  id,
  layoutId,
  paddingTopDesktop,
  paddingTopTablet,
  paddingTopMobile,
  paddingBottomDesktop,
  paddingBottomTablet,
  paddingBottomMobile,
  backgroundColor,
  as,
  children,
  isFullWidth,
  ...props
}) => {
  const containerSizing = isFullWidth ? {} : sectionSizing;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  const loadAnimation = () => {
    let startTimestamp = 0;
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const progress = ((timestamp - startTimestamp) / 2000) % 6.28;

      wrapperRef.current &&
        (wrapperRef.current as HTMLDivElement).style.setProperty('--bgposX', `${Math.sin(Math.sin(progress)) * 10}%`);
      wrapperRef.current &&
        (wrapperRef.current as HTMLDivElement).style.setProperty('--bgposY', `${Math.cos(Math.cos(progress)) * 10}%`);
      animationRef.current = window.requestAnimationFrame(step);
    };
    animationRef.current = window.requestAnimationFrame(step);
  };

  useEffect(() => {
    backgroundColor === 'Rainbow Gradient' && wrapperRef.current && wrapperRef.current && loadAnimation();

    return () => {
      animationRef.current && window.cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <Flex
      data-sb-object-id={id || ''}
      as={as || 'section'}
      ref={wrapperRef}
      id={stringToKebabCase(layoutId || '')}
      position="relative"
      justifyContent="center"
      width="100%"
      paddingTop={(paddingTopMobile && (parseInt(paddingTopMobile) as PaddingDefinition)) ?? 40}
      paddingBottom={(paddingBottomMobile && (parseInt(paddingBottomMobile) as PaddingDefinition)) ?? 40}
      minHeight={backgroundColor === '404' ? '250px' : undefined}
      overflowX={backgroundColor === 'Red Blue Star' ? undefined : 'hidden'}
      overflowY={backgroundColor === 'Red Blue Star' ? undefined : 'hidden'}
      sm={{
        paddingTop: (paddingTopTablet && (parseInt(paddingTopTablet) as PaddingDefinition)) ?? 96,
        paddingBottom: (paddingBottomTablet && (parseInt(paddingBottomTablet) as PaddingDefinition)) ?? 96,
        minHeight: backgroundColor === '404' ? '400px' : undefined,
      }}
      lg={{
        paddingTop: (paddingTopDesktop && (parseInt(paddingTopDesktop) as PaddingDefinition)) ?? undefined,
        paddingBottom: (paddingBottomDesktop && (parseInt(paddingBottomDesktop) as PaddingDefinition)) ?? undefined,
        minHeight: backgroundColor === '404' ? '600px' : undefined,
      }}
      css={`
        background: ${getBackgroundColor(backgroundColor || 'White')};
        background-repeat: no-repeat;
        background-size: cover, 100% 100%;
        --bgposX: 0%;
        --bgposY: 0%;
      `}
      {...props}
    >
      {backgroundColor === 'Red Blue Star' && (
        <Container position="absolute" width="100%" height="100%" top="0" left="0" overflowX="clip" overflowY="visible">
          <Container
            position="absolute"
            minWidth="1440px"
            width="100%"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            zIndex={0}
          >
            <Image
              src={BgRedBlueStar}
              alt=""
              width={1440}
              height={659}
              isFullWidth
              css={{
                width: '100%',
                maxHeight: '100%',
              }}
            />
          </Container>
        </Container>
      )}
      <Container width="100%" {...containerSizing} position="relative" zIndex={10}>
        {children}
      </Container>
    </Flex>
  );
};

export default Section;
