import dynamic from 'next/dynamic';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import type {
  ITemplateExternalWebinarRecord,
  ITemplatePartnerRecord,
  ITemplateResourcesExternalRecord,
} from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface ResourecCardDeckType extends FlexProps {
  cards?: (ITemplateResourcesExternalRecord | ITemplateExternalWebinarRecord | ITemplatePartnerRecord)[];
  layout?: number;
}

const PartnerCard = dynamic(() => import('components/Cards/PartnerCard/PartnerCard'));
const ResourceCard = dynamic(() => import('components/Cards/ResourceCard/ResourceCard'));
const WebinarCard = dynamic(() => import('components/Cards/ResourceCard/WebinarCard'));

const navArrowProps = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  border: 'none',
  backgroundShorthand: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'xs',
  textColor: 'common-white',
  cursor: 'pointer',
} as const;

const ResourecCardDeck: FC<ResourecCardDeckType> = ({ cards, layout }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleChangeSlider = () => {
    if (containerRef.current) {
      [...containerRef.current.querySelectorAll('.slick-slide')].map(slider => {
        const isActive = slider.classList.contains('slick-active');
        [...slider.querySelectorAll('a')].map(link => {
          link.tabIndex = isActive ? 0 : -1;

          return;
        });

        return;
      });
    }
  };
  const sliderSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: layout || 3,
    slidesToScroll: 1,
    variableWidth: false,
    infinite: false,
    accessibility: true,
    nextArrow: (
      <Flex as="button" {...navArrowProps} tabIndex={0}>
        <Icon iconName="chevron-right" size={32} />
      </Flex>
    ),
    prevArrow: (
      <Flex as="button" {...navArrowProps} tabIndex={0}>
        <Icon iconName="chevron-left" size={32} />
      </Flex>
    ),
    onReInit: () => {
      handleChangeSlider();
    },
    afterChange: () => {
      handleChangeSlider();
    },
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

  return cards && cards.length > 0 ? (
    <Container
      overflowX="hidden"
      overflowY="hidden"
      paddingX={12}
      ref={containerRef}
      css={{
        marginLeft: '-15px',
        marginRight: '-15px',
        '.slick-slider': {
          paddingTop: '32px',
          paddingBottom: '32px',
          [media.lg]: {
            paddingTop: '40px',
            paddingBottom: '40px',
          },
        },
        '.slick-list': {
          overflow: 'visible',
        },
        '.slick-arrow': {
          position: 'absolute',
          display: 'flex!important',
          padding: '0',
          bottom: '0',
          alignItems: 'center',
          zIndex: 100,
          '&.slick-prev': {
            left: '12px',
          },
          '&.slick-next': {
            left: '76px',
          },
          [media.sm]: {
            top: '40%',
            bottom: 'unset',
            '&.slick-prev': {
              transform: 'translateX(-4px)',
              left: 0,
            },
            '&.slick-next': {
              transform: 'translateX(12px)',
              left: 'unset',
              right: '0',
            },
          },
          '&.slick-disabled': {
            opacity: 0.5,
          },
        },
        '.slick-track': {
          display: 'flex',
          marginLeft: 'unset',
          marginRight: 'unset',
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
        {cards &&
          cards.map(card => {
            switch (card?.__typename) {
              case 'TemplateExternalWebinarRecord':
                return (
                  <Container key={card.id} paddingX={12}>
                    <WebinarCard {...card} />
                  </Container>
                );
              case 'TemplateResourcesExternalRecord':
                return (
                  <Container key={card.id} paddingX={12}>
                    <ResourceCard {...card} />
                  </Container>
                );
              case 'TemplatePartnerRecord':
                return (
                  <Container key={card.id} paddingX={12}>
                    <PartnerCard {...card} />
                  </Container>
                );
              default:
                return null;
            }
          })}
      </Slider>
    </Container>
  ) : (
    <></>
  );
};

export default ResourecCardDeck;
