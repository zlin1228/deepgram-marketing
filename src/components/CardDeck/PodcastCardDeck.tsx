import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import type { ITemplatePodcastRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface PodcastCardDeckType extends FlexProps {
  cards?: ITemplatePodcastRecord[];
  layout?: number;
  hasHeading?: boolean;
}

const PodcastCard = dynamic(() => import('components/Cards/PodcastCard/PodcastCard'));

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

const PodcastCardDeck: FC<PodcastCardDeckType> = ({ cards, layout, hasHeading }) => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: layout || 3,
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
      {hasHeading && (
        <Heading
          as="h3"
          textStyle="md"
          textColor="common-white"
          paddingBottom={16}
          marginBottom={40}
          borderBottom="1px solid"
          borderColor="gray-700"
        >
          Podcast Episodes
        </Heading>
      )}
      <Slider {...sliderSettings}>
        {cards &&
          cards.map(card => (
            <Container key={card.id} paddingX={12}>
              <PodcastCard {...card} />
            </Container>
          ))}
      </Slider>
    </Container>
  );
};

export default PodcastCardDeck;
