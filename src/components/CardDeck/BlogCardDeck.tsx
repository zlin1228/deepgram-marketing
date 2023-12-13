import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

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

const BlogCard = dynamic(() => import('components/Cards/BlogCard/BlogCard'));

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

const BlogCardDeck: FC<BlogCardDeckType> = ({ variant, card, relatedCaseStudies, optionalHeading, boxShadow }) => {
  const cardDeckCards = (variant === 'related_case_study' && relatedCaseStudies) || card;
  const sliderSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
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
        }}
      >
        <Slider {...sliderSettings}>
          {cardDeckCards.map(blog => (
            <Container key={blog.id} paddingX={12}>
              <BlogCard {...(blog as ITemplateBlogRecord)} boxShadow={boxShadow} isBlogList />
            </Container>
          ))}
        </Slider>
      </Container>
    </Flex>
  );
};

export default BlogCardDeck;
