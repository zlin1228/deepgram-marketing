import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import IconCardDeck from 'components/CardDeck/IconCardDeck';
import ComponentButton from 'components/ComponentButton/ComponentButton';

import { getColor } from 'utils/functions';

import type { GetColorDefinition } from 'atoms/colors/colors';
import type { IComponentCardDeckRecord, ITemplateBlogRecord, ITemplateCaseStudyRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { HeadingTypes, TextStyles } from 'quarks/styleProps/heading';
import type { FC } from 'react';

interface BlogCardDeckType
  extends FlexProps,
    Omit<
      IComponentCardDeckRecord,
      '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt' | 'id' | 'addOns'
    > {
  backgroundIsDark?: boolean;
  relatedCaseStudies?: ITemplateCaseStudyRecord[];
}

const BasicCard = dynamic(() => import('components/Cards/BasicCard/BasicCard'));
const BlogCard = dynamic(() => import('components/Cards/BlogCard/BlogCard'));
const IconCard = dynamic(() => import('components/Cards/IconCard/IconCard'));

const navArrowProps = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  backgroundShorthand: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'xs',
  textColor: 'common-white',
  cursor: 'pointer',
} as const;

const BlogCardDeck: FC<BlogCardDeckType> = ({ card, optionalHeading, variant }) => {
  const { asPath } = useRouter();
  const isSpeechPage = asPath === '/product/speech-understanding';
  const sliderSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    infinite: false,
    nextArrow: (
      <Flex {...navArrowProps}>
        <Icon iconName="chevron-right" size={32} />
      </Flex>
    ),
    prevArrow: (
      <Flex {...navArrowProps}>
        <Icon iconName="chevron-left" size={32} />
      </Flex>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getFlexLg = (index: number) => {
    switch (variant) {
      case 'grid':
        return ((index === 1 || index === 2) && '0 0 58%') || '1 0 0';
      case 'grid-3':
        return '0 0 calc(33.3% - 21.3px)';
      default:
        return '1 0 0';
    }
  };

  return (
    <Flex flexDirection="column" gap="32px" lg={{ gap: '40px' }}>
      {optionalHeading && (
        <Flex
          justifyContent="space-between"
          alignItems="flex-end"
          paddingBottom={16}
          borderBottom="2px solid"
          borderColor="gray-700"
          textColor="common-white"
        >
          <Heading
            as={(optionalHeading.headingType?.toLowerCase() as HeadingTypes) || 'h2'}
            textStyle={(optionalHeading.mobileHeadingSize as TextStyles) || 'sm'}
            sm={{ textStyle: (optionalHeading.tabletHeadingSize as TextStyles) || 'md' }}
            lg={{ textStyle: (optionalHeading.desktopHeadingSize as TextStyles) || 'lg' }}
            textColor={(getColor(optionalHeading.headingColor as string) as GetColorDefinition) || 'common-white'}
            fontWeight="bold"
          >
            {optionalHeading.heading}
          </Heading>
          {optionalHeading.callToActions && optionalHeading.callToActions.length > 0 && (
            <Flex gap="16px">
              {optionalHeading.callToActions.map(button => (
                <ComponentButton key={button.id} {...button} />
              ))}
            </Flex>
          )}
        </Flex>
      )}
      <Container
        overflowX="hidden"
        overflowY="hidden"
        paddingX={12}
        css={{
          marginLeft: '-15px',
          marginRight: '-15px',
          '.slick-slider': {
            paddingTop: '32px',
            paddingBottom: '32px',
          },
          '.slick-list': {
            overflow: 'visible',
          },
          '.slick-arrow': {
            position: 'absolute',
            display: 'flex!important',
            padding: '0',
            top: '40%',
            alignItems: 'center',
            zIndex: 100,
            '&.slick-prev': {
              transform: 'translateX(-4px)',
              left: '0',
            },
            '&.slick-next': {
              transform: 'translateX(12px)',
              right: '0',
            },
            '&.slick-disabled': {
              opacity: 0.5,
            },
          },
          '.slick-track': {
            display: 'flex',
            '.slick-slide': {
              height: 'unset',
              float: 'unset',
              '&>div': {
                height: '100%',
                '&>div': {
                  height: '100%',
                  a: {
                    height: '100%',
                  },
                },
              },
            },
          },
          '.slick-dots': {
            display: 'flex!important',
            padding: '0',
            gap: '16px',
            justifyContent: 'flex-end',
            marginTop: '24px',
            marginRight: '20px',
            li: {
              height: '8px',
              width: '8px',
              borderRadius: '4px',
              overflow: 'hidden',
              background: color.gray[700],
              transition: 'width 300ms',
              '&.slick-active': {
                width: '16px',
              },
              button: {
                opacity: '0',
              },
            },
          },
          '.slick-slide': {
            padding: '0 15px',
          },
        }}
      >
        <Slider {...sliderSettings}>
          {card?.map((item, index) => {
            switch (item.__typename) {
              case 'ComponentCardRecord':
                return variant === 'icon-card-list' ? (
                  <IconCard
                    key={item?.id}
                    {...item}
                    sm={{
                      flex: '0 0 calc(50% - 16px)',
                    }}
                    lg={{
                      flex: getFlexLg(index),
                    }}
                  />
                ) : (
                  <BasicCard
                    key={item?.id}
                    {...item}
                    width="100%"
                    variant={isSpeechPage ? 'default' : variant || 'default'}
                    sm={{
                      flex: '0 0 calc(50% - 16px)',
                    }}
                    lg={{
                      flex: getFlexLg(index),
                      maxWidth: '100%',
                    }}
                    isSmall={card.length > 3 && variant !== 'grid'}
                  />
                );
              case 'ComponentCardDeckRecord':
                return (
                  <Container
                    key={item?.id}
                    sm={{
                      flex: '0 0 100%',
                    }}
                    lg={{
                      flex: '1 0 0',
                    }}
                  >
                    <IconCardDeck {...item} />
                  </Container>
                );
              case 'TemplateBlogRecord':
                return <BlogCard {...(item as ITemplateBlogRecord)} isBlogList />;
              case 'TemplateCaseStudyRecord':
                return <BlogCard {...(item as unknown as ITemplateBlogRecord)} />;
              default:
                return <></>;
            }
          })}
        </Slider>
      </Container>
    </Flex>
  );
};

export default BlogCardDeck;
